# Agentic Portfolio Tool

Next.js portfolio site with a protected admin workspace for project uploads,
AI-assisted case-study writing, and publish workflow.

## Local Development

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000` by default.

## Required Environment Variables

```bash
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
AUTHORIZED_GITHUB_ID=
BLOB_READ_WRITE_TOKEN=
GEMINI_API_KEY=
GEMINI_MODEL=gemini-2.5-flash
```

`AUTHORIZED_GITHUB_ID` should be the only GitHub username allowed into `/admin`.

## Admin Routes

- `/admin` lists projects, supports publish/unpublish/archive/reorder.
- `/admin/projects/new` creates a new draft.
- `/admin/projects/[id]` edits project copy and uploads screens.
- `/admin/upload` is a standalone Vercel Blob screen uploader.

## API Routes

- `POST /api/admin/upload` uploads one or more images to Vercel Blob.
- `POST /api/admin/analyze-project` generates structured project copy with Gemini.
- `POST /api/admin/generate-annotations` generates screen annotations with Gemini.

All admin API routes require an authenticated admin session.

## Validation

Uploads allow `jpg`, `png`, `webp`, and `gif` files up to `10 MB` each.
Gemini responses are validated with Zod before returning to the UI.

## Production Checks

```bash
npm run build
```

DB-backed pages use dynamic rendering so Vercel does not need to query Neon while
pre-rendering the public home page or admin pages.
