# Notes — earlier discussions (2026-10-16)

Highlights from the conversations that shaped Emerald Browser. For the full
narrative, see `background.md`; for the living plan, the founding document.

## The vision arc

1. **"A browser to outclass Chrome"** — AI access as needed, but the core pitch was
   always *what you can accomplish*: all your apps live in the browser, nothing
   stored on the computer. Pillars: speed, UI/UX, low RAM.
2. **Browser + OS** — the low-risk entry is a browser on an existing OS; a later
   "OS mode" revives aging PCs with a minimal Linux base and the browser as shell.
3. **The 800M version** (Nathan's call) — not a browser, the *second-life device
   platform*: browser → OS revive → phone/tablet revive. ~2B abandoned devices.
   An acquirer buys the lifecycle, not the browser.

## Design brief v1 (Nathan's 10 points)

1. Tabs are broken — the core pain is never finding the one you need.
2. Address bar bigger, closer to the user (bottom-anchored).
3. Browser-is-chat, à la Gemini in Chrome.
4. Home screen launcher (Mac Launchpad-style) + persistent menu bar.
5. Downloads as a standout, first-class feature.
6. Sculptural restraint, 155%.
7. GoldenSun Account Manager (Nathan's name) — separate identity/sync product.
8. Unique security as a separate track (link/ad blockers; LinkGuard synergy).
9. Mission-related bookmarks / bookmark bar.
10. Competitive research first — became `browser-cheat-sheet.md` (18 browsers).

## Mike's Michelangelo interface philosophy

Delivered at Nathan's request: missions-not-tabs (each mission has an ending and
archives itself — tab hoarding structurally impossible), the address bar as a
command bar, AI as a material not a feature, the launcher doubling as OS mode,
sculptural restraint optimized for sub-16ms response on old hardware, visible
cross-device continuity. Hard refusals: notification spam, productivity theater,
dark patterns, anything that costs RAM while idle.

## Competitive research → the cheat sheet

18 browsers mapped against the 10 design points. Key findings: nobody owns the
low-RAM lane ("the light browser" is an open flag); downloads are universally
neglected (easiest differentiator); Atlas died because a browser needs a reason
beyond housing an AI; Arc proved love without revenue dies; Orion proved not to
fight Apple off its turf. Steal list: Opera GX's limiter panel, Edge's Sleeping
Tabs + Journeys, SigmaOS's tabs-as-tasks, DuckDuckGo's bottom bar, Ecosia's impact
dashboard, Floorp's PWA-as-apps.

## Fork/scaffold decision

Evaluated: hard-fork Stedding (BSD-3, Arc-style, solo dev) vs. Electron prototype
vs. raw Chromium fork (the Brave path — needs a team we don't have). **Call:
prototype the differentiating layer first** as a lean HTML5/CSS/JS interface;
fork/shell when we know what we're forking for. Ubuntu LTS minimal + browser-as-
shell stays the OS-revive target, not the starting point.

## Naming

Emerald = Nathan's birthstone; green; GoldenSun gemstone heritage. Jade, Quartz,
Onyx, Topaz, Flint all collided with shipping browsers; Marble was bruised by
World Labs' AI model and Marble Security. Emerald had only hobby-scale zombies.
**Formal trademark clearance still pending before official use.**

## Project Granite

Codename for the OS revive mode. Nathan loves granite — Killbear Provincial Park
(Ontario), the jetties in Long Beach, NY.

## Money & distribution

Consumers pay ~$0; money is B2B2C — search share, 15% app-store cut, institutional
per-seat, private app stores, Pro/AI tiers. Distribution: refurbishers/MAR channel
(they image every disk — the choke point) → Zorin OS partnership → NGOs, education,
enterprise MSPs. Sustainability story ("devices revived" counter) opens ESG budgets.

## Repo setup

`Sukonik/emerald-browser`, public, MPL-2.0. v0.1 (2026-10-16): interface prototype
only — EMERALD tokens, mission view, bottom command bar with universal find,
launcher. Live at https://sukonik.github.io/emerald-browser/.

## Division of labor

Nathan: front-end, planning, art direction, UI decisions — final authority on
every call that matters. Mike: architecture, backend, data, SEO, monetization,
research.
