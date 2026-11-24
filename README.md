# Endrias Film College — HTML / CSS / JS edition

A 1:1 conversion of the original React + Vite + TypeScript site (`suraman21/Endrias-film-collage`)
into **plain static HTML, CSS and JavaScript**. No build step, no bundler, no npm install, no
framework — open any page directly or serve the folder with any static server.

## Pages (same routes, now real files)

| Original React route | File |
| --- | --- |
| `/` | `index.html` |
| `/programs` | `programs.html` |
| `/about` | `about.html` |
| `/faculty` | `faculty.html` |
| `/showcase` (Endi Award) | `showcase.html` |
| `/careers` | `careers.html` |
| `/admissions` | `admissions.html` |

Cross-page links that used to be `to="/programs#level-4-diploma"` or
`to="/admissions?program=…&shift=…"` now work as ordinary URLs
(`programs.html#level-4-diploma`, `admissions.html?program=…&shift=…`) and the
admissions page still pre-selects the program/shift from the query string.

## What was preserved

- **Bilingual EN / አማርኛ toggle** — every string is rendered from paired
  `data-en` / `data-am` attributes (English → Amharic → English), same as
  `LanguageContext`. The choice is stored in `localStorage` under `efc_lang`
  (the original key), so the selection survives navigation and reloads.
- **All content** — 6 program tiers, 15 course modules, 12 Endi Award categories,
  4 graduation records, 5 masterclass guests, 6 faculty members, 5 job listings,
  5 timeline milestones, 5 daily shifts, campus/contact details — ported verbatim
  from `src/data/collegeData.ts` (original React repo).
- **All interactions** — nav active state, sticky-header scroll state, mobile
  slide-over drawer (Esc / overlay / close button, body scroll lock), program-tier
  filters, course search + discipline filters, interactive study planner,
  faculty masterclass filters, job-board filters, alumni/employer dispatch
  generator with copy + mailto, admission pre-registration slip with copy/print/mail.
- **All animation / design** — framer-motion entrance + stagger reveals became a
  small IntersectionObserver adding `.in`, hover lifts/tilts are pure CSS, and the
  Tailwind theme tokens (`navy #054677`, `midnight #031525`, `orange #FF9000`,
  `ivory #FAF7F2`, Plus Jakarta Sans / Instrument Serif / Noto Sans Ethiopic /
  JetBrains Mono) are CSS custom properties in `:root`.
- **Icons** — `lucide-react` is replaced by an inline-SVG sprite map in
  `assets/js/icons.js`; markup declares `<i data-icon="camera"></i>` and the
  script hydrates it, so there is no icon-font or CDN dependency.

## Structure

```
index.html, programs.html, about.html, faculty.html,
showcase.html, careers.html, admissions.html   ← generated output, commit these
assets/css/style.css      design system + layout + components + responsive rules
assets/js/icons.js        lucide-style inline SVG set + hydration
assets/js/data.js         all bilingual site data (ex-collegeData.ts)
assets/js/main.js         language state, header/drawer, active nav, reveal observer
assets/js/pages/*.js      per-page renderers for the data-driven lists
brand/, images/           logo-seal.png, logo-mark.png, hero-studio.jpg, editing-lab.jpg, endi-award-premiere.jpg
_build/partials/*.html    head / header / footer partials (single source of truth)
_build/pages/*.html       per-page <main> bodies
build.py                  concatenates partials + bodies into the 7 root HTML files
```

`build.py` is a convenience only — the site itself never needs it. If you edit a
partial or a body, run `python3 build.py` to regenerate the root pages (it
prints one line per file and flags unresolved `{{PLACEHOLDER}}`s).

## Running it

Any of these work:

```bash
# simplest
open index.html                 # or double-click it

# local server (recommended, matches production behaviour)
python3 -m http.server 8080     # then visit http://localhost:8080
npx serve .
```

Deploy by uploading the folder as-is to Netlify / Vercel / GitHub Pages / cPanel —
there is no server-side code.

`vercel.json` in the repo root turns the deployment into a plain static site: no
framework, no install, no build, serve the repo root. `cleanUrls` also keeps the
original React URLs working (`/programs`, `/about`, `/faculty`, `/showcase`,
`/careers`, `/admissions`) instead of exposing `*.html`, so old links and search
results do not break.

## Notes

- Fonts load from Google Fonts (`<link>` in the head). Offline they fall back to
  the system sans/serif/monospace stacks; layout is unaffected.
- `localStorage` may be blocked in some sandboxed previews — the language then
  defaults to English for that page view instead of throwing.
- Print styles are kept from the original: printing while a pre-registration slip
  is open prints only the slip.
