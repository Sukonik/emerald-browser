/** Emerald Marble Edition: small pure helpers, safe to run without a DOM. */

/** Accept only website URLs for external navigation; arbitrary protocols never run. */
export function safeHttpUrl(input) {
  if (typeof input !== "string") return null;
  const value = input.trim();
  if (!value || /[\s\u0000-\u001f]/.test(value)) return null;
  if (!/^https?:\/\//i.test(value)) return null;
  try {
    const parsed = new URL(value);
    if (!["https:", "http:"].includes(parsed.protocol) || !parsed.hostname || parsed.username || parsed.password) return null;
    return parsed.href;
  } catch { return null; }
}

/** Treat unambiguous URLs as navigation; every other string as a web search. */
export function resolveDestination(input) {
  if (typeof input !== "string") return null;
  const raw = input.trim();
  if (!raw) return null;
  if (/^https?:\/\//i.test(raw)) {
    const url = safeHttpUrl(raw);
    return url ? { kind: "url", url } : null;
  }
  // Reject disguised schemes (javascript:, data:, file:, ftp:, etc).
  if (/^[a-z][\w+.-]*:/i.test(raw)) return null;
  const looksLikeDomain = !/\s/.test(raw) && /^(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z]{2,}(?::\d{1,5})?(?:[/?#][^\s]*)?$/i.test(raw);
  if (looksLikeDomain) {
    const url = safeHttpUrl("https://" + raw);
    if (url) return { kind: "url", url };
  }
  return { kind: "search", url: "https://duckduckgo.com/?q=" + encodeURIComponent(raw) };
}
export function hostLabel(url) {
  const safe = safeHttpUrl(url);
  if (!safe) return "invalid address";
  return new URL(safe).hostname.replace(/^www\./, "");
}
export function normalizeName(input) {
  return String(input ?? "").trim().replace(/\s+/g, " ").slice(0,80);
}
