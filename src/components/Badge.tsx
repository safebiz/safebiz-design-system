import type { ReactNode } from 'react'

export function Badge({
  children,
  variant = 'default',
}: {
  children: ReactNode
  variant?: 'default' | 'success'
}) {
  return <span className={variant === 'success' ? 'badge badge--success' : 'badge'}>{children}</span>
}
