# Personal Blog

A hand-built personal blog and portfolio with a bespoke editorial design — no theme library. Built with **Next.js** (Pages Router), it reads Markdown posts directly and renders them with a custom typographic layout.

- Custom editorial UI: display serif (Fraunces), body sans (Inter), and monospace accents (JetBrains Mono) via `next/font/google`
- Light/dark ("paper" / "ink") theme toggle with no-flash init
- Markdown posts rendered with `react-markdown` + GFM, heading slugs, and syntax highlighting
- Reading progress bar, scroll-reveal, and hover-driven post/project cards

## Structure

- `content/posts/*.md` — blog posts (frontmatter: `title`, `date`, `description`, `tag`, `author`, optional `draft`)
- `content/projects.js` — project entries for the Work page
- `lib/posts.js` — Markdown loading/parsing (`gray-matter`); `lib/posts.check.js` is a runnable self-check
- `components/` — Layout, Nav, ThemeToggle, ProjectCard, PostCard, Markdown, etc.
- `styles/globals.css` — design tokens (colors, type scale, spacing)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export of all pages
node lib/posts.check.js   # verify posts load + sort correctly
```

## Configuration

1. Meta tags and OG image live in `pages/_document.js` (`/public/og.svg`).
2. Add posts as Markdown files in `content/posts/`.
3. Edit the About page copy in `pages/index.js` and projects in `content/projects.js`.
