import Head from 'next/head'
import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import experience from '../content/experience'
import styles from '../styles/Experience.module.css'

function TimelineItem({ job }) {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((o) => !o)

  return (
    <li className={`${styles.item} reveal`}>
      <span
        className={`${styles.node} ${job.current ? styles.nodeCurrent : ''}`}
        aria-hidden="true"
      />
      <div
        className={`${styles.card} ${open ? styles.open : ''}`}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            toggle()
          }
        }}
      >
        <div className={styles.head}>
          <span className={styles.period}>{job.period}</span>
          {job.current ? <span className={styles.badge}>Now</span> : null}
        </div>

        <h2 className={styles.role}>{job.role}</h2>
        <span className={styles.company}>{job.company}</span>
        <p className={styles.summary}>{job.summary}</p>

        <div className={styles.details}>
          <div className={styles.detailsInner}>
            <ul className={styles.points}>
              {job.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <div className={styles.stack}>
              {job.stack.map((s) => (
                <span key={s} className={styles.tag}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <span className={styles.hint} aria-hidden="true">
          {open ? 'tap to collapse' : 'hover / tap for details'}
        </span>
      </div>
    </li>
  )
}

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience — Prem Shrawan Jha</title>
      </Head>

      <PageHeader kicker="Career" title="Experience" count={experience.length}>
        A timeline of the roles I&apos;ve held, moving from data and automation
        into AI engineering. Hover or tap any entry for the details.
      </PageHeader>

      <section className={`container ${styles.wrap}`}>
        <ol className={styles.timeline}>
          {experience.map((job) => (
            <TimelineItem key={job.company} job={job} />
          ))}
        </ol>
      </section>
    </>
  )
}
