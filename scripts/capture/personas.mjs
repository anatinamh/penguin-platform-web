// The prototype is seeded with the real Clear Tech team's names and email
// addresses. Marketing screenshots are published, so every identity is swapped
// for a demo persona BEFORE the page is ever photographed — never patched
// afterwards, which is how a real address reached production once already.
//
// Acme matches the fictional company the white-label mockup already uses
// (acme-logo.svg / app.acmecorp.ai), so the site stays internally consistent.

export const ACCOUNT = {
  name: "Alex Rivera",
  email: "alex.rivera@acme.com",
  initials: "AR",
};

export const ORG = "Acme";

/** Real address (lowercased) -> demo address. */
export const EMAILS = {
  "alexander.camilo@clear-tech.com": "morgan.ellis@acme.com",
  "ana.martinez@clear-tech.com": "sam.taylor@acme.com",
  "david.ramos@clear-tech.com": "jordan.reyes@acme.com",
  "juan.casiraghi@clear-tech.com": "casey.nolan@acme.com",
  "juan.cosentino@clear-tech.com": "riley.chen@acme.com",
  "juan.mari@clear-tech.com": "avery.park@acme.com",
  "victoria.bellanti@clear-tech.com": ACCOUNT.email,
  "dev@test.com": "devon.hale@acme.com",
};

export const NAMES = {
  "Victoria Bellanti": ACCOUNT.name,
  "Ana Martinez": "Sam Taylor",
  "Vicky": "Alex",
};

/**
 * Rewrites every text node in the page. Runs in the browser, so it must be
 * self-contained — no imports from this module inside the function body.
 */
export function scrubIdentities({ emails, names, org, initials }) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  for (const node of nodes) {
    let text = node.nodeValue;
    if (!text || !text.trim()) continue;
    const before = text;

    for (const [real, demo] of Object.entries(emails)) {
      // Case-insensitive, and also catch the truncated form the sidebar renders.
      const stem = real.split("@")[0];
      text = text.replace(new RegExp(real.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), demo);
      text = text.replace(
        new RegExp(stem.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "@clear-te\\u2026?", "gi"),
        demo.split("@")[0] + "@acme…",
      );
    }
    for (const [real, demo] of Object.entries(names)) {
      text = text.replace(new RegExp(real, "g"), demo);
    }
    text = text.replace(/Clear Tech/g, org);

    if (text !== before) node.nodeValue = text;
  }

  // Avatar initials are rendered as their own short text nodes; catch the
  // two-letter ones that survived the name swap.
  for (const el of document.querySelectorAll("*")) {
    if (el.children.length === 0) {
      const t = (el.textContent || "").trim();
      if (t === "VB" || t === "AM") el.textContent = initials;
    }
  }

  // Placeholders live in attributes, not text nodes.
  for (const el of document.querySelectorAll("input[placeholder], textarea[placeholder]")) {
    let ph = el.getAttribute("placeholder") || "";
    for (const [real, demo] of Object.entries(emails)) {
      ph = ph.replace(new RegExp(real, "gi"), demo);
    }
    el.setAttribute("placeholder", ph.replace(/Clear Tech/g, org));
  }
}
