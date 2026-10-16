/* Emerald Browser · Marble Edition · v2.0.0
   No framework, trackers, background polling, AI services, or browsing engine.
   Bookmarks, missions and theme are local prototype features only. */
import { safeHttpUrl, resolveDestination, hostLabel, normalizeName } from "./core.mjs";

const STORAGE_KEY = "emerald.marble.v2";
const THEME_KEY = "emerald.marble.theme";
const panels = ["home", "missions", "library", "downloads"];
const seeds = {
  places: [
    { id: "p-github", name: "GitHub", url: "https://github.com", glyph: "⌘" },
    { id: "p-wiki", name: "Wikipedia", url: "https://www.wikipedia.org", glyph: "W" },
    { id: "p-archive", name: "Internet Archive", url: "https://archive.org", glyph: "⌁" },
    { id: "p-search", name: "DuckDuckGo", url: "https://duckduckgo.com", glyph: "✳" }
  ],
  missions: [
    { id: "m-emerald", name: "Emerald build", description: "Ideas and tools for creating something new.", archived: false, urls: [{ label: "Repository", url: "https://github.com/Sukonik/emerald-browser" }, { label: "GitHub", url: "https://github.com" }] },
    { id: "m-cabin", name: "A cabin weekend", description: "A little fresh air, time away, and places worth exploring.", archived: false, urls: [{ label: "Ontario Parks", url: "https://www.ontarioparks.ca" }, { label: "Maps", url: "https://www.openstreetmap.org" }] },
    { id: "m-read", name: "A curious mind", description: "A small collection of interesting corners of the internet.", archived: false, urls: [{ label: "Wikipedia", url: "https://www.wikipedia.org" }, { label: "Archive", url: "https://archive.org" }] }
  ]
};
const $ = (id) => document.getElementById(id);
const make = (tag, cls, value) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (value !== undefined) e.textContent = value;
  return e;
};
function seedClone() { return JSON.parse(JSON.stringify(seeds)); }
function safeRead(key) { try { return localStorage.getItem(key); } catch { return null; } }
function safeWrite(key, value) { try { localStorage.setItem(key, value); } catch { /* private mode / disabled storage */ } }
function cleanData(value) {
  if (!value || !Array.isArray(value.places) || !Array.isArray(value.missions)) return seedClone();
  const places = value.places.slice(0, 80).filter(p => p && typeof p === "object" && safeHttpUrl(p.url)).map(p => ({
    id: String(p.id || cryptoId()), name: normalizeName(p.name) || "Untitled",
    url: safeHttpUrl(p.url), glyph: normalizeName(p.glyph || "✳").slice(0, 2)
  }));
  const missions = value.missions.slice(0, 60).filter(m => m && typeof m === "object").map(m => ({
    id: String(m.id || cryptoId()), name: normalizeName(m.name) || "Untitled mission",
    description: normalizeName(m.description || "Your saved collection of pages."),
    archived: Boolean(m.archived),
    urls: Array.isArray(m.urls) ? m.urls.slice(0, 15).filter(u => u && safeHttpUrl(u.url)).map(u => ({ label: normalizeName(u.label), url: safeHttpUrl(u.url) })) : []
  }));
  return { places, missions };
}
function cryptoId() { return "e-" + Date.now().toString(36) + "-" + Math.floor(Math.random() * 100000).toString(36); }
function loadData() {
  const value = safeRead(STORAGE_KEY);
  if (!value) return seedClone();
  try { return cleanData(JSON.parse(value)); } catch { return seedClone(); }
}
const state = loadData();
let editMode = "place", matches = [], activeIndex = -1, toastTimer;
const save = () => safeWrite(STORAGE_KEY, JSON.stringify(state));

function external(url, text, cls) {
  const a = make("a", cls, text);
  a.href = safeHttpUrl(url) || "https://duckduckgo.com";
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}
function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3500);
}
function navigate(view, setHash = true) {
  if (!panels.includes(view)) view = "home";
  document.querySelectorAll("[data-panel]").forEach(el => {
    el.hidden = el.dataset.panel !== view;
  });
  document.querySelectorAll("[data-view]").forEach(button => {
    const current = button.dataset.view === view;
    button.classList.toggle("is-current", current);
    if (current) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  if (setHash && location.hash !== "#" + view) history.replaceState(null, "", "#" + view);
  window.scrollTo({ top: 0, behavior: "instant" });
  dismissSuggestions();
}
function glyphFor(name) {
  return normalizeName(name).slice(0, 1).toUpperCase() || "✳";
}
function makePlaceCard(place, index) {
  const card = make("article", "place-card");
  const top = make("div", "place-top");
  top.append(make("div", "place-glyph", place.glyph || glyphFor(place.name)),
    make("span", "place-number", String(index + 1).padStart(2, "0")));
  const bottom = make("div");
  bottom.append(make("div", "place-name", place.name), make("div", "place-host", hostLabel(place.url)));
  card.append(top, bottom, make("span", "place-arrow", "↗"));
  const link = external(place.url, "Open " + place.name, "place-open");
  card.append(link);
  return card;
}
function makeMissionCard(mission, compact = false) {
  const card = make("article", "mission-card");
  const top = make("div", "mission-card-head");
  top.append(make("span", "", mission.archived ? "ON THE SHELF" : "IN PROGRESS"), make("span", "mission-circle", "✳"));
  card.append(top, make("h3", "", mission.name), make("p", "", mission.description));
  const links = make("div", "mission-urls");
  mission.urls.forEach(link => links.append(external(link.url, link.label || hostLabel(link.url))));
  if (links.childElementCount) card.append(links);
  const footer = make("div", "mission-card-footer");
  footer.append(make("span", "", mission.urls.length + (mission.urls.length === 1 ? " PLACE" : " PLACES")));
  const action = make("button", "mission-action", mission.archived ? "Restore ↗" : "Archive ↗");
  action.type = "button";
  action.setAttribute("aria-label", (mission.archived ? "Restore " : "Archive ") + mission.name);
  action.addEventListener("click", () => {
    mission.archived = !mission.archived;
    save(); render();
    showToast(mission.archived ? "Mission archived. You can restore it anytime." : "Mission restored.");
  });
  footer.append(action);
  if (compact) {
    action.textContent = "View all ↗";
    action.setAttribute("aria-label", "View all missions");
    action.onclick = null;
    const replacement = action.cloneNode(true);
    replacement.addEventListener("click", () => navigate("missions"));
    footer.replaceChild(replacement, action);
  }
  card.append(footer);
  return card;
}
function renderPlaces() {
  const grid = $("placeGrid");
  grid.replaceChildren();
  const places = state.places.slice(0, 8);
  if (!places.length) grid.append(make("p", "", "Your shelf is empty. Add a place to get started."));
  places.forEach((place, i) => grid.append(makePlaceCard(place, i)));
}
function renderMissions() {
  const active = state.missions.filter(m => !m.archived);
  const archived = state.missions.filter(m => m.archived);
  const full = $("missionGrid"), home = $("homeMissionGrid"), archive = $("archivedGrid");
  full.replaceChildren(); home.replaceChildren(); archive.replaceChildren();
  active.forEach(m => full.append(makeMissionCard(m)));
  active.slice(0, 3).forEach(m => home.append(makeMissionCard(m, true)));
  if (!active.length) {
    full.append(make("p", "", "Nothing active right now. Create a mission to start."));
    home.append(make("p", "", "All clear. Make a mission whenever inspiration strikes."));
  }
  archived.forEach(m => {
    const row = make("div", "archive-row");
    const label = make("strong", "", m.name);
    const count = make("span", "", m.urls.length + " saved places");
    const button = make("button", "", "Restore");
    button.type = "button";
    button.addEventListener("click", () => { m.archived = false; save(); render(); showToast("Mission restored."); });
    row.append(label, count, button); archive.append(row);
  });
  if (!archived.length) archive.append(make("p", "", "Your archived missions will appear here."));
  $("missionCount").textContent = active.length + " ACTIVE";
}
function renderLibrary() {
  const wrap = $("libraryList");
  wrap.replaceChildren();
  state.places.forEach(place => {
    const row = make("div", "library-row");
    row.append(make("div", "library-monogram", place.glyph || glyphFor(place.name)));
    const copy = make("div", "library-text");
    copy.append(make("strong", "", place.name), make("span", "", place.url));
    const actions = make("div", "library-actions");
    actions.append(external(place.url, "Open ↗"));
    const remove = make("button", "", "Remove");
    remove.type = "button";
    remove.setAttribute("aria-label", "Remove bookmark " + place.name);
    remove.addEventListener("click", () => {
      state.places = state.places.filter(p => p.id !== place.id);
      save(); render(); showToast("Place removed from this demo.");
    });
    actions.append(remove); row.append(copy, actions); wrap.append(row);
  });
  if (!state.places.length) wrap.append(make("p", "", "No saved places yet."));
  $("bookmarkCount").textContent = state.places.length + " SAVED";
}
function render() { renderPlaces(); renderMissions(); renderLibrary(); }
function openEditor(mode) {
  editMode = mode;
  $("dialogTitle").textContent = mode === "mission" ? "Start a mission." : "Save a place.";
  $("urlField").hidden = mode === "mission";
  $("editUrl").required = mode === "place";
  $("editName").value = "";
  $("editUrl").value = "";
  $("editUrl").setCustomValidity("");
  $("editDialog").showModal();
  $("editName").focus();
}
function closeEditor() { $("editDialog").close(); }
function submitEditor(e) {
  e.preventDefault();
  const name = normalizeName($("editName").value);
  if (!name) return;
  if (editMode === "mission") {
    state.missions.unshift({ id: cryptoId(), name, description: "A new collection of things worth keeping close.", archived: false, urls: [] });
    closeEditor(); save(); render(); navigate("missions"); showToast("New mission added.");
    return;
  }
  const destination = resolveDestination($("editUrl").value);
  if (!destination || destination.kind !== "url") {
    $("editUrl").setCustomValidity("Enter a website address, such as example.com");
    $("editUrl").reportValidity(); return;
  }
  state.places.unshift({ id: cryptoId(), name, url: destination.url, glyph: glyphFor(name) });
  closeEditor(); save(); render(); navigate("library"); showToast("Place saved to your library.");
}
function dismissSuggestions() {
  $("commandResults").hidden = true;
  $("commandResults").replaceChildren();
  matches = []; activeIndex = -1;
}
function addMatch(list, kind, label, fn, meta = "") {
  if (list.length < 7) list.push({ kind, label, fn, meta });
}
function findMatches(query) {
  const text = query.trim();
  if (!text) return [];
  const q = text.toLowerCase(), found = [];
  state.places.filter(p => (p.name + " " + p.url).toLowerCase().includes(q)).slice(0, 3).forEach(p =>
    addMatch(found, "PLACE", p.name, () => window.open(p.url, "_blank", "noopener,noreferrer"), hostLabel(p.url)));
  state.missions.filter(m => m.name.toLowerCase().includes(q)).slice(0, 2).forEach(m =>
    addMatch(found, "MISSION", m.name, () => navigate("missions"), m.archived ? "archived" : "active"));
  for (const [label, view] of [["Home", "home"], ["Missions", "missions"], ["Library", "library"], ["Downloads", "downloads"]]) {
    if (label.toLowerCase().includes(q)) addMatch(found, "VIEW", label, () => navigate(view));
  }
  const destination = resolveDestination(text);
  if (destination) addMatch(found, destination.kind === "url" ? "WEBSITE" : "SEARCH", destination.kind === "url" ? destination.url : "Search the web for “" + text + "”", () => window.open(destination.url, "_blank", "noopener,noreferrer"), "↗");
  return found;
}
function showSuggestions(query) {
  const wrap = $("commandResults");
  matches = findMatches(query); activeIndex = -1;
  wrap.replaceChildren();
  if (!matches.length) { wrap.hidden = true; return; }
  matches.forEach((match, i) => {
    const button = make("button", "command-row");
    button.type = "button";
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", "false");
    button.append(make("span", "command-kind", match.kind), make("span", "command-label", match.label), make("span", "command-meta", match.meta));
    button.addEventListener("click", () => { match.fn(); $("commandInput").value = ""; dismissSuggestions(); });
    wrap.append(button);
  });
  wrap.hidden = false;
}
function highlightMatch(index) {
  const count = matches.length;
  if (!count) return;
  activeIndex = (index + count) % count;
  [...$("commandResults").children].forEach((node, i) => {
    node.classList.toggle("is-selected", i === activeIndex);
    node.setAttribute("aria-selected", String(i === activeIndex));
  });
}
function onCommandSubmit(event) {
  event.preventDefault();
  const value = $("commandInput").value;
  if (activeIndex >= 0 && matches[activeIndex]) matches[activeIndex].fn();
  else {
    const destination = resolveDestination(value);
    if (destination) window.open(destination.url, "_blank", "noopener,noreferrer");
    else if (value.trim()) showToast("Only standard website addresses are supported.");
  }
  $("commandInput").value = ""; dismissSuggestions();
}
function installTheme() {
  const selected = safeRead(THEME_KEY) === "basalt" ? "basalt" : "marble";
  document.documentElement.dataset.theme = selected;
  updateThemeButton();
}
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === "basalt";
  $("themeButton").setAttribute("aria-label", dark ? "Switch to marble theme" : "Switch to basalt theme");
  $("themeButton").title = dark ? "Switch to marble theme" : "Switch to basalt theme";
}
function boot() {
  installTheme(); render();
  const initial = location.hash.slice(1);
  navigate(panels.includes(initial) ? initial : "home", false);
  window.addEventListener("hashchange", () => navigate(location.hash.slice(1), false));
  document.querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.view)));
  document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.go)));
  document.querySelectorAll("[data-focus-command]").forEach(button => button.addEventListener("click", () => $("commandInput").focus()));
  $("addPlaceButton").addEventListener("click", () => openEditor("place"));
  $("newBookmarkButton").addEventListener("click", () => openEditor("place"));
  $("newMissionButton").addEventListener("click", () => openEditor("mission"));
  $("editForm").addEventListener("submit", submitEditor);
  $("dialogClose").addEventListener("click", closeEditor);
  $("dialogCancel").addEventListener("click", closeEditor);
  $("editUrl").addEventListener("input", () => $("editUrl").setCustomValidity(""));
  $("commandInput").addEventListener("input", event => showSuggestions(event.target.value));
  $("commandForm").addEventListener("submit", onCommandSubmit);
  $("commandInput").addEventListener("keydown", event => {
    if (event.key === "Escape") { dismissSuggestions(); $("commandInput").blur(); }
    if (event.key === "ArrowDown" && matches.length) { event.preventDefault(); highlightMatch(activeIndex + 1); }
    if (event.key === "ArrowUp" && matches.length) { event.preventDefault(); highlightMatch(activeIndex - 1); }
  });
  document.addEventListener("keydown", event => {
    const typing = ["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName) || document.activeElement?.isContentEditable;
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault(); $("commandInput").focus(); $("commandInput").select();
    } else if (event.key === "/" && !typing && !$("editDialog").open && !$("aboutDialog").open) {
      event.preventDefault(); $("commandInput").focus();
    } else if (event.key === "Escape") dismissSuggestions();
  });
  document.addEventListener("pointerdown", event => {
    if (!$("commandResults").contains(event.target) && !$("commandForm").contains(event.target)) dismissSuggestions();
  });
  $("themeButton").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "basalt" ? "marble" : "basalt";
    document.documentElement.dataset.theme = next; safeWrite(THEME_KEY, next); updateThemeButton(); showToast(next === "marble" ? "Marble theme restored." : "Basalt theme enabled.");
  });
  $("aboutButton").addEventListener("click", () => $("aboutDialog").showModal());
  $("aboutClose").addEventListener("click", () => $("aboutDialog").close());
  $("aboutDone").addEventListener("click", () => $("aboutDialog").close());
  for (const id of ["editDialog", "aboutDialog"]) {
    $(id).addEventListener("click", event => { if (event.target === $(id)) $(id).close(); });
  }
}
boot();
