/* ============================================================
   Emerald Browser v0.1 — interface prototype logic
   All data below is static prototype content, not real browsing.
   ============================================================ */
"use strict";

/* Prototype content: missions with tabs, launcher apps. */
const PROTOTYPE = {
  missions: [
    {
      name: "Cabin weekend",
      updated: "2h ago",
      why: "Saved because: planning the Killbear trip — sites, weather, packing.",
      tabs: [
        { title: "Killbear Provincial Park — reservable campsites", host: "ontarioparks.ca" },
        { title: "ClearSky — Parry Sound marine forecast", host: "clearsky demo" },
        { title: "Granite geology of Georgian Bay", host: "wikipedia.org" },
      ],
    },
    {
      name: "Emerald build",
      updated: "18m ago",
      why: "Saved because: the v0.1 interface prototype and its plan.",
      tabs: [
        { title: "emerald-founding-document.md", host: "local plan" },
        { title: "EMERALD design tokens", host: "css/tokens.css" },
        { title: "Pages deploy workflow", host: ".github/workflows" },
      ],
    },
    {
      name: "Long Beach",
      updated: "yesterday",
      why: "Saved because: jetties, granite, and the summer place list.",
      tabs: [
        { title: "Long Beach NY — beach conditions", host: "longbeachny.gov" },
        { title: "Jetty granite sourcing notes", host: "notes" },
      ],
    },
  ],
  apps: [
    { name: "Mail", icon: "✉️", certified: true },
    { name: "Calendar", icon: "🗓️", certified: true },
    { name: "Notes", icon: "📝", certified: true },
    { name: "ClearSky", icon: "🌤️", certified: true },
    { name: "Files", icon: "🗂️", certified: false },
    { name: "Music", icon: "🎵", certified: false },
    { name: "Maps", icon: "🗺️", certified: false },
    { name: "Reader", icon: "📖", certified: true },
  ],
};

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}

/* ---------- Mission view ---------- */
function renderMissions() {
  const wrap = document.getElementById("missions");
  wrap.innerHTML = "";
  for (const m of PROTOTYPE.missions) {
    const card = el("article", "mission");
    const top = el("div", "mission-top");
    top.append(el("h2", null, m.name), el("span", "mission-meta", m.updated));
    const ul = el("ul");
    for (const t of m.tabs) {
      const li = el("li");
      li.append(el("span", "favicon"), el("span", "tab-title", t.title), el("span", "tab-host", t.host));
      ul.append(li);
    }
    card.append(top, ul, el("p", "why", m.why));
    wrap.append(card);
  }
}

/* ---------- Launcher ---------- */
function renderLauncher() {
  const wrap = document.getElementById("launcherGrid");
  wrap.innerHTML = "";
  for (const a of PROTOTYPE.apps) {
    const d = el("div", "app" + (a.certified ? " certified" : ""));
    const icon = el("div", "icon", a.icon);
    d.append(icon, el("div", "name", a.name));
    if (a.certified) d.append(el("div", "cert", "✓ GoldenSun Certified"));
    wrap.append(d);
  }
}

/* ---------- Universal find (Cmd+K across missions, tabs, apps) ---------- */
function universalFind(q) {
  q = q.trim().toLowerCase();
  const out = document.getElementById("findResults");
  if (!q) { out.classList.remove("open"); out.innerHTML = ""; return; }
  const hits = [];
  for (const m of PROTOTYPE.missions) {
    if (m.name.toLowerCase().includes(q)) hits.push({ kind: "mission", label: m.name });
    for (const t of m.tabs)
      if ((t.title + " " + t.host).toLowerCase().includes(q))
        hits.push({ kind: "tab", label: t.title + " — " + m.name });
  }
  for (const a of PROTOTYPE.apps)
    if (a.name.toLowerCase().includes(q)) hits.push({ kind: "app", label: a.name });
  out.innerHTML = "";
  if (!hits.length) {
    out.append(el("div", "fr-item", "No matches in this prototype."));
  } else {
    for (const h of hits.slice(0, 8)) {
      const row = el("div", "fr-item");
      row.append(el("span", "fr-kind", h.kind), el("span", null, h.label));
      out.append(row);
    }
  }
  out.classList.add("open");
}

/* ---------- View toggle ---------- */
function showView(name) {
  document.getElementById("missionView").classList.toggle("hidden", name !== "missions");
  document.getElementById("launcherView").classList.toggle("hidden", name !== "launcher");
  document.querySelectorAll(".view-toggle button").forEach(b =>
    b.classList.toggle("active", b.dataset.view === name));
}

document.addEventListener("DOMContentLoaded", () => {
  renderMissions();
  renderLauncher();
  const input = document.getElementById("cmdInput");
  input.addEventListener("input", () => universalFind(input.value));
  input.addEventListener("keydown", (e) => { if (e.key === "Escape") universalFind(""); });
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); input.focus(); }
  });
  document.querySelectorAll(".view-toggle button").forEach(b =>
    b.addEventListener("click", () => showView(b.dataset.view)));
});
