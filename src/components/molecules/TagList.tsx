import { Tag } from '@/components/atoms'

import styles from './TagList.module.css'

type TagListProps = {
  items: readonly string[]
}

export function TagList({ items }: TagListProps) {
  return (
    <ul className={styles.tags}>
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  )
}
