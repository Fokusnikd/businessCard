import { CodeCard } from '@/components/molecules'
import { site } from '@/content/site'
import { cx } from '@/shared/lib/cx'

import styles from './HeroArt.module.css'

const art = site.hero.art

export function HeroArt() {
  return (
    <div className={styles.art} aria-hidden="true">
      <div className={styles.grid} />
      <div className={styles.orbit} />
      <div className={cx(styles.orbit, styles.orbitTwo)} />
      <span className={styles.index}>{art.index}</span>
      <div className={styles.symbol}>
        <span className={styles.symbolAccent}>&lt;</span>
        <b className={styles.symbolSlash}>/</b>
        <span className={styles.symbolAccent}>&gt;</span>
      </div>
      <CodeCard comment={art.comment} idea={art.idea} ready={art.ready} />
      <span className={styles.coordinate}>{art.coordinate}</span>
    </div>
  )
}
