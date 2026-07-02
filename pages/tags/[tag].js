import Head from 'next/head'
import Link from 'next/link'
import PageHeader from '../../components/PageHeader'
import PostCard from '../../components/PostCard'
import { getAllPosts, getAllTags, toListItem } from '../../lib/posts'
import styles from '../../styles/Posts.module.css'

export default function TagPage({ tag, posts }) {
  return (
    <>
      <Head>
        <title>{`${tag} — Prem Shrawan Jha`}</title>
      </Head>

      <PageHeader kicker="Topic" title={tag} count={posts.length}>
        Posts tagged &ldquo;{tag}&rdquo;.
      </PageHeader>

      <div className={`container ${styles.tags}`}>
        <Link href="/posts" className={styles.tag}>
          ← All posts
        </Link>
      </div>

      <section className={`container ${styles.list}`}>
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </section>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: getAllTags().map(({ tag }) => ({ params: { tag } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const posts = getAllPosts()
    .filter((p) => p.tags.includes(params.tag))
    .map(toListItem)
  return { props: { tag: params.tag, posts } }
}
