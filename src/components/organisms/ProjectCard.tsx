import { Heading } from '@/components/atoms'
import { PreviewFrame, ProjectActions, ProjectMeta, TagList } from '@/components/molecules'
import type { Project } from '@/content/site'
import { useCardTilt } from '@/shared/hooks/useCardTilt'

import styles from './ProjectCard.module.css'
import { BoardVisual } from './visuals/BoardVisual'
import { CatalogVisual } from './visuals/CatalogVisual'
import { ServiceVisual } from './visuals/ServiceVisual'

const visuals = {
  service: ServiceVisual,
  catalog: CatalogVisual,
  board: BoardVisual,
} as const

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const tilt = useCardTilt()
  const Visual = visuals[project.visual]
  const titleId = `project-${project.id}`

  return (
    <article
      className={styles.scene}
      aria-labelledby={titleId}
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
      onPointerCancel={tilt.onPointerCancel}
    >
      <div className={styles.card}>
        <PreviewFrame
          variant={project.visual}
          label={project.previewLabel}
          caption="ЭСКИЗ БУДУЩЕГО ПРОЕКТА"
        >
          <Visual />
        </PreviewFrame>
        <div className={styles.body}>
          <ProjectMeta category={project.category} index={project.index} />
          <Heading as="h3" id={titleId} className={styles.title}>
            {project.title}
          </Heading>
          <p className={styles.description}>{project.description}</p>
          <ul className={styles.features}>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className={styles.tech}>
            <span className={styles.label}>ПЛАНИРУЕМЫЙ СТЕК</span>
            <TagList items={project.tags} />
          </div>
          <ProjectActions
            title={project.title}
            siteUrl={project.siteUrl}
            repoUrl={project.repoUrl}
          />
          <span className={styles.status}>● {project.status}</span>
        </div>
      </div>
    </article>
  )
}
