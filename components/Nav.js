import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Nav.module.css'

const links = [
  { href: '/', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Work' },
  { href: '/posts', label: 'Writing' }
]

function isActive(pathname, href) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export default function Nav() {
  const { pathname } = useRouter()
  return (
    <nav className={styles.nav} aria-label="Primary">
      {links.map((link, i) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${styles.link} ${
            isActive(pathname, link.href) ? styles.active : ''
          }`}
        >
          <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
          <span className={styles.text}>{link.label}</span>
        </Link>
      ))}
    </nav>
  )
}
