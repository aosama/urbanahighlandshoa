# Copilot in the cloud (coding agent) setup

This repo is designed to work well with **GitHub Copilot coding agent** (the cloud agent that runs on GitHub Actions).

## 1) Preinstall dependencies for the cloud agent

This repo includes:

- `.github/workflows/copilot-setup-steps.yml`

Copilot coding agent will run this workflow before it starts work (it installs Node and runs `npm ci` in `site/`).

## 2) MCP (Model Context Protocol) capabilities

### What you get by default

Copilot coding agent includes out-of-the-box MCP servers:

- `github/*` (scoped to this repo)
- `playwright/*` (localhost only)

### Add Context7 (recommended)

To match local MCP capabilities, add the Context7 MCP server in the repository settings.

1. Go to: **Settings → Copilot → Coding agent**
2. In **MCP configuration**, paste this JSON:

```json
{
  "mcpServers": {
    "Context7": {
      "type": "http",
      "url": "https://mcp.context7.com/mcp",
      "headers": {
        "CONTEXT7_API_KEY": "$COPILOT_MCP_CONTEXT7_API_KEY"
      },
      "tools": ["*"]
    }
  }
}
```

3. Add a secret in the repo **copilot** environment:

- Name: `COPILOT_MCP_CONTEXT7_API_KEY`
- Value: your Context7 API key

> Do **not** commit API keys into this repo.

## 3) Model preference

We prefer:

- `gpt-5.2`
- `reasoning_effort: medium`

This preference is documented in `.github/copilot-instructions.md`.

Note: model pinning for GitHub.com coding agent is controlled by GitHub/Copilot settings/policies; this file is guidance for when you’re prompted to choose.
