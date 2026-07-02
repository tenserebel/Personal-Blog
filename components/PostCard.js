import Link from 'next/link'
import { formatDate } from '../lib/date'
import styles from './PostCard.module.css'

export default function PostCard({ post, index }) {
  return (
    <Link href={`/posts/${post.slug}`} className={`${styles.row} reveal`}>
      <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>

      <div className={styles.body}>
        <h3 className={styles.title}>{post.title}</h3>
        {post.description ? (
          <p className={styles.desc}>{post.description}</p>
        ) : null}
        <div className={styles.meta}>
          <time>{formatDate(post.date)}</time>
          {post.tags?.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <span className={styles.arrow} aria-hidden="true">→</span>
    </Link>
  )
}
