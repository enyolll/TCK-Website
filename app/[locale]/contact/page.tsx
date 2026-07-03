import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { useLocale, useTranslations } from 'next-intl'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ContactForm } from '@/components/forms/ContactForm'
import { TCK_CONTACT } from '@/lib/contact'
import { buildAlternates } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact.hero' })
  const tNav = await getTranslations({ locale, namespace: 'nav' })
  return {
    title: tNav('contact'),
    description: t('sub'),
    alternates: buildAlternates('/contact'),
  }
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <ContactContent />
}

function ContactContent() {
  const t = useTranslations('contact')
  const locale = useLocale()
  const address = locale === 'ko' ? TCK_CONTACT.addressKo : TCK_CONTACT.addressEn
  const mapQuery = encodeURIComponent(TCK_CONTACT.addressEn)

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
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <aside className="lg:col-span-5">
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-card)]">
                <h2 className="text-[20px] font-semibold text-[var(--color-ink)]">
                  {t('office.title')}
                </h2>

                <dl className="mt-6 space-y-5 text-[14px]">
                  <div>
                    <dt className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                      <MapPin size={14} className="text-[var(--color-brand)]" />
                      {t('office.addressLabel')}
                    </dt>
                    <dd className="mt-2 text-[15px] leading-relaxed text-[var(--color-ink)]">
                      {address}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                      <Mail size={14} className="text-[var(--color-brand)]" />
                      {t('office.emailLabel')}
                    </dt>
                    <dd className="mt-2 text-[15px]">
                      <a
                        href={`mailto:${TCK_CONTACT.email}`}
                        className="text-[var(--color-ink)] hover:text-[var(--color-brand)]"
                      >
                        {TCK_CONTACT.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                      <Phone size={14} className="text-[var(--color-brand)]" />
                      {t('office.phoneLabel')}
                    </dt>
                    <dd className="mt-2 text-[15px]">
                      <a
                        href={TCK_CONTACT.phoneHref}
                        className="text-[var(--color-ink)] hover:text-[var(--color-brand)]"
                      >
                        {TCK_CONTACT.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                      <Clock size={14} className="text-[var(--color-brand)]" />
                      {t('office.hoursLabel')}
                    </dt>
                    <dd className="mt-2 text-[15px] text-[var(--color-ink)]">
                      {TCK_CONTACT.hoursKst}
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 border-t border-[var(--color-border)] pt-5 text-[13px] text-[var(--color-muted)]">
                  {t('languages')}
                </p>
              </div>

              <div className="mt-6 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)]">
                <iframe
                  title={t('office.mapLabel')}
                  src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  className="h-72 w-full bg-[var(--color-surface)]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
