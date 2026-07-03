import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'

export function buildAlternates(path: string): Metadata['alternates'] {
  const cleanPath = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`
  const languages: Record<string, string> = {}
  for (const locale of routing.locales) {
    const prefix = locale === routing.defaultLocale ? '' : `/${locale}`
    languages[locale] = `${prefix}${cleanPath}` || '/'
  }
  languages['x-default'] = cleanPath || '/'
  return {
    canonical: cleanPath || '/',
    languages,
  }
}
