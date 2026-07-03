'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { buttonClasses } from '@/components/ui/Button'
import { fadeUp, stagger } from '@/lib/motion'

export function Hero() {
  const t = useTranslations('home.hero')
  const tCta = useTranslations('cta')
  const signals = t.raw('signals') as string[]

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <Container className="relative pt-8 pb-16 lg:pt-12 lg:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* SEO headline — hidden visually since the image carries the tagline */}
          <h1 className="sr-only">
            {t('headline1')} {t('headline2')} {t('headline3')}
          </h1>

          {/* Eyebrow */}
          <motion.div variants={fadeUp}>
            <Eyebrow tone="brand">{t('eyebrow')}</Eyebrow>
          </motion.div>

          {/* Hero animated banner */}
          <motion.div
            variants={fadeUp}
            className="mt-6 overflow-hidden rounded-[var(--radius-xl)] shadow-[0_8px_48px_rgba(11,27,43,0.22)]"
            style={{ aspectRatio: '1717 / 916' }}
          >
            <iframe
              src="/hero-animation.html"
              title="Global Business. Local Precision. No Friction. — Korea and Europe business consulting by TCK"
              className="w-full h-full border-0 block"
              scrolling="no"
              loading="eager"
            />
          </motion.div>

          {/* Sub text + trust badges + CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16"
          >
            {/* Left: sub paragraph + trust badges */}
            <div className="flex-1 max-w-2xl">
              <p className="text-[17px] lg:text-[19px] leading-relaxed text-[var(--color-muted)]">
                {t('sub')}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {signals.map((signal) => (
                  <span
                    key={signal}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-[13px] font-medium text-[var(--color-ink)]"
                  >
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: CTAs */}
            <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-start lg:pt-1 lg:shrink-0">
              <Link href="/contact" className={buttonClasses('primary', 'lg')}>
                {tCta('requestConsultation')}
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className={buttonClasses('secondary', 'lg')}>
                {tCta('exploreServices')}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
