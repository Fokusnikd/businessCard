import { Brand, Container } from '@/components/atoms'
import { Nav } from '@/components/molecules'
import type { NavItem } from '@/content/site'
import styles from './Header.module.css'

type HeaderProps = {
  brandAriaLabel: string
  nav: readonly NavItem[]
}

export function Header({ brandAriaLabel, nav }: HeaderProps) {
  return (
    <Container as="header" className={styles.header}>
      <Brand href="#main" ariaLabel={brandAriaLabel} />
      <Nav items={nav} />
    </Container>
  )
}
