import { useTranslations } from 'next-intl'
import { ArrowRight, Mail } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { buttonClasses } from '@/components/ui/Button'
import { TCK_CONTACT } from '@/lib/contact'

export function FinalCTA() {
  const t = useTranslations('home.finalCta')
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)] py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(20,48,85,0.06), transparent 55%), radial-gradient(circle at 10% 90%, rgba(176,141,87,0.05), transparent 55%)',
        }}
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">{t('eyebrow')}</Eyebrow>
          <h2 className="mt-6 text-[40px] lg:text-[60px] font-semibold tracking-tight text-[var(--color-ink)]">
            {t('title')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-[var(--color-muted)]">
            {t('sub')}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className={buttonClasses('primary', 'lg')}
            >
              {t('primary')}
              <ArrowRight size={16} />
            </Link>
            <a
              href={`mailto:${TCK_CONTACT.email}`}
              className={buttonClasses('secondary', 'lg')}
            >
              <Mail size={16} />
              {t('secondary')}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
