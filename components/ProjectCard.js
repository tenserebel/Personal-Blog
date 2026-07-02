import Link from 'next/link'
import styles from './ProjectCard.module.css'

export default function ProjectCard({
  index,
  title,
  date,
  role,
  description,
  link,
  post
}) {
  const Title = link ? 'a' : 'span'
  const titleProps = link
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <article className={`${styles.card} reveal`}>
      <div className={styles.top}>
        <span className={styles.index}>
          {String(index + 1).padStart(2, '0')}
        </span>
        {link ? <span className={styles.arrow} aria-hidden="true">↗</span> : null}
      </div>

      <h3 className={styles.title}>
        <Title className={styles.titleLink} {...titleProps}>
          {title}
        </Title>
      </h3>

      {(date || role) && (
        <p className={styles.meta}>
          {date ? <span className={styles.date}>{date}</span> : null}
          {date && role ? <span className={styles.sep}>/</span> : null}
          {role ? <span className={styles.role}>{role}</span> : null}
        </p>
      )}

      <ul className={styles.desc}>
        {description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {post ? (
        <Link href={post} className={styles.readMore}>
          Read the write-up →
        </Link>
      ) : null}
    </article>
  )
}
