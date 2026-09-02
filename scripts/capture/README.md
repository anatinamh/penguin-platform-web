# Marketing screenshots

Captures product screenshots for the site from the real product prototype, so
they can be regenerated whenever the product changes instead of being
hand-cropped once and slowly going stale.

## Running it

Needs two things that deliberately live outside this repo:

1. **The prototype** at `prototype/pengui-prototype.html` (gitignored). It is a
   local copy of the product — it must never be put in `public/`, which Next
   serves at the site root.
2. **Playwright.** Not a dependency of this repo, because it pulls ~300MB of
   browsers the site itself never needs. Either `npm i -D playwright`, or point
   `PLAYWRIGHT_DIR` at a folder whose `node_modules` already has it.

```bash
export PLAYWRIGHT_DIR=".../npm-cache/_npx/<hash>"   # if not installed locally
node scripts/capture/capture.mjs                    # every shot, both locales
node scripts/capture/capture.mjs branding           # just one
```

PNGs land in `.captures/` (gitignored). Encode the ones you want to ship:

```bash
ffmpeg -y -i .captures/branding-en.png \
  -vf "scale=1536:-2:flags=lanczos" -quality 82 \
  public/screenshots/branding-en.webp
```

1536px is 2× the 768px (`max-w-3xl`) frame these render in.

## What the pipeline guarantees

**Identities are scrubbed before the shot, never after.** The prototype is
seeded with the real Clear Tech team's names and addresses; `personas.mjs`
swaps every one for an Acme demo persona while the page is still in the
browser. `capture.mjs` then re-reads the DOM and *throws* if anything matching
`@clear-tech.com` survived — a published screenshot with a colleague's address
in it already happened once, and this is what stops it happening again.

**English is generated, Spanish is native.** The prototype's UI is Spanish only
(its language selector is a mockup — it swaps a label and a checkmark and
nothing else). Spanish shots are captured as-is; English shots get
`dictionary.mjs` applied to the DOM first. After translating, the script lists
any string still inside the capture area that looks Spanish, so gaps in the
dictionary surface immediately instead of shipping.

Two gotchas the dictionary already accounts for, worth knowing if you add
screens: strings split across text nodes by an inline `<em>` or `<a>` need an
entry per half, and table headers are title-case in the DOM with the uppercase
applied by CSS.

## Adding a screen

Add an entry to `SHOTS` in `capture.mjs` with the prototype `page` (see
`goTo()` — ids come from `id="page-…"` in the prototype) and optional `tab`
(the `data-tab` attribute). Run it, read the "still Spanish" warnings, and fill
in `dictionary.mjs` until they stop.
