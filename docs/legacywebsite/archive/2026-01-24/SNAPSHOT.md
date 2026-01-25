# Legacy Website Snapshot (2026-01-24)

This directory contains a dated archive of the public legacy website content from [https://www.urbanahighlandshoa.com/](https://www.urbanahighlandshoa.com/).

## What’s here

- `offline/`
  - Offline-friendly mirror of key public pages plus their requisites (CSS/JS/images) and font assets.
  - Start page: `offline/www.urbanahighlandshoa.com/index.html`
  - Event details: `offline/www.urbanahighlandshoa.com/event-details/index.html`
- `raw/`
  - Raw HTML source snapshots for reference/diffing.
- `logs/`
  - Download/mirroring logs. Some 404s are expected because certain assets were missing upstream.

## How to preview

Browsers often block or partially break complex pages opened via `file://`. Preview via a local HTTP server instead.

From the repo root:

1. Run: `python3 -m http.server 8021`
2. Open:

- [http://localhost:8021/docs/legacywebsite/archive/2026-01-24/offline/www.urbanahighlandshoa.com/index.html](http://localhost:8021/docs/legacywebsite/archive/2026-01-24/offline/www.urbanahighlandshoa.com/index.html)
- [http://localhost:8021/docs/legacywebsite/archive/2026-01-24/offline/www.urbanahighlandshoa.com/event-details/index.html](http://localhost:8021/docs/legacywebsite/archive/2026-01-24/offline/www.urbanahighlandshoa.com/event-details/index.html)
