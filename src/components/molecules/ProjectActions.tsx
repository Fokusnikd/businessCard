import styles from './ProjectActions.module.css'

type ProjectActionsProps = {
  title: string
  siteUrl?: string
  repoUrl?: string
}

export function ProjectActions({ title, siteUrl, repoUrl }: ProjectActionsProps) {
  return (
    <div className={styles.actions}>
      {siteUrl ? (
        <a
          href={siteUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Открыть сайт: ${title}`}
        >
          Открыть сайт ↗
        </a>
      ) : (
        <span className={styles.pending}>Демо скоро ↗</span>
      )}
      {repoUrl ? (
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Код проекта: ${title}`}
        >
          GitHub ↗
        </a>
      ) : (
        <span className={styles.pending}>Код скоро</span>
      )}
    </div>
  )
}
