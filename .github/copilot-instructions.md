# GitHub Copilot instructions (repo-wide)

## Default model preference

When you can choose a model (Copilot CLI, VS Code agents, etc.), prefer:

- Model: `gpt-5.2`
- Reasoning effort: `medium`

Note: GitHub Copilot **coding agent on GitHub.com** may ignore repository attempts to pin a model; if you are prompted to choose, pick the above.

## Model logging (for cloud agent sessions)

At the very start of each Copilot coding agent session (before making any changes), write a single line in the session log:

- `Model in use: <model-name> (reasoning: <effort>)`

If the model/effort is not visible to you, log:

- `Model in use: unknown`

## Project overview

This repo hosts the Urbana Highlands HOA website.

- Repo root is **not** the website root.
- The Astro app lives in `site/`.

## Common commands

Run locally:

- `cd site && npm install`
- `cd site && npm run dev`

Build:

- `cd site && npm run build`

## Deployment

- GitHub Pages deploy workflow: `.github/workflows/deploy.yml`
- Hosted as GitHub Pages **Project Pages** under `/urbanahighlandshoa/`.

## Key repo guidance

- Read `README.md` and `agents.md` first.
- For UI changes: verify using Playwright; do not commit screenshots as repo artifacts.
