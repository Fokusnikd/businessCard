import type { ElementType, ReactNode } from 'react'

import { cx } from '@/shared/lib/cx'

import styles from './Container.module.css'

type ContainerProps = {
  as?: ElementType
  className?: string
  children: ReactNode
  id?: string
  'aria-labelledby'?: string
}

export function Container({
  as: Tag = 'div',
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag className={cx(styles.wrap, className)} {...rest}>
      {children}
    </Tag>
  )
}
