import styles from './Tag.module.css'

type TagProps = {
  children: string
}

export function Tag({ children }: TagProps) {
  return <li className={styles.tag}>{children}</li>
}
