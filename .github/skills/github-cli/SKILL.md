---
name: github-cli
description: Guide for using the GitHub CLI (`gh`) for repository, pull request, issue, Actions, release, project, search, alias, extension, API, and GitHub Agentic Workflows (`gh aw`) workflows. Use when the user asks about open PRs, reviewing pull requests, merging or closing PRs, GitHub repo triage, `.github/workflows/*.md` or `*.lock.yml` agentic workflow files, `safe-outputs`, `gh aw`, GitHub Agentic Workflows, terminal-native GitHub commands, help with `gh`, or reproducible shell commands they can run locally.
---

# GitHub CLI

Validated against local `gh version 2.88.1 (2026-03-12)` and `gh aw version v0.58.1`.

Use this skill when the task is GitHub-centric and shell-native, even if the user does not explicitly say "use `gh`". That includes pull request review, checking open PRs, reaching a merge-or-close determination, repo triage, GitHub Actions inspection, and work involving GitHub Agentic Workflows through `gh aw`.

## Trigger phrases

Read this skill when the user says things like:

- "check the open PRs"
- "review this PR" or "review my pull requests"
- "merge or close these PRs"
- "what PRs are open?"
- "triage this GitHub repo"
- "look at GitHub Actions" or "inspect workflow runs"
- "set up or fix GitHub Agentic Workflows"
- "use `gh aw`" or "GitHub agentic workflows"
- "fix this `.github/workflows/*.md` file"
- "why did this `.lock.yml` change?"
- "compile or validate this agentic workflow"
- "safe-outputs" or "workflow frontmatter"

## Quick start checklist

For PR and repo triage work, start with:

```bash
gh auth status
gh pr list --repo OWNER/REPO --limit 20
gh pr view NUMBER --repo OWNER/REPO
gh pr diff NUMBER --repo OWNER/REPO
gh pr checks NUMBER --repo OWNER/REPO
```

For GitHub Agentic Workflows work, start with:

```bash
gh extension list
gh aw version
gh aw help
gh aw list
```

Re-check local behavior before assuming flags or subcommands. The installed surface can differ because of newer releases, preview features, aliases, and extensions.

## GitHub Agentic Workflows cues

Read this skill immediately when the task involves any of these:

- `.github/workflows/*.md` files that are human-authored workflow specs
- `.github/workflows/*.lock.yml` files that are compiled agentic workflow artifacts
- frontmatter fields such as `engine:`, `permissions:`, `network:`, `tools:`, or `safe-outputs:`
- `gh aw` commands, workflow imports, or `.github/aw/imports/`
- setup, validation, trial runs, secrets, or upgrades for GitHub Agentic Workflows

Useful mental model from the official docs:

- author workflow intent in markdown
- compile to hardened GitHub Actions YAML with `gh aw compile`
- validate and trial before trusting it in a repository
- rely on minimal permissions and `safe-outputs` for controlled write actions

## First checks

Before assuming flags or behavior, inspect the installed CLI and the exact help topic you need:

```bash
gh --version
gh help
gh help reference
gh <command> --help
```

Before write actions or scripted automation, confirm authentication:

```bash
gh auth status
```

If you are inside a local clone and want to confirm repo inference, inspect the default repo:

```bash
gh repo set-default --view
```

If repository inference could be ambiguous, pass `--repo OWNER/REPO` explicitly or set `GH_REPO`.

If aliases or extensions might affect behavior, inspect them first:

```bash
gh alias list
gh extension list
gh aw version
```

For scripting and assistant-driven usage, also keep these help topics close:

```bash
gh help formatting
gh help environment
gh help exit-codes
```

## Assistant operating rules

When giving `gh` commands to a coding assistant or using them inside automation:

- Prefer explicit repository context with `--repo [HOST/]OWNER/REPO` unless the current directory and default repo are unquestionably correct.
- Prefer read-only inspection first: `view`, `list`, `status`, `checks`, `diff`, `browse --no-browser`.
- Prefer `--json` plus `--jq` or `--template` when output may be parsed or reused.
- Add `--limit` when a command supports it so assistants do not accidentally pull very large result sets.
- Use `--paginate` with `gh api` when you need complete multi-page results, and `--slurp` when one outer JSON array is easier to process.
- For non-interactive runs, use `GH_PROMPT_DISABLED=1`.
- If stderr noise matters, consider `GH_NO_UPDATE_NOTIFIER=1` and `GH_NO_EXTENSION_UPDATE_NOTIFIER=1`.
- Do not print secrets. Prefer `gh auth status` over token-revealing workflows unless the user explicitly asks for credential handling.

## Command family map

Choose the narrowest built-in command that fits the task:

- Core repository work: `gh repo`, `gh pr`, `gh issue`, `gh release`, `gh project`
- Web handoff and inspection: `gh browse`, `gh status`
- Search and discovery: `gh search` with `code`, `commits`, `issues`, `prs`, `repos`
- GitHub Actions: `gh workflow`, `gh run`, `gh cache`
- Organization and collaboration surfaces: `gh org`, `gh gist`, `gh codespace`
- Repo/admin automation: `gh label`, `gh ruleset`, `gh secret`, `gh variable`
- Auth, config, and extensibility: `gh auth`, `gh config`, `gh alias`, `gh extension`, `gh completion`
- Lower-level API access: `gh api`
- Security and identity helpers: `gh attestation`, `gh gpg-key`, `gh ssh-key`

Preview or installation-specific commands such as `gh copilot`, `gh agent-task`, local aliases, and extension-provided commands are useful but less portable. Do not treat them as guaranteed defaults across machines.

## GitHub Agentic Workflows extension: `gh aw`

Treat `gh aw` as a GitHub CLI extension command family, not as a separate top-level CLI. The mental model is:

- `gh` = GitHub CLI core
- `gh aw` = GitHub Agentic Workflows extension attached to `gh`

First checks:

```bash
gh extension list
gh aw version
gh aw help
gh aw list
```

Common lifecycle commands from the official docs and local CLI:

```bash
gh aw init
gh aw add-wizard WORKFLOW
gh aw add WORKFLOW
gh aw new my-workflow
gh aw fix --write
gh aw compile --validate
gh aw validate
gh aw trial ./workflow.md --logical-repo OWNER/REPO
gh aw run WORKFLOW
gh aw status
gh aw logs WORKFLOW
gh aw audit RUN_ID
gh aw secrets bootstrap
```

High-signal guidance:

- `gh aw init` is the right first step when a repository is not set up yet.
- `gh aw add-wizard` is the best guided path when adopting an existing workflow from another repo.
- `gh aw new` is for authoring a fresh workflow in `.github/workflows/`.
- `gh aw compile` generates the `.lock.yml` file from the markdown workflow.
- `gh aw validate` is the safest pre-commit check when you want full validation without emitting lock files.
- `gh aw trial` is valuable when you want to test workflow behavior before trusting it in a real repository.
- `gh aw run`, `status`, `logs`, and `audit` cover execution and investigation after the workflow exists.
- `gh aw secrets bootstrap` is a useful early check when a workflow depends on engine or GitHub secrets.

For Copilot-backed agentic workflows, the required repository secret name is exactly `COPILOT_GITHUB_TOKEN`.

The working token pattern validated locally was:

- create a fine-grained PAT owned by the user account
- set **Account permissions** → **Copilot Requests: Read**
- store it as the repository secret `COPILOT_GITHUB_TOKEN`

Useful operational note: agentic workflow control markdown can intentionally violate normal prose markdown rules. If a repo lints Markdown aggressively, it may need a path-based markdownlint ignore for files such as `.github/workflows/*.md` and workflow control templates like `PAGES.md`.

Workflow file organization from the official docs:

- `.github/workflows/<name>.md` is the human-authored agentic workflow
- `.github/workflows/<name>.lock.yml` is the compiled GitHub Actions workflow
- commit both when you are intentionally changing workflow behavior

Prefer purpose-built subcommands before `gh api`, and use `gh api` when the built-in surface does not expose the needed operation.

## Output and scripting rules

For automation and stable parsing:

- Prefer `--json` with an explicit field list when a command supports it.
- Use `--jq` for selection or filtering and `--template` for custom human-readable output.
- Remember that `--jq` and `--template` require `--json`.
- Use `gh help formatting` when you need supported fields or formatting behavior.
- Use `--limit` to control result size on list-style commands.
- Many `--help` pages show the exact JSON fields supported by that command; use them instead of guessing.

Examples:

```bash
gh pr list --repo OWNER/REPO --json number,title,author,updatedAt
gh issue list --repo OWNER/REPO --json number,title,labels --jq '.[].title'
gh run list --repo OWNER/REPO --limit 5 --json databaseId,workflowName,status,conclusion,url
gh api repos/{owner}/{repo}/releases --jq '.[].tag_name'
```

## Context, auth, and environment

Use `gh help environment` as the source of truth for runtime behavior.

Important environment variables include:

- `GH_TOKEN` / `GITHUB_TOKEN` for auth on `github.com`
- `GH_ENTERPRISE_TOKEN` / `GITHUB_ENTERPRISE_TOKEN` for GitHub Enterprise Server
- `GH_HOST` to target a non-default host
- `GH_REPO` to pin the repository context
- `GH_PROMPT_DISABLED` for non-interactive scripting
- `GH_DEBUG=api` for verbose HTTP debugging
- `GH_PAGER` when you need to suppress or control paging
- `GH_NO_UPDATE_NOTIFIER` and `GH_NO_EXTENSION_UPDATE_NOTIFIER` when stderr must stay clean
- `GH_CONFIG_DIR` when isolating CLI state for a scripted session

For GitHub Projects, remember the token needs the `project` scope. If needed:

```bash
gh auth refresh -s project
```

## `gh api` guidance

Use `gh api` for REST or GraphQL workflows that are missing from higher-level `gh` commands.

Key rules:

- Use endpoint placeholders like `repos/{owner}/{repo}/...` when repository context is available.
- Use `-f` for raw string fields and `-F` for typed fields, placeholder expansion, or file/stdin input.
- Use `--paginate` for multi-page responses and `--slurp` when you want one outer JSON array.
- Use `graphql` as the endpoint for GitHub API v4 queries.
- Quote endpoint strings containing `{...}` when the shell might interpret braces specially.
- Prefer `gh api` for stable machine-readable data when higher-level commands do not expose the needed fields.

## Search and query nuances

When using `gh search` with a negative qualifier on Unix-like shells, insert `--` before the query so the qualifier is not parsed as a flag:

```bash
gh search issues -- "repo:OWNER/REPO is:open -label:bug"
```

For PowerShell, the official docs note that `--%` may also be required.

## Actions workflows versus runs

Keep these distinct:

- `gh workflow` works with workflow definitions and dispatch
- `gh run` works with workflow executions and their artifacts/status
- `gh pr checks` is often the best PR-scoped read-only check view

Typical sequence:

```bash
gh workflow list --repo OWNER/REPO
gh workflow run WORKFLOW --repo OWNER/REPO
gh run list --repo OWNER/REPO
gh run watch RUN_ID --repo OWNER/REPO
```

## Safety rules

Start with read-only inspection before mutation:

- `view`, `list`, `status`, `checks`, `diff`

Do not perform destructive or state-changing actions without clear user intent, especially:

- `gh pr merge`, `gh pr close`, `gh pr revert`
- `gh issue close`, `gh issue delete`, `gh issue transfer`
- `gh repo delete`, `gh repo archive`, `gh repo rename`
- `gh workflow disable`
- `gh secret set`, `gh secret delete`, `gh variable set`, `gh variable delete`
- release, ruleset, project, and org mutations

When the user wants a browser-based flow, prefer `--web` or `gh browse`.

## References

- Read `references/command-map.md` for the main command families.
- Read `references/output-and-context.md` for auth, environment, formatting, and automation guidance.
- Read `references/workflow-examples.md` for common command sequences.

Official manual:

- `https://cli.github.com/manual`
- `https://github.github.com/gh-aw`
- `https://github.github.com/gh-aw/setup/cli/`
- `https://github.github.com/gh-aw/reference/workflow-structure/`
- `https://github.github.com/gh-aw/introduction/overview/`
- `https://github.github.com/gh-aw/introduction/architecture/`
