import { ArrowHint, TextLink } from '@/components/atoms'
import type { NavItem } from '@/content/site'
import { cx } from '@/shared/lib/cx'

import styles from './Nav.module.css'

type NavProps = {
  items: readonly NavItem[]
}

export function Nav({ items }: NavProps) {
  return (
    <nav className={styles.nav} aria-label="Главная навигация">
      {items.map((item) => (
        <TextLink
          key={item.href}
          href={item.href}
          className={cx(styles.link, item.variant === 'contact' && styles.contact)}
        >
          {item.label}
          {item.variant === 'contact' ? (
            <>
              {' '}
              <ArrowHint />
            </>
          ) : null}
        </TextLink>
      ))}
    </nav>
  )
}
