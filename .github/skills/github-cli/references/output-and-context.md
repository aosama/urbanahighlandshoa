# Output and context

## Assistant-friendly defaults

- Prefer `--repo [HOST/]OWNER/REPO` when there is any chance the working directory is not the intended repository.
- Prefer `--limit` on list commands to keep assistant output focused and predictable.
- Prefer `--json` for anything that may be parsed, filtered, or reused later in the workflow.
- For non-interactive automation, set `GH_PROMPT_DISABLED=1`.
- If paging interferes with captured output, set `GH_PAGER=cat`.
- If upgrade notices would pollute stderr in automation, set `GH_NO_UPDATE_NOTIFIER=1` and `GH_NO_EXTENSION_UPDATE_NOTIFIER=1`.
- Avoid credential-revealing commands in shared terminals; use `gh auth status` for verification instead.

## Context

- Use `--repo OWNER/REPO` when the current directory is not the target repository or when there is any ambiguity.
- `GH_REPO` can pin a default repository context for scripted sessions.
- `GH_HOST` targets an alternate GitHub host.
- In a local clone, `gh repo set-default --view` shows the currently configured default repository for commands that infer repo context.

## Authentication

- `GH_TOKEN` / `GITHUB_TOKEN` apply to `github.com` and `ghe.com` subdomains.
- `GH_ENTERPRISE_TOKEN` / `GITHUB_ENTERPRISE_TOKEN` apply to GitHub Enterprise Server hosts.
- Check the current auth state with `gh auth status`.
- Refresh scopes when necessary, for example `gh auth refresh -s project` for GitHub Projects.

For `gh aw` workflows that use the Copilot engine, a common setup requirement is a repository secret named `COPILOT_GITHUB_TOKEN`. A working pattern is a fine-grained PAT owned by the user account with **Account permissions** set to **Copilot Requests: Read**.

## Output shaping

- Prefer `--json` for stable machine-readable output.
- Use `--jq` for filtering or selecting JSON fields.
- Use `--template` for terminal-friendly custom rendering.
- To discover supported JSON fields, inspect the command's `--help` output or run the command with `--json` and no field list.
- `gh help formatting` documents helpers such as `tablerow`, `tablerender`, `timeago`, and `hyperlink`.

Examples:

```bash
gh pr list --repo OWNER/REPO --limit 20 --json number,title,headRefName,updatedAt,url
gh pr list --repo OWNER/REPO --json number,title,author --jq '.[].author.login'
gh issue list --repo OWNER/REPO --json title,url --template '{{range .}}{{.title}}{{"\n"}}{{end}}'
gh run list --repo OWNER/REPO --limit 10 --json databaseId,workflowName,status,conclusion,url
```

## Pagination, diagnostics, and automation

- `GH_DEBUG=api` enables verbose HTTP debugging.
- `GH_PROMPT_DISABLED` disables interactive prompts.
- `gh api --paginate` traverses multi-page results.
- `gh api --paginate --slurp` is useful when you want one combined JSON array for downstream processing.
- `gh` exit codes documented in `gh help exit-codes` are:
  - `0` success
  - `1` failure
  - `2` cancelled
  - `4` authentication required
