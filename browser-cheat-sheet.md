# Browser Cheat Sheet
*Competitive reference for the GoldenSun browser project. Researched October 2026.*

## The one-line verdicts

| Browser | Engine | Status | The one thing to know |
|---|---|---|---|
| Vivaldi | Chromium | Alive (employee-owned) | The power-user cockpit: tab stacking/tiling, built-in mail, calendar, notes. Everything built in, no extensions needed. |
| Brave | Chromium | Alive (~118M MAU) | Proof privacy can be a business (BAT ads, VPN, search). Leo AI built in. |
| Arc | Chromium | Maintenance mode (acquired by Atlassian ~$610M) | Beloved UX (Spaces, command bar, auto-archiving tabs) that never found revenue. Love ≠ sustainability. |
| Dia | Chromium | Alive (macOS only) | Arc's successor: chat-with-your-tabs as the entire interface. $20/mo Pro. Complexity killed Arc's mainstream shot — warning. |
| Perplexity Comet | Chromium | Alive, free worldwide | Agentic browsing: cross-tab intelligence, books/fills/shops for you. Powerful but flaky; hit with prompt-injection ("CometJacking") and an Amazon lawsuit. |
| ChatGPT Atlas | Chromium | **DEAD** (killed Aug 2026, 292 days) | OpenAI folded it into an extension. The lesson: a browser needs a reason to exist beyond housing an AI. |
| Opera One | Chromium | Alive (~80M+ AI users) | Two-tier AI ladder done right: free Aria for everyone, paid agentic Neon (~$20/mo) for power users. Flow = great cross-device handoff. |
| Opera GX | Chromium | Alive | **The only browser with user-facing RAM/CPU/network limiters.** Makes resource control a feature users touch. The single best steal for our low-RAM thesis. |
| Microsoft Edge | Chromium | Alive (~5–6% share) | Sleeping Tabs (hibernates inactive tabs, claims 2GB saved vs Chrome) + Journeys (auto-organized history topics — mission-adjacent). Wins by preinstallation. |
| Ecosia | Chromium | Alive | Values-as-business-model: 80%+ of profits plant trees (244M+), public impact dashboard. The playbook for our sustainability story. |
| Samsung Internet | Chromium | Alive (~2% share) | Preinstallation beats product quality. Rents AI from Perplexity rather than building it. |
| Zen Browser | Gecko (Firefox) | Alive, shipping fast (~44k GitHub stars) | Tiny team shipping Arc-grade UX (workspaces, vertical tabs). Proof small teams can innovate on UX. Inherits Firefox security pipeline free. |
| Floorp | Gecko (Firefox) | Alive | **Idle memory reclaim** (frees RAM from idle tabs) + PWA-as-app support — closest anyone gets to "apps live in the browser." |
| Orion (Kagi) | WebKit | macOS/iOS alive; **Linux/Windows killed Oct 2026** | Zero telemetry, runs Chrome+Firefox+Safari extensions side by side. Deliberately AI-free (calls agentic browsers a security hazard). Cautionary tale: cross-platform WebKit without Apple is brutal. |
| DuckDuckGo | System WebView | Alive | Fire Button (one-tap data burn), **bottom address bar option**, private multi-model chat (Duck.ai). Small UX choices, outsized love. |
| Ladybird | Independent (LibWeb) | Pre-alpha (stable ~2028) | The only independent engine being built. Nothing shippable — watch as the long-term Chromium-monoculture hedge. |
| Naver Whale | Chromium | Alive (Korea) | **QuickBar** (swipeable bottom toolbar), idle tab unloading with custom thresholds, sidebar toolbox (calculator, translator built in). |
| SigmaOS | WebKit | Uncertain (unverified Oct 2026) | **Tabs-as-todo-list** (mark complete/snooze) — the closest anyone has come to missions-not-tabs. |

## Mapped to our 10 design points

1. **Tabs are broken / can't find anything** — Nobody has solved findability. Edge's Journeys (auto-topic history) and SigmaOS's tabs-as-tasks are the nearest attempts. Our answer: missions + universal find (Cmd+K across missions, tabs, bookmarks, history, downloads). *Wide open.*
2. **Bigger address bar, closer to user** — DuckDuckGo offers a bottom address bar; Naver Whale's QuickBar is a bottom-anchored toolbar. Mobile Safari normalized the bottom bar years ago. A floating bottom command bar on desktop would be distinctive. *Precedent exists, desktop is open.*
3. **Browser-is-chat (Gemini-in-Chrome model)** — Everyone has chat-AI now; nobody differentiates well. Split: agentic-doers (Comet, Neon, Dia — powerful, flaky, security scars) vs. private-chatters (Duck.ai, Aria) vs. refusers (Orion). Our lane: *AI as needed, zero idle cost* — unclaimed.
4. **Launcher home screen + menu bar** — Arc's Spaces and Whale's sidebar toolbox are adjacent. Nobody does a true Launchpad-style app grid as the home screen. *Open.*
5. **Downloads as a standout feature** — Universally neglected. Every browser treats downloads as a shameful little list; Orion was mid-build on a real download manager when it cut platforms. *Open goal — our easiest differentiator.*
6. **Sculptural restraint / low RAM** — THE wide-open lane. Nobody brands themselves "the light browser." Closest: Edge Sleeping Tabs, Opera GX limiters, Floorp idle reclaim, Whale idle unloading — all *features*, never the *identity*. *This is our flag to plant.*
7. **Cloud continuity (GoldenSun Account Manager)** — Opera's Flow does device handoff well; Dia has E2E encrypted sync. Nobody productizes identity/sync as its own named tool. *Open.*
8. **Unique security (link/ad blocking)** — Brave Shields is the benchmark; DuckDuckGo's tracker-blocking-before-load is excellent. Our LinkGuard DNA (email-link guard → browser link protection) is a story none of them can tell. *Differentiated by heritage.*
9. **Mission-related bookmarks** — Bookmarks are quietly dying everywhere; Whale's enhanced favorites and Vivaldi's panels are the exceptions. Mission-linked bookmarks don't exist. *Open.*
10. **What NOT to do** — The Atlas lesson (don't build a browser just to house an AI), the Arc lesson (love without revenue dies), the Orion lesson (don't fight Apple off its home turf).

## The patterns

- **Every scaled independent browser rides Chromium** except Zen/Floorp (Gecko) and Orion (WebKit). Extension compatibility is the price of admission.
- **Winners have an identity beyond "Chrome but X"**: privacy (Brave), power users (Vivaldi), gaming (Opera GX), values (Ecosia), region (Whale).
- **Distribution beats product**: Edge and Samsung win by preinstallation. Our answer has to be the refurbisher/OS-revive channel — distribution we *can* own.
- **Real money or death**: search deals, subscriptions, or a parent company. Arc is the ghost that proves it.

## Top steals for our design

1. Opera GX's resource limiter panel → make RAM a feature users touch.
2. Edge's Sleeping Tabs + Journeys → memory discipline + mission-like history.
3. SigmaOS's tabs-as-tasks → the seed of missions.
4. DuckDuckGo's bottom address bar + Fire Button → thumb-reachable command bar, one-tap clean slate.
5. Ecosia's impact dashboard → "devices revived" counter for the sustainability story.
6. Opera's two-tier AI (free assistant → paid agents) → our monetization ladder.
7. Floorp's PWA-as-apps → the "apps live in the browser" foundation.
