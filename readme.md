# AWMv1 Design System

A personal design system for **web apps / SaaS tools, a personal site, and writing**.
Built from scratch (no prior brand). Light-mode only.

> Set this file's type to **Design System** in the Share menu so others in your org can view it.

---

## Quick start (use it in another project)

The system is framework-free CSS. Link the tokens, then the components:

```html
<link rel="stylesheet" href="styles.css">              <!-- tokens -->
<link rel="stylesheet" href="components/components.css"> <!-- .awm-* classes -->
```

Then write markup with the `.awm-*` classes (see the workbench or `components/*.html`).

### Use it via npm / GitHub

This repo is publishable. Once it's on GitHub you can pull it into any project:

```bash
# from a GitHub repo
npm install github:<your-user>/awmv1-design-system
```
```js
import 'awmv1-design-system';            // styles.css (tokens)
import 'awmv1-design-system/components'; // component classes
```

The `package.json` `exports` map ships only `styles.css`, `tokens/`, and
`components/components.css` — the workbench, UI kits, and Storybook stay in the repo
for reference but aren't part of the installed package.

### Put it on GitHub

```bash
git init
git add .
git commit -m "AWMv1 design system v1"
git branch -M main
git remote add origin git@github.com:<your-user>/awmv1-design-system.git
git push -u origin main
```

`.gitignore` already excludes `node_modules/`, `storybook-static/`, and `scraps/`.

---

## Two ways to explore + update components

**1. The Workbench** (`workbench/index.html`) — open it directly in a browser, no install.
Pick a component, flip its variants/sizes/states with live controls, and copy the
generated markup. Add a component by editing **`workbench/stories.js`** (one entry with
`knobs` + a `render(args)` function) — no build step.

**2. Storybook** (`npm run storybook`) — the full dev environment with controls, docs,
and a11y. Stories live in **`stories/*.stories.js`** and import the *real* `styles.css`
and `components.css`, so Storybook is a true mirror of production.

```bash
npm install
npm run storybook        # dev server on :6006
npm run build-storybook  # static build → storybook-static/
```

### How to update or add a component

1. Edit the rule in **`components/components.css`** (everything reads from token aliases,
   so a token change cascades everywhere).
2. Reflect the change in its **`stories/*.stories.js`** (add an `argType` for a new
   variant) and in **`workbench/stories.js`** so both explorers stay in sync.
3. To restyle globally, change a **token** in `tokens/*` — never hard-code values in
   component CSS or product code.

---

## The idea in one line

**Editorial-technical.** Read like a well-set magazine, behave like a precise tool.
Sharp corners, hairline rules instead of heavy shadows, a confident blue accent, and a
three-voice type system (serif for editorial, grotesque for UI, mono for technical detail).

## Design principles

1. **Type carries the brand.** Hierarchy comes from family + size + weight, not decoration.
2. **Borders over shadows.** A 1px hairline rule is the default separator. Shadows are rare
   and only for things that truly float (modals, popovers, toasts).
3. **Square is the default.** Corner radii top out at ~4px. Most things are 0–2px.
4. **One accent, used sparingly.** Blue marks the single most important action on a view.
5. **Restraint.** Generous-but-balanced whitespace, no gradients, no emoji, no clutter.

---

## VISUAL FOUNDATIONS

**Color.** Cool-neutral grey ramp (`--neutral-*`) on a faintly-warm paper white (`--paper`).
Ink is a near-black cool grey (`--neutral-900`), never pure `#000`. A single accent —
**AWM Blue** (`oklch(0.552 0.172 256)`) — plus restrained green/amber/red semantics that
share chroma so they read as one family. Use semantic aliases (`--text-body`,
`--surface-card`, `--accent`, `--border-default`) in product code, not raw ramp values.

**Type.** `Newsreader` (serif) for editorial display + long-form reading; `Hanken Grotesk`
(grotesque sans) for all UI, labels and app body; `JetBrains Mono` for eyebrows, metadata,
code, and technical labels — often uppercase with wide tracking (`--tracking-caps`).
Display serif is set tight (`--leading-tight`, `--tracking-tight`). Body is `--leading-normal`
to `--leading-relaxed`. Reading measure capped at `--measure` (66ch).

**Spacing.** 4px base grid. Balanced density — controls are 30/38/46px tall. Generous
section rhythm on marketing/editorial surfaces, tighter in app chrome.

**Corners & shape.** Sharp. `--radius-sm` (2px) on most controls/cards, `--radius-lg` (4px)
max, `--radius-pill` reserved for tags/avatars only.

**Borders.** The workhorse. `--rule` = 1px solid `--border-default`. Stronger 1.5–2px ink
borders (`--border-ink`) for emphasis/"stamped" treatments.

**Shadows.** Cool-tinted, tight, minimal (`--shadow-xs`→`--shadow-lg`). Most surfaces use a
border and no shadow. Focus is a 3px translucent-blue ring (`--shadow-focus`).

**Backgrounds.** Flat paper. No gradients. Optional hairline grid / rule motifs and mono
labels for structure. Imagery: neutral, true-to-life, used full-bleed or inside a hairline
frame — placeholders are striped grey with a mono caption of what belongs there.

**Motion.** Quick and purposeful (140–300ms), `--ease-out` / `--ease-standard`, no bounce.
Hover = subtle surface/border darkening or accent shift. Press = slight darken (no shrink).
Honors `prefers-reduced-motion`.

---

## CONTENT FUNDAMENTALS

- **Voice:** plain, precise, a little editorial. Short declarative sentences.
- **Person:** address the reader as **you**; the product/author is **I/we** sparingly.
- **Casing:** sentence case for everything — headings, buttons, labels. UPPERCASE only for
  mono eyebrows/metadata, always with wide tracking.
- **Tone:** confident and quiet. No hype, no exclamation marks, no emoji.
- **Microcopy:** verbs on buttons ("Save changes", "Publish", "Add tag"). Labels are nouns.
- **Numbers/metadata:** set in mono ("12 min read", "v1.4.0", "MAR 2026").

---

## Foundation decisions at a glance

| Concern   | Decision |
|-----------|----------|
| Accent    | AWM Blue `oklch(0.552 0.172 256)` |
| Ink       | `--neutral-900` (never pure black) |
| Paper     | `--paper` warm-neutral near-white |
| Serif     | Newsreader |
| Sans      | Hanken Grotesk |
| Mono      | JetBrains Mono |
| Radius    | 0–4px (sharp) |
| Separator | 1px hairline rule |
| Mode      | Light only |

*Font substitution note:* all three families are Google Fonts (loaded in `tokens/fonts.css`).
If you'd prefer different typefaces, swap that one file — everything else reads from variables.

---

## Index / manifest

- `styles.css` — root entry (link this). `@import`s everything in `tokens/`.
- `tokens/` — `fonts, colors, typography, spacing, elevation, motion`.
- `guidelines/` — foundation specimen cards (Type, Colors, Spacing, Brand).
- `components/` — `components.css` (the library) + live specimen HTML per group.
- `workbench/` — `index.html` live explorer + `stories.js` definitions (no build step).
- `stories/` — Storybook stories (`*.stories.js`) + `.storybook/` config.
- `ui_kits/` — full-screen product recreations (app surface, editorial site).
- `package.json` · `LICENSE` · `.gitignore` — npm/GitHub packaging.
- `SKILL.md` — makes this usable as a downloadable skill.

*(Components and UI kits are listed in detail below.)*

### Components (`components/components.css` + specimens)

| Group | Classes | Specimen |
|-------|---------|----------|
| Actions | `.awm-btn` (`--primary/--secondary/--ink/--ghost/--danger`, `--sm/--lg/--block`), `.awm-icon-btn`, `.awm-link` | `components/actions.html` |
| Forms | `.awm-field`, `.awm-input`, `.awm-textarea`, `.awm-select`, `.awm-input-group`, `.awm-check`, `.awm-check--radio`, `.awm-switch` | `components/forms.html` |
| Surfaces | `.awm-card` (`--flush/--hover`, `__eyebrow/__title/__body`), `.awm-badge`, `.awm-tag` | `components/surfaces.html` |
| Navigation | `.awm-tabs` (underline), `.awm-segmented` | `components/navigation.html` |
| Feedback | `.awm-modal-scrim`+`.awm-modal`, `.awm-toast` | `components/feedback.html` |

All component classes read from semantic token aliases — never hard-code colors in product code.

### UI kits (`ui_kits/`)

- `app.html` — SaaS app surface: sidebar nav, breadcrumb top bar, stat cards, tabs, data table with status badges.
- `site.html` — editorial personal site: serif hero, writing index, project cards, stamped footer.

These are the canonical "this is what good looks like" references. Build new screens by
composing the same tokens + component classes.
