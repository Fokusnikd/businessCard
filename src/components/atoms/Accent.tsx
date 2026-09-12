import type { ReactNode } from 'react'

import { cx } from '@/shared/lib/cx'

import styles from './Accent.module.css'

type AccentProps = {
  children?: ReactNode
  className?: string
}

export function Accent({ children = '.', className }: AccentProps) {
  return <span className={cx(styles.accent, className)}>{children}</span>
}
