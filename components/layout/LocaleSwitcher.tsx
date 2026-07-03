'use client'

import { useLocale } from 'next-intl'
import { useTransition } from 'react'
import { useParams } from 'next/navigation'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/cn'

const LABELS: Record<string, string> = {
  en: 'EN',
  ko: 'KO',
  de: 'DE',
}

export function LocaleSwitcher({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isPending, startTransition] = useTransition()

  const change = (next: string) => {
    if (next === locale) return
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- params from useParams isn't typed against routes
        { pathname, params },
        { locale: next },
      )
    })
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        'inline-flex items-center rounded-full border p-0.5 text-[12px] font-medium tracking-wider',
        tone === 'dark'
          ? 'border-white/20 bg-white/5 text-white/80'
          : 'border-[var(--color-border)] bg-white text-[var(--color-muted)]',
        isPending && 'opacity-70',
      )}
    >
      {routing.locales.map((l) => {
        const active = l === locale
        return (
          <button
            key={l}
            type="button"
            onClick={() => change(l)}
            aria-pressed={active}
            className={cn(
              'rounded-full px-2.5 py-1 transition-colors',
              active
                ? tone === 'dark'
                  ? 'bg-white text-[var(--color-brand-deep)]'
                  : 'bg-[var(--color-brand)] text-white'
                : 'hover:text-[var(--color-ink)]',
            )}
          >
            {LABELS[l]}
          </button>
        )
      })}
    </div>
  )
}
