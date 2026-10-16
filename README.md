# 💎 Emerald Browser

**The second-life device platform, browser first.** A low-RAM, mission-based browser
that runs beautifully on old hardware and earns the right to revive the whole device.

> **v0.1 — interface prototype.** Design tokens, bottom command bar, mission view,
> and launcher home screen in lean HTML/CSS/JS. No browsing engine yet — nothing
> here loads the web. See [`background.md`](background.md) for the story.

## Latest versions

| Version | Date | Notes |
|---|---|---|
| [**v0.1.1**](https://github.com/Sukonik/emerald-browser/releases/tag/v0.1.1) | 2026-10-16 | Docs round: cleaned README, background/notes/references, cheat sheet, repo watchlist, issue #1 |
| [**v0.1.0**](https://github.com/Sukonik/emerald-browser/releases/tag/v0.1.0) | 2026-10-16 | First build: interface prototype (tokens, missions, command bar, launcher) |

*Full history at the bottom of this file.*

## Try it

Open `index.html`, or the live build once Pages is enabled:
`https://sukonik.github.io/emerald-browser/`

In the prototype: toggle **Missions / Launcher** up top, hit **⌘K** and type to
use universal find across the demo content.

## Structure

```
├── index.html            # interface prototype
├── css/
│   ├── tokens.css        # EMERALD design tokens
│   └── emerald.css       # component styles
├── js/emerald.js         # mission rendering, universal find, launcher
├── README.md             # this file
├── background.md         # vision, naming, design language, plan — start here
├── notes.md              # highlights of earlier discussions
├── references.md         # references worth keeping
├── githubrepos.md        # repos we're watching, and why
├── browser-cheat-sheet.md # 18 browsers vs. our 10 design points
├── .github/workflows/pages.yml
└── LICENSE               # MPL-2.0
```

## Version builds

Every push to `main` rebuilds via GitHub Actions. Tagged releases are the
versioned builds.

## Version history

| Version | Date | Notes |
|---|---|---|
| [**v0.1.0**](https://github.com/Sukonik/emerald-browser/releases/tag/v0.1.0) | 2026-10-16 | First build: EMERALD design tokens, interface prototype (mission view, bottom command bar with universal find, launcher), Pages deploy workflow |
| [**v0.1.1**](https://github.com/Sukonik/emerald-browser/releases/tag/v0.1.1) | 2026-10-16 | Docs round: cleaned README, `background.md` for future teammates, `notes.md`, `references.md`, `browser-cheat-sheet.md`, `githubrepos.md`, issue #1 (repo watchlist) |

## License

[Mozilla Public License 2.0](LICENSE).
