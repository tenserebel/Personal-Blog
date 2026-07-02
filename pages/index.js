import Head from 'next/head'
import Link from 'next/link'
import experience from '../content/experience'
import { getAllPosts, toListItem } from '../lib/posts'
import { formatDate } from '../lib/date'
import styles from '../styles/Home.module.css'

const contacts = [
  { label: 'LinkedIn', handle: '@prem-jha', href: 'https://www.linkedin.com/in/prem-jha/' },
  { label: 'GitHub', handle: '@tenserebel', href: 'https://github.com/tenserebel' },
  { label: 'Email', handle: 'premjha.works@gmail.com', href: 'mailto:premjha.works@gmail.com' }
]

const achievements = [
  {
    title: 'Won Hack the Diff Hackathon',
    note: 'Built a Rugby Club Discovery platform for the Welsh Rugby Union (WRU), presenting a data-driven solution to help fans and clubs connect across Wales.'
  },
  {
    title: 'Runner-up at NHS Hack Day',
    note: 'Built a clinical decision support tool using Bayesian networks that flags missing patient information instantly, reduces back-and-forth referrals, and delivers evidence-based recommendations in ~20 seconds.'
  },
  {
    title: 'Best Paper Presentation, 5th National Level Conference on Innovative Global Technology Trends',
    note: 'Awarded for our paper on Damagic, a computer vision application for automated car damage detection.'
  },
  {
    title: 'Runner-up at GitLab Hackathon',
    note: 'Contributed open-source pull requests improving the GitLab ecosystem, demonstrating initiative in open-source collaboration.'
  }
]

export default function Home({ latest }) {
  return (
    <>
      <Head>
        <title>Prem Shrawan Jha — AI Engineer</title>
      </Head>

      <section className={`container ${styles.hero}`}>
        <p className={styles.kicker}>
          <span>About</span>
          <span className={styles.kickerLine} />
          <span>Cardiff, UK</span>
        </p>
        <h1 className={styles.name}>
          Prem<br />
          Shrawan&nbsp;Jha
        </h1>
        <p className={styles.lede}>
          AI Engineer building Retrieval-Augmented Generation pipelines,
          LLM-integrated applications, and cloud-native infrastructure on AWS. I
          hold an MSc in Software Engineering with Distinction from Cardiff
          University.
        </p>
      </section>

      <section className={`container reveal ${styles.bio}`}>
        <div className={styles.bioLabel}>
          <span>01</span> Background
        </div>
        <div className={styles.bioBody}>
          <p>
            I&apos;m a Junior AI Engineer at Trustie Technology, where I designed
            the ingestion layer of a production RAG pipeline that processes 300+
            books into AWS RDS, and I automate cloud provisioning with AWS CDK
            and GitHub Actions.
          </p>
          <p>
            My background spans ETL pipelines, DevOps, test automation, and
            full-stack development. I care about building scalable, reliable
            systems and turning ambiguous problems into working prototypes. That
            mindset won me Hack the Diff and a runner-up finish at NHS Hack Day.
          </p>
        </div>
      </section>

      <section className={`container reveal ${styles.bio}`}>
        <div className={styles.bioLabel}>
          <span>02</span> Experience
        </div>
        <div className={styles.bioBody}>
          <ol className={styles.timeline}>
            {experience.slice(0, 3).map((job) => (
              <li key={job.company} className={styles.job}>
                <div className={styles.jobHead}>
                  <span className={styles.jobRole}>{job.role}</span>
                  <span className={styles.jobPeriod}>{job.period}</span>
                </div>
                <span className={styles.jobCompany}>{job.company}</span>
                <p className={styles.jobNote}>{job.summary}</p>
              </li>
            ))}
          </ol>
          <Link href="/experience" className={styles.timelineLink}>
            Full timeline →
          </Link>
        </div>
      </section>

      <section className={`container reveal ${styles.bio}`}>
        <div className={styles.bioLabel}>
          <span>03</span> Achievements
        </div>
        <div className={styles.bioBody}>
          <ul className={styles.timeline}>
            {achievements.map((a) => (
              <li key={a.title} className={styles.job}>
                <span className={styles.jobRole}>{a.title}</span>
                <p className={styles.jobNote}>{a.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`container reveal ${styles.contact}`}>
        <div className={styles.bioLabel}>
          <span>04</span> Elsewhere
        </div>
        <ul className={styles.contactList}>
          {contacts.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                {...(c.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <span className={styles.contactLabel}>{c.label}</span>
                <span className={styles.contactHandle}>{c.handle}</span>
                <span className={styles.contactArrow} aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {latest.length > 0 && (
        <section className={`container reveal ${styles.recent}`}>
          <div className={styles.bioLabel}>
            <span>05</span> Latest writing
          </div>
          <div className={styles.bioBody}>
            <ul className={styles.recentList}>
              {latest.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/posts/${post.slug}`}
                    className={styles.recentItem}
                  >
                    <time className={styles.recentDate}>
                      {formatDate(post.date)}
                    </time>
                    <span className={styles.recentTitle}>{post.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/posts" className={styles.timelineLink}>
              All posts →
            </Link>
          </div>
        </section>
      )}
    </>
  )
}

export async function getStaticProps() {
  const latest = getAllPosts().slice(0, 3).map(toListItem)
  return { props: { latest } }
}
