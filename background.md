# Emerald Browser — Background

*Context for future teammates (Cole, Ari). Written 2026-10-16. If you're reading
this, Nathan decided to bring you on — welcome.*

## The story

Nathan's thesis: **the 800M version** — not a browser, the second-life device
platform. ~2 billion abandoned devices are sitting in drawers and closets. An
acquirer buys the *lifecycle*, not the browser. Natural strategic buyers: OEMs
needing a circular-economy story (Dell/HP/Lenovo all run refurb programs).

Build order, and the order matters: **browser first** (it earns the right to become
the rest) → **OS revive mode** (Ubuntu LTS minimal base, browser as the desktop
shell) → **phone/tablet revive** (Android only; beloved abandoned flagships like
the Essential PH-1, Pixel 3a, OnePlus 6, Galaxy S9; WiFi-only second-life modes
first to sidestep modem blobs).

Nathan's acceptance test: it must work on older iPads, his MacBook Pro (2015,
monterey — the reference machine), iPhone, and Windows as the default browser,
and be compatible with Android for OS revives.

## The name

**Emerald** is Nathan's birthstone — green, GoldenSun gemstone heritage, personal.
Name research (2026-10-16): Jade/Quartz/Onyx/Topaz/Flint all collided with shipping
browsers; Marble was bruised by World Labs' AI model and Marble Security; Emerald
had only two hobby-scale zombies (a dead 740-download Play listing, an indie v1.0)
and no registered trademark surfaced in a preliminary screen. **Formal trademark
clearance is still pending before official use** — do not print it on anything
that can't be renamed until that's done.

## Project Granite

The codename for the OS revive mode. Nathan loves granite — Killbear Provincial
Park (Ontario) and the jetties in Long Beach, NY. "Try the browser, revive the PC."
Thin by design; we own the OTA update pipeline.

## Design language: EMERALD

Marble materials + herb accents, Honeycomb-3.0 interaction spirit.

- Materials: marble/quartz/stone — raw, carved, architectural. **Not apothecary-cute.**
- Herbs (rosemary, lavender) are accent notes, never the theme.
- Attitude: Safari-classic restraint. Cool = confidence = empty space.
- Honeycomb 3.0 lessons: bottom-anchored controls, visual/spatial bookmarks,
  unified bookmarks+history ("finding beats organizing"), and above all
  **respect the device** — full-class experience on humble hardware.

Mike's interface philosophy (the Michelangelo brief): missions not tabs (each
mission has an ending and archives itself — tab hoarding must be structurally
impossible), the address bar as a command bar, AI as a material not a feature,
the launcher doubling as OS mode, sculptural restraint optimized for sub-16ms
response on old hardware, visible cross-device continuity.

**Hard refusals:** notification spam, productivity theater, dark patterns, and any
feature that costs RAM while idle. Zero idle cost, zero idle RAM.

## The plan (abridged)

The full living plan is the 19-point founding document (kept by Mike). The shape:

1. Interface prototype (this repo, v0.1) → engine/shell decision later
2. Low-RAM architecture: aggressive tab sleeping, idle reclaim, user-visible limiter
3. Missions (invisible auto-organization) + universal find + mission-linked bookmarks
4. Bottom command bar; browser-is-chat + hybrid AI (tiny local model, cloud for hard tasks)
5. Launcher home screen + persistent menu bar; downloads as a first-class feature
6. **The App Store for the web** — GoldenSun Certified trust mark, 15% cut
   ("half the Apple tax"), private institutional stores. The economic engine.
7. GoldenSun Account Manager (identity/sync); LinkGuard security layer
   (the email link-guard DNA becomes browser link protection)
8. Project Granite → phone/tablet revive → backwards-compat commitment
   (old macOS, Win10, Android 8+ — the moat nobody wants to maintain)
9. Distribution: refurbishers/MAR channel → Zorin OS partnership → NGOs, education,
   enterprise MSPs. Sustainability story: "devices revived" counter, e-waste angle
   (62M tonnes/yr; Win10 EOL threatening 400M junked PCs) opens ESG budgets.

## Money

Consumers pay ~$0 — money is B2B2C. Search revenue share at scale, 15% app-store
cut, institutional per-seat ($5–20), private app stores, Pro/AI tiers.

## Key decisions so far

- 2026-10-16 — Vision locked: the 800M second-life device platform, browser first.
- 2026-10-16 — Name locked: Emerald Browser (trademark clearance pending).
- 2026-10-16 — Design inspo locked: marble + herbs + Honeycomb 3.0.
- 2026-10-16 — Scaffold: lean HTML5/CSS/JS interface prototype on GitHub Pages;
  Electron/Tauri shell and Chromium fork deferred until the interface proves the thesis.
- 2026-10-16 — Repo public, MPL-2.0 (file-level copyleft: our files stay open,
  proprietary combinations allowed — keeps the business model viable).

## Division of labor

- **Nathan** — front-end, planning, art direction, UI decisions. Final authority on
  every call that matters.
- **Mike** — architecture, backend, data, SEO, monetization, research.
