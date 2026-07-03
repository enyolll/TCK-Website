import { cn } from '@/lib/cn'

type Tone = 'default' | 'surface' | 'surface-2' | 'navy'

const toneClass: Record<Tone, string> = {
  default: 'bg-[var(--color-bg)]',
  surface: 'bg-[var(--color-surface)]',
  'surface-2': 'bg-[var(--color-surface-2)]',
  navy: 'bg-[var(--color-brand)] text-white',
}

export function Section({
  id,
  tone = 'default',
  size = 'md',
  className,
  children,
}: {
  id?: string
  tone?: Tone
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}) {
  const padding =
    size === 'sm'
      ? 'py-14 lg:py-20'
      : size === 'lg'
        ? 'py-24 lg:py-36'
        : 'py-20 lg:py-28'
  return (
    <section id={id} className={cn(toneClass[tone], padding, className)}>
      {children}
    </section>
  )
}
