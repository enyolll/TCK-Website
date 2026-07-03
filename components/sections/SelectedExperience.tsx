import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { PARTNERS, PARTNER_CATEGORIES, type PartnerCategory } from '@/lib/partners'

const CATEGORY_KEY: Record<PartnerCategory, string> = {
  'Food & Beverage': 'food',
  'Health Supplements': 'supplements',
  'Cosmetics': 'cosmetics',
  'Beer Brands': 'beer',
  'Industrial / Logistics': 'industrial',
}

function logoColumns(count: number): number {
  if (count <= 7) return count
  for (const c of [5, 6, 4, 3]) {
    if (count % c === 0) return c
  }
  return 5
}

export function SelectedExperience() {
  const t = useTranslations('home.experience')
  return (
    <Section tone="default">
      <Container>
        <div className="mb-14 max-w-2xl">
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <h2 className="mt-5 text-[34px] lg:text-[44px] font-semibold text-[var(--color-ink)]">
            {t('title')}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-muted)]">
            {t('sub')}
          </p>
        </div>

        <div className="space-y-12">
          {PARTNER_CATEGORIES.map((category) => {
            const list = PARTNERS.filter((p) => p.category === category)
            if (list.length === 0) return null
            return (
              <div key={category}>
                <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {t(`categories.${CATEGORY_KEY[category]}`)}
                </p>
                <div
                  className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-border)]"
                  style={{ gridTemplateColumns: `repeat(${logoColumns(list.length)}, 1fr)` }}
                >
                  {list.map((p) => (
                    <div
                      key={p.name}
                      className="flex aspect-[3/2] items-center justify-center bg-white p-6"
                      title={p.name}
                    >
                      <div className="logo-mono relative h-full w-full">
                        <Image
                          src={p.file}
                          alt={p.name}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                          className="object-contain"
                          unoptimized={p.file.endsWith('.svg')}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
