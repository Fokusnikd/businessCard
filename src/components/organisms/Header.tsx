import { Brand, Container } from '@/components/atoms'
import { Nav } from '@/components/molecules'
import type { NavItem } from '@/content/site'
import styles from './Header.module.css'

type HeaderProps = {
  brandAriaLabel: string
  initials: string
  nav: readonly NavItem[]
}

export function Header({ brandAriaLabel, initials, nav }: HeaderProps) {
  return (
    <header className={styles.bar}>
      <Container className={styles.header}>
        <Brand href="#main" ariaLabel={brandAriaLabel} initials={initials} />
        <Nav items={nav} />
      </Container>
    </header>
  )
}
