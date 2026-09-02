/**
 * Captures marketing screenshots from the product prototype.
 *
 *   node scripts/capture/capture.mjs            # all shots, both locales
 *   node scripts/capture/capture.mjs branding   # one shot by name
 *
 * Requires the prototype at prototype/pengui-prototype.html (gitignored — it is
 * a local copy of the product, and must never land in public/, which is served
 * publicly). Playwright is resolved from the npx cache; see README.md here.
 *
 * Every shot goes through the same pipeline: dark theme -> identity scrub ->
 * optional English dictionary -> navigate -> settle -> screenshot. The scrub is
 * not optional and runs before the shot, because the prototype is seeded with
 * the real team's email addresses.
 */
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";
import { existsSync, mkdirSync } from "node:fs";
import { createRequire } from "node:module";

import { ACCOUNT, EMAILS, NAMES, ORG, scrubIdentities } from "./personas.mjs";
import { ES_TO_EN, SPANISH_HINT, applyDictionary } from "./dictionary.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, "../..");

// Playwright is deliberately NOT a dependency of this repo — it pulls ~300MB of
// browsers that the site itself never needs. Resolve it from the project if
// someone has installed it, otherwise from PLAYWRIGHT_DIR (an existing
// Playwright install, e.g. an npx cache). See README.md in this folder.
async function loadChromium() {
  const require = createRequire(import.meta.url);
  try {
    return (await import("playwright")).chromium;
  } catch {
    /* fall through to PLAYWRIGHT_DIR */
  }
  const dir = process.env.PLAYWRIGHT_DIR;
  if (!dir) {
    console.error(
      "playwright not found. Either `npm i -D playwright`, or set PLAYWRIGHT_DIR\n" +
        "to a folder whose node_modules already contains it.",
    );
    process.exit(1);
  }
  const entry = resolve(dir, "node_modules/playwright/index.js");
  if (!existsSync(entry)) {
    console.error(`PLAYWRIGHT_DIR is set but ${entry} does not exist.`);
    process.exit(1);
  }
  void require;
  // playwright's entry is CommonJS, so the namespace object nests it on default.
  const mod = await import(pathToFileURL(entry).href);
  return mod.chromium ?? mod.default?.chromium;
}

const chromium = await loadChromium();
const PROTOTYPE = pathToFileURL(resolve(REPO, "prototype/pengui-prototype.html")).href;
const OUT = resolve(REPO, ".captures");

// Captured at 2x for crisp rendering on the retina displays this is viewed on;
// the encode step downsizes to the width each slot actually needs.
const VIEWPORT = { width: 1600, height: 1000 };
const SCALE = 2;

const SHOTS = [
  {
    name: "branding",
    page: "admin",
    tab: "admin-personalizacion",
    // Fills the white-label placeholder: "the same console, dressed in a
    // client's logo, colors and domain".
    clip: { x: 260, y: 0, width: 1340, height: 1000 },
  },
  {
    name: "permissions",
    page: "admin",
    tab: "admin-usuarios",
    // Fills the trust placeholder: "every role, every action, every agent".
    clip: { x: 260, y: 0, width: 1340, height: 1000 },
  },
];

async function capture(browser, shot, locale) {
  const context = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: SCALE });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.goto(PROTOTYPE, { waitUntil: "load", timeout: 60000 });
  await page.waitForTimeout(1200);

  await page.evaluate(() => window.setAppearance("dark"));

  await page.evaluate(
    ({ shot }) => {
      window.goTo(shot.page);
      if (shot.tab) document.querySelector(`[data-tab="${shot.tab}"]`)?.click();
    },
    { shot },
  );
  await page.waitForTimeout(700);

  // Scrub first, translate second: the dictionary must not re-introduce a real
  // name, and the scrub's patterns are written against the Spanish source.
  await page.evaluate(scrubIdentities, {
    emails: EMAILS,
    names: NAMES,
    org: ORG,
    initials: ACCOUNT.initials,
  });
  if (locale === "en") await page.evaluate(applyDictionary, ES_TO_EN);
  await page.waitForTimeout(250);

  // Nothing may ship with a real address in it. Fail loudly rather than
  // silently publishing one.
  const leaked = await page.evaluate(() => {
    const t = document.body.innerText;
    const hits = t.match(/[a-z0-9._%+-]+@clear-tech\.com/gi) || [];
    if (/clear-te…|Clear Tech/i.test(t)) hits.push("Clear Tech branding");
    return [...new Set(hits)];
  });
  if (leaked.length) {
    throw new Error(`${shot.name}/${locale}: real identity survived the scrub -> ${leaked.join(", ")}`);
  }

  // A gap in the dictionary is easy to miss by eye, so report any string inside
  // the captured region that still looks Spanish. A warning, not a failure:
  // some of it is legitimately untranslatable (people's names, "Penguis").
  let untranslated = [];
  if (locale === "en") {
    untranslated = await page.evaluate(
      ({ hint, clip }) => {
        const re = new RegExp(hint.source, hint.flags);
        const out = new Set();
        const active = document.querySelector(".page.active");
        if (!active) return [];
        const walker = document.createTreeWalker(active, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
          const node = walker.currentNode;
          const text = (node.nodeValue || "").trim();
          if (!text || !re.test(text)) continue;
          const box = node.parentElement?.getBoundingClientRect();
          if (!box || box.width === 0) continue;
          // Only what the clip actually photographs.
          if (box.right < clip.x || box.left > clip.x + clip.width) continue;
          if (box.bottom < clip.y || box.top > clip.y + clip.height) continue;
          out.add(text.slice(0, 70));
        }
        return [...out];
      },
      { hint: { source: SPANISH_HINT.source, flags: SPANISH_HINT.flags }, clip: shot.clip },
    );
  }

  const file = `${OUT}/${shot.name}-${locale}.png`;
  await page.screenshot({ path: file, clip: shot.clip });
  await context.close();
  return { file, errors, untranslated };
}

const only = process.argv[2];
const shots = only ? SHOTS.filter((s) => s.name === only) : SHOTS;
if (!shots.length) {
  console.error(`No shot named "${only}". Known: ${SHOTS.map((s) => s.name).join(", ")}`);
  process.exit(1);
}

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ args: ["--no-sandbox"] });
try {
  for (const shot of shots) {
    for (const locale of ["en", "es"]) {
      const { file, errors, untranslated } = await capture(browser, shot, locale);
      console.log(`${shot.name}/${locale} -> ${file}${errors.length ? `  (pageerrors: ${errors.length})` : ""}`);
      for (const s of untranslated) console.log(`    still Spanish: ${JSON.stringify(s)}`);
    }
  }
} finally {
  await browser.close();
}
