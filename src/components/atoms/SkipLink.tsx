import styles from './SkipLink.module.css'

type SkipLinkProps = {
  children: string
}

export function SkipLink({ children }: SkipLinkProps) {
  return (
    <a className={styles.skip} href="#main">
      {children}
    </a>
  )
}
