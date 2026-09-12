import styles from './FormaVisual.module.css'

export function FormaVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.window}>
        <div className={styles.nav}>
          <b>forma®</b>
          <span>Objects &nbsp; Studio &nbsp; Contact</span>
        </div>
        <div className={styles.body}>
          <span>THOUGHTFULLY MADE.</span>
          <b>
            Less, but
            <br />
            <i>better.</i>
          </b>
          <span className={styles.link}>Explore the collection ↗</span>
          <div className={styles.sculpture}>
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className={styles.footer}>
          OBJECTS FOR EVERYDAY LIVING <span>01 — 03</span>
        </div>
      </div>
    </div>
  )
}
