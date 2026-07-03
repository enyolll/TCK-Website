import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { TCK_CONTACT } from '@/lib/contact'
import { buildAlternates } from '@/lib/seo'

const TIMELINE_KEYS = ['y2008', 'y2012', 'y2018', 'y2024'] as const
const EXPERTISE_KEYS = [
  'sourcing',
  'regulatory',
  'oem',
  'qc',
  'negotiation',
  'operations',
] as const
const APPROACH_KEYS = ['direct', 'trilingual', 'honest', 'longterm'] as const

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about.hero' })
  const tNav = await getTranslations({ locale, namespace: 'nav' })
  return {
    title: tNav('about'),
    description: t('sub'),
    alternates: buildAlternates('/about'),
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <AboutContent />
}

function AboutContent() {
  const t = useTranslations('about')
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

      <Section tone="default">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                <Image
                  src="/team/markus-rathenow.png"
                  alt={`${TCK_CONTACT.ceo}, ${TCK_CONTACT.ceoTitle}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/30"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-[28px] lg:text-[36px] font-semibold tracking-tight text-[var(--color-ink)]">
                {t('founder.title')}
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-[var(--color-muted)]">
                {t('founder.body1')}
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-muted)]">
                {t('founder.body2')}
              </p>

              <figure className="mt-10 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-brand-soft)]/40 p-7">
                <Quote
                  size={20}
                  className="text-[var(--color-brand)]"
                  strokeWidth={1.6}
                />
                <blockquote className="mt-3 text-[18px] leading-relaxed text-[var(--color-ink)]">
                  {t('founder.quote')}
                </blockquote>
                <figcaption className="mt-4 text-[13px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  — {TCK_CONTACT.ceo}
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-[28px] lg:text-[34px] font-semibold tracking-tight text-[var(--color-ink)]">
                {t('timeline.title')}
              </h2>
            </div>
            <ol className="lg:col-span-8 space-y-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-border)]">
              {TIMELINE_KEYS.map((k) => (
                <li
                  key={k}
                  className="grid gap-2 bg-white p-6 sm:grid-cols-[140px_1fr] sm:items-start sm:gap-8"
                >
                  <span className="text-[20px] font-semibold tabular-nums text-[var(--color-brand)]">
                    {t(`timeline.items.${k}.year`)}
                  </span>
                  <span className="text-[15px] leading-relaxed text-[var(--color-ink)]">
                    {t(`timeline.items.${k}.label`)}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section tone="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-[28px] lg:text-[34px] font-semibold tracking-tight text-[var(--color-ink)]">
                {t('expertise.title')}
              </h2>
            </div>
            <ul className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
              {EXPERTISE_KEYS.map((k) => (
                <li
                  key={k}
                  className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-5 text-[15px] text-[var(--color-ink)]"
                >
                  {t(`expertise.items.${k}`)}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="surface-2">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-[28px] lg:text-[34px] font-semibold tracking-tight text-[var(--color-ink)]">
                {t('approach.title')}
              </h2>
            </div>
            <div className="lg:col-span-8 grid gap-5 sm:grid-cols-2">
              {APPROACH_KEYS.map((k) => (
                <div
                  key={k}
                  className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-7"
                >
                  <h3 className="text-[18px] font-semibold text-[var(--color-ink)]">
                    {t(`approach.items.${k}.title`)}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
                    {t(`approach.items.${k}.body`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
