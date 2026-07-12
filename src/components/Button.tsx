import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'on-dark'

export function Button({
  children,
  variant = 'primary',
  href = '#',
}: {
  children: ReactNode
  variant?: Variant
  href?: string
}) {
  return (
    <a className={`btn btn--${variant}`} href={href}>
      {children}
    </a>
  )
}
