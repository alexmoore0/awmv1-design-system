# AWMv1 Design System

AWMv1 is a small, framework-free design system for personal web apps, SaaS
tools, editorial pages, and writing surfaces. It ships CSS tokens, class-based
components, component specimens, UI kit examples, a no-build workbench, and
Storybook stories.

The visual direction is editorial-technical: sharp edges, quiet surfaces,
hairline rules, restrained color, and type doing most of the brand work.

## What You Get

- CSS token entry point: `styles.css`
- Token files for fonts, color, type, spacing, elevation, and motion
- Component classes under `components/components.css`
- HTML specimens for actions, forms, surfaces, navigation, and feedback
- UI kit examples for an app surface and editorial site
- Storybook stories for local documentation and visual review
- A `SKILL.md` file so the system can be reused as a Codex skill

## Quick Start

Link the global tokens first, then the component library:

```html
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="components/components.css">
```

Use the `.awm-*` classes in your markup:

```html
<button class="awm-btn awm-btn--primary">Save changes</button>
```

The system is plain CSS and HTML. No framework is required.

Fonts load from Google Fonts in `tokens/fonts.css`. For privacy-sensitive or
strict-CSP projects, replace that file with local `@font-face` rules while
keeping the same font-family token names.

## Install From GitHub

After this repo is available on GitHub, install it directly:

```bash
npm install github:<user>/awmv1-design-system
```

Then import the published CSS entry points:

```js
import 'awmv1-design-system';
import 'awmv1-design-system/components';
```

The package export map includes only the runtime CSS:

- `awmv1-design-system` -> `styles.css`
- `awmv1-design-system/components` -> `components/components.css`
- `awmv1-design-system/tokens` -> `styles.css`
- `awmv1-design-system/tokens/<file>.css` -> individual token files

Reference materials such as specimens, UI kits, Storybook stories, and the
workbench remain in the repository.

## Explore Locally

Install dependencies for Storybook:

```bash
npm install
```

Run Storybook:

```bash
npm run storybook
```

Build the static Storybook site:

```bash
npm run build-storybook
```

Run the release check:

```bash
npm run check
```

You can also open `workbench/index.html`, `components/*.html`,
`guidelines/*.html`, or `ui_kits/*.html` directly in a browser. These files are
useful for quick visual checks without running a dev server.

## Project Map

| Path | Purpose |
| --- | --- |
| `styles.css` | Global CSS entry point. Keep it import-only. |
| `tokens/` | Design foundations: fonts, colors, typography, spacing, elevation, motion. |
| `components/components.css` | Framework-free `.awm-*` component classes. |
| `components/*.html` | Component specimens grouped by category. |
| `guidelines/*.html` | Foundation specimens for color, type, spacing, radii, elevation, and brand. |
| `workbench/` | No-build component explorer and markup generator. |
| `stories/` | Storybook stories that mirror production CSS. |
| `ui_kits/` | Full-screen examples showing how the system should compose. |
| `SKILL.md` | Codex skill instructions for reusing the system. |

## Component Groups

| Group | Main classes | Specimen |
| --- | --- | --- |
| Actions | `.awm-btn`, `.awm-icon-btn`, `.awm-link` | `components/actions.html` |
| Forms | `.awm-field`, `.awm-input`, `.awm-textarea`, `.awm-select`, `.awm-check`, `.awm-switch` | `components/forms.html` |
| Surfaces | `.awm-card`, `.awm-badge`, `.awm-tag` | `components/surfaces.html` |
| Navigation | `.awm-tabs`, `.awm-segmented` | `components/navigation.html` |
| Feedback | `.awm-modal-scrim`, `.awm-modal`, `.awm-toast` | `components/feedback.html` |

## Design Principles

1. Type carries the brand. Use font family, scale, weight, and rhythm before decoration.
2. Borders beat shadows. A 1px rule is the default separator; shadows are rare.
3. Sharp is the default. Most corners should be 0-2px, with 4px reserved for larger surfaces.
4. Accent is scarce. AWM Blue should mark the most important action or state on a view.
5. Keep the system quiet. No gradients, no clutter, no hype.

## Working Rules

- Use semantic token aliases in components and product code.
- Avoid raw color, spacing, radius, shadow, and motion values when a token exists.
- Keep `styles.css` as the single global entry point for token imports.
- Update Storybook stories and workbench definitions when component behavior changes.
- Keep component classes framework-free and class-based.
- Preserve the `awm-` prefix for public component APIs.

## License

MIT
