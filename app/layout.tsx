import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'
import { LazyMultiAgentWidget } from './components/LazyComponents'
import WebVitals from './components/WebVitals'
import JsonLd from './components/JsonLd'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { businessInfo } from './lib/businessInfo'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
}

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.domain),
  // Pages set their own full title via pageMetadata(); the template only
  // applies to pages that pass a plain string title.
  title: {
    default: 'Papikondalu Boat Tours | Godavari River Cruises',
    template: '%s | Papikondalu Tourism'
  },
  description: 'Papikondalu boat tours on the Godavari from Rajahmundry and Bhadrachalam. Day trips, overnight stays and temple tours. Call or WhatsApp to book.',
  icons: {
    icon: businessInfo.logo,
    shortcut: businessInfo.logo,
    apple: businessInfo.logo,
  },
  authors: [{ name: businessInfo.name, url: businessInfo.domain }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  applicationName: businessInfo.name,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'VTniYMmiV4j622S8nRf2la5x52w-Oj0SqPvSzaiR0zA',
  },
  category: 'tourism',
  other: {
    'geo.region': 'IN-AP',
    'geo.placename': 'Rajahmundry, Andhra Pradesh',
    'geo.position': '17.0005;81.8040',
    'ICBM': '17.0005, 81.8040',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const orgId = `${businessInfo.domain}/#organization`

  const structuredData = {
    '@graph': [
      {
        '@type': ['TravelAgency', 'LocalBusiness'],
        '@id': orgId,
        'name': businessInfo.name,
        'description': `Papikondalu boat tour operator based in ${businessInfo.address.addressLocality}, Andhra Pradesh, running Godavari river cruises from Rajahmundry and Bhadrachalam.`,
        'url': businessInfo.domain,
        'logo': {
          '@type': 'ImageObject',
          'url': businessInfo.logo,
        },
        'image': businessInfo.heroImage,
        'telephone': businessInfo.phone,
        'email': businessInfo.email,
        'address': {
          '@type': 'PostalAddress',
          ...(businessInfo.address.streetAddress ? { streetAddress: businessInfo.address.streetAddress } : {}),
          'addressLocality': businessInfo.address.addressLocality,
          'addressRegion': businessInfo.address.addressRegion,
          'postalCode': businessInfo.address.postalCode,
          'addressCountry': businessInfo.address.addressCountry
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': businessInfo.geo.latitude,
          'longitude': businessInfo.geo.longitude
        },
        'foundingDate': String(businessInfo.foundedYear),
        'areaServed': [
          { '@type': 'Place', 'name': 'Papikondalu' },
          { '@type': 'City', 'name': 'Rajahmundry' },
          { '@type': 'City', 'name': 'Bhadrachalam' }
        ],
        'knowsAbout': ['Papikondalu boat tours', 'Godavari river cruise', 'Bhadrachalam temple tours'],
        // Only publish aggregateRating once a verified Google Business Profile rating/count is confirmed —
        // fabricated review numbers are a Google spam-policy violation.
        ...(businessInfo.googleRating && businessInfo.googleReviewCount ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: businessInfo.googleRating,
            reviewCount: businessInfo.googleReviewCount,
            bestRating: '5',
            worstRating: '1'
          }
        } : {}),
        'currenciesAccepted': 'INR',
        // openingHours intentionally omitted: the site had two conflicting values
        // (06:00-20:00 and 06:00-22:00). Add it once confirmed against the Google Business Profile.
        'sameAs': Object.values(businessInfo.socialLinks)
      },
      {
        '@type': 'WebSite',
        '@id': `${businessInfo.domain}/#website`,
        'url': businessInfo.domain,
        'name': businessInfo.name,
        'publisher': {
          '@id': orgId
        },
        'inLanguage': 'en-IN'
      }
    ]
  }

  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <JsonLd data={structuredData} />
        <link rel="alternate" type="application/rss+xml" title={businessInfo.name} href={`${businessInfo.domain}/feed.xml`} />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <a href="#main-content" className="skip-nav sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        <WebVitals />
        <Header />
        <FloatingActionButton />
        <main className="relative" role="main" id="main-content">{children}</main>
        <Footer />
        <LazyMultiAgentWidget />
        <SpeedInsights />
      </body>
    </html>
  )
}