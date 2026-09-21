import { cx } from '@/shared/lib/cx'

import styles from './TechList.module.css'

type TechListProps = {
  items: readonly string[]
  ariaLabel: string
  featured?: string
}

export function TechList({ items, ariaLabel, featured }: TechListProps) {
  return (
    <ol className={styles.list} aria-label={ariaLabel}>
      {items.map((item, index) => {
        const isFeatured = item === featured
        return (
          <li
            key={item}
            className={cx(styles.item, isFeatured && styles.featured)}
          >
            <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
            <span className={styles.name}>{item}</span>
          </li>
        )
      })}
    </ol>
  )
}
