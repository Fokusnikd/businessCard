import type { ReactNode } from 'react'

import { cx } from '@/shared/lib/cx'

import styles from './Button.module.css'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
}

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  return (
    <a className={cx(styles.button, variant === 'ghost' && styles.ghost)} href={href}>
      {children}
    </a>
  )
}
