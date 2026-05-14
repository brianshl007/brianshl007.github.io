# brianshl007.github.io

Personal portfolio site built with [Astro](https://astro.build). Deployed automatically to GitHub Pages on every push to `main`.

---

## Running locally

```sh
npm install
npm run dev        # http://localhost:4321
```

Other useful commands:

```sh
npm run build      # production build → dist/
npm run preview    # preview the dist/ build locally
```

---

## Adding a new project

1. Create `src/content/projects/your-slug.md`
2. Add the required frontmatter:

```md
---
title: "Project Name"
description: "One-sentence description shown in meta tags."
order: 3                          # controls position in the works grid (lower = earlier)
heroImage: "/assets/your-image.jpg"   # thumbnail + lead image on the detail page
tags: ["tag1", "tag2"]           # optional
meta:                             # optional — shown in the project hero
  - label: "Tool"
    value: "Figma"
  - label: "Year"
    value: "2026"
gallery:                          # optional — images shown below the body text
  - src: "/assets/your-image-2.jpg"
    alt: "Description of image"
---

Body text goes here as regular markdown paragraphs.
```

3. Drop any images into `public/assets/`
4. The works grid and `/work/your-slug` page are generated automatically

---

## Adding a new jeep photo

1. Drop the image into `public/assets/` (e.g. `blue-jeep-10.jpg`)
2. Create `src/content/jeeps/blue-jeep-10.md`:

```md
---
image: "/assets/blue-jeep-10.jpg"
caption: "Where you spotted it."   # optional
date: 2026-05-14                   # optional — used for sort order
---
```

3. The `/jeeps` archive grid updates automatically

---

## Deploying

Push to `main`. GitHub Actions builds and deploys to GitHub Pages automatically.

```sh
git push origin main
```
