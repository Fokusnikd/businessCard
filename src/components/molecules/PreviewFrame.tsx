import type { ReactNode } from 'react'

import { cx } from '@/shared/lib/cx'

import styles from './PreviewFrame.module.css'

type PreviewVariant = 'service' | 'catalog' | 'board'

type PreviewFrameProps = {
  variant: PreviewVariant
  label: string
  caption: string
  children: ReactNode
}

export function PreviewFrame({ variant, label, caption, children }: PreviewFrameProps) {
  return (
    <div className={cx(styles.preview, styles[variant])} aria-hidden="true">
      <div className={styles.browser} data-preview-browser>
        <div className={styles.toolbar}>
          <span>● ● ●</span>
          <span>{label}</span>
          <span>↗</span>
        </div>
        {children}
      </div>
      <span className={styles.caption}>{caption}</span>
    </div>
  )
}
