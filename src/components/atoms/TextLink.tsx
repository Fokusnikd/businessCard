import type { ReactNode } from 'react'

type TextLinkProps = {
  href: string
  className?: string
  children: ReactNode
}

export function TextLink({ href, className, children }: TextLinkProps) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
