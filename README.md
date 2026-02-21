# OCARDINAUX.COM

[![Netlify Status](https://api.netlify.com/api/v1/badges/947a141d-5666-41c7-9a44-c91d29771e9b/deploy-status)](https://app.netlify.com/sites/spectacular-speculoos-aa043a/deploys)

## General structure

### 1) App shell + routing

- `src/pages/index.astro` is the main page composition: Hero → Construction section → Screenshot slider → Contact section → Footer.
- `src/layouts/Layout.astro` is the global HTML wrapper: metadata, fonts, favicon, Matomo analytics, and inline theme bootstrapping logic.

### 2) Content model (Astro Content Collections)

- `src/content/config.ts` defines two collections:
	- `sections` from `content/sections/*.mdoc`
	- `screenshots` from `content/screenshots/screenshots.json` with typed schema (id/src/url/alt/backside).
- This is the key “data source” pattern in the repo.

### 3) Content files

- Long-form section copy lives in Markdoc files:
	- `content/sections/construction.mdoc`
	- `content/sections/contact.mdoc`
	- `content/sections/about.mdoc`
- Slider card data is JSON in `content/screenshots/screenshots.json`.

### 4) Components

- `Section.astro` pulls a content entry by id and renders it dynamically via `astro:content` + `render(entry)`.
- `Hero.astro`, `Footer.astro`, `ScreenshotSlider.astro`, and `Screenshot.astro` handle most of the UX and animations.

### 5) Styling system

- Global design tokens and theme variables are in `src/styles/global.css` (typography, color palette, spacing scale, reusable “cut-out” frame style).
- Dark theme is class-based (`.theme-dark`) with variable overrides.

### 6) Markdoc customization

- `markdoc.config.mjs` maps Markdoc tags to Astro components/tags (`tldr`, `icon`, `q`, etc.) and overrides link rendering to `ExternalLink.astro`.

### 7) Tooling

- Scripts are standard Astro commands (`dev`, `build`, `preview`) using `pnpm`.
- Lint/format configs exist for ESLint and Biome (plus a small `justfile`).

---

## Important things to know before changing code

- **Content-first architecture**: many visible page changes should be done in `.mdoc` or screenshots JSON, not in component code first.
- **Section rendering is data-driven**: `<Section id="...">` fetches matching entry from `sections` collection and fails if missing, so IDs must match content filenames/entry IDs exactly.
- **Theme behavior is split**:
	- early inline theme bootstrap in `Layout.astro` for no-flash behavior
	- user toggle component in `ThemeToggle.astro`.
- **A lot of polish is animation-based** via `motion` and `swiper`:
	- scroll progress bar
	- in-view text reveals
	- slider interactions and flip state toggling.
- **Typography/fonts are explicitly configured in Astro config** via local font providers; font variables are referenced in global CSS.

---

## What to learn next (best onboarding path)

1. **Astro Content Collections + Markdoc flow**  
	Understand `src/content/config.ts` and `markdoc.config.mjs`, then edit one `.mdoc` section and verify render path end-to-end.
2. **Page composition in `index.astro`**  
	See how each major block is assembled and which component owns which behavior.
3. **Styling conventions in `global.css`**  
	Learn token names (`--s*`, colors, font vars) and reusable utilities like `.cut-out` and `.visually-hidden`.
4. **Interactive components**  
	Read `Hero`, `Section`, `Screenshot`, `Footer` scripts to understand the event and in-view animation model.
5. **Build/dev workflow**  
	Use `pnpm dev`, then `pnpm build` once comfortable with edits.
