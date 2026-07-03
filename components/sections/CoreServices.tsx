import { useTranslations } from 'next-intl'
import {
  Boxes,
  Compass,
  MessagesSquare,
  FlaskConical,
  ClipboardCheck,
  Wrench,
  ArrowRight,
} from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Card } from '@/components/ui/Card'

const SERVICES = [
  { key: 'sourcing' as const, Icon: Boxes, anchor: 'sourcing' },
  { key: 'marketEntry' as const, Icon: Compass, anchor: 'market-entry' },
  { key: 'communication' as const, Icon: MessagesSquare, anchor: 'communication' },
  { key: 'supplements' as const, Icon: FlaskConical, anchor: 'supplements' },
  { key: 'qc' as const, Icon: ClipboardCheck, anchor: 'qc' },
  { key: 'industrial' as const, Icon: Wrench, anchor: 'technical' },
]

export function CoreServices() {
  const t = useTranslations('home.services')
  const tCta = useTranslations('cta')

  return (
    <Section tone="default">
      <Container>
        <div className="mb-14 max-w-2xl">
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <h2 className="mt-5 text-[34px] lg:text-[48px] font-semibold text-[var(--color-ink)]">
            {t('title')}
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[var(--color-muted)]">
            {t('sub')}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ key, Icon, anchor }) => (
            <Card key={key} interactive>
              <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-brand-soft)] text-[var(--color-brand)]">
                <Icon size={20} strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-[20px] font-semibold text-[var(--color-ink)]">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
                {t(`items.${key}.body`)}
              </p>
              <Link
                href={{ pathname: '/services', hash: anchor }}
                className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--color-brand)] transition-colors hover:text-[var(--color-brand-deep)]"
              >
                {tCta('learnMore')}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
