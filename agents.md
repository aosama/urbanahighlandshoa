# Coding Agent Guidance

## Repo navigation

- Main project overview: [README.md](README.md)
- Legacy website (AS-IS documentation): [docs/legacywebsite/LEGACY_SITE_NOTES.md](docs/legacywebsite/LEGACY_SITE_NOTES.md)
- Future website stack (WordPress replacement): [docs/future-website-stack.md](docs/future-website-stack.md)
- Cloud Copilot setup (coding agent + MCP): [docs/copilot-cloud-setup.md](docs/copilot-cloud-setup.md)

## Repo structure

- Repo root is `/Users/ahmedhamdy/IdeaProjects/urbanahighlandshoa`.
- The Astro website source lives under `site/` (it is **not** the repo root).

## Branch policy

- **Do not push directly to `main`**. All changes must go through a pull request.
- Create a feature branch for your work (e.g., `feature/add-events-page`, `fix/header-nav`).
- Open a PR, wait for the PR preview to deploy, verify your changes, then request review.
- Only merge after approval (or self-merge if you're the sole maintainer and the build passes).

## Session start

- Always read [README.md](README.md) at the start of each chat/session to confirm the current stack, run commands, and deployment workflow.

## Local tooling

- This macOS machine has the GitHub CLI (`gh`) installed and already authenticated.
- This macOS machine has Homebrew (`brew`), Node.js (`node`), and npm installed.
- If running on macOS, familiarize yourself with the capabilities of the local `gh` command.
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

## Verify HTML changes (local)

- When editing HTML files or doing web design work, you must preview the result (Playwright preferred).
- Do not commit screenshots as repo artifacts. Screenshots are allowed only as temporary, uncommitted evidence during a PR review cycle.

## Verify work in PR Preview (GitHub Pages)

When a PR changes the website, you must verify the deployed PR preview (not just local build output):

- Use the PR preview URL convention: `https://aosama.github.io/urbanahighlandshoa/__pr-preview__/pr-<PR_NUMBER>/`
- Navigate to the specific page(s) affected (example: `/documents/`), and confirm the change is visible and correct.
- Before providing any web link (PR preview or production) to the user, verify it is actually accessible (e.g., open it in Playwright or `curl -I` and confirm it returns 200).
- Include the PR preview URL(s) in your final response so the work is reviewable and referencable.

## URL Verification (Critical)

**NEVER provide a URL or link to the user without first verifying it works.**

Before sharing any URL (local dev server, PR preview, production site, external links):

1. **Verify accessibility**: Use `curl -I <url>` to confirm HTTP 200, or open in Playwright/browser.
2. **Verify the specific path**: Don't assume a page exists—check the exact URL you're about to share.
3. **For local dev servers**: Confirm the server is running and responding before sharing the localhost URL.
4. **For deployed sites**: Wait for the deploy workflow to complete, then verify the live URL.

If a URL cannot be verified, explicitly tell the user it hasn't been verified yet and explain why.

## Delegating GitHub Issues to cloud agents (good practices)

When delegating an issue to a cloud agent (Copilot):

- **Make the task small and bounded**: one issue → one PR; avoid multi-issue “mega PRs”.
- **Write explicit scope**: list exactly which files/areas are in-scope and what is out-of-scope.
- **Define acceptance criteria**: include concrete, checkable outcomes (routes, UI behavior, URLs, etc.).
- **Require verification steps**:
  - run the standard build (`cd site && npm ci && npm run build`)
  - if UI changes: verify on PR Preview and post the preview URL(s)
- **Prefer minimal changes**: avoid refactors unless required to meet acceptance.
- **Ask for clarification when needed**: if requirements are ambiguous, stop and ask rather than guessing.

## Repo lessons / gotchas

- GitHub Pages is **Project Pages**, so the site is served from `/urbanahighlandshoa/`.
  - Local dev URL is therefore: `http://127.0.0.1:4321/urbanahighlandshoa/` (the root `/` will 404 when `base` is set).
  - Prefer `import.meta.env.BASE_URL` (often as `basePath`) for internal links and **public/** assets (e.g., favicon, `/assets/...`) so they work both locally and on Pages.
- Deploy workflow builds from the `site/` subdirectory and deploys `site/dist` via `.github/workflows/deploy.yml`.
- GitHub Pages must be enabled for the repo (Settings → Pages → Build and deployment: GitHub Actions) or the deploy job may fail with 404 (deploy-pages "Failed to create deployment").
- Keep a single canonical README at repo root; avoid duplicate `site/README.md`.
- For UI polish and testing, consult skills: `frontend-design` and `webapp-testing`.
