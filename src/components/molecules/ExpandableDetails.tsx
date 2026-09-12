import { ArrowHint } from '@/components/atoms'

import styles from './ExpandableDetails.module.css'

type ExpandableDetailsProps = {
  title: string
  children: string
}

export function ExpandableDetails({ title, children }: ExpandableDetailsProps) {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}>
        {title} <ArrowHint className={styles.icon}>+</ArrowHint>
      </summary>
      <p className={styles.text}>{children}</p>
    </details>
  )
}
