import { ArrowHint, TextLink } from '@/components/atoms'

import styles from './HeroBottom.module.css'

type HeroBottomProps = {
  note: string
  scroll: string
  href: string
}

export function HeroBottom({ note, scroll, href }: HeroBottomProps) {
  return (
    <div className={styles.bottom}>
      <span>{note}</span>
      <TextLink href={href} className={styles.link}>
        {scroll} <ArrowHint>↓</ArrowHint>
      </TextLink>
    </div>
  )
}
