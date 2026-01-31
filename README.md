# Urbana Highlands Home Owners Association

This repository contains the new **front-end-only** HOA website (Astro + Tailwind) and supporting docs.

- Live (GitHub Pages): https://aosama.github.io/urbanahighlandshoa/
- Site source code: `site/` (note: repo root is **not** the Astro app root)

## Tech stack

- [Astro](https://astro.build/) (static site)
- [Tailwind CSS](https://tailwindcss.com/)
- GitHub Pages (Project Pages) + GitHub Actions deploy

## Local development

```bash
cd site
npm install
npm run dev
```

Then open: http://127.0.0.1:4321/urbanahighlandshoa/

## Build

```bash
cd site
npm run build
```

Build output goes to `site/dist/`.

## Deployment (GitHub Pages)

- Deploy workflow: `.github/workflows/deploy.yml`
- Astro is configured for Project Pages subpath via `site/astro.config.mjs`:
  - `site: "https://aosama.github.io"`
  - `base: "/urbanahighlandshoa"`

Pushing to `main` triggers the workflow and publishes to Pages.

### PR previews (without merging)
PR previews are published to a predictable URL:

- `https://aosama.github.io/urbanahighlandshoa/__pr-preview__/pr-<PR_NUMBER>/`

The preview is deployed by `.github/workflows/pr-preview.yml` and (when permissions allow) the workflow will also comment the URL on the PR.

## Editing content

- Homepage: `site/src/pages/index.astro`
- Basic pages:
  - `site/src/pages/announcements/index.astro`
  - `site/src/pages/events/index.astro`
  - `site/src/pages/documents/index.astro`
  - `site/src/pages/contact/index.astro`
- Shared layouts:
  - `site/src/layouts/BaseLayout.astro`
  - `site/src/layouts/PageLayout.astro`
- Central config (links/contact): `site/src/lib/siteConfig.ts`

## Developer notes

- Quick Copilot guide: [docs/hello-copilot.md](docs/hello-copilot.md)

## Legacy reference

- Legacy site: https://www.urbanahighlandshoa.com/
- Legacy notes: [docs/legacywebsite/LEGACY_SITE_NOTES.md](docs/legacywebsite/LEGACY_SITE_NOTES.md)
- Mockup HTML: [mockup/index.html](mockup/index.html)
