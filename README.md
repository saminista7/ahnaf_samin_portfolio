# Ahnaf Samin Portfolio (2026)

Premium personal branding portfolio built with Next.js, Tailwind, Framer Motion, and markdown blog posts.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Blog publishing

Add a new markdown file in `content/blog`. You can use either full metadata or just content.

### Option A (recommended): with metadata

```md
---
title: "Your title"
excerpt: "Short summary"
date: "2026-02-11"
tags: ["ai", "career"]
---

Your post content in markdown.
```

### Option B (super quick): filename + content only

Create `content/blog/blog1.md` (or `blog2.md`, etc.) and write:

```md
# My first post

This is my new blog post.
```

Fallback behavior:
- Title is generated from filename if missing (`blog1` -> `Blog1`)
- Excerpt is auto-generated from content if missing
- Date defaults to current time if missing
- Tags default to empty list if missing

The blog index and post page are generated automatically.

## Profile content update

- Main profile/site content: `src/data/profile.ts`
- Hero photo: `public/images/ahnaf-profile.jpg`
- Resume/CV facts are already embedded into profile copy and sections.
