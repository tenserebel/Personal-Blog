import Link from 'next/link'
import Nav from './Nav'
import ThemeToggle from './ThemeToggle'
import styles from './Layout.module.css'

const YEAR = new Date().getFullYear()

export default function Layout({ children }) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandName}>Prem Shrawan Jha</span>
            <span className={styles.brandMeta}>AI Engineer</span>
          </Link>
          <div className={styles.headerRight}>
            <Nav />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerCol}>
            <span className={styles.footerLabel}>Prem Shrawan Jha</span>
            <span className={styles.footerMuted}>
              RAG pipelines, LLM apps &amp; cloud infrastructure.
            </span>
          </div>
          <div className={styles.footerCol}>
            <span className={styles.footerLabel}>Elsewhere</span>
            <a href="https://github.com/tenserebel" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/prem-jha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:premjha.works@gmail.com">Email</a>
          </div>
          <div className={styles.footerCol}>
            <span className={styles.footerLabel}>Currently</span>
            <span className={styles.footerMuted}>Cardiff, United Kingdom</span>
            <span className={styles.footerMuted}>
              MSc Software Engineering, Distinction
            </span>
            <span className={styles.footerStatus}>
              <span className={styles.statusDot} aria-hidden="true" />
              AI Engineer @ Trustie Technology
            </span>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>&copy; {YEAR} Prem Shrawan Jha</span>
          <span>Built &amp; designed from scratch</span>
        </div>
      </footer>
    </div>
  )
}
