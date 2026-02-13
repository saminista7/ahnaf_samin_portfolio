# Ahnaf Samin Portfolio (2026)

Premium personal branding portfolio built with Next.js, Tailwind, Framer Motion, and markdown blog posts.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Blog publishing

Add a new markdown file in `content/blog`:

```md
---
title: "Your title"
excerpt: "Short summary"
date: "2026-02-11"
tags: ["ai", "career"]
---

Your post content in markdown.
```

The blog index and post page are generated automatically.

## Profile content update

- Main profile/site content: `src/data/profile.ts`
- Hero photo: `public/images/ahnaf-profile.jpg`
- Resume/CV facts are already embedded into profile copy and sections.
