# Repo Discovery Guide — Urbana Highlands HOA

> A cached map of non-obvious truths for coding agents working in this repository.

## Maintenance Mandate

1. **Before every commit**, ask: did I change anything this guide documents? If yes, update the guide in the same commit. No exceptions.
2. **At session start**, spot-check 2-3 key facts against the actual codebase (paths, versions, script names). If anything drifted, update immediately.
3. **Quarterly minimum**, re-verify if the repo hasn't been touched. Stale guidance is worse than no guidance.

- Last verified: 2026-04-30
- Changes since last verify: initial creation

## Project Overview

Official static website for the Urbana Highlands Home Owners Association (Urbana, Maryland). Built with Astro 6.1, Tailwind CSS 4.2, TypeScript, replacing a legacy WordPress site. Hosted on GitHub Pages in Project Pages mode (subpath `/urbanahighlandshoa/`), with automated CI/CD via GitHub Actions. All content is inline in `.astro` files — no CMS, no database. The single most important architectural fact: **the Astro app lives in `site/`, not the repo root.** All build/dev/test commands require `cd site` first. The repo root contains only documentation, asset archives, and workflow configs.

## Known Gotchas

- **Repo root is NOT the Astro app root** — all commands need `cd site` first. `package.json` lives under `site/`.
- **Local dev returns 404 at root** — site configured for project pages with base path `/urbanahighlandshoa`. Visit `http://127.0.0.1:4321/urbanahighlandshoa/`, never `/`.
- **Dev container `postCreateCommand` trap**: do NOT wire `cd site && npm ci && npm run test:install` into `postCreateCommand` in devcontainer.json. It stalls the container. Run manually.
- **`AGENTS.md` and `CLAUDE.md` are identical copies** — Claude settings expect a symlink `ln -sf AGENTS.md CLAUDE.md`.
- **Deploy bypasses `actions/deploy-pages@v4`** — uses `actions/github-script@v8` to call Pages API directly (avoids Node 20 deprecation). Custom polling: 5-second intervals, 10-minute timeout.
- **`LegacyWordPressExport/` is preserved backup only** — not used by build. Historical preservation.
- **`Community Images/` ≠ `site/public/assets/community/`** — two separate image pools. Source vs deployed.
- **Homepage weather widget**: fetches from Open-Meteo API, hardcoded Urbana MD coordinates (lat: 39.3257, lon: -77.3547), refreshes client-side every 15 min, no API key.
- **`eSoft` pool pass URL contains hardcoded access token** — embedded in `siteConfig.ts`, publicly visible in rendered HTML.
- **Node version**: pinned to 24 (`.nvmrc`, CI, devcontainer). npm 11+.

## Conventions

- **No other README files** — keep a single canonical `README.md` at repo root.
- **Work on `main` by default** — single-contributor. Branches for isolation only.
- **All docs updated with code changes** — update `README.md` and this guide.
- **Tailwind CSS only for styling** — avoid custom CSS in `.astro` files. `global.css` has only skip-link + focus-visible.
- **`PageLayout` for consistency** — all inner pages use it. Homepage uses `BaseLayout` directly with custom hero.
- **Inline page content** — no content collections, no markdown, no CMS. Text directly in HTML/Astro markup.
- **Plus Jakarta Sans primary font** — Google Fonts, via `BaseLayout.astro`.
- **Accessibility**: skip-to-content link targeting `#main-content` on every page, verified by Playwright regression tests.
- **URL verification mandatory before sharing** — test in browser first. Never provide unverified URLs.
- **Do not commit screenshots** — `docs/screenshots/` is gitignored.
- **Never guess versions or URLs** — verify via `package.json`, registries, or browser testing.

## Structure Map

```
urbanahighlandshoa/
├── README.md                         — Project overview, setup, content model, deployment
├── AGENTS.md, CLAUDE.md              — Coding agent guidance (identical copies)
├── .nvmrc                            — Node: "24"
├── .gitignore                        — node_modules, dist, .astro, .DS_Store, .copilot/
│
├── site/                             — ★ The actual Astro application root
│   ├── package.json                  — Astro 6.1.3, Tailwind 4.2.2, Playwright 1.59.1
│   ├── astro.config.mjs              — base="/urbanahighlandshoa", trailingSlash="always"
│   ├── tsconfig.json                 — Extends astro/tsconfigs/strict
│   ├── playwright.config.ts          — Tests in ./tests, baseURL localhost:4321
│   ├── public/                       — Static assets: favicons, assets/community/ (27 files), docs/ (2 PDFs), video/
│   ├── src/
│   │   ├── components/               — Header.astro (hero/default), Footer.astro
│   │   ├── layouts/                  — BaseLayout.astro, PageLayout.astro
│   │   ├── pages/                    — index (home), announcements, events, onboard, documents, resources, contact
│   │   ├── lib/siteConfig.ts         — Central config (org name, external links, phone numbers)
│   │   └── styles/global.css         — @import "tailwindcss", skip-link, focus-visible
│   ├── tests/regression.spec.ts      — 4 test groups: loading, links/images, content, accessibility
│   └── dist/                         — Build output (gitignored)
│
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml                — Main CI/CD: check→build→test→package→deploy
│   │   ├── regression-tests.yml      — Manual trigger: check→build→test only
│   │   └── copilot-setup-steps.yml   — Copilot ephemeral env setup
│   ├── actions/setup-site/action.yml  — Composite: setup-node + npm ci
│   └── instructions/                 — Agent instruction files
│
├── docs/                             — Legacy analysis, design guidelines, agent reports
├── Community Images/                 — Source photography (not deployed)
├── HighlandsMaps/                    — Community map files (PDF, Pages, JPG)
├── LegacyWordPressExport/            — WordPress XML backup (preserved)
├── mockup/                           — Early design mockup
└── video/                            — Source video (also in site/public/video/)
```

## Entry Points

All from within `site/`:

```bash
cd site                    # REQUIRED — app root is site/, not repo root
npm install                # or npm ci
npm run dev                # → http://127.0.0.1:4321/urbanahighlandshoa/ (NOT /)
npm run build              # → site/dist/
npm run check              # astro check (type + Astro validation)
npm run preview            # preview production build (Playwright uses this)
npm run test:install       # install Playwright Chromium + system deps (one-time)
npm test                   # regression suite
npm run test:ui            # Playwright UI runner
```

- **Gotcha**: root URL 404s. Always use full subpath.
- **Deploy**: push to `main` → CI: check → build → test → deploy via github-script.
- **Production**: `https://aosama.github.io/urbanahighlandshoa/`
- **Dev container**: run `cd site && npm ci && npm run test:install && npm run dev` manually after container start.

## What to Verify

1. **Versions** — Node 24, Astro 6.1.3, Tailwind 4.2.2, Playwright 1.59.1. Check `package.json` + `package-lock.json`.
2. **Paths** — `site/public/docs/` both PDFs present. `site/public/assets/community/` has all 27 images. `site/public/video/` has onboarding MP4.
3. **Scripts** — `npm run dev`, `npm run build`, `npm test`, `npm run check`, `npm run preview`, `npm run test:install` all work.
4. **Config** — Astro `base` default `/urbanahighlandshoa` (override via `ASTRO_BASE`), `trailingSlash: always`. `siteConfig.ts` phone numbers, URLs, eSoft access token.
5. **Known exceptions** — `AGENTS.md`/`CLAUDE.md` in sync? devcontainer `postCreateCommand` still empty? `deploy-pages@v4` still avoided?
6. **Content** — 6 pages match Header navLinks. Weather coordinates still correct.
7. **CI/CD** — deploy workflow permissions (contents: read, pages: write, id-token: write). `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` set.
8. **Dead ends** — `Community Images/`, `HighlandsMaps/`, `LegacyWordPressExport/`, `mockup/`, `.local/`, `docs/Rsearch-Reports-From-Agents/` all not part of build.

## Maintenance Snapshot

- Last verified: 2026-04-30
- Changes since last verify: initial creation
