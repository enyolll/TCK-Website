'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { Link, usePathname } from '@/i18n/navigation'
import { Container } from '@/components/ui/Container'
import { LocaleSwitcher } from '@/components/layout/LocaleSwitcher'
import { Logo } from '@/components/layout/Logo'
import { buttonClasses } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

const NAV = [
  { href: '/services', key: 'services' as const },
  { href: '/industries', key: 'industries' as const },
  { href: '/about', key: 'about' as const },
  { href: '/contact', key: 'contact' as const },
]

export function Header() {
  const t = useTranslations('nav')
  const tCta = useTranslations('cta')
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b transition-all duration-300',
        scrolled
          ? 'border-[var(--color-border)] bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70'
          : 'border-transparent bg-white',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" className="-ml-1 px-1 py-2" aria-label="TCK home">
          <Logo />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-1 text-[14px] font-medium text-[var(--color-muted)]"
        >
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'rounded-md px-3 py-2 transition-colors hover:text-[var(--color-ink)]',
                  active && 'text-[var(--color-ink)]',
                )}
              >
                {t(item.key)}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LocaleSwitcher />
          <Link href="/contact" className={buttonClasses('primary', 'sm')}>
            {tCta('requestConsultation')}
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? t('close') : t('menu')}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-[var(--color-ink)] hover:bg-[var(--color-surface)]"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white">
          <Container className="py-6">
            <nav aria-label="Mobile" className="flex flex-col gap-1 text-[16px]">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 hover:bg-[var(--color-surface)]"
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6">
              <LocaleSwitcher />
              <Link
                href="/contact"
                className={buttonClasses('primary', 'sm')}
              >
                {tCta('requestConsultation')}
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
