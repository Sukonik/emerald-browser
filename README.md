# 💎 Emerald Browser

**The second-life device platform, browser first.** A low-RAM, mission-based browser
that runs beautifully on old hardware and earns the right to revive the whole device.

> **v0.1 — interface prototype.** Design tokens, bottom command bar, mission view,
> and launcher home screen in lean HTML/CSS/JS. No browsing engine yet — nothing
> here loads the web. See [`background.md`](background.md) for the story.

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
├── background.md         # vision, naming, design language, plan — start here
├── .github/workflows/pages.yml
└── LICENSE               # MPL-2.0
```

## Version builds

Every push to `main` rebuilds via GitHub Actions. Tagged releases are the
versioned builds — [`v0.1.0`](https://github.com/Sukonik/emerald-browser/releases/tag/v0.1.0)
is the first.

## License

[Mozilla Public License 2.0](LICENSE).
