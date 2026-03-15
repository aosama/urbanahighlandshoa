# Coding Agent Guidance

## Session start

- Always read `README.md` and `AGENTS.md` at the start of each chat/session to confirm the current stack, run commands, and deployment workflow.
- Keep the repository's shared Copilot skills under `.github/skills` so they are available to anyone working in this repo.
- Use `~/.copilot/skills` only for personal skills or local overrides that should not be committed.
- Ensure the following shared skills are present under `.github/skills`:
  - From `github/awesome-copilot`:
    - `create-github-action-workflow-specification`
    - `create-github-issue-feature-from-specification`
    - `create-github-issues-feature-from-implementation-plan`
    - `create-github-issues-for-unmet-specification-requirements`
    - `create-github-pull-request-from-specification`
    - `webapp-testing`
  - From repository-local custom skills:
    - `github-cli`
  - From `https://github.com/anthropics/skills/tree/main/skills/frontend-design`:
    - `frontend-design`
- Reach for these skills when the task matches:
  - Use the `create-github-*` skills for issue, PR, and workflow generation from requirements or implementation plans.
  - Use `github-cli` for repository, branch, PR, issue, and workflow operations that are better handled with `gh`.
  - Use `frontend-design` for UI polish and `webapp-testing` for browser-based verification and Playwright-style validation.

## Repo navigation

- Main project overview: `README.md`
- Legacy website (AS-IS documentation): `docs/legacywebsite/LEGACY_SITE_NOTES.md`
- Cloud Copilot setup (coding agent + MCP): `docs/copilot-cloud-setup.md`

## Repo structure

- Repo root is this repository.
- Repo root is **not** the website root.
- The Astro website source lives under `site/` (it is **not** the repo root).
- `LegacyWordPressExport/` is an important backup from the legacy WordPress site and should be preserved.

## Common commands

Run locally:

- `cd site && npm install`
- `cd site && npm run dev`

Build:

- `cd site && npm run build`

## Deployment

- GitHub Pages deploy workflow: `.github/workflows/deploy.yml`
- Hosted as GitHub Pages **Project Pages** under `/urbanahighlandshoa/`.
- Production deploys are gated by the site build plus Playwright regression tests inside `.github/workflows/deploy.yml`.

## Branch policy

- This is a single-contributor repository, so direct pushes to `main` are fine for routine, low-risk work.
- Use a feature branch and open a PR when it helps: larger changes, risky refactors, UI work that benefits from a preview, or anytime you want a clean review surface.
- If a branch protection or environment rule blocks a direct push, fall back to a branch and PR.
- When you do use a PR, wait for the relevant checks you care about and use the preview URL if it is helpful.

## Local tooling

- Ensure you have the GitHub CLI (`gh`) installed and authenticated.
- Ensure you have Node.js (`node`) and npm installed.
- If the coding assistant/agent needs additional CLI tools for productivity, it should ask the user for permission to install them (no pushback/limitations on installing dev tools).

## Keep Repo Clean

- Do not pollute the repo root with unnecessary files.
- Use appropriate directories for different types of files (e.g., `docs/`, `src/`, `tests/`).

## Always Keep Documnentation Updated

When making changes to the codebase, ensure that all relevant documentation is updated accordingly. This includes:

- README files
- Inline code comments
- API documentation
- User guides
- Any other relevant documentation

## Verify HTML changes (local)

- When editing HTML files or doing web design work, you must preview the result (Playwright preferred).

### Screenshot evidence (helpful for UI changes)

- For UI-visible changes, capture a screenshot when it will help with verification or future reference.
- If you are using a PR, prefer attaching screenshots there as transient review artifacts instead of committing them.
- Do **not** commit screenshots into the repository unless the user explicitly wants that.
- Prefer the PR preview URL for screenshots when a PR preview exists; otherwise local verification is fine.

## Verify work in PR Preview (GitHub Pages)

When a PR changes the website and you want a hosted verification pass, use the deployed PR preview:

- Use the PR preview URL convention: `https://aosama.github.io/urbanahighlandshoa/__pr-preview__/pr-<PR_NUMBER>/`
- Navigate to the specific page(s) affected (example: `/documents/`), and confirm the change is visible and correct.
- Before providing any web link (PR preview or production) to the user, verify it is actually accessible (e.g., open it in Playwright or `curl -I` and confirm it returns 200).
- Include the PR preview URL(s) in your final response so the work is reviewable and referencable.
- When a PR is merged, rely on the `main` deploy workflow for the final production publish; the preview cleanup workflow is only needed for closed, unmerged PRs.

## URL Verification (Critical)

**NEVER provide a URL or link to the user without first verifying it works.**

**Never guess.** Do not make assumptions about versions, image tags, URLs, or environment behavior. Verify using authoritative sources (e.g., official registries/docs) or ask for clarification.

Before sharing any URL (local dev server, PR preview, production site, external links):

1. **Verify accessibility**: Use `curl -I <url>` to confirm HTTP 200, or open in Playwright/browser.
2. **Verify the specific path**: Don't assume a page exists—check the exact URL you're about to share.
3. **For local dev servers**: Confirm the server is running and responding before sharing the localhost URL.
4. **For deployed sites**: Wait for the deploy workflow to complete, then verify the live URL.

If a URL cannot be verified, explicitly tell the user it hasn't been verified yet and explain why.

## Delegating GitHub Issues to cloud agents (good practices)

When delegating an issue to a cloud agent (Copilot):

- **Make the task small and bounded**: one issue → one focused change. A PR is optional unless you specifically want one.
- **Write explicit scope**: list exactly which files/areas are in-scope and what is out-of-scope.
- **Define acceptance criteria**: include concrete, checkable outcomes (routes, UI behavior, URLs, etc.).
- **Require verification steps**:
  - run the standard build (`cd site && npm ci && npm run build`)
  - if UI changes and a PR exists: verify on PR Preview and post the preview URL(s)
- **Prefer minimal changes**: avoid refactors unless required to meet acceptance.
- **Ask for clarification when needed**: if requirements are ambiguous, stop and ask rather than guessing.

## Repo lessons / gotchas

- GitHub Pages is **Project Pages**, so the site is served from `/urbanahighlandshoa/`.
  - Local dev URL is therefore: the dev server URL + `/urbanahighlandshoa/` (the root `/` will 404 when `base` is set).
  - Prefer `import.meta.env.BASE_URL` (often as `basePath`) for internal links and **public/** assets (e.g., favicon, `/assets/...`) so they work both locally and on Pages.
- Deploy workflow builds from the `site/` subdirectory and deploys `site/dist` via `.github/workflows/deploy.yml`.
- GitHub Pages must be enabled for the repo (Settings → Pages → Build and deployment: GitHub Actions) or the deploy job may fail with 404 (deploy-pages "Failed to create deployment").
- Keep a single canonical README at repo root; avoid duplicate `site/README.md`.
- For UI polish and testing, consult skills: `frontend-design` and `webapp-testing`.

## User Interaction Protocol

- **"Discover the repo"**: When the user says this, it means the coding agent should read the codebase, understand it, and internalize its structure. This is an instruction for the agent's own orientation—**not** a request for the user to receive help discovering the repo.
