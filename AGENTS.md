# Portfolio redesign — agent context

## Purpose

Redesign **samhaslam.design** / **masmalsah.github.io** on a modern static stack while **reusing** existing copy, structure, and assets from the current **Jekyll** site (`portfolio-redesign` branch).

## Current site (Jekyll) — facts

- **Config:** `_config.yml` — site title, email, URL, SEO fields, collections.
- **Collections:**
  - `_case_studies/` — deeper pieces; some files include **HTML blocks** after front matter (e.g. process grids, layout markup).
  - `_previous_works/` — shorter portfolio entries (mostly front matter + light body).
- **Front matter** (typical): `layout`, `order`, `imagefolder`, `modal-id`, `date`, `img`, `bgheadimg`, `category`, `description`, `client`, `project-date`, `link`, etc. Preserve field names or map them explicitly when migrating.
- **Images:** `assets/img/portfolio/` (and per-project subfolders referenced by `imagefolder` / `img`).
- **Templates:** `_layouts/`, `_includes/` — Liquid; homepage is `index.html` pulling grids and modals.
- **Deploy:** GitHub Pages user/organization site; keep compatibility with **static output** (or document if moving to another host).

## Current build — Eleventy + Tailwind

- **Generator:** [Eleventy](https://www.11ty.dev/) (`eleventy.config.js`) — input `src/`, output `_site/`.
- **Content:** Markdown in `src/case-studies/` and `src/previous-works/` (renamed from `.markdown` to `.md`); collections `caseStudies` and `previousWorks` in config. Each item renders a dedicated page under `/work/...` using `layouts/project.njk`. **Titles** are derived from filenames when `title` is absent in front matter (Jekyll-style).
- **Site metadata:** `src/_data/site.json` (replaces `_config.yml` for the new site).
- **Styles:** [Tailwind CSS v4](https://tailwindcss.com/) with **`tw-` prefix** on shell UI (`src/styles/input.css`, `tailwind.config.js` has **preflight disabled**). **Bootstrap 4.6** remains loaded to support legacy case-study body HTML classes while content is incrementally modernized.
- **UI shell:** Nunjucks (`src/_includes/`) with a minimal one-page homepage and dedicated project pages (`/work/case-studies/*`, `/work/previous-works/*`).
- **Assets:** `assets/` at repo root is passed through to `_site/assets/` (images, JS, legacy CSS).
- **Commands:** `npm install` then `npm run build` (runs Eleventy, then PostCSS in `eleventy.after`). `npm start` — dev server with watch.

### Legacy Jekyll tree

The original **`_case_studies/`**, **`_previous_works/`**, **`_layouts/`**, **`_includes/`**, and root **`index.html`** remain as reference until the Eleventy site fully replaces them on the live branch.

## Migration principles

1. **Do not delete** the Jekyll tree until the new site is live and verified; either nest the new app in a subfolder during transition or replace in place with a clear cutover commit.
2. **Assets:** Keep paths stable where possible (`/assets/img/...`) or add redirects / bulk path updates once.
3. **HTML in Markdown:** Convert to cleaner semantic HTML over time, or keep raw HTML where needed while preserving content parity.
4. **SEO:** Carry over `title`, `description`, `keywords`, `meta_author` from `_config.yml` into the new framework’s meta/OG setup.

## Goals for the redesign

- Modern, accessible UI (semantic HTML, focus states, reduced motion respect).
- Fast static delivery; optimize images (formats, dimensions, lazy loading).
- Clear IA: featured case studies + archive with dedicated detail pages.

## Design inspiration & references

Use these as **direction** (color, type, layout, motion, copy tone)—not pixel-perfect clones.

### Visual language (color, typography, layout)

- **[Koen Jansen](https://www.koenjansen.com/)** — Brand/product design portfolio: editorial hierarchy, project tiles, date/role labels, case-study vs external links. Strong reference for **overall visual rhythm** and project listing patterns.
- **[Benjamin den Boer](https://benjamin.design/?ref=onepagelove)** — Bold typographic hero, minimal chrome, numbered narrative beats. Reference for **type-led layout** and confident simplicity.

### Tone & voice (writing, personality)

- **[Emil Kowalski](https://emilkowal.ski/)** — Design engineer positioning: clear “today / previously” framing, project and writing lists, restrained voice. Reference for **how intro copy and sections feel**, not necessarily the exact components.

### Minimalism & motion

- **[Nim (live demo)](https://nim-fawn.vercel.app/)** — Very minimal one-page portfolio: sections for projects, experience, blog, connect.
- **[Nim — source](https://github.com/ibelick/nim)** — Open template: **Next.js 15**, **React 19**, **Tailwind CSS v4**, Motion / Motion-Primitives. Use as **layout, spacing, and animation reference**; this repo remains Eleventy-first for content migration unless explicitly switching stacks.

## When implementing

- Match or improve **content parity** before polishing visuals.
- Prefer **one** content source of truth (filesystem Markdown + frontmatter) aligned with old collections.
- Document URL changes (`/work/...` routes) for bookmarks and SEO.

## Related paths

- **Eleventy:** `src/`, `eleventy.config.js`, `package.json`, `postcss.config.js`, `tailwind.config.js`.
- **Legacy Jekyll:** `_config.yml`, `_case_studies/`, `_previous_works/`, `_layouts/`, `_includes/`, root `index.html`, `assets/`.
- Branch: `portfolio-redesign`.

### GitHub Pages

The published site should be the contents of **`_site/`** after `npm run build`. Configure the repo’s Pages build to run that command (e.g. GitHub Actions) or upload `_site`; the default Jekyll build on GitHub will not run this Eleventy pipeline unless replaced.
