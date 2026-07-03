import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import {
  Leaf,
  UtensilsCrossed,
  Factory,
  PackageOpen,
  Sparkles,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { buildAlternates } from '@/lib/seo'

const ITEMS = [
  { key: 'supplements', Icon: Leaf, accent: 'OEM · KFDA' },
  { key: 'food', Icon: UtensilsCrossed, accent: 'HACCP · Cold chain' },
  { key: 'industrial', Icon: Factory, accent: 'Installation · Training' },
  { key: 'raw', Icon: PackageOpen, accent: 'QC · Traceability' },
  { key: 'cosmetics', Icon: Sparkles, accent: 'Registration · Channel' },
] as const

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'industries.hero' })
  const tNav = await getTranslations({ locale, namespace: 'nav' })
  return {
    title: tNav('industries'),
    description: t('sub'),
    alternates: buildAlternates('/industries'),
  }
}

export default async function IndustriesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <IndustriesContent />
}

function IndustriesContent() {
  const t = useTranslations('industries')
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
          <div className="space-y-20 lg:space-y-32">
            {ITEMS.map(({ key, Icon, accent }, idx) => {
              const reverse = idx % 2 === 1
              return (
                <article
                  key={key}
                  className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
                >
                  <div className={reverse ? 'lg:order-2 lg:col-span-7' : 'lg:col-span-7'}>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      {String(idx + 1).padStart(2, '0')} · {accent}
                    </span>
                    <h2 className="mt-5 text-[32px] lg:text-[44px] font-semibold tracking-tight text-[var(--color-ink)]">
                      {t(`items.${key}.title`)}
                    </h2>
                    <p className="mt-6 text-[17px] leading-relaxed text-[var(--color-muted)]">
                      {t(`items.${key}.body1`)}
                    </p>
                    <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-muted)]">
                      {t(`items.${key}.body2`)}
                    </p>
                  </div>
                  <div
                    className={
                      reverse ? 'lg:order-1 lg:col-span-5' : 'lg:col-span-5'
                    }
                  >
                    <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-brand-soft)] via-white to-[var(--color-surface)]">
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-[0.05]"
                        style={{
                          backgroundImage:
                            'linear-gradient(rgba(11,27,43,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(11,27,43,0.4) 1px, transparent 1px)',
                          backgroundSize: '40px 40px',
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-[var(--shadow-card)] ring-1 ring-[var(--color-border)]">
                          <Icon size={36} strokeWidth={1.4} className="text-[var(--color-brand)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
