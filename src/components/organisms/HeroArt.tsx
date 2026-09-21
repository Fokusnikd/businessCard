import { site } from '@/content/site'
import { cx } from '@/shared/lib/cx'

import styles from './HeroArt.module.css'

const art = site.hero.art
const ticks = Array.from({ length: 24 }, (_, index) => index)

export function HeroArt() {
  return (
    <div className={styles.art} aria-hidden="true">
      <span className={styles.index}>{art.index}</span>
      <div className={styles.stage}>
        <div className={cx(styles.ring, styles.outer)}>
          {ticks.map((tick) => (
            <span
              key={tick}
              className={styles.tick}
              style={{ transform: `rotate(${tick * 15}deg)` }}
            />
          ))}
        </div>
        <div className={cx(styles.ring, styles.mid)} />
        <div className={cx(styles.ring, styles.inner)} />
        <span className={styles.fStop}>{art.fStop}</span>
      </div>
      <span className={styles.caption}>{art.caption}</span>
      <span className={styles.coordinate}>{art.coordinate}</span>
    </div>
  )
}
