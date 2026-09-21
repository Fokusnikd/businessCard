import type { ReactNode } from 'react'

type TextLinkProps = {
  href: string
  className?: string
  children: ReactNode
  external?: boolean
  ariaLabel?: string
}

export function TextLink({ href, className, children, external, ariaLabel }: TextLinkProps) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
