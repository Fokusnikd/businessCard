import type { ReactNode } from 'react'

import { cx } from '@/shared/lib/cx'

import styles from './Eyebrow.module.css'
import { StatusDot } from './StatusDot'

type EyebrowProps = {
  children: ReactNode
  muted?: boolean
  withStatus?: boolean
  className?: string
}

export function Eyebrow({ children, muted, withStatus, className }: EyebrowProps) {
  return (
    <p className={cx(styles.eyebrow, muted && styles.muted, className)}>
      {withStatus ? <StatusDot /> : null}
      {children}
    </p>
  )
}
