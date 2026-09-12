import { cx } from '@/shared/lib/cx'

type ArrowHintProps = {
  children?: string
  className?: string
}

export function ArrowHint({ children = '↗', className }: ArrowHintProps) {
  return (
    <span aria-hidden="true" className={cx(className)}>
      {children}
    </span>
  )
}
