# RexPro AI

RexPro AI is a production-ready chatbot application built with a high-performance FastAPI backend and a minimalist, responsive Svelte/Vite frontend. The project is designed with efficiency in mind, optimizing for low-resource environments (such as Hugging Face Spaces or lightweight VPS nodes) by preventing common Out-of-Memory (OOM) errors.

---

## Project Structure

```
rexpro-ai/
├── Dockerfile              # Root multi-stage build file
├── .dockerignore           # Excludes development artifacts from Docker context
├── .gitignore              # Root git ignore patterns
├── backend/                # FastAPI backend source code
│   ├── rexpro_ai/          # Python application source
│   ├── requirements.txt    # Python dependencies
│   └── start.sh            # Production container entrypoint script
└── frontend/               # Svelte/Vite frontend source code
    ├── src/                # Svelte components & logic
    └── package.json        # Frontend dependencies
```

---

## Environment Variables

### Backend Configuration

The backend is configured via environment variables. In local development, these can be set in a `.env` file inside the `backend` or root folder.

| Variable | Description | Default |
|---|---|---|
| `PORT` | Container or server port | `7860` |
| `HOST` | Bind address for uvicorn | `0.0.0.0` |
| `CORS_ALLOW_ORIGIN` | Allowed origin for CORS (separate with commas) | `http://localhost:5173` |
| `REXPRO_SECRET_KEY` | Secret key used for cryptographic signing | *Auto-generated if empty* |
| `USE_SLIM` | When true, skips heavy local ML model cache downloads | `true` |
| `UVICORN_WORKERS` | Number of Uvicorn worker processes | `1` |
| `OMP_NUM_THREADS` | Limits thread count for OpenMP to prevent OOM | `1` |

### Frontend Configuration

The frontend utilizes Vite environment variables, which must be prefixed with `VITE_`.

| Variable | Description | Purpose |
|---|---|---|
| `VITE_API_URL` | Endpoint base URL for the backend API | Set to empty (`""`) in production to use relative URLs (same host), or to the backend URL in dual-origin development. |

---

## Getting Started

### Local Development

To run the application locally in development mode:

1. **Start the Backend**:
   ```bash
   cd backend
   # Set up a python virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   
   # Install dependencies
   pip install --upgrade pip
   pip install -r requirements.txt
   
   # Run development server
   uvicorn rexpro_ai.main:app --host 127.0.0.1 --port 8080 --reload
   ```

2. **Start the Frontend**:
   ```bash
   cd frontend
   # Install node dependencies
   npm install
   
   # Run Vite development server
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## Production Deployment with Docker

The root `Dockerfile` employs a multi-stage compilation pipeline designed to serve both the frontend and backend efficiently from a single port while mitigating memory exhaustion (OOM) spikes.

### Memory Optimization Features
* **Constrained Node Heap**: Limits Vite builder memory usage to 1024MB using `NODE_OPTIONS="--max-old-space-size=1024"` to prevent Node compiler crashes on builders with low RAM.
* **CPU-Only PyTorch**: Installs CPU wheels for PyTorch to avoid massive CUDA overhead.
* **Throttled uv Installer**: Limits concurrent downloads and builds (`UV_CONCURRENT_BUILDS=1`) to minimize memory spikes.
* **Single Worker Process**: Sets `UVICORN_WORKERS=1` to prevent multiple Python workers from loading ML models redundantly into memory.
* **Single-threaded Computations**: Restricts OpenMP and BLAS threading limits to 1 to reduce context-switching overhead and memory thrashing.

### Building and Running the Image

1. **Build the Docker Image**:
   ```bash
   docker build -t rexpro-ai:latest .
   ```

2. **Run the Container**:
   ```bash
   docker run -d -p 7860:7860 \
     -e REXPRO_SECRET_KEY="your_secure_random_key" \
     -e CORS_ALLOW_ORIGIN="http://localhost:7860" \
     rexpro-ai:latest
   ```
   The application will be accessible at `http://localhost:7860`.
