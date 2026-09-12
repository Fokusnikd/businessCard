import styles from './ProjectMeta.module.css'

type ProjectMetaProps = {
  category: string
  index: string
}

export function ProjectMeta({ category, index }: ProjectMetaProps) {
  return (
    <div className={styles.meta}>
      <span>{category}</span>
      <span>{index}</span>
    </div>
  )
}
