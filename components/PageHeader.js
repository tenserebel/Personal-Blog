import styles from './PageHeader.module.css'

export default function PageHeader({ kicker, title, count, children }) {
  return (
    <header className={`container ${styles.header}`}>
      <p className={styles.kicker}>
        <span>{kicker}</span>
        <span className={styles.line} />
        {typeof count === 'number' ? (
          <span className={styles.count}>{String(count).padStart(2, '0')}</span>
        ) : null}
      </p>
      <h1 className={styles.title}>{title}</h1>
      {children ? <div className={styles.intro}>{children}</div> : null}
    </header>
  )
}
