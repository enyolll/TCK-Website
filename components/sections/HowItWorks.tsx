import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'

const STEPS = ['inquiry', 'evaluation', 'execution'] as const

export function HowItWorks() {
  const t = useTranslations('home.process')
  return (
    <Section tone="surface-2">
      <Container>
        <div className="mb-14 max-w-2xl">
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <h2 className="mt-5 text-[34px] lg:text-[44px] font-semibold text-[var(--color-ink)]">
            {t('title')}
          </h2>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[34px] hidden h-px bg-gradient-to-r from-[var(--color-border)] via-[var(--color-brand)]/40 to-[var(--color-border)] lg:block"
          />
          <ol className="relative grid gap-10 lg:grid-cols-3 lg:gap-8">
            {STEPS.map((step, idx) => (
              <li key={step} className="relative">
                <div className="flex items-center gap-4">
                  <span className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[22px] font-semibold tabular-nums text-[var(--color-brand)] shadow-[var(--shadow-card)]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 text-[20px] font-semibold text-[var(--color-ink)]">
                  {t(`steps.${step}.title`)}
                </h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[var(--color-muted)]">
                  {t(`steps.${step}.body`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  )
}
