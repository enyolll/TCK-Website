import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ArrowRight, Languages, MapPin, Hand, Globe2 } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { TCK_CONTACT } from '@/lib/contact'

const HIGHLIGHTS = [
  { key: 'trilingual' as const, Icon: Languages },
  { key: 'based' as const, Icon: MapPin },
  { key: 'handson' as const, Icon: Hand },
  { key: 'cross' as const, Icon: Globe2 },
]

export function AboutPreview() {
  const t = useTranslations('home.about')
  return (
    <Section tone="surface">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
              <Image
                src="/team/markus-rathenow.png"
                alt={`${TCK_CONTACT.ceo}, ${TCK_CONTACT.ceoTitle}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
                priority={false}
              />
              {/* Soft right-side gradient to mute any background distractions */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/30"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] lg:-right-10 lg:left-auto lg:w-72">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {TCK_CONTACT.ceoTitle}
              </p>
              <p className="mt-1 text-[18px] font-semibold text-[var(--color-ink)]">
                {TCK_CONTACT.ceo}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-4">
            <Eyebrow>{t('eyebrow')}</Eyebrow>
            <h2 className="mt-5 text-[32px] lg:text-[44px] font-semibold text-[var(--color-ink)]">
              {t('title')}
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-[var(--color-muted)]">
              {t('body')}
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {HIGHLIGHTS.map(({ key, Icon }) => (
                <li
                  key={key}
                  className="flex items-start gap-3 border-t border-[var(--color-border)] pt-4"
                >
                  <Icon
                    size={18}
                    strokeWidth={1.7}
                    className="mt-0.5 text-[var(--color-brand)]"
                  />
                  <span className="text-[15px] text-[var(--color-ink)]">
                    {t(`highlights.${key}`)}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-[15px] font-medium text-[var(--color-brand)] hover:text-[var(--color-brand-deep)]"
            >
              {t('cta')}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
