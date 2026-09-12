import { Brand, Container, TextLink } from '@/components/atoms'

import styles from './Footer.module.css'

type FooterProps = {
  credit: string
  toTop: string
}

export function Footer({ credit, toTop }: FooterProps) {
  return (
    <Container as="footer" className={styles.footer}>
      <Brand href="#main" />
      <span className={styles.credit}>{credit}</span>
      <TextLink href="#main" className={styles.toTop}>
        {toTop}
      </TextLink>
    </Container>
  )
}
