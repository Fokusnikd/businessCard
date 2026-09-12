import type { ReactNode } from 'react'

import { cx } from '@/shared/lib/cx'

import styles from './Heading.module.css'

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3'
  id?: string
  className?: string
  children: ReactNode
}

const levelStyles = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
} as const

export function Heading({ as: Tag = 'h2', id, className, children }: HeadingProps) {
  return (
    <Tag id={id} className={cx(levelStyles[Tag], className)}>
      {children}
    </Tag>
  )
}
