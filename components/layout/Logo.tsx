import Image from 'next/image'
import { cn } from '@/lib/cn'

export function Logo({
  className,
  tone = 'ink',
  src = '/logo/TCK_Logo_TR.png',
}: {
  className?: string
  tone?: 'ink' | 'white'
  src?: string
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
        src={src}
        alt="TCK"
        width={64}
        height={20}
        className="object-contain w-full h-auto max-w-[210px]"
        priority
      />
    </span>
  )
}