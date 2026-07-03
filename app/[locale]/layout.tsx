import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing, type Locale } from '@/i18n/routing'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { TCK_CONTACT } from '@/lib/contact'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!(routing.locales as readonly string[]).includes(locale)) notFound()
  setRequestLocale(locale as Locale)
  const messages = await getMessages()

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TCK',
    legalName: 'TCK Cross-Border Consulting',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tck.example',
    logo: '/logo/tck.jpg',
    founder: { '@type': 'Person', name: TCK_CONTACT.ceo, jobTitle: TCK_CONTACT.ceoTitle },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 406 Iljung-ro 17',
      addressLocality: 'Ilsanseo-gu, Goyang-si',
      addressRegion: 'Gyeonggi-do',
      addressCountry: 'KR',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: TCK_CONTACT.email,
        telephone: TCK_CONTACT.phone,
        availableLanguage: ['English', 'Korean', 'German'],
      },
    ],
    areaServed: ['KR', 'DE', 'EU'],
  }

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <body className="bg-[var(--color-bg)] text-[var(--color-ink)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-[var(--color-brand)] focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="min-h-[60vh]">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
