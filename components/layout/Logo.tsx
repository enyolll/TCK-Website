import Image from 'next/image'
import { cn } from '@/lib/cn'

export function Logo({
  className,
  tone = 'ink',
}: {
  className?: string
  tone?: 'ink' | 'white'
}) {
  if (tone === 'white') {
    return (
      <span
        className={cn('inline-flex items-baseline gap-2 font-semibold', className)}
        aria-label="TCK"
      >
        <span className="text-[22px] tracking-[0.2em] leading-none text-white">TCK</span>
        <span aria-hidden className="h-1 w-1 rounded-full bg-white/60" />
      </span>
    )
  }

  return (
    <span className={cn('inline-flex items-center', className)} aria-label="TCK">
      <Image
        src="/logo/tck.jpg"
        alt="TCK"
        width={90}
        height={36}
        className="object-contain"
        priority
      />
    </span>
  )
}
