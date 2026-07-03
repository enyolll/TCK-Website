import { cn } from '@/lib/cn'

export function Card({
  className,
  children,
  interactive = false,
}: {
  className?: string
  children: React.ReactNode
  interactive?: boolean
}) {
  return (
    <div
      className={cn(
        'group rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-7 lg:p-8 shadow-[var(--shadow-card)] transition-all duration-300',
        interactive &&
          'hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-brand)]/30',
        className,
      )}
    >
      {children}
    </div>
  )
}
