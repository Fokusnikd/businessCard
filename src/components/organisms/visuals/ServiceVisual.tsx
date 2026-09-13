import styles from './ServiceVisual.module.css'

export function ServiceVisual() {
  return (
    <div className={styles.page}>
      <small>STUDIO / INDEPENDENT</small>
      <strong>
        В фокусе —<br />
        <i>главное.</i>
      </strong>
      <span className={styles.miniButton}>Смотреть работы ↗</span>
      <div className={styles.orbit} />
    </div>
  )
}
