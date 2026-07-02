import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

// Posts date frontmatter is authored as YYYY/MM/DD or YYYY-MM-DD.
function toTimestamp(date) {
  const t = new Date(String(date).replace(/\//g, '-')).getTime()
  return Number.isNaN(t) ? 0 : t
}

function readPost(filename) {
  const slug = filename.replace(/\.md$/, '')
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8')
  const { data, content } = matter(raw)
  const tags = Array.isArray(data.tag) ? data.tag : data.tag ? [data.tag] : []
  return {
    slug,
    content,
    title: data.title || slug,
    date: data.date ? String(data.date) : '',
    description: data.description || '',
    author: data.author || '',
    draft: Boolean(data.draft),
    tags
  }
}

export function getAllPosts() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map(readPost)
    .filter((p) => !p.draft)
    .sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date))
}

export function getPostSlugs() {
  return getAllPosts().map((p) => p.slug)
}

export function getPostBySlug(slug) {
  return readPost(`${slug}.md`)
}

export function getAllTags() {
  const counts = new Map()
  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) || 0) + 1)
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag))
}

// Metadata only (no markdown body) — keeps listing pages lean.
export function toListItem({ content, ...meta }) {
  return meta
}
