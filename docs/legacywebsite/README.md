# Legacy Website (AS-IS)

This directory documents what the legacy Urbana Highlands HOA website currently does.

Primary URL: https://www.urbanahighlandshoa.com/

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

- CiraNet resident portal: https://www.ciranet.com/ResidentPortal
- eSoftPlanner login (access token in URL): https://www.esoftplanner.com/v3/planner/login.php?access=0dG81LSVxNmo65a9uWR8vp6LpQ==

Note: the legacy page copy references “CiraConnect” while the link is `ciranet.com/ResidentPortal`.

### eSoft Pool Pass

The site includes pool location/phone number text:

- Address: 9651 Royal Crest Drive, Urbana MD 21704
- Phone: 240-341-4924
- Note: “(Residents Only)”

### Social Network

- Facebook page: https://www.facebook.com/UrbanaHighlandsHOA/
- Copy: “Join Us On Facebook for Community Updates, the Latest News and Events.”

### Upcoming Events

- Displays: “No event found!”
- Includes link: https://www.urbanahighlandshoa.com/event-details/

### Announcements

The homepage includes three announcement items (paraphrased):

- **Street trees**: Missing street tree reminders; removal/reinstall requires an Architectural Change Request; replace with approved trees per Design Guidelines.
- **Roofs**: If replacing roof with different color/design, it must be approved in advance.
- **Decks**: Submit Architectural Change Request via Resident Portal before beginning work.

### Management company contact

- Phone: 855-477-2267

## Event Details page

URL: https://www.urbanahighlandshoa.com/event-details/

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
