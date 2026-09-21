type ApertureMarkProps = {
  className?: string
  size?: number
}

export function ApertureMark({ className, size = 28 }: ApertureMarkProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="16" cy="16" r="14.25" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="8.2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="2.4" fill="currentColor" />
      <path
        d="M16 2.4v4.2M16 25.4v4.2M2.4 16h4.2M25.4 16h4.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  )
}
