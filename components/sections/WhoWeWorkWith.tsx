import { useTranslations } from 'next-intl'
import {
  Ship,
  Leaf,
  Package,
  ShieldCheck,
  MapPin,
  Handshake,
  Building2,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'

const ITEMS = [
  { key: 'importers' as const, Icon: Ship },
  { key: 'supplements' as const, Icon: Leaf },
  { key: 'sourcing' as const, Icon: Package },
  { key: 'qc' as const, Icon: ShieldCheck },
  { key: 'marketEntry' as const, Icon: MapPin },
  { key: 'distributors' as const, Icon: Handshake },
  { key: 'setup' as const, Icon: Building2 },
]

export function WhoWeWorkWith() {
  const t = useTranslations('home.audience')
  return (
    <Section tone="surface">
      <Container>
        <div className="mb-14 max-w-2xl">
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <h2 className="mt-5 text-[34px] lg:text-[48px] font-semibold text-[var(--color-ink)]">
            {t('title')}
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ key, Icon }) => (
            <div
              key={key}
              className="group bg-white p-7 transition-colors duration-300 hover:bg-[var(--color-brand-soft)]/60"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-brand)]/8 text-[var(--color-brand)] transition-colors group-hover:bg-[var(--color-brand)] group-hover:text-white">
                <Icon size={18} strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 text-[18px] font-semibold text-[var(--color-ink)]">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-muted)]">
                {t(`items.${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
