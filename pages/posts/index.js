import Head from 'next/head'
import Link from 'next/link'
import PageHeader from '../../components/PageHeader'
import PostCard from '../../components/PostCard'
import { getAllPosts, getAllTags, toListItem } from '../../lib/posts'
import styles from '../../styles/Posts.module.css'

export default function Posts({ posts, tags }) {
  return (
    <>
      <Head>
        <title>Writing — Prem Shrawan Jha</title>
      </Head>

      <PageHeader kicker="Notes &amp; write-ups" title="Writing" count={posts.length}>
        Updates, insights, and lessons learned from the projects I&apos;m
        working on: the challenges, the solutions, and the progress along the
        way.
      </PageHeader>

      {tags.length > 0 && (
        <div className={`container ${styles.tags}`}>
          <span className={styles.tagsLabel}>Topics</span>
          {tags.map(({ tag, count }) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}`}
              className={styles.tag}
            >
              {tag}
              <span className={styles.tagCount}>{count}</span>
            </Link>
          ))}
        </div>
      )}

      <section className={`container ${styles.list}`}>
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </section>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts().map(toListItem),
      tags: getAllTags()
    }
  }
}
