import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '@/lib/cn'

const buttonStyles = cva(
  'inline-flex items-center justify-center gap-2 font-medium tracking-tight rounded-[var(--radius-md)] transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-deep)]',
        secondary:
          'bg-white text-[var(--color-ink)] border border-[var(--color-border)] hover:border-[var(--color-ink)]',
        ghost:
          'bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-surface)]',
        white:
          'bg-white text-[var(--color-brand-deep)] hover:bg-white/90',
        outlineWhite:
          'bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white/70',
      },
      size: {
        sm: 'h-9 px-4 text-[14px]',
        md: 'h-11 px-5 text-[15px]',
        lg: 'h-12 px-6 text-[16px]',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    />
  ),
)
Button.displayName = 'Button'

export function buttonClasses(
  variant: VariantProps<typeof buttonStyles>['variant'] = 'primary',
  size: VariantProps<typeof buttonStyles>['size'] = 'md',
  extra?: string,
) {
  return cn(buttonStyles({ variant, size }), extra)
}
