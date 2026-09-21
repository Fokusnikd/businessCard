import styles from './KadrVisual.module.css'

export function KadrVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <span className={styles.iso}>ISO 200 · 1/125</span>
      <div className={styles.lens}>
        <div className={styles.glass} />
      </div>
      <span className={styles.meta}>KADR · 24 мм</span>
    </div>
  )
}
