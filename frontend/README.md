# rexpro-ai Frontend Template

Standalone SvelteKit frontend extracted from the rexpro-ai monorepo.  
Can be run without the backend (UI-only) or connected to a real backend.

## Quick Start

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

## Environment

| Variable             | Default | Description                               |
|----------------------|---------|-------------------------------------------|
| `VITE_API_URL`       | `""`    | Backend base URL (leave empty for relative) |

Example `.env`:
```env
VITE_API_URL=http://localhost:7860
```

## Scripts

- `npm run dev` – Start dev server (port 5173)
- `npm run build` – Production build → `build/`
- `npm run preview` – Preview production build
- `npm run check` – Type-check with svelte-check

## Structure

- `src/` – SvelteKit app source
- `static/` – Static assets (favicons, fonts, images, splash)
- `scripts/` – Helper scripts (pyodide fetch)

## Notes for Next.js Migration

This template uses **SvelteKit + Vite + Tailwind CSS v4**.  
When migrating to Next.js, focus on:

1. **Pages** → `app/` directory (App Router)
2. ** Stores** (`src/lib/stores/`) → React context / Zustand
3. **API clients** (`src/lib/apis/`) → `fetch` in Server Actions or API routes
4. **Workers** (`src/lib/workers/`) → use-workers or similar
5. **Tailwind config** (`tailwind.config.js`) → `tailwind.config.ts`
6. **i18n** (`src/lib/i18n/`) → next-intl or similar
7. **Components** (`src/lib/components/`) → `.tsx` files
