# 💎 Emerald Browser
### Marble Edition · v2.0.0

**A lighter place to meet the web.** Emerald starts as a beautiful, responsive browser interface and aims to become a practical browser for devices old and new — with a longer-term vision for giving aging hardware a second life.

> **CURRENT STATUS: interface prototype, not a functioning browser engine.** The live GitHub Pages build showcases design and locally interactive features. It cannot render arbitrary websites inside itself, capture real tabs/history/downloads, filter network traffic, or offer native extensions yet. URLs and web searches open in your existing browser.

## 🌐 Try Emerald

**[Open the live Marble Edition](https://sukonik.github.io/emerald-browser/)** · [v2.0.0 release](https://github.com/Sukonik/emerald-browser/releases/tag/v2.0.0) · [Project planning](https://github.com/Sukonik/emerald-browser/issues/2)

Run locally using a static server (ES modules require HTTP rather than opening `index.html` through `file://`):

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

No Node runtime or build step is required to run the site. Node 22+ is used only for the checks.

## Latest versions

| Version | Date | What changed |
|---|---|---|
| **[v2.0.0 — Marble Edition](https://github.com/Sukonik/emerald-browser/releases/tag/v2.0.0)** | 2026-10-16 | Full marble-first redesign; pearl favicon and bespoke sculpture, new responsive shell, working demo bookmark library, mission create/archive/restore, command search + web navigation, theme toggle, CI tests |
| [v0.1.1](https://github.com/Sukonik/emerald-browser/releases/tag/v0.1.1) | 2026-10-16 | Docs round; context, comparison, repo watchlist and first planning issue |

## The Marble Edition

**Design direction: marble, not glass.** Honed ivory and pearl surfaces, deep emerald/forest tones, editorial typography, architectural spacing, and one sculpted pearlescent focal point. Android Honeycomb 3.0 inspired the spatial navigation principle, *not* the 2011 holographic aesthetic.

- **Home:** editorial hero with custom SVG sculpture and a shelf of saved places.
- **Missions:** add collections, archive or restore them intentionally, see mission-related links. Demo data stays on this device.
- **Library:** add, remove, and open bookmarks; persisted using localStorage (no account needed).
- **Command dock:** Cmd/Ctrl+K or `/` to find a place, mission, or view; open websites and DuckDuckGo searches in a new tab.
- **Downloads:** honest placeholder explaining that actual download management requires an integrated browser engine.
- **Themes:** default Marble and optional Basalt dark theme, retained locally.
- **Responsive:** desktop navigation rail, narrow-screen bottom navigation, accessible dialogs, keyboard support, reduced-motion preference.

This demo makes **no real** LinkGuard, privacy enforcement, AI, certification, or low-RAM engine claims. An interface that looks lightweight is not proof of a resource-efficient production browser.

## Technical notes

```text
index.html                    Marble Edition app shell and sculptural SVG
favicon.svg                   Pearl-on-marble gemstone mark
css/tokens.css                Marble and Basalt design tokens
css/emerald.css               Adaptive layout, typography, interactions
js/core.mjs                   Pure safe URL/search helpers
js/emerald.js                 Views, local mission/bookmark storage, command UI
tests/core.test.mjs           URL/search safety and formatting tests
DESIGN.md                     Product and visual design charter
VERSION                       Current release version
RELEASE_NOTES_2.0.0.md        Release summary
.github/workflows/ci.yml     Node syntax/test checks for PRs and main
.github/workflows/pages.yml  Pages deployment on main
.github/workflows/release.yml  Versioned GitHub release on VERSION change
background.md / notes.md     Original founding research with Mike
browser-cheat-sheet.md        Competitive research
githubrepos.md                Engine and browser references
```

No external JS dependencies, fonts, libraries, trackers, or background network polling. Browser data is stored only in the site origin's localStorage and remains under that browser's site-data controls.

### Tests

```sh
npm run check
npm test
```

## The path forward

1. **v2.0.0 — Marble Edition interface** *(this release)*: compelling look, responsive patterns, findability and local demo persistence.
2. **Browser-engine feasibility**: decision record for desktop engine/shell (Chromium/Electron, CEF, Gecko, Tauri WebViews), sandbox/security patch strategy, tab support, downloads, bookmarks, profiles.
3. **Real browsing alpha**: real navigation, tabs, history, permissions and measured CPU/RAM on target hardware.
4. **Project Granite (future)**: explore a device-revival system after the browser is credible, maintainable and secure.
5. **Mobile & tablet (future)**: separately validate OS and platform compatibility, especially older iPad/iPhone support.

**Team GoldenSun:** Nathan — product and creative direction; Ari — design and product architecture; Cole — engineering; Mike — strategy and research.

See [DESIGN.md](DESIGN.md) and [Issue #2](https://github.com/Sukonik/emerald-browser/issues/2) for scope and implementation boundaries. This repository is licensed under [MPL-2.0](LICENSE).

## Full version history

| Version | Date | Notes |
|---|---|---|
| [v2.0.0](https://github.com/Sukonik/emerald-browser/releases/tag/v2.0.0) | 2026-10-16 | Marble Edition redesign, local functionality, custom pearl favicon, new CI and release publishing |
| [v0.1.1](https://github.com/Sukonik/emerald-browser/releases/tag/v0.1.1) | 2026-10-16 | Initial documentation and watchlist |
| [v0.1.0](https://github.com/Sukonik/emerald-browser/releases/tag/v0.1.0) | 2026-10-16 | First HTML/CSS/JS mission and launcher interface scaffold |
