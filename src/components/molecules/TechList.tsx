import styles from './TechList.module.css'

type TechListProps = {
  items: readonly string[]
  ariaLabel: string
}

export function TechList({ items, ariaLabel }: TechListProps) {
  return (
    <ul className={styles.list} aria-label={ariaLabel}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
