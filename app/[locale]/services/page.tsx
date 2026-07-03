import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { buttonClasses } from '@/components/ui/Button'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { buildAlternates } from '@/lib/seo'

const SERVICE_KEYS = [
  { key: 'sourcing', anchor: 'sourcing' },
  { key: 'marketEntry', anchor: 'market-entry' },
  { key: 'communication', anchor: 'communication' },
  { key: 'supplements', anchor: 'supplements' },
  { key: 'technical', anchor: 'technical' },
  { key: 'qc', anchor: 'qc' },
  { key: 'setup', anchor: 'setup' },
] as const

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services.hero' })
  const tNav = await getTranslations({ locale, namespace: 'nav' })
  return {
    title: tNav('services'),
    description: t('sub'),
    alternates: buildAlternates('/services'),
  }
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <ServicesContent />
}

function ServicesContent() {
  const t = useTranslations('services')
  const tCta = useTranslations('cta')

  return (
    <>
      <Section tone="surface" size="md">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>{t('hero.eyebrow')}</Eyebrow>
            <h1 className="mt-6 text-[42px] lg:text-[64px] font-semibold tracking-tight text-[var(--color-ink)]">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-[18px] leading-relaxed text-[var(--color-muted)]">
              {t('hero.sub')}
            </p>
          </div>
        </Container>
      </Section>

      <div className="border-t border-[var(--color-border)]" />

      <Section tone="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Sticky sub-nav */}
            <aside className="hidden lg:col-span-3 lg:block">
              <nav
                aria-label="Services"
                className="sticky top-28 space-y-1 text-[14px]"
              >
                <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {t('hero.eyebrow')}
                </p>
                {SERVICE_KEYS.map(({ key, anchor }) => (
                  <a
                    key={key}
                    href={`#${anchor}`}
                    className="block rounded-md px-3 py-2 text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]"
                  >
                    {t(`sections.${key}.title`)}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="lg:col-span-9">
              <ul className="space-y-24">
                {SERVICE_KEYS.map(({ key, anchor }, idx) => (
                  <li
                    key={key}
                    id={anchor}
                    className="scroll-mt-24 border-t border-[var(--color-border)] pt-12 first:border-t-0 first:pt-0"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-[28px] lg:text-[36px] font-semibold tracking-tight text-[var(--color-ink)]">
                        {t(`sections.${key}.title`)}
                      </h2>
                    </div>
                    <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-[var(--color-muted)]">
                      {t(`sections.${key}.overview`)}
                    </p>

                    <div className="mt-8 grid gap-8 lg:grid-cols-12">
                      <ul className="lg:col-span-7 space-y-3">
                        {(t.raw(`sections.${key}.items`) as string[]).map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-[15px] text-[var(--color-ink)]"
                          >
                            <Check
                              size={16}
                              className="mt-1 shrink-0 text-[var(--color-brand)]"
                              strokeWidth={2}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <aside className="lg:col-span-5 rounded-[var(--radius-lg)] bg-[var(--color-brand-soft)] p-6">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                          Outcome
                        </p>
                        <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]">
                          {t(`sections.${key}.benefits`)}
                        </p>
                      </aside>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-16 flex flex-wrap gap-3 border-t border-[var(--color-border)] pt-10">
                <Link href="/contact" className={buttonClasses('primary', 'lg')}>
                  {tCta('discussProject')}
                  <ArrowRight size={16} />
                </Link>
                <Link href="/industries" className={buttonClasses('secondary', 'lg')}>
                  {tCta('learnMore')}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
