'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'

const WHY_ITEMS = ['presence', 'fluency', 'execution', 'endToEnd', 'prevention'] as const

export function WhyTCK() {
  const t = useTranslations('home.whyTck')
  return (
    <Section tone="surface-2">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>{t('eyebrow')}</Eyebrow>
            <h2 className="mt-5 text-[32px] lg:text-[40px] font-semibold text-[var(--color-ink)] leading-tight">
              {t('title')}
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[var(--color-muted)]">
              {t('sub')}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-[var(--color-brand)] hover:text-[var(--color-brand-deep)]"
            >
              Discuss your project
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="lg:col-span-8">
            {WHY_ITEMS.map((key) => (
              <div key={key} className="border-t border-[var(--color-border)] py-6">
                <p className="text-[32px] font-semibold leading-none text-[var(--color-brand)]/15 select-none">
                  {t(`items.${key}.num`)}
                </p>
                <h3 className="mt-2 text-[18px] font-semibold text-[var(--color-ink)]">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-muted)]">
                  {t(`items.${key}.body`)}
                </p>
              </div>
            ))}
            <div className="border-t border-[var(--color-border)]" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
