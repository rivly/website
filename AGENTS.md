# AGENTS.md

Rivly is an open-source dashboard for Docker Swarm and standalone hosts, positioned as a modern alternative to Portainer. This repo is the marketing site. All user-facing content is English.

## Setup & commands

```bash
bun install       # install dependencies (Bun only)
bun run dev       # dev server at http://localhost:5173
bun run build     # tsc -b + production build to dist/
bun run lint      # oxlint
```

Before finishing any change, `bun run lint && bun run build` must pass.

## Tech stack

- **Bun** as package manager and runner. Never use npm or yarn; do not create `package-lock.json` or `yarn.lock`.
- **Vite 8** + **React 19** + **TypeScript 6** (strict, with `erasableSyntaxOnly`).
- **oxlint** for linting (config in `.oxlintrc.json`). There is no ESLint and none should be added.
- **Vanilla CSS** only. No Tailwind, no CSS-in-JS, no component/UI library.
- **react-icons** (Lucide set) for icons.

## Project structure

```
src/
  main.tsx        # entry: createRoot + StrictMode
  App.tsx         # composes the sections
  index.css       # reset + design tokens (CSS custom properties)
  components/     # reusable UI (SiteHeader, ThemeToggle, Footer, ...)
  sections/       # one file per landing section (Hero, ...)
  lib/            # constants and helpers (no JSX)
  styles/         # shared CSS primitives
```

Co-locate a `Component.css` next to each `Component.tsx`. Class names are plain and block-namespaced (e.g. `.hero__title`).

## Code style

- Function components only. Type props inline or with a local `type`; never `React.FC`.
- React 19: `ref` is a normal prop. Never use `forwardRef`, `defaultProps`, or `propTypes`.
- `erasableSyntaxOnly` is on: no TS `enum`, no `namespace`, no constructor parameter properties. Use `as const` objects and union types.
- Import only what you use from React (`import { useState } from 'react'`); no top-level `import React`.
- Icons come from `react-icons/lu`. Never hand-write inline `<svg>`.

## Design language

The reference is the current Cloudflare dashboard: clean, light, refined. Concrete tokens (colors, spacing) live as CSS custom properties in `index.css`; the rules below hold regardless of their values.

- **Theme:** light is the primary theme. Surfaces are white or very light gray with 1px hairline borders. If a dark theme is added later, set it on `<html data-theme>` before first paint and persist in `localStorage`.
- **Color:** one accent (`--accent`), used sparingly: primary CTA, focus ring, links, small marks. Everything else is neutral. Keep functional status colors (e.g. green = running) separate from the brand accent.
- **Type:** a sans for UI and prose; a mono used only for code-like values (image tags, replica counts, shell commands).
- **Buttons ("lit surface" recipe):** primary buttons combine a subtle vertical gradient (lighter top, darker bottom), an `inset 0 1px 0 rgba(255,255,255,.28)` top highlight, a small shadow in the accent's own hue, and a 1px border slightly darker than the fill. Secondary buttons are the white version of the same recipe. Never ship flat, single-color buttons.
- **Depth:** subtle, shallow shadows are fine in light mode (cards, buttons). No large, diffuse, or neon glows.
- **Sections:** short copy on one side, a visual on the other, alternating sides down the page.
- **Placeholders:** do not fabricate fake product UI or data to fill space. Use the `Placeholder` component (a clean captioned image box) where real Rivly screenshots will go later.

### Banned (these read as AI-generated)

- Gradient text; large diffuse colored glows; neon effects. (The small button shadow above is fine.)
- A badge/eyebrow or dot-separated label row (`A · B · C`) above or below the headline.
- Stat-banner rows; three identical icon feature cards; colored left-border cards.
- All-caps wide-tracked labels. Exception: table headers that mirror real CLI output (e.g. `docker service ls`).
- Fake or placeholder product data presented as if it were real.

## Copywriting

- Prefer a concrete claim (a number, a named capability, a comparison) over superlatives. Avoid "fast", "seamless", "powerful", "modern", "best-in-class".
- No em-dashes (`—`). Use periods and commas, and vary sentence length.
- Sentence case. The audience is developers; naming real commands (`docker service ps`) is good.

## Git

- Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`). Keep commits small and scoped.

## Boundaries

**Always:** run `bun run lint && bun run build` before finishing; keep CSS vanilla; write user-facing text in English.

**Ask first:** adding any dependency; changing design tokens or the accent color; introducing new tooling or a build step.

**Never:** use npm or yarn; add Tailwind or any CSS framework / CSS-in-JS; use `forwardRef` / `defaultProps` / `propTypes` / TS `enum`; ship gradient-text, glow, or pill-badge patterns; commit secrets.
