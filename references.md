# References

## In this repo

- [`README.md`](README.md) — what this is, try it, structure, version builds
- [`background.md`](background.md) — vision, naming, design language, plan, money
- [`notes.md`](notes.md) — highlights of the earlier discussions
- [`githubrepos.md`](githubrepos.md) — repos we're watching, and why
- [`browser-cheat-sheet.md`](browser-cheat-sheet.md) — 18 browsers vs. our 10 design points
- [`css/tokens.css`](css/tokens.css) — EMERALD design tokens

## Fork / shell candidates

- **Stedding** — BSD-3, Arc-style UX, solo dev. The hard-fork candidate we evaluated.
- **Electron** — fastest path to a downloadable app; our web interface drops in unchanged.
- **Tauri** — lighter shell option (OS webview + Rust backend); per-OS installers via GitHub Actions.
- **brave-core** — the Brave path: what a full Chromium fork actually costs to maintain.

## Engine & platform references

- **Chromium** — the engine everything serious rides; extension compat is the price of admission.
- **Servo** — independent engine components; long-term hedge watching.
- **Ladybird** — the only independent engine being built from scratch (pre-alpha).

## Design & UX references

- **Android Honeycomb 3.0** — bottom system bar, visual/spatial bookmarks, unified
  bookmarks+history, respect-the-device. The interaction spirit of EMERALD.
- **Opera GX** — the only user-facing RAM/CPU limiter panel. Steal the concept.
- **Edge Sleeping Tabs + Journeys** — memory discipline + mission-adjacent history.
- **DuckDuckGo** — bottom address bar option, Fire Button, tracker blocking before load.
- **Ecosia** — the impact-dashboard playbook for our "devices revived" counter.
- **Floorp** — idle memory reclaim + PWA-as-apps ("apps live in the browser").
- **Zen Browser** — proof a tiny team can ship Arc-grade UX.

## Cautionary tales

- **ChatGPT Atlas** (dead Aug 2026) — don't build a browser just to house an AI.
- **Arc** (maintenance mode) — love without revenue dies.
- **Orion** (killed Linux/Windows Oct 2026) — don't fight Apple off its turf.

## Legal / licensing

- **MPL-2.0** — our license (file-level copyleft; proprietary combinations allowed).
- **USPTO TESS** — formal "Emerald Browser" trademark clearance still pending.
  Preliminary screen (2026-10-16) found no registered mark; not legal clearance.
