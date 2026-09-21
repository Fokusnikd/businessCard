import { Brand, Container, TextLink } from '@/components/atoms'

import styles from './Footer.module.css'

type FooterProps = {
  initials: string
  credit: string
  toTop: string
}

export function Footer({ initials, credit, toTop }: FooterProps) {
  return (
    <Container as="footer" className={styles.footer}>
      <Brand href="#main" initials={initials} />
      <span className={styles.credit}>{credit}</span>
      <TextLink href="#main" className={styles.toTop}>
        {toTop}
      </TextLink>
    </Container>
  )
}
