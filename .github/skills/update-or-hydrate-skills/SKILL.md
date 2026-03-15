---
name: update-or-hydrate-skills
description: Ensure the repository's shared Copilot skills exist under `.github/skills` and refresh them from their intended sources when they are missing or stale.
---

# Update or Hydrate Skills

Use this skill when the repository's shared skills need to be installed, refreshed, or audited.

## Goal

Keep the project's shared skills present in `.github/skills` so local and cloud agents have the same repo-local skill set.

## Skill locations

- Shared project skills belong in `.github/skills`
- Personal or machine-local overrides belong in `~/.copilot/skills`

## Required shared skills

### From `github/awesome-copilot`

- `create-github-action-workflow-specification`
- `create-github-issue-feature-from-specification`
- `create-github-issues-feature-from-implementation-plan`
- `create-github-issues-for-unmet-specification-requirements`
- `webapp-testing`

### Repository-local custom skill

- `github-cli`

### From Anthropic skills

- `frontend-design` from `https://github.com/anthropics/skills/tree/main/skills/frontend-design`

## When to use this skill

Use this skill when:

- a required skill folder is missing from `.github/skills`
- a required skill exists but looks stale or incomplete
- a fresh clone, Codespace, or agent environment needs the repo's shared skills hydrated
- `.github/copilot-instructions.md` refers to skills that are not actually present in the repository

## Process

1. Inspect `.github/skills` and compare it to the required inventory above.
2. For upstream skills, copy or refresh the entire skill directory into `.github/skills/<skill-name>/`.
3. For repository-local skills, update the repo-authored version in place rather than replacing it from somewhere else.
4. Preserve the standard skill layout, including `SKILL.md` and any bundled references or support files.
5. Keep shared project skills in `.github/skills`; do not move them to `~/.copilot/skills`.
6. After updating, verify the required skill directories exist and the repo guidance still points to the correct skill names.

## Repo-specific notes

- This repository is single-contributor and main-first, but the shared skill inventory should still live in `.github/skills` so every environment sees the same baseline capabilities.
- Do not remove a shared skill just because the current task does not use it.
- If the required skill inventory changes, update this skill and any related references in `.github/copilot-instructions.md`.
