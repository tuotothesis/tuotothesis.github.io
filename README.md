# Tong Pan Digital Garden OS

This repository is a long-term digital garden system for Tong Pan.

It is built as a static Next.js site with markdown as the source of truth. The goal is not a polished portfolio. The goal is a durable personal system for writing, projects, trails, and unfinished experiments.

## System structure

Routes:

- `/`
- `/about`
- `/projects`
- `/thoughts`
- `/trails`
- `/garden`
- `/colophon`

Content collections:

- `content/projects`
- `content/thoughts`
- `content/trails`
- `content/garden`

Each markdown file should include:

- `title`
- `date`
- `tags`
- `status`

Project status values are intended to stay within:

- `idea`
- `ongoing`
- `completed`
- `abandoned`

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Build the static export

```bash
npm run build
```

The exported site is generated in `out/`.

## Deploy to GitHub Pages

1. Push to the `main` branch.
2. In GitHub repository settings, set Pages to use GitHub Actions.
3. The workflow in `.github/workflows/jekyll-gh-pages.yml` installs dependencies, runs the Next.js static build, and deploys the contents of `out/`.

Notes:

- This repository name is `tuotothesis.github.io`, so it deploys as a user site at the root domain.
- If you later move this garden into a project repository, `next.config.mjs` already derives the correct `basePath` from `GITHUB_REPOSITORY`.
- The custom domain is preserved through `public/CNAME`.

## Editing content

Add new markdown files into the relevant collection folder. The route is created from the filename:

- `content/thoughts/my-note.md` -> `/thoughts/my-note/`
- `content/projects/my-project.md` -> `/projects/my-project/`

This keeps the content model stable and easy to extend over time.
