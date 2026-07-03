import { useTranslations, useLocale } from 'next-intl'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/layout/Logo'
import { LocaleSwitcher } from '@/components/layout/LocaleSwitcher'
import { TCK_CONTACT } from '@/lib/contact'

export function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale()
  const year = new Date().getFullYear()
  const address = locale === 'ko' ? TCK_CONTACT.addressKo : TCK_CONTACT.addressEn

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[var(--color-muted)]">
            {t('description')}
          </p>
          <div className="mt-6 space-y-2 text-[14px] text-[var(--color-muted)]">
            <p className="flex items-start gap-2">
              <MapPin size={15} className="mt-1 shrink-0 text-[var(--color-brand)]" />
              <span>{address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={15} className="text-[var(--color-brand)]" />
              <a
                href={`mailto:${TCK_CONTACT.email}`}
                className="hover:text-[var(--color-ink)]"
              >
                {TCK_CONTACT.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={15} className="text-[var(--color-brand)]" />
              <a
                href={TCK_CONTACT.phoneHref}
                className="hover:text-[var(--color-ink)]"
              >
                {TCK_CONTACT.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
            {t('company')}
          </h3>
          <ul className="space-y-3 text-[14px] text-[var(--color-muted)]">
            <li>
              <Link href="/about" className="hover:text-[var(--color-ink)]">
                {tNav('about')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--color-ink)]">
                {tNav('contact')}
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
            {t('services')}
          </h3>
          <ul className="space-y-3 text-[14px] text-[var(--color-muted)]">
            <li>
              <Link href="/services" className="hover:text-[var(--color-ink)]">
                {tNav('services')}
              </Link>
            </li>
            <li>
              <Link href="/industries" className="hover:text-[var(--color-ink)]">
                {tNav('industries')}
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
            {tNav('language')}
          </h3>
          <LocaleSwitcher />
          <p className="mt-6 text-[13px] text-[var(--color-muted)]">
            EN · KO · DE
          </p>
        </div>
      </Container>

      <div className="border-t border-[var(--color-border)]">
        <Container className="flex flex-col items-start justify-between gap-3 py-5 text-[13px] text-[var(--color-muted)] sm:flex-row sm:items-center">
          <p>
            © {year} TCK · {TCK_CONTACT.ceo}. {t('rights')}
          </p>
          <p>{TCK_CONTACT.country}</p>
        </Container>
      </div>
    </footer>
  )
}
