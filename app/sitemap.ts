import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

const PAGES = ['', '/services', '/industries', '/about', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://tck.example'
  return PAGES.flatMap((page) =>
    routing.locales.map((locale) => {
      const prefix = locale === routing.defaultLocale ? '' : `/${locale}`
      return {
        url: `${base}${prefix}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: page === '' ? 1 : 0.7,
      }
    }),
  )
}
