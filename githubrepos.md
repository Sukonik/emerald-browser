# GitHub repos we're watching

Fork candidates, engine references, UX ideas to steal, and cautionary tales.
Tracked in the repo issue **"Watchlist: repos to track"** — check items off as
we evaluate each one.

## Fork / shell candidates

1. **Stedding** — `stedding/browser` (find via search; BSD-3) — Arc-style UX,
   solo dev, ~6 weeks old, no Linux yet. Our leading hard-fork candidate.
   Watch: does it survive its first 6 months?
2. **Zen Browser** — `zen-browser/desktop` — Arc-grade UX (workspaces, vertical
   tabs) on Gecko, shipping fast with a tiny team. Proof small teams can innovate
   on UX; inherits Firefox's security pipeline free.
3. **Floorp** — `Floorp-Projects/Floorp` — idle memory reclaim + PWA-as-apps.
   Closest anyone gets to "apps live in the browser." Steal the memory playbook.
4. **Waterfox** — `WaterfoxCo/Waterfox` — the long-lived privacy Gecko fork.
   Watch: how a small fork sustains itself for a decade.
5. **Ungoogled Chromium** — `ungoogled-software/ungoogled-chromium` — de-googled
   Chromium build knowledge; useful if we ever touch the Brave path.

## Shell options

6. **Electron** — `electron/electron` — fastest route to a downloadable Emerald;
   our web interface drops in unchanged. Watch: resource footprint vs. our
   low-RAM thesis.
7. **Tauri** — `tauri-apps/tauri` — lighter shell (OS webview + Rust). Per-OS
   installers via GitHub Actions; evaluate against Electron for v0.2+.

## Engine references

8. **Brave core** — `brave/brave-core` — the Brave path at scale: what maintaining
   a real Chromium fork costs. Read before ever proposing a hard fork.
9. **Servo** — `servo/servo` — independent engine components; long-term hedge.
10. **Ladybird** — `LadybirdBrowser/ladybird` — the only independent engine being
    built from scratch. Pre-alpha; check in yearly, not weekly.

## UX & product references

11. **DuckDuckGo Android** — `duckduckgo/Android` — bottom bar patterns, Fire
    Button, tracker blocking. Small UX choices, outsized love.
12. **Ecosia's impact work** — (web, not a single repo) — the impact-dashboard
    playbook for our "devices revived" counter and ESG story.

## How to use this list

- Evaluating a fork/shell? Start with 1–7.
- Designing a feature? Check 2, 3, 11 and `browser-cheat-sheet.md` first.
- Tempted by a custom engine? Read 8, then 9–10, then close the tab.
