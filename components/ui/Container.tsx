import { cn } from '@/lib/cn'

export function Container({
  className,
  children,
  as: Component = 'div',
}: {
  className?: string
  children: React.ReactNode
  as?: keyof React.JSX.IntrinsicElements
}) {
  return (
    <Component className={cn('mx-auto w-full max-w-7xl px-6 lg:px-10', className)}>
      {children}
    </Component>
  )
}
