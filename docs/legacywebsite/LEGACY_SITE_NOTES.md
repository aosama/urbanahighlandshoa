# Legacy Website (AS-IS)

This directory documents what the legacy Urbana Highlands HOA website currently does.

Primary URL: [https://www.urbanahighlandshoa.com/](https://www.urbanahighlandshoa.com/)

## Archived copy (offline mirror)

This repo includes a dated offline snapshot of the public site so we can reference the legacy HTML/CSS/JS/assets during redesign work.

### Start here

Recommended entry point:

- Offline start page: [archive/2026-01-24/offline/www.urbanahighlandshoa.com/index.html](archive/2026-01-24/offline/www.urbanahighlandshoa.com/index.html)

Related page:

- Event details: [archive/2026-01-24/offline/www.urbanahighlandshoa.com/event-details/index.html](archive/2026-01-24/offline/www.urbanahighlandshoa.com/event-details/index.html)

Archive contents:

- Canonical offline mirror (HTML + assets + fonts): [archive/2026-01-24/offline/](archive/2026-01-24/offline/)
- Raw HTML source snapshots (for diffing / archaeology): [archive/2026-01-24/raw/](archive/2026-01-24/raw/)
- Mirror logs (non-fatal 404s, etc.): [archive/2026-01-24/logs/](archive/2026-01-24/logs/)
- Snapshot notes (what was captured and how to preview): [archive/2026-01-24/SNAPSHOT.md](archive/2026-01-24/SNAPSHOT.md)

### Preview locally

Because browser security policies often block loading complex sites directly from `file://`, preview the snapshot via a local HTTP server.

From the repo root:

1. Run: `python3 -m http.server 8021`
2. Open:
   - `http://localhost:8021/docs/legacywebsite/archive/2026-01-24/offline/www.urbanahighlandshoa.com/index.html`
   - `http://localhost:8021/docs/legacywebsite/archive/2026-01-24/offline/www.urbanahighlandshoa.com/event-details/index.html`

### Verification notes

- The offline mirror was validated via Playwright network capture to ensure page requisites (images/CSS/JS/fonts) resolve locally.
- Some console warnings/errors may still appear due to the legacy theme/plugins (these are present on the live site as well).

## High-level purpose

The legacy site is a simple hub/landing page for residents that primarily links out to third-party systems:

- **Resident Portal (CiraConnect / CiraNet)** for account-related actions
- **Pool Pass system (eSoft)**
- **Community social (Facebook)**
- **Events listing** (embedded events widget; currently shows “No event found!”)

## Main homepage sections (observed 2026-01-25)

### Header / identity

- Site title: “Urbana Highlands Home Owners Association”
- “Established in 1999…” short community blurb

### Owner / Resident Portal

The site presents a callout with these bullet items:

- Pay HOA dues
- Update Account Information
- Submit Architectural Change Requests

Links observed:

- CiraNet resident portal: [https://www.ciranet.com/ResidentPortal](https://www.ciranet.com/ResidentPortal)
- eSoftPlanner login (access token in URL): [https://www.esoftplanner.com/v3/planner/login.php?access=0dG81LSVxNmo65a9uWR8vp6LpQ==](https://www.esoftplanner.com/v3/planner/login.php?access=0dG81LSVxNmo65a9uWR8vp6LpQ==)

Note: the legacy page copy references “CiraConnect” while the link is `ciranet.com/ResidentPortal`.

### eSoft Pool Pass

The site includes pool location/phone number text:

- Address: 9651 Royal Crest Drive, Urbana MD 21704
- Phone: 240-341-4924
- Note: “(Residents Only)”

### Social Network

- Facebook page: [https://www.facebook.com/UrbanaHighlandsHOA/](https://www.facebook.com/UrbanaHighlandsHOA/)
- Copy: “Join Us On Facebook for Community Updates, the Latest News and Events.”

### Upcoming Events

- Displays: “No event found!”
- Includes link: [https://www.urbanahighlandshoa.com/event-details/](https://www.urbanahighlandshoa.com/event-details/)

### Announcements

The homepage includes three announcement items (paraphrased):

- **Street trees**: Missing street tree reminders; removal/reinstall requires an Architectural Change Request; replace with approved trees per Design Guidelines.
- **Roofs**: If replacing roof with different color/design, it must be approved in advance.
- **Decks**: Submit Architectural Change Request via Resident Portal before beginning work.

### Management company contact

- Phone: 855-477-2267

## Event Details page

URL: [https://www.urbanahighlandshoa.com/event-details/](https://www.urbanahighlandshoa.com/event-details/)

Observed behavior:

- Displays “Upcoming Events” and (currently) “No event found!”
- Includes a “Back to Home Page” link
- Repeats management company phone: 855-477-2267

## Technology signals (best-effort)

From the public `wp-json` endpoints, the legacy site appears to be built on **WordPress** and uses shortcode-driven layout (e.g., Visual Composer/WPBakery-style shortcodes like `[vc_row]`).

This repo’s redesign can be independent of WordPress (static site, modern framework, etc.) so long as the new site preserves the same resident-facing information architecture and outbound links.

## Open questions / to confirm

- Are there additional public pages beyond `/` and `/event-details/` that residents use?
- Where is the authoritative “Design Guidelines” document hosted/linked?
- Should the eSoftPlanner access-token URL be kept as-is, replaced, or removed from public pages?
- Who owns/maintains the “events” system feeding the widget?
