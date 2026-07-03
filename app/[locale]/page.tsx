import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Hero } from '@/components/sections/Hero'
import { TrustMetrics } from '@/components/sections/TrustMetrics'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { CoreServices } from '@/components/sections/CoreServices'
import { Specialization } from '@/components/sections/Specialization'
import { WhyTCK } from '@/components/sections/WhyTCK'
import { WhoWeWorkWith } from '@/components/sections/WhoWeWorkWith'
import { SelectedExperience } from '@/components/sections/SelectedExperience'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { buildAlternates } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home.hero' })
  const tSite = await getTranslations({ locale, namespace: 'site' })
  return {
    title: tSite('tagline'),
    description: t('sub'),
    alternates: buildAlternates('/'),
  }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <>
      <Hero />
      <TrustMetrics />
      <AboutPreview />
      <CoreServices />
      <Specialization />
      <WhyTCK />
      <WhoWeWorkWith />
      <SelectedExperience />
      <HowItWorks />
      <FinalCTA />
    </>
  )
}
