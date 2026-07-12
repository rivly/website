# AGENTS.md

Marketing site for Rivly, an open-source dashboard for Docker, from a single host to a full Swarm. All user-facing text is English.

## Commands

```bash
bun install     # Bun only, never npm/yarn
bun run dev     # localhost:5173
bun run build   # tsc -b + Vite build to dist/
bun run lint    # oxlint (not ESLint)
```

Run `bun run lint && bun run build` before finishing any change.

## Stack

Vite 8, React 19, TypeScript 6 (`erasableSyntaxOnly`), vanilla CSS, `react-icons/lu`. No Tailwind, no CSS-in-JS, no UI library.

## Code style

- Function components only. Type props inline or with a local `type`, never `React.FC`.
- `ref` is a normal prop. No `forwardRef`, `defaultProps`, `propTypes`.
- No TS `enum` or `namespace` (`erasableSyntaxOnly`). Use `as const` objects and union types.
- Import only what you use (`import { useState } from 'react'`), no top-level `import React`.
- No comments. Let clear names and small components carry the intent.
- Co-locate `Component.css` with `Component.tsx`. Classes are block-namespaced (`.hero__title`).

## Design

Reference is the Cloudflare dashboard: light, clean, one accent (`--accent`, in `index.css`) used only for the primary CTA, links, and focus rings.

- Buttons use the "lit surface" recipe: subtle vertical gradient, `inset 0 1px 0 rgba(255,255,255,.28)` top highlight, small shadow in the accent hue, 1px border darker than the fill. Never flat single-color buttons.
- For product screenshots not built yet, use the `Placeholder` component. Never fabricate fake UI or data.

These read as AI-generated, so avoid them: gradient text, large diffuse glows, neon; a dot-separated eyebrow row (`A · B · C`); stat-banner rows; three identical icon cards; colored left-border cards; all-caps wide-tracked labels.

## Copy

Concrete claims over superlatives (avoid "fast", "seamless", "powerful", "modern"). No em-dashes (`—`); use periods and commas. Sentence case.

## Git

Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`). Small, scoped commits.

## Ask first

Adding a dependency, changing design tokens or the accent color, or adding tooling.
