// Runnable self-check for the posts loader. Run: node lib/posts.check.js
// Uses require via esm-less transpile? No — run with: node --experimental-vm-modules
// Simplest: this file mirrors the loader in CommonJS so `node lib/posts.check.js` just works.
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const assert = require('assert')

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

const toTimestamp = (d) => {
  const t = new Date(String(d).replace(/\//g, '-')).getTime()
  return Number.isNaN(t) ? 0 : t
}

const posts = fs
  .readdirSync(POSTS_DIR)
  .filter((f) => f.endsWith('.md'))
  .map((f) => {
    const { data } = matter(fs.readFileSync(path.join(POSTS_DIR, f), 'utf8'))
    return { slug: f.replace(/\.md$/, ''), ...data }
  })
  .filter((p) => !p.draft)
  .sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date))

assert(posts.length > 0, 'expected at least one post to load')

for (const p of posts) {
  assert(p.title, `post ${p.slug} is missing a title`)
  assert(p.date, `post ${p.slug} is missing a date`)
}

for (let i = 1; i < posts.length; i++) {
  assert(
    toTimestamp(posts[i - 1].date) >= toTimestamp(posts[i].date),
    `posts not sorted newest-first at index ${i}`
  )
}

console.log(`posts.check OK: ${posts.length} posts, sorted, all have title + date`)
