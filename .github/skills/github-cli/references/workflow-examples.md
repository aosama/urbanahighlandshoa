# Workflow examples

## Establish explicit repository context in a local clone

```bash
gh repo set-default --view
gh repo set-default OWNER/REPO
gh browse --repo OWNER/REPO --no-browser
```

## Inspect a repository

```bash
gh repo view OWNER/REPO
gh repo view OWNER/REPO --web
gh repo view OWNER/REPO --json nameWithOwner,description,defaultBranchRef,url
```

## Review pull requests

```bash
gh pr list --repo OWNER/REPO --limit 20
gh pr list --repo OWNER/REPO --limit 20 --json number,title,headRefName,updatedAt,url
gh pr checks PR_NUMBER --repo OWNER/REPO
gh pr diff PR_NUMBER --repo OWNER/REPO
gh pr view PR_NUMBER --repo OWNER/REPO
```

## Work with issues

```bash
gh issue list --repo OWNER/REPO --limit 20
gh issue list --repo OWNER/REPO --limit 20 --json number,title,labels,url
gh issue view ISSUE_NUMBER --repo OWNER/REPO
gh issue comment ISSUE_NUMBER --repo OWNER/REPO --body "..."
```

## Actions workflows and runs

```bash
gh workflow list --repo OWNER/REPO
gh workflow run WORKFLOW --repo OWNER/REPO
gh run list --repo OWNER/REPO --limit 10
gh run list --repo OWNER/REPO --limit 10 --json databaseId,workflowName,status,conclusion,url
gh run watch RUN_ID --repo OWNER/REPO
```

If the goal is to inspect checks for one pull request, prefer:

```bash
gh pr checks PR_NUMBER --repo OWNER/REPO
```

## GitHub Agentic Workflows extension

```bash
gh extension list
gh aw version
gh aw add githubnext/agentics/agentic-wiki-writer
gh aw compile agentic-wiki-writer --validate
gh aw run agentic-wiki-writer --ref main
gh aw status
gh aw logs agentic-wiki-writer
```

## Search GitHub

```bash
gh search repos "topic:copilot language:markdown"
gh search issues -- "repo:OWNER/REPO is:open -label:bug"
gh search prs "repo:OWNER/REPO review:required status:success"
gh search code "SKILL.md repo:OWNER/REPO"
```

## Use the API directly

```bash
gh api repos/{owner}/{repo}/releases --jq '.[].tag_name'
gh api repos/{owner}/{repo}/issues --paginate --jq '.[].title'
gh api graphql -F owner='{owner}' -F name='{repo}' -f query='
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      pullRequests(first: 5, states: OPEN) {
        nodes { number title url }
      }
    }
  }
'
```
