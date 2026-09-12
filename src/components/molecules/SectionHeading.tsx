import type { ReactNode } from 'react'

import styles from './SectionHeading.module.css'

type SectionHeadingProps = {
  eyebrow: ReactNode
  title: ReactNode
  note?: string
}

export function SectionHeading({ eyebrow, title, note }: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <div>
        {eyebrow}
        {title}
      </div>
      {note ? <span className={styles.note}>{note}</span> : null}
    </div>
  )
}
