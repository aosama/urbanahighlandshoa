# Coding Agent Guidance

## Repo navigation

- Main project overview: `README.md`
- Legacy website (AS-IS documentation): `docs/legacywebsite/LEGACY_SITE_NOTES.md`
- `LegacyWordPressExport/` is an important backup from the legacy WordPress site and should be preserved.

## Deployment

- GitHub Pages deploy workflow: `.github/workflows/deploy.yml`
- Hosted as GitHub Pages **Project Pages** under `/urbanahighlandshoa/`.
- Production deploys are gated by the site build plus Playwright regression tests inside `.github/workflows/deploy.yml`.

## Branch policy

- This is a single-contributor repository, so work on `main` by default.
- Use a temporary local branch only when it helps you isolate or experiment before landing back on `main`.

## Keep Repo Clean

- Do not pollute the repo root with unnecessary files.
- Use appropriate directories for different types of files (e.g., `docs/`, `src/`, `tests/`).

## Always Keep Documentation Updated

When making changes to the codebase, ensure that all relevant documentation is updated accordingly. This includes:

- `README.md` file.
- `repo-discovery-guide.instructions.md` file.

## Verify HTML changes (local)

- When editing HTML files or doing web design work, you must preview the result in your browser.

### Screenshot evidence (helpful for UI changes)

- For UI-visible changes, capture a screenshot when it will help with verification or future reference.
- Do **not** commit screenshots into the repository unless the user explicitly wants that.
- Prefer local verification first; use the production site after deploy when you need a hosted check.

## Verify deployed site (GitHub Pages)

When you need a hosted verification pass, use the production site:

- Production URL: `https://aosama.github.io/urbanahighlandshoa/`
- Navigate to the specific page(s) affected (example: `/documents/`) and confirm the change is visible and correct after deployment using your browser
- Before providing any web link to the user, verify it is actually accessible (e.g., open it in browser and confirm it rendered correctly)

## URL Verification (Critical)

**NEVER provide a URL or link to the user without first verifying it works.**

**Never guess.** Do not make assumptions about versions, image tags, URLs, or environment behavior. Verify using authoritative sources (e.g., official registries/docs) or ask for clarification.

Before sharing any URL (local dev server, production site, external links):

1. **Verify accessibility**: Use your browser to confirm the page rendered correctly.
2. **Verify the specific path**: Don't assume a page exists—check the exact URL you're about to share.
3. **For local dev servers**: Confirm the server is running and responding before sharing the localhost URL.
4. **For deployed sites**: Wait for the deploy workflow to complete, then verify the live URL.

If a URL cannot be verified, explicitly tell the user it hasn't been verified yet and explain why.


## General coding and documentation guidelines

- Keep a single canonical `README.md` at repo root. Do not create other README files elsewhere.
- For UI polish and testing, consult skills: `frontend-design` and `webapp-testing`.

## User Interaction Protocol

- **"Discover the repo"**: When the user says this, it means the coding agent should read the codebase, understand it, and internalize its structure. This is an instruction for the agent's own orientation—**not** a request for the user to receive help discovering the repo.

- The user will be updating this file `AGENTS.md`, do not exclude it from code commits and pushes if you see an update.


## Repository memory

- Use `store_memory` only for durable, verified, non-obvious facts that will likely help future sessions; prefer a few high-value memories over many low-value ones.
- Do not store temporary task state, branch-specific details, obvious one-file facts, speculation, or secrets.
