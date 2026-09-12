import { Heading } from '@/components/atoms'
import { ExpandableDetails, ProjectMeta, TagList } from '@/components/molecules'
import type { Project } from '@/content/site'

import styles from './ProjectCard.module.css'
import { FlowboardVisual } from './visuals/FlowboardVisual'
import { FormaVisual } from './visuals/FormaVisual'

const visuals = {
  flowboard: FlowboardVisual,
  forma: FormaVisual,
} as const

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Visual = visuals[project.visual]

  return (
    <article className={styles.card}>
      <Visual />
      <ProjectMeta category={project.category} index={project.index} />
      <Heading as="h3">{project.title}</Heading>
      <p className={styles.description}>{project.description}</p>
      <TagList items={project.tags} />
      <ExpandableDetails title={project.detailsTitle}>{project.details}</ExpandableDetails>
    </article>
  )
}
