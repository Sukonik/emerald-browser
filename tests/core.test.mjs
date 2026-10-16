import test from "node:test";
import assert from "node:assert/strict";
import { safeHttpUrl, resolveDestination, hostLabel, normalizeName } from "../js/core.mjs";

test("only standard HTTP(S) addresses are permitted for direct navigation", () => {
  assert.equal(safeHttpUrl("https://example.com"), "https://example.com/");
  assert.equal(safeHttpUrl("http://example.com/path"), "http://example.com/path");
  assert.equal(safeHttpUrl("javascript:alert(1)"), null);
  assert.equal(safeHttpUrl("file:///etc/passwd"), null);
  assert.equal(safeHttpUrl("https://user:pass@example.com"), null);
  assert.equal(safeHttpUrl("https://example.com hello"), null);
});

test("domain-like input navigates; natural language becomes search", () => {
  assert.deepEqual(resolveDestination("example.com"), { kind: "url", url: "https://example.com/" });
  assert.deepEqual(resolveDestination("https://www.wikipedia.org"), { kind: "url", url: "https://www.wikipedia.org/" });
  assert.deepEqual(resolveDestination("hello world"), { kind: "search", url: "https://duckduckgo.com/?q=hello%20world" });
  assert.equal(resolveDestination(""), null);
  assert.equal(resolveDestination("javascript:alert(1)"), null);
  assert.equal(resolveDestination("data:text/html,test"), null);
});

test("safe text and host display", () => {
  assert.equal(hostLabel("https://www.example.org/path"), "example.org");
  assert.equal(hostLabel("file:///abc"), "invalid address");
  assert.equal(normalizeName("   the   marble   edition   "), "the marble edition");
});
