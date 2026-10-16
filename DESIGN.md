# Emerald / Marble Edition — Design Charter
*Product direction implemented in v2.0.0 · October 16, 2026*

## The material is marble, not glass
The starting point is an architectural material: honed white marble with subtle green veins, finished edges, and a single pearl. Green is an accent applied with restraint; this isn't a translucent or neon interface. The reference to Android Honeycomb 3.0 informs spatial navigation and discoverability **only**, not the old Android visual styling.

### Principles
1. **The page is the hero.** Navigation stays clear and compact, never competes with visited content.
2. **Warm restraint.** Editorial display type, readable system UI type, generous whitespace.
3. **Honesty.** A prototype is called a prototype. No fake security statuses or pretend downloads.
4. **Usability beats invention.** Missions enhance tabbed browsing rather than replacing it; actual tabs will require the browser engine.
5. **Respect older devices.** Use CSS/SVG and no external animation libraries, fonts, API polling, trackers, or background AI. Verify performance on real devices before claiming low RAM.
6. **Portable by design.** Responsive from narrow touch screens to desktops; keyboard and accessibility basics preserved.
7. **Durable actions.** Users choose when to archive; no silent deletion. Storage in this prototype is intentionally local to the host browser.
8. **Clear versioning.** Each published design version is recorded in README and release notes.

## Palette
- Marble canvas #f6f4ef
- Pearl surface #fbfaf7
- Forest #183c33
- Emerald #245c4d
- Honed stone line #dedfd7
- Ink #242d2b

## Signature elements
- Carved-pearl emblem (favicon.svg)
- Editorial h1 with understated italic accent
- SVG marble/pearl sculptural hero
- Desktop vertical library/navigation rail, bottom mobile navigation
- Floating command dock, but not translucent glass
- Optional Basalt dark theme

## Architecture boundary
**v2.0.0 remains a GitHub Pages UI prototype.** The command bar can open external websites in a new tab, but that is not a browsing engine. Real tabs, network isolation, history, permissions, extension compatibility, downloads, OS installers and security patches must be evaluated in an engine ADR and separately shipped.

## Next steps
Compare Chromium/Electron, CEF, Gecko-based approaches, and Tauri WebViews in a focused technical proof-of-concept. Benchmark a real 2015 MacBook Pro and low-memory Windows machine. Work within ordinary PR review and CI.
