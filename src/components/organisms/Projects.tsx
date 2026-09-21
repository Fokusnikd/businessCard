import { Accent, Container, Eyebrow, Heading } from '@/components/atoms'
import { SectionHeading } from '@/components/molecules'
import { site } from '@/content/site'
import sectionStyles from '@/styles/section.module.css'

import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.css'

const projects = site.projects

export function Projects() {
  return (
    <Container
      as="section"
      className={sectionStyles.section}
      id="projects"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        eyebrow={<Eyebrow muted>{projects.eyebrow}</Eyebrow>}
        title={
          <Heading as="h2" id="projects-title">
            {projects.title}
            <Accent />
          </Heading>
        }
        note={projects.note}
      />
      <div className={styles.grid}>
        {projects.items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  )
}
