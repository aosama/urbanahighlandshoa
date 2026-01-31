# Future Website Stack (Modern, WordPress Replacement)

This document captures a plausible **future technical stack** for the Urbana Highlands HOA website if/when we decide to move off WordPress and host a modern static site.

The current project scope (see `README.md`) is a **facelift while staying on WordPress**. This file exists to document a clean “exit path” if the HOA later decides to fully migrate.

## Goals (public-first HOA site)

The legacy site is primarily a public hub that links out to third-party systems (resident portal, pool pass, Facebook) and presents announcements.

A modern stack should prioritize:

- **Fast load times** and strong mobile UX
- **Simple editing workflow** for non-technical maintainers
- **Low maintenance** (no WordPress updates/plugin breakage)
- **Secure-by-default** (minimal attack surface)
- **Cheap hosting** (static hosting/CDN)

## Recommended approach

### Core framework: Astro

Use **Astro** as the site framework and static site generator.

Why:

- Excellent for content sites (marketing/blog/docs) and “mostly static” websites.
- Markdown-first content workflows.
- Easy embedding of third-party widgets (Maps, Facebook, etc.).
- Can progressively enhance with React components where needed.

Reference example: Peter Steinberger’s site uses Astro + Markdown/MDX + Tailwind and is deployed as a static site.

### Content format

- Use **Markdown** for most pages.
- Optionally use **MDX** for pages that need interactive components embedded inline.

Suggested structure:

- `src/content/pages/` (Markdown content pages)
- `src/content/news/` (optional “announcements” posts)
- `public/docs/` (PDFs like bylaws, design guidelines, minutes)

### Styling

- **Tailwind CSS** for rapid, consistent styling.
- A small set of reusable components to keep pages consistent:
  - header/nav
  - announcement cards
  - “resident links” panel
  - footer with management contact info

### Hosting / deployment

Recommended baseline: **GitHub Pages** (free tier) for a front-end-only static site.

Notes:

- Static hosting + HTTPS
- Simple rollbacks (Git history)
- Optional preview builds via GitHub Actions

### Forms (Contact Us)

Because the site is **front-end only** (GitHub Pages; no backend/serverless functions), avoid custom form handling.

Options:

1. **Simple mailto link** (lowest friction)
   - Pros: truly static.
   - Cons: depends on visitor email client; can attract spam.

2. **Embed a hosted form** (e.g., Google Forms)
   - Pros: still front-end only for us; just an embed.
   - Cons: depends on a third-party service.

### Embeds / widgets

These are all compatible with an Astro static site:

- **Google Maps**
  - simplest: iframe embed for the community/pool location.
  - advanced: JS-based map if we need custom markers and styling.

- **Facebook page / feed**
  - embed the Facebook Page Plugin (script/iframe based).
  - note: this can be fragile due to Facebook policies; have a fallback link.

- **Resident portal links**
  - static outbound links to CiraNet/CiraConnect, pool pass system, etc.

- **Events**
  - simplest: embed a Google Calendar public calendar.
  - alternative: manual “events” Markdown posts.

## Editing workflow (non-technical maintainers)

Two viable models:

### A) Git-based editing (lowest cost)

- Maintain content in Markdown in GitHub.
- A trusted admin edits pages via GitHub UI.

Pros: cheapest and simplest.
Cons: editing UX isn’t as friendly for some users.

### B) Headless CMS (friendlier)

Add a CMS UI for editing content without touching Git.

Common options that work well with Astro:

- Decap CMS (formerly Netlify CMS)
- TinaCMS
- Contentful / Sanity (paid)

Pros: best editing UX.
Cons: adds operational complexity.

Recommended baseline: start with Git-based editing, then add a CMS if the board asks for it.

## Security and privacy

- Keep the public site **strictly public**; no authentication.
- Do not host sensitive resident info.
- Avoid embedding “secret” links with tokens (if any exist) on public pages.
- Prefer outbound links to existing resident portal systems for private actions.

## Migration strategy (when/if we actually migrate)

1. Freeze current WordPress content and export key pages.
2. Implement Astro site structure (navigation + layouts).
3. Port content into Markdown.
4. Add embeds (forms optional).
5. Configure domain + redirects (to preserve SEO / existing URLs where feasible).
6. Launch as static site; keep WordPress as a temporary fallback for a short period.

## Out of scope for this repo (for now)

Per current `README.md`, this is **not** the active plan. It’s a forward-looking stack document only.
