import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tck.example'),
  title: {
    default: 'TCK — Cross-Border Business Support Between Korea and Europe',
    template: '%s · TCK',
  },
  description:
    'Sourcing, market entry, OEM coordination, and quality control between Korea and Europe. Trusted by international brands and Korean importers.',
  applicationName: 'TCK',
  authors: [{ name: 'TCK' }],
  openGraph: {
    type: 'website',
    siteName: 'TCK',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport: Viewport = {
  themeColor: '#143055',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
