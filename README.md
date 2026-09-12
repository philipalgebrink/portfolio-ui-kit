# Portfolio Design System

A documented, browsable Vue 3 component library, extracted directly from
[philipalgebrink.se](https://philipalgebrink.se) — my live portfolio site
([source](https://github.com/philipalgebrink/nuxt-portfolio)) — rather than built as a generic Button/Card/Modal
kit from a tutorial. Every component here traces back to a real file in that project: the hover-glow cards, the
button styles, the color tokens, the theme toggle's animation timing.

**[View the deployed Storybook](#)** _(link goes live once GitHub Pages deploys — see below)_

## Components

- **BaseButton** — the solid hover-glow button (`SectionRepos.vue`'s "View all on GitHub", `SectionGames.vue`'s "Play Now")
- **Card** — the hover-lift, glow-on-hover card used for repos and games
- **Badge** — the colored-dot language tag from repo cards
- **IconLink** — icon + label link, used for both nav items and contact links
- **ThemeToggle** — the sun/moon toggle from the site nav
- **SectionHeading** — the heading + subheading pairing repeated in every section

Every component's Storybook docs page links back to the specific source file it was extracted from.

## Stack

- Vue 3 + `<script setup>` + TypeScript
- Plain CSS custom properties for design tokens (`src/tokens.css`, ported 1:1 from the portfolio's `app.vue`) — no Tailwind, matching the portfolio's own approach
- [`@iconify/vue`](https://iconify.design) for icons, using the same `mdi:*` names as the portfolio's `@nuxt/icon`
- [Storybook](https://storybook.js.org) (`@storybook/vue3-vite`) for docs, with `@storybook/addon-themes` driving a live light/dark toggle in the toolbar

## Getting started

```bash
npm install
npm run storybook       # docs + component playground, http://localhost:6006
npm run dev             # a small local preview (App.vue) outside Storybook
npm run build-storybook # production build, output to storybook-static/
```

## Deployment

A GitHub Actions workflow (`.github/workflows/deploy-storybook.yml`) builds Storybook and deploys it to
GitHub Pages on every push to `main`. To enable it on a fresh repo: **Settings → Pages → Source → GitHub Actions**.

## Follow-ups (not built yet)

- Publish as an installable npm package
- Component unit tests
- Additional components, as they get built and proven in the live portfolio first
