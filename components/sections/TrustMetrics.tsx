import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const METRICS = [
  { value: 13, suffix: '+', key: 'experience' as const },
  { value: 70, suffix: '+', key: 'projects' as const },
  { value: 30, suffix: '+', key: 'suppliers' as const },
  { value: 6, suffix: '+', key: 'countries' as const },
]

export function TrustMetrics() {
  const t = useTranslations('home.metrics')
  return (
    <Section tone="surface" size="sm">
      <Container>
        <div className="mb-10 max-w-xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
            {t('title')}
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10">
          {METRICS.map((m) => (
            <div
              key={m.key}
              className="border-l border-[var(--color-border)] pl-6"
            >
              <dt className="sr-only">{t(`items.${m.key}`)}</dt>
              <dd>
                <span className="block text-[44px] lg:text-[56px] font-semibold tracking-tight text-[var(--color-ink)]">
                  <AnimatedCounter value={m.value} suffix={m.suffix} />
                </span>
                <span className="mt-3 block text-[14px] leading-snug text-[var(--color-muted)]">
                  {t(`items.${m.key}`)}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  )
}
