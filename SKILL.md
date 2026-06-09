---
name: AWMv1 Design System
description: >
  Editorial-technical design system for personal web apps, a personal site, and
  long-form writing. Light mode only. Sharp corners, hairline rules over shadows,
  a single confident blue accent, and a three-voice type system (Newsreader serif
  for editorial, Hanken Grotesk for UI, JetBrains Mono for technical detail).
  Use whenever building UI, marketing, or prose surfaces in the AWMv1 aesthetic.
---

# AWMv1 Design System

## What this is
A personal, from-scratch design system. The throughline is **editorial-technical**:
reads like a well-set magazine, behaves like a precise tool.

## When to use it
Any web app / SaaS tool, personal site / portfolio, or writing/blog surface that
should feel like AWMv1. Light mode only.

## How to use it

1. **Link the tokens, then the components**, in this order:
   ```html
   <link rel="stylesheet" href="styles.css">            <!-- tokens: colors, type, spacing, elevation, motion, fonts -->
   <link rel="stylesheet" href="components/components.css"> <!-- .awm-* component classes -->
   ```
   `styles.css` only `@import`s the files in `tokens/`. Fonts load from Google Fonts
   inside `tokens/fonts.css` — swap that one file to change typefaces.

2. **Always style from semantic token aliases**, never raw ramp values:
   `--text-body`, `--text-muted`, `--surface-card`, `--surface-page`, `--border-default`,
   `--accent`, `--accent-hover`, `--accent-text`, `--success/-tint`, `--danger/-tint`, etc.
   The raw `--neutral-*` / `--blue-*` ramps exist only to define those aliases.

3. **Use the component classes** (`components/components.css`):
   - Actions: `.awm-btn` + `--primary | --secondary | --ink | --ghost | --danger`,
     sizes `--sm | --lg | --block`, `.awm-icon-btn`; `.awm-link[ --muted]`
   - Forms: `.awm-field`, `.awm-label` (`.awm-req`), `.awm-hint`, `.awm-error-text`,
     `.awm-input`, `.awm-textarea`, `.awm-select`, `.awm-input-group`/`.awm-affix`,
     `.awm-check`, `.awm-check--radio`, `.awm-switch` (use `.is-error` for invalid)
   - Surfaces: `.awm-card` (`--flush | --hover`) with `__eyebrow / __title / __body`
     (`__title--serif` for editorial)
   - Badges & tags: `.awm-badge` (`--accent | --success | --warning | --danger | --ink`),
     `.awm-tag` (`--accent`, `.awm-tag__x` to remove)
   - Navigation: `.awm-tabs` underline tabs, `.awm-segmented` segmented control
   - Feedback: `.awm-modal-scrim` + `.awm-modal`, `.awm-toast`

## Non-negotiable rules
- **Type carries the brand.** Hierarchy = family + size + weight, not decoration.
- **Borders over shadows.** Default separator is a 1px hairline rule. Shadows only on
  things that truly float (modal, popover, toast).
- **Square is default.** Radii max out at 4px; pill reserved for tags/avatars.
- **One accent.** Blue marks the single most important action per view.
- **Sentence case** everywhere; UPPERCASE only for mono eyebrows/metadata with wide tracking.
- **No gradients, no emoji, no exclamation marks.** Ink is `--neutral-900`, never pure black.

## Voice
Plain, precise, quietly editorial. Address the reader as "you." Verbs on buttons
("Save changes", "Publish"), nouns on labels. Numbers and metadata in mono.

## Files
- `README.md` — full rationale + foundation decisions
- `styles.css`, `tokens/*` — design tokens
- `components/components.css` — the component library (link this)
- `components/*.html` — live specimens per group (actions, forms, surfaces, navigation, feedback)
- `guidelines/*.html` — foundation specimens (type, color, spacing, elevation, wordmark)
- `ui_kits/app.html` — SaaS app surface reference
- `ui_kits/site.html` — editorial personal-site / writing reference
