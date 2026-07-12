<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="brand/logo-white-full.png" />
    <img alt="Rivly" src="brand/logo-blue-full.png" width="200" />
  </picture>
</p>

The marketing site for [Rivly](https://github.com/rivly/rivly).

## Development

Requires [Bun](https://bun.sh).

```bash
bun install     # install dependencies
bun run dev     # dev server at localhost:5173
bun run build   # type-check and build to dist/
bun run lint    # oxlint
```

## Stack

Vite 8, React 19, TypeScript 6, and vanilla CSS. Icons from `react-icons` (Lucide). No Tailwind, no CSS-in-JS, no UI library.

```
src/
  main.tsx        entry
  App.tsx         composes the sections
  index.css       reset and design tokens
  components/     reusable UI
  sections/       one file per landing section
  lib/            constants and helpers
functions/        Cloudflare Pages Functions
```

## Deployment

Deployed on Cloudflare Pages. Pushes to `main` build with `bun run build` and publish `dist/`.

## Contributing

Conventions for both people and coding agents live in [AGENTS.md](./AGENTS.md).

## License

MIT
