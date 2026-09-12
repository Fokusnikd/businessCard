import type { ReactNode } from 'react'

import styles from './Button.module.css'

type ButtonProps = {
  href: string
  children: ReactNode
}

export function Button({ href, children }: ButtonProps) {
  return (
    <a className={styles.button} href={href}>
      {children}
    </a>
  )
}
