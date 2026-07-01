#!/usr/bin/env bash
set -euo pipefail

# ---------------------------------------------------------------------------
# Container entry point for rexpro-ai.
# Handles secret key generation, optional Ollama/CUDA/Playwright setup,
# HuggingFace Space deployment, and launches the uvicorn server.
# ---------------------------------------------------------------------------

# Default optional env vars that we test below with bash's `,,` lowercase
# expansion. The two can't be combined inline (`${VAR:-default,,}` makes
# the default literal `,,`), so we normalise once up front and the simple
# `${VAR,,}` form stays safe under `set -u` everywhere else.
: "${WEB_LOADER_ENGINE:=}" "${USE_OLLAMA_DOCKER:=}" "${USE_CUDA_DOCKER:=}"

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
cd "$SCRIPT_DIR" || exit 1

if [[ -x "$SCRIPT_DIR/venv/bin/python" ]]; then
  PYTHON_CMD="$SCRIPT_DIR/venv/bin/python"
else
  PYTHON_CMD=$(command -v python3 || command -v python)
fi

# ── Playwright browser installation (if configured) ──────────────────────────

if [[ "${WEB_LOADER_ENGINE,,}" == "playwright" ]]; then
  if [[ -z "${PLAYWRIGHT_WS_URL:-}" ]]; then
    echo "Installing Playwright Chromium browser..."
    playwright install chromium
    playwright install-deps chromium
  fi
  python -c "import nltk; nltk.download('punkt_tab')"
fi

# ── Secret key setup ─────────────────────────────────────────────────────────

KEY_FILE="${REXPRO_SECRET_KEY_FILE:-.rexpro_secret_key}"
PORT="${PORT:-8080}"
HOST="${HOST:-0.0.0.0}"

if [[ -z "${REXPRO_SECRET_KEY:-}" && -z "${REXPRO_JWT_SECRET_KEY:-}" ]]; then
  echo "No REXPRO_SECRET_KEY environment variable set, loading from file."

  if [[ ! -f "$KEY_FILE" ]]; then
    echo "Generating new REXPRO_SECRET_KEY..."
    head -c 12 /dev/random | base64 > "$KEY_FILE"
  fi

  echo "Loading REXPRO_SECRET_KEY from ${KEY_FILE}"
  REXPRO_SECRET_KEY=$(cat "$KEY_FILE")
fi

# ── Ollama (bundled Docker image) ────────────────────────────────────────────

if [[ "${USE_OLLAMA_DOCKER,,}" == "true" ]]; then
  echo "Starting bundled ollama serve..."
  ollama serve &
fi

# ── CUDA library paths ──────────────────────────────────────────────────────

if [[ "${USE_CUDA_DOCKER,,}" == "true" ]]; then
  echo "CUDA enabled — extending LD_LIBRARY_PATH for torch/cudnn libraries."
  export LD_LIBRARY_PATH="${LD_LIBRARY_PATH:-}:/usr/local/lib/python3.11/site-packages/torch/lib:/usr/local/lib/python3.11/site-packages/nvidia/cudnn/lib"
fi

# ── HuggingFace Space deployment ─────────────────────────────────────────────

if [[ -n "${SPACE_ID:-}" ]]; then
  echo "Configuring for HuggingFace Space deployment..."

  if [[ -n "${ADMIN_USER_EMAIL:-}" && -n "${ADMIN_USER_PASSWORD:-}" ]]; then
    echo "Creating admin user for Space..."
    REXPRO_SECRET_KEY="${REXPRO_SECRET_KEY:-}" \
      uvicorn rexpro_ai.main:app --host "$HOST" --port "$PORT" --forwarded-allow-ips "${FORWARDED_ALLOW_IPS:-*}" &
    rexpro_pid=$!

    echo "Waiting for server to become healthy..."
    until curl -sf "http://localhost:${PORT}/health" > /dev/null 2>&1; do
      sleep 1
    done

    echo "Registering admin user..."
    curl -sS -X POST "http://localhost:${PORT}/api/v1/auths/signup" \
      -H "Accept: application/json" \
      -H "Content-Type: application/json" \
      -d "{\"email\": \"${ADMIN_USER_EMAIL}\", \"password\": \"${ADMIN_USER_PASSWORD}\", \"name\": \"Admin\"}"

    echo "Restarting server..."
    kill "$rexpro_pid"
    wait "$rexpro_pid" 2>/dev/null || true
  fi

  export REXPRO_URL="${SPACE_HOST}"
fi

# ── Local Edge TTS Server ──────────────────────────────────────────────────
# Temporarily disabled for local dev to avoid stray port conflicts.
# "$PYTHON_CMD" edge_tts_server.py &

# ── Launch uvicorn ───────────────────────────────────────────────────────────

UVICORN_WORKERS="${UVICORN_WORKERS:-1}"

if [[ "$#" -gt 0 ]]; then
  ARGS=("$@")
else
  ARGS=(--workers "$UVICORN_WORKERS")
fi

exec env REXPRO_SECRET_KEY="${REXPRO_SECRET_KEY:-}" \
  "$PYTHON_CMD" -m uvicorn rexpro_ai.main:app \
    --host "$HOST" \
    --port "$PORT" \
    --forwarded-allow-ips "${FORWARDED_ALLOW_IPS:-*}" \
    "${ARGS[@]}"