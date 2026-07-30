import type { ReactNode } from 'react'

/**
 * Safebiz Solutions — Badge
 * Pastilă mică de etichetă.
 *
 * ⚠️ Toate cele 5 variante sunt folosite de template-urile din Batch 1:
 *   default → categorie pe card · brand → filtru ACTIV · outline → filtru inactiv / tag
 * Nu reduce lista. O variantă lipsă nu dă eroare — cade tăcut pe `default`,
 * iar banda de filtre își pierde complet distincția activ/inactiv.
 */
export type BadgeVariant = 'default' | 'brand' | 'success' | 'ink' | 'outline'

export function Badge({
  children,
  variant = 'default',
}: {
  children: ReactNode
  variant?: BadgeVariant
}) {
  return <span className={variant === 'default' ? 'badge' : `badge badge--${variant}`}>{children}</span>
}
