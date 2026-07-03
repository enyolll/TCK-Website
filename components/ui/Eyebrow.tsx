import { cn } from '@/lib/cn'

export function Eyebrow({
  children,
  tone = 'brand',
  className,
}: {
  children: React.ReactNode
  tone?: 'brand' | 'accent' | 'muted' | 'white'
  className?: string
}) {
  const color =
    tone === 'accent'
      ? 'text-[var(--color-accent)]'
      : tone === 'muted'
        ? 'text-[var(--color-muted)]'
        : tone === 'white'
          ? 'text-white/70'
          : 'text-[var(--color-brand)]'
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em]',
        color,
        className,
      )}
    >
      <span aria-hidden className="inline-block h-px w-6 bg-current opacity-60" />
      {children}
    </p>
  )
}
