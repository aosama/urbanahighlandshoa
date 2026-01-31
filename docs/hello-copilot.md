# Hello Copilot

Quick guide for GitHub Copilot working on this repository.

## Key Points

- **Repo structure**: The Astro app lives in `site/`, not in the repo root.
- **Base path**: This site deploys to GitHub Pages with base path `/urbanahighlandshoa/`. Astro's `base` config option ensures all internal links and assets are prefixed correctly ([learn more about base path configuration](https://docs.astro.build/en/guides/deploy/github/)).
- **Run locally**: `cd site && npm run dev` (then visit http://127.0.0.1:4321/urbanahighlandshoa/)
