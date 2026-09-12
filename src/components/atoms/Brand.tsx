import { cx } from '@/shared/lib/cx'

import styles from './Brand.module.css'

type BrandProps = {
  href?: string
  ariaLabel?: string
  className?: string
}

export function Brand({ href = '#main', ariaLabel, className }: BrandProps) {
  return (
    <a className={cx(styles.brand, className)} href={href} aria-label={ariaLabel}>
      <span className={styles.icon}>&lt;/&gt;</span> developer
      <span className={styles.dot}>.</span>
    </a>
  )
}
