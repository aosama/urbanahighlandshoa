# Urbana Highlands Home Owners Association

This repository contains the **official website** for the Urbana Highlands Home Owners Association, a community in Urbana, Maryland.

The website is a **static front-end-only** site built with modern web technologies and hosted on GitHub Pages. It provides residents with:
- HOA announcements and updates
- Event calendar and information
- Access to important documents (bylaws, guidelines, meeting minutes)
- Contact information and links to resident services

**Live site:** https://aosama.github.io/urbanahighlandshoa/

**Site source code:** `site/` (note: repo root is **not** the Astro app root)

## Tech stack

- **[Astro](https://astro.build/) 5.17+** - Modern static site generator
- **[Tailwind CSS](https://tailwindcss.com/) 4.1+** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe configuration
- **GitHub Pages** - Hosting (Project Pages mode)
- **GitHub Actions** - CI/CD for automated deployment

## Local development

### Prerequisites

- Node.js 20 or later
- npm (comes with Node.js)

### Setup and run

```bash
cd site
npm install
npm run dev
```

The development server will start at: **http://127.0.0.1:4321/urbanahighlandshoa/**

**Important:** Because the site is configured for Project Pages with a subpath, the root URL (`/`) will return 404. Always use the full path with `/urbanahighlandshoa/` when testing locally.

### Available commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production site to `site/dist/`
- `npm run preview` - Preview the production build locally

## Deployment (GitHub Pages)

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Deployment workflow

- **Workflow file:** `.github/workflows/deploy.yml`
- **Trigger:** Push to `main` or manual workflow dispatch
- **Process:**
  1. Checks out code
  2. Sets up Node.js 20
  3. Installs dependencies with `npm ci` in `site/`
  4. Builds the site with `npm run build`
  5. Uploads `site/dist/` as Pages artifact
  6. Deploys to GitHub Pages

### Configuration

Astro is configured for GitHub Pages Project Pages in `site/astro.config.mjs`:
- `site: "https://aosama.github.io"` - GitHub Pages domain
- `base: "/urbanahighlandshoa"` - Project subpath
- `trailingSlash: "always"` - Ensures consistent URLs

### PR previews

PR previews are published automatically to a predictable URL:
```
https://aosama.github.io/urbanahighlandshoa/__pr-preview__/pr-<PR_NUMBER>/
```

The preview is deployed by `.github/workflows/pr-preview.yml` and (when permissions allow) the workflow will also comment the URL on the PR.

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
  - `site/src/pages/contact/index.astro`
- **Shared layouts:**
  - `site/src/layouts/BaseLayout.astro` - Base HTML structure, head tags
  - `site/src/layouts/PageLayout.astro` - Standard page wrapper with navigation
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
3. Add navigation link in `site/src/layouts/PageLayout.astro` if needed
4. Build and test locally before deploying

### Adding documents (PDFs)

To add downloadable documents:
1. Place PDF files in `site/public/docs/` (e.g., `site/public/docs/bylaws.pdf`)
2. Reference them using the base path: `${basePath}docs/filename.pdf`
3. The `public/` folder is served as static assets

Example from `documents/index.astro`:
```astro
const basePath = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

<a href={`${basePath}docs/bylaws.pdf`} target="_blank">Bylaws (PDF)</a>
```

### Updating site configuration

Edit `site/src/lib/siteConfig.ts` to update:
- Site name and organization name
- External links (resident portal, pool pass, social media)
- Contact information (phone numbers, addresses)

## Contributing

We welcome contributions to improve the website! Here's how you can help:

### Making changes

1. **Fork the repository** or create a new branch
2. **Make your changes** to the site (see [Content model](#content-model) above)
3. **Test locally** (see [Local development](#local-development))
4. **Submit a Pull Request** with a clear description of your changes

### Pull request workflow

- **PR previews:** Every PR automatically deploys a preview at:
  ```
  https://aosama.github.io/urbanahighlandshoa/__pr-preview__/pr-<PR_NUMBER>/
  ```
- The preview is deployed by `.github/workflows/pr-preview.yml`
- Review the preview before merging to ensure everything looks correct
- Once merged to `main`, changes go live automatically

### Code style

- Follow existing code patterns and conventions
- Use Tailwind CSS classes for styling (avoid custom CSS when possible)
- Keep content concise and readable
- Test on different screen sizes (mobile, tablet, desktop)

### Getting help

- Check existing documentation in the `docs/` folder
- Review [agents.md](agents.md) for repository guidance
- Open an issue for questions or suggestions

## Additional documentation

- **Quick Copilot guide:** [docs/hello-copilot.md](docs/hello-copilot.md)
- **Copilot cloud setup:** [docs/copilot-cloud-setup.md](docs/copilot-cloud-setup.md)
- **Repository agent guidance:** [agents.md](agents.md)

## Legacy reference

- **Legacy site:** https://www.urbanahighlandshoa.com/
- **Legacy notes:** [docs/legacywebsite/LEGACY_SITE_NOTES.md](docs/legacywebsite/LEGACY_SITE_NOTES.md)
- **Mockup HTML:** [mockup/index.html](mockup/index.html)
