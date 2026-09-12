import type { ReactNode } from 'react'

import { SkipLink } from '@/components/atoms'

type SiteLayoutProps = {
  skipLabel: string
  header: ReactNode
  footer: ReactNode
  children: ReactNode
}

export function SiteLayout({ skipLabel, header, footer, children }: SiteLayoutProps) {
  return (
    <>
      <SkipLink>{skipLabel}</SkipLink>
      {header}
      <main id="main">{children}</main>
      {footer}
    </>
  )
}
