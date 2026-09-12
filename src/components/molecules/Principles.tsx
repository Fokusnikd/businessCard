import type { Principle } from '@/content/site'

import styles from './Principles.module.css'

type PrinciplesProps = {
  items: readonly Principle[]
}

export function Principles({ items }: PrinciplesProps) {
  return (
    <div className={styles.principles}>
      {items.map((item) => (
        <span key={item.index}>
          <b>{item.index}</b> {item.label}
        </span>
      ))}
    </div>
  )
}
