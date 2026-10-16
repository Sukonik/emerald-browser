# 💎 Emerald Browser

**The second-life device platform, browser first.** A low-RAM, mission-based browser
that runs beautifully on old hardware and earns the right to revive the whole device.
*Every screen you own, revived.*

> **v0.1 — interface prototype.** This release is the differentiating layer only:
> design tokens, the bottom command bar, the mission view, and the launcher home
> screen, built in lean HTML/CSS/JS. There is no browsing engine yet — nothing here
> actually loads the web. The engine/shell decision comes after the interface proves
> what we're forking for.

## Name status

"Emerald" is Nathan's birthstone — green, GoldenSun gemstone heritage, personal.
Formal trademark clearance is **pending before official use**. The two existing
hobby-scale uses of the name (a dead Play Store listing, an indie v1.0) are not
collisions, and a web search surfaced no registered "Emerald Browser" mark, but
this is a preliminary screen, not legal clearance.

## The vision

~2 billion abandoned devices. An acquirer buys the *lifecycle*, not the browser.
Build order: **browser first** (it earns the right to become the rest) → OS revive
mode (codename **Project Granite**: Ubuntu LTS minimal base, browser as the desktop
shell) → phone/tablet revive (Android; beloved abandoned flagships, WiFi-only
second-life modes first).

Thesis: an acquirer buys the second-life device lifecycle platform — OEMs needing
a circular-economy story are the natural strategic buyers.

## Design language: EMERALD

Marble materials + herb accents, Honeycomb-3.0 interaction spirit.

- **Materials:** marble/quartz/stone — raw, carved, architectural. Not apothecary-cute.
- **Accents:** rosemary and lavender as notes, not theme.
- **Attitude:** Safari-classic restraint. Cool = confidence = empty space.
- **Honeycomb 3.0 lessons:** bottom-anchored controls (our bottom command bar),
  visual/spatial bookmarks (our mission view), unified bookmarks+history
  ("finding beats organizing"), and above all **respect the device** — full-class
  experience on humble hardware.
- **Hard refusals:** notification spam, productivity theater, dark patterns, any
  feature that costs RAM while idle. Zero idle cost, zero idle RAM.

## What's in this repo

```
emerald-browser/
├── index.html            # v0.1 interface prototype (missions, command bar, launcher)
├── css/
│   ├── tokens.css        # EMERALD design tokens (marble, herbs, type, space)
│   └── emerald.css       # component styles
├── js/
│   └── emerald.js        # mission rendering, universal find, launcher
├── .github/workflows/
│   └── pages.yml         # version builds → GitHub Pages
├── LICENSE               # MPL-2.0
└── README.md
```

## Version builds

- Every push to `main` rebuilds the live prototype via GitHub Actions.
- Tagged releases (`v0.1.0`, …) are the versioned builds.
- Live: `https://sukonik.github.io/emerald-browser/`

## Roadmap (abridged)

The full 19-point plan lives with the project maintainers; the shape is:

1. Interface prototype (this repo, v0.1) → engine/shell decision
2. Low-RAM architecture: aggressive tab sleeping, idle reclaim, user-visible limiter
3. Missions (invisible auto-organization) + universal find + mission-linked bookmarks
4. Bottom command bar; browser-is-chat + hybrid AI (tiny local, cloud for hard tasks)
5. Launcher home screen + persistent menu bar; downloads as a first-class feature
6. Web app store (GoldenSun Certified, 15% cut) — the economic engine
7. GoldenSun Account Manager (identity/sync); LinkGuard security layer
8. Project Granite (OS revive) → phone/tablet revive → backwards-compat commitment
9. Distribution via refurbishers, Zorin, NGOs, education, MSPs; sustainability story

## Division of labor

- **Nathan** — front-end, planning, art direction, UI decisions.
- **Mike** — architecture, backend, data, SEO, monetization, research.

## License

Mozilla Public License 2.0 — see [LICENSE](LICENSE).
