# Devcontainer / Codespaces

This repository uses an Astro site in `site/`.

## What this devcontainer does

- Uses Node.js **24.x**
- Installs dependencies with `npm ci` in `site/` on creation/update
- Starts the Astro dev server on attach: `npm run dev -- --host 0.0.0.0`
- Forwards port **4321**

## Local URL

Because this site is configured for GitHub Pages Project Pages with `base: /urbanahighlandshoa`, the dev server content is under:

- `http://localhost:4321/urbanahighlandshoa/`

(The root `/` will 404.)
