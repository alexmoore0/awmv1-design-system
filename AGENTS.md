# AGENTS.md

Instructions for coding agents working in this repository.

## Repository Context

AWMv1 is a framework-free CSS design system. The public API is CSS files and
`.awm-*` classes, supported by HTML specimens, Storybook stories, UI kits, and a
Codex `SKILL.md`.

## Working Principles

- Explain the reasoning behind material changes.
- Ask clarifying questions when there are multiple reasonable paths forward.
- Keep edits scoped to the requested task.
- Do not rewrite unrelated files or clean up local workspace state unless asked.
- Preserve existing naming, visual direction, and file organization.

## CSS And Component Rules

- Keep component APIs class-based and framework-free.
- Preserve the `awm-` prefix for public classes.
- Use semantic token aliases before raw values.
- Avoid hard-coded colors, spacing, radii, shadows, and durations when a token exists.
- Keep `styles.css` import-only; token changes belong in `tokens/`.
- Keep visual language sharp, quiet, editorial, and technical:
  - hairline borders over heavy shadows
  - restrained AWM Blue accent use
  - 0-4px radii for most surfaces
  - no gradients, emoji, or decorative clutter

## Documentation And Examples

- If component behavior, variants, or classes change, update the matching files:
  - `components/*.html`
  - `workbench/stories.js`
  - `stories/*.stories.js`
- If package entry points change, update `package.json` and `README.md`.
- Keep README content accurate to files that actually exist in the repo.

## Verification

- For CSS or markup changes, do at least one local visual check when practical:
  - open the relevant `components/*.html`, `guidelines/*.html`, or `ui_kits/*.html`
  - or run Storybook with `npm run storybook`
- For package/export changes, inspect `package.json` and run the smallest relevant
  validation available.
- Report any verification that could not be run.

## Git Hygiene

- Check `git status --short` before and after edits.
- Treat untracked or modified files you did not create as user-owned state.
- Do not use destructive git commands unless explicitly requested.
