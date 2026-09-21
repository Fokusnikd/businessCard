import { cx } from '@/shared/lib/cx'

import { ApertureMark } from './ApertureMark'
import styles from './Brand.module.css'

type BrandProps = {
  href?: string
  ariaLabel?: string
  initials: string
  className?: string
}

export function Brand({ href = '#main', ariaLabel, initials, className }: BrandProps) {
  return (
    <a className={cx(styles.brand, className)} href={href} aria-label={ariaLabel}>
      <ApertureMark className={styles.mark} />
      <span className={styles.initials}>{initials}</span>
    </a>
  )
}
