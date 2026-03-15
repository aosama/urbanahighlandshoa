# Command map

Use the narrowest command family that matches the job:

- Repository lifecycle: `gh repo`
- Pull request workflows: `gh pr`
- Issue workflows: `gh issue`
- Releases: `gh release`
- Projects: `gh project`
- Browser handoff and URL generation: `gh browse`
- Personal status and triage: `gh status`

GitHub Actions:

- `gh workflow`: workflow definitions and manual dispatch
- `gh run`: workflow executions, reruns, cancellation, artifacts, live watch
- `gh cache`: Actions caches

Search and discovery:

- `gh search repos`
- `gh search code`
- `gh search issues`
- `gh search prs`
- `gh search commits`

Organization and adjacent surfaces:

- `gh org`: organization-level operations
- `gh gist`: gists
- `gh codespace`: GitHub Codespaces

Repository administration and automation:

- `gh label`
- `gh ruleset`
- `gh secret`
- `gh variable`
- `gh attestation`

Configuration and extensibility:

- `gh auth`
- `gh config`
- `gh alias`
- `gh extension`
- `gh completion`
- `gh api`
- `gh gpg-key`
- `gh ssh-key`

Installation-specific or evolving surfaces:

- `gh copilot`
- `gh agent-task`
- `gh preview`
- Any locally installed alias such as `gh co`
- Any extension-provided command such as `gh aw`

Extension note:

- `gh aw` is GitHub Agentic Workflows as a `gh` extension command family, not a separate top-level CLI.

Prefer built-in subcommands over `gh api` whenever they cover the task clearly.

Use `gh <command> --help` before assuming subcommand-level flags, and use `gh help reference` when you need a quick map of the full installed surface.
