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

## Recommended stack (pick one)

| Option | Why it fits |
|--------|-------------|
| **Astro** (recommended) | Content Collections + MD/MDX map cleanly from Jekyll; reuse Markdown and **embed existing HTML** in MDX or use `components`; great static output; works on GitHub Pages with adapter/static build. |
| **Eleventy (11ty)** | Closest to Jekyll (data + templates); minimal conceptual jump; Markdown/HTML reuse is straightforward. |
| **Next.js** | Use if you want App Router, React ecosystem, or future dynamic features; heavier than needed for a portfolio alone. |

**Default suggestion:** **Astro** + **MDX** for case studies that contain HTML, plain **Markdown** for simpler entries, **Content Collections** with a schema mirroring current front matter.

## Migration principles

1. **Do not delete** the Jekyll tree until the new site is live and verified; either nest the new app in a subfolder during transition or replace in place with a clear cutover commit.
2. **Assets:** Keep paths stable where possible (`/assets/img/...`) or add redirects / bulk path updates once.
3. **HTML in Markdown:** Convert to MDX components over time, or allow raw HTML where safe (sanitize if user content ever appears).
4. **SEO:** Carry over `title`, `description`, `keywords`, `meta_author` from `_config.yml` into the new framework’s meta/OG setup.

## Goals for the redesign

- Modern, accessible UI (semantic HTML, focus states, reduced motion respect).
- Fast static delivery; optimize images (formats, dimensions, lazy loading).
- Clear IA: case studies vs. archive/previous work if that split remains.

## When implementing

- Match or improve **content parity** before polishing visuals.
- Prefer **one** content source of truth (filesystem Markdown/MDX + frontmatter) aligned with the old collections model.
- Document any URL changes (old pretty permalinks vs. new routes) for bookmarks and SEO.

## Related paths

- Legacy Jekyll: `_config.yml`, `_case_studies/`, `_previous_works/`, `_layouts/`, `_includes/`, `index.html`, `assets/`.
- Branch: `portfolio-redesign`.
