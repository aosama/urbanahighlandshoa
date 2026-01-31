# Coding Agent Guidance

## Repo navigation

- Main project overview: [README.md](README.md)
- Legacy website (AS-IS documentation): [docs/legacywebsite/LEGACY_SITE_NOTES.md](docs/legacywebsite/LEGACY_SITE_NOTES.md)
- Future website stack (WordPress replacement): [docs/future-website-stack.md](docs/future-website-stack.md)

## Local tooling

- This macOS machine has the GitHub CLI (`gh`) installed and already authenticated.
- This macOS machine has Homebrew (`brew`), Node.js (`node`), and npm installed.
- If the coding assistant/agent needs additional CLI tools for productivity, it should ask the user for permission to install them (no pushback/limitations on installing dev tools).

## Always Keep Documnentation Updated

When making changes to the codebase, ensure that all relevant documentation is updated accordingly. This includes:

- README files
- Inline code comments
- API documentation
- User guides
- Any other relevant documentation

## Keep Repo Clean

- Do not pollute the repo root with unnecessary files.
- Use appropriate directories for different types of files (e.g., `docs/`, `src/`, `tests/`).

## Verify HTML Changes

- When editing HTML files or doing web design work, you must preview the result using the Playwright MCP tool and capture a screenshot to verify the output.
