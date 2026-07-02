import Head from 'next/head'
import Link from 'next/link'
import Markdown from '../../components/Markdown'
import ReadingProgress from '../../components/ReadingProgress'
import { getAllPosts, getPostBySlug, getPostSlugs } from '../../lib/posts'
import { formatDate } from '../../lib/date'
import styles from '../../styles/Post.module.css'

export default function Post({ post, prev, next }) {
  return (
    <>
      <Head>
        <title>{`${post.title} — Prem Shrawan Jha`}</title>
        <meta name="description" content={post.description} />
      </Head>

      <ReadingProgress />

      <article>
        <header className={`container ${styles.header}`}>
          <Link href="/posts" className={styles.back}>
            ← Writing
          </Link>
          <div className={styles.meta}>
            <time>{formatDate(post.date)}</time>
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${encodeURIComponent(tag)}`}
                className={styles.tag}
              >
                {tag}
              </Link>
            ))}
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          {post.author ? (
            <p className={styles.author}>By {post.author}</p>
          ) : null}
        </header>

        <div className={`container ${styles.bodyWrap}`}>
          <div className={styles.body}>
            <Markdown>{post.content}</Markdown>
          </div>
        </div>
      </article>

      <nav className={`container ${styles.pager}`} aria-label="More posts">
        {prev ? (
          <Link href={`/posts/${prev.slug}`} className={styles.pagerItem}>
            <span className={styles.pagerDir}>← Older</span>
            <span className={styles.pagerTitle}>{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/posts/${next.slug}`}
            className={`${styles.pagerItem} ${styles.pagerNext}`}
          >
            <span className={styles.pagerDir}>Newer →</span>
            <span className={styles.pagerTitle}>{next.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: getPostSlugs().map((slug) => ({ params: { slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const all = getAllPosts()
  const idx = all.findIndex((p) => p.slug === params.slug)
  const post = getPostBySlug(params.slug)
  const neighbour = (p) => (p ? { slug: p.slug, title: p.title } : null)
  return {
    props: {
      post,
      prev: neighbour(all[idx + 1] || null),
      next: neighbour(all[idx - 1] || null)
    }
  }
}
