# Redesign validation — 2026-10-09

This report describes the current React/TypeScript portfolio. Recorded Chromium checks do not establish coverage for every browser or device.

## Current interface

- Home displays six selected projects. The hero offers three real product previews, pointer-controlled depth and keyboard selection.
- Introduction, footer and selected project descriptions were rewritten in ten languages. Repeated marketing sections were removed; page-heading and About text effects remain.
- Site and CV languages are independent. Persian and Arabic use RTL layouts, with connected words preserved in text effects.
- Initial HTML renders loading artwork before the JavaScript bundle arrives. React continues the portal until the route is ready. Refresh, cold entry and navigation share the artwork.
- The exhibition measures content and animates height changes. Home hover surfaces reset on pointer exit. Reduced-motion preferences disable decorative movement.
- Locale and route bundles load separately. Scroll updates use a shared scheduler; offscreen decoration pauses. Project imagery requires no WebGL; the certificate scene has a separate Three.js bundle and fallback.

## Catalogue and provenance

The catalogue contains 68 unique records: 57 GitHub repositories and 11 portfolio records. It includes 15 live website destinations and one active Telegram bot destination. These counts describe catalogue links, not homepage cards.

Real product captures retain their own mappings. Ten legacy entries link to original portfolio records and explain that these are not standalone application source repositories. Fork attribution remains visible. Eleven credential records and ten available original certificate PDFs are preserved; the CV PDF is separate.

See [the project inventory](GITHUB_PROJECTS.md) for the source review.

## Recorded browser checks

| Scope | Result | Evidence |
| --- | --- | --- |
| Six routes × ten languages at 300px | 60 layouts; no horizontal overflow or runtime errors | Local ignored docs/responsive-review/humanized-all-languages-300.json |
| Home × ten languages × 390/768/1440/2560px | 40 layouts passed | [human-width-review.json](human-width-review.json) |
| Six routes × nine translated languages | 54 pages; no untranslated expected phrases or runtime errors | [localization-review.json](localization-review.json) |
| Loading and home interactions | Eight checks passed: first paint, handoff, refresh, slow route, navigation, selection, hover/focus and reduced motion | [home-redesign-review.json](home-redesign-review.json) |
| Initial portal × six routes × ten languages | 60 loading layouts fit at 300px | [startup-locale-review.json](startup-locale-review.json) |
| Language controls and motion | Eight earlier checks passed | [localized-motion-review.json](localized-motion-review.json) |

README images are actual local captures in [assets/readme](../assets/readme/). Full review images and newly generated browser outputs stay in the ignored docs/responsive-review folder. Linked JSON reports are committed snapshots.

The phrase check verifies its expected phrase set; it is not an independent linguistic review of every sentence. Layout checks measure overflow and runtime errors; screenshots supplement them.

## Build and repeatable checks

npm run lint executes tsc --noEmit. npm run build builds the Vite frontend and bundled Node server. Both passed for the publishing checkout, along with Git whitespace checks. Vite emits its standard size advisory for the separate Three.js vendor chunk.

The [README](../README.md#checks) documents Python/Playwright setup. Scripts include [responsive checks](check-responsive.py), [localization checks](check-localization.py), [loading and hover checks](verify-home-redesign.py) and [startup locale checks](check-startup-locales.py).

Saved scroll measurements are development snapshots; this report does not claim a fixed frame rate across devices. Changes reduce repeated per-card scroll work and stop offscreen animation.

A GitHub push can trigger an existing Pages integration. Repository checks alone do not establish that the new production deployment has completed.
