import { useTranslations } from 'next-intl'
import { Check, ArrowUpRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { buttonClasses } from '@/components/ui/Button'

const BULLETS = ['oem', 'ingredients', 'supplier', 'import', 'regulatory'] as const

export function Specialization() {
  const t = useTranslations('home.specialization')
  return (
    <section className="bg-grain relative isolate overflow-hidden bg-[var(--color-brand-deep)] text-white">
      {/* Decorative ambient glow */}
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full bg-[var(--color-brand)]/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[var(--color-accent)]/10 blur-3xl"
      />

      <Container className="relative grid gap-14 py-28 lg:grid-cols-12 lg:gap-16 lg:py-40">
        <div className="lg:col-span-6 xl:col-span-5">
          <Eyebrow tone="accent">{t('eyebrow')}</Eyebrow>
          <h2 className="mt-6 text-[40px] sm:text-[52px] lg:text-[64px] font-semibold leading-[1.05] tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-7 max-w-lg text-[18px] leading-relaxed text-white/75">
            {t('sub')}
          </p>

          <ul className="mt-10 space-y-4">
            {BULLETS.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 border-t border-white/10 pt-4 text-[15px] text-white/85"
              >
                <Check
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                  strokeWidth={2}
                />
                <span>{t(`bullets.${b}`)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className={buttonClasses('white', 'lg')}>
              {t('primaryCta')}
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href={{ pathname: '/services', hash: 'supplements' }}
              className={buttonClasses('outlineWhite', 'lg')}
            >
              {t('secondaryCta')}
            </Link>
          </div>
        </div>

        {/* Visual column — editorial composition with stats */}
        <div className="relative lg:col-span-6 xl:col-span-7">
          <div className="relative aspect-[5/6] overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
            {/* Hero stat callout */}
            <div className="absolute inset-x-8 top-10 flex flex-col gap-3">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Made in Germany
              </span>
              <p className="text-[14px] uppercase tracking-[0.18em] text-white/60">
                Programme components
              </p>
            </div>

            <div className="absolute inset-x-8 bottom-8 grid grid-cols-2 gap-x-8 gap-y-6 text-white/90">
              {[
                { v: 'EU GMP', l: 'Audited contract manufacturers' },
                { v: 'KFDA', l: 'Korean import pathway' },
                { v: '< 12w', l: 'Typical pilot lead time' },
                { v: '3-tier', l: 'QC sampling' },
              ].map((s) => (
                <div key={s.v} className="border-t border-white/15 pt-4">
                  <p className="text-[26px] font-semibold tracking-tight">
                    {s.v}
                  </p>
                  <p className="mt-1 text-[13px] text-white/60">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
