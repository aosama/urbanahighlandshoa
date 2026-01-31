# Coding Agent Guidance

## Repo navigation

- Main project overview: [README.md](README.md)
- Legacy website (AS-IS documentation): [docs/legacywebsite/LEGACY_SITE_NOTES.md](docs/legacywebsite/LEGACY_SITE_NOTES.md)
- Future website stack (WordPress replacement): [docs/future-website-stack.md](docs/future-website-stack.md)
- Cloud Copilot setup (coding agent + MCP): [docs/copilot-cloud-setup.md](docs/copilot-cloud-setup.md)

## Repo structure

- Repo root is `/Users/ahmedhamdy/IdeaProjects/urbanahighlandshoa`.
- The Astro website source lives under `site/` (it is **not** the repo root).

## Session start

- Always read [README.md](README.md) at the start of each chat/session to confirm the current stack, run commands, and deployment workflow.

## Local tooling

- This macOS machine has the GitHub CLI (`gh`) installed and already authenticated.
- This macOS machine has Homebrew (`brew`), Node.js (`node`), and npm installed.
- If the coding assistant/agent needs additional CLI tools for productivity, it should ask the user for permission to install them (no pushback/limitations on installing dev tools).

## Always Keep Documnentation Updated

When making changes to the codebase, ensure that all relevant documentation is updated accordingly. This includes:

- README files
- Inline code comments
- API documentation
- User guides
- Any other relevant documentation

## Keep Repo Clean

- Do not pollute the repo root with unnecessary files.
- Use appropriate directories for different types of files (e.g., `docs/`, `src/`, `tests/`).

## Verify HTML Changes

- When editing HTML files or doing web design work, you must preview the result using the Playwright MCP tool and capture a screenshot to verify the output.

## Repo lessons / gotchas

- GitHub Pages is **Project Pages**, so the site is served from `/urbanahighlandshoa/`.
  - Local dev URL is therefore: `http://127.0.0.1:4321/urbanahighlandshoa/` (the root `/` will 404 when `base` is set).
  - Prefer `import.meta.env.BASE_URL` (often as `basePath`) for internal links and **public/** assets (e.g., favicon, `/assets/...`) so they work both locally and on Pages.
- Deploy workflow builds from the `site/` subdirectory and deploys `site/dist` via `.github/workflows/deploy.yml`.
- GitHub Pages must be enabled for the repo (Settings → Pages → Build and deployment: GitHub Actions) or the deploy job may fail with 404 (deploy-pages "Failed to create deployment").
- Keep a single canonical README at repo root; avoid duplicate `site/README.md`.
- For UI polish and testing, consult skills: `frontend-design` and `webapp-testing`.
