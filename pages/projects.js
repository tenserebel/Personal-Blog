import Head from 'next/head'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import projects from '../content/projects'
import styles from '../styles/Projects.module.css'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Work — Prem Shrawan Jha</title>
      </Head>

      <PageHeader kicker="Selected work" title="Work" count={projects.length}>
        A mix of university, hackathon, and personal builds, spanning web
        platforms, computer vision, and data analysis.
      </PageHeader>

      <section className={`container ${styles.grid}`}>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} index={i} {...project} />
        ))}
      </section>
    </>
  )
}
