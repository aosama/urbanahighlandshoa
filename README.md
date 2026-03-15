# Urbana Highlands Home Owners Association

This repository contains the **official website** for the Urbana Highlands Home Owners Association, a community in Urbana, Maryland.

The website is a **static front-end-only** site built with modern web technologies and hosted on GitHub Pages. It provides residents with:

- HOA announcements and updates
- Event calendar and information
- Access to important documents (bylaws, guidelines, meeting minutes)
- Contact information and links to resident services

**Live site:** <https://aosama.github.io/urbanahighlandshoa/>

**Site source code:** `site/` (note: repo root is **not** the Astro app root)

## Tech stack

- **[Astro](https://astro.build/) 6.0+** - Modern static site generator
- **[Tailwind CSS](https://tailwindcss.com/) 4.2+** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe configuration
- **GitHub Pages** - Hosting (Project Pages mode)
- **GitHub Actions** - CI/CD for automated deployment

## Local development

### Prerequisites

- Node.js 24 or later
- npm (comes with Node.js)

### Setup and run

```bash
cd site
npm install
npm run dev
```

The development server will start at: <http://127.0.0.1:4321/urbanahighlandshoa/>

**Important:** Because the site is configured for Project Pages with a subpath, the root URL (`/`) will return 404. Always use the full path with `/urbanahighlandshoa/` when testing locally.

### Dev container

This repository includes a dev container configuration in `.devcontainer/` for VS Code Dev Containers and GitHub Codespaces.

- Open the repository root in VS Code
- Run **Dev Containers: Reopen in Container**
- The container uses the official JavaScript/Node devcontainer image pinned to the Node 24 release line
- The container installs the latest GitHub CLI via a devcontainer feature

For coding agents and maintainers: avoid wiring `cd site && npm ci && npm run test:install` into `postCreateCommand`. In this repository, that startup hook can stall the entire dev container. Run dependency install and Playwright setup manually after the container is ready instead.

After the container starts, use the normal workflow:

```bash
cd site
npm ci
npm run test:install
npm run dev
```

The forwarded app port is `4321`, and the site remains available at <http://127.0.0.1:4321/urbanahighlandshoa/>.

If you need to run Playwright tests in a fresh container, install the browser once:

```bash
cd site
npm run test:install
```

### Available commands

- `npm run dev` - Start development server with hot reload
- `npm run check` - Run Astro's project validation checks
- `npm run build` - Build production site to `site/dist/`
- `npm run preview` - Preview the production build locally
- `npm run test:install` - Install Playwright Chromium plus required Linux dependencies
- `npm test` - Run Playwright regression tests
- `npm run test:ui` - Run Playwright tests with the UI runner

## Deployment (GitHub Pages)

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.
Before publishing, the deploy workflow rebuilds the site and reruns the Playwright regression suite so production deploys are gated on passing tests.
In practice, that means a single maintainer can push routine changes straight to `main` and still keep the build/test safety net.
The deploy and regression workflows also opt GitHub JavaScript actions into the Node 24 runtime now, and the deploy workflow packages the Pages artifact directly with `actions/upload-artifact@v6` to avoid the lingering Node 20 warning inside GitHub's `upload-pages-artifact` wrapper.

## Testing

Regression tests run with **Playwright** (`cd site && npm test`). In CI, the deploy workflow reruns the same build-and-test checks on every push to `main` before publishing to GitHub Pages, and `.github/workflows/regression-tests.yml` remains available as a manual workflow dispatch when you want an extra run without deploying.

### Deployment workflow

- **Workflow file:** `.github/workflows/deploy.yml`
- **Trigger:** Push to `main` or manual workflow dispatch
- **Process:**
  1. Checks out code
  2. Sets up Node.js 24 and installs `site/` dependencies
  3. Installs Playwright Chromium and required Linux dependencies
  4. Runs `npm run check`
  5. Builds the site with `npm run build`
  6. Runs `npm test`
  7. Packages `site/dist/` into the `github-pages` tar artifact and uploads it with `actions/upload-artifact@v6`
  8. Deploys to GitHub Pages

### Configuration

Astro is configured for GitHub Pages Project Pages in `site/astro.config.mjs`:

- `site: "https://aosama.github.io"` - GitHub Pages domain
- `base: "/urbanahighlandshoa"` - Project subpath
- `trailingSlash: "always"` - Ensures consistent URLs

### Requirements

- GitHub Pages must be enabled in repository settings
- Settings → Pages → Build and deployment: **GitHub Actions**
- Workflow has necessary permissions (contents: read, pages: write, id-token: write)

## Content model

The site uses **Astro pages** with inline content. Each page is a self-contained `.astro` file that includes both content and structure.

### Page structure

- **Homepage:** `site/src/pages/index.astro`
- **Section pages:**
  - `site/src/pages/announcements/index.astro`
  - `site/src/pages/events/index.astro`
  - `site/src/pages/documents/index.astro`
  - `site/src/pages/resources/index.astro`
  - `site/src/pages/contact/index.astro`
- **Shared layouts:**
  - `site/src/layouts/BaseLayout.astro` - Base HTML structure, head tags
  - `site/src/layouts/PageLayout.astro` - Standard page wrapper (includes Header/Footer)
- **Site configuration:** `site/src/lib/siteConfig.ts` - Central config for site name, external links, contact info

### Editing existing content

To update text or content on a page:

1. Open the relevant `.astro` file in `site/src/pages/`
2. Edit the HTML and text directly within the file
3. The frontmatter (between `---`) contains any dynamic imports or logic
4. The template section contains the HTML/Astro markup

Example:

```astro
---
import PageLayout from '../../layouts/PageLayout.astro';
---

<PageLayout title="Announcements">
  <h1 class="text-3xl font-semibold text-[#12212b]">Announcements</h1>
  <p class="mt-3 text-[#3c4b57]">
    Your content here...
  </p>
</PageLayout>
```

### Adding new pages

To create a new page:

1. Create a new `.astro` file in `site/src/pages/` (e.g., `site/src/pages/faq/index.astro`)
2. Import and use `PageLayout` for consistent styling
3. Add a navigation link in `site/src/components/Header.astro` (the `navLinks` array) if needed
4. Build and test locally before deploying

### Adding documents (PDFs)

To add downloadable documents:

1. Place PDF files in `site/public/docs/` (e.g., `site/public/docs/design-guidelines-and-architectural-procedures.pdf`)
2. Reference them using the base path: `${basePath}docs/filename.pdf`
3. The `public/` folder is served as static assets

Example from `documents/index.astro`:

```astro
const basePath = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

<a href={`${basePath}docs/design-guidelines-and-architectural-procedures.pdf`} target="_blank">
  Design Guidelines and Architectural Procedures (PDF)
</a>
```

### Updating site configuration

Edit `site/src/lib/siteConfig.ts` to update:

- Site name and organization name
- External links (resident portal, pool pass, social media)
- Contact information (phone numbers, addresses)

## Contributing

We welcome contributions to improve the website! Here's how you can help:

### Making changes

1. **Work directly on `main`** for small routine changes, or create a branch if you want isolation
2. **Make your changes** to the site (see [Content model](#content-model) above)
3. **Test locally** (see [Local development](#local-development))
4. **Push to `main`** when you are ready to publish

### Publishing workflow

- Pushes to `main` trigger `.github/workflows/deploy.yml`
- The deploy workflow rebuilds the site, reruns Playwright regression tests, and then publishes to GitHub Pages
- Use `.github/workflows/regression-tests.yml` manually if you want an extra CI test run without deploying

### Code style

- Follow existing code patterns and conventions
- Use Tailwind CSS classes for styling (avoid custom CSS when possible)
- Keep content concise and readable
- Test on different screen sizes (mobile, tablet, desktop)

### Getting help

- Check existing documentation in the `docs/` folder
- Review [AGENTS.md](AGENTS.md) for repository guidance
- Open an issue for questions or suggestions

## Additional documentation

- **Repository agent guidance:** [AGENTS.md](AGENTS.md)

## Legacy reference

- **Legacy site:** <https://www.urbanahighlandshoa.com/>
- **Legacy notes:** [docs/legacywebsite/LEGACY_SITE_NOTES.md](docs/legacywebsite/LEGACY_SITE_NOTES.md)
- **Mockup HTML:** [mockup/index.html](mockup/index.html)
