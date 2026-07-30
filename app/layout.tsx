import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'
import { LazyMultiAgentWidget } from './components/LazyComponents'
import WebVitals from './components/WebVitals'
import ImagePreloader from './components/ImagePreloader'
import PerformanceOptimizer from './components/PerformanceOptimizer'
import MobileOptimizer from './components/MobileOptimizer'
import CriticalPerformance from './components/CriticalPerformance'
import ViewportOptimizer from './components/ViewportOptimizer'
import Script from 'next/script'
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
  title: {
    default: 'Papikondalu Tours | Book Boat Tours from Rajahmundry & Bhadrachalam',
    template: '%s | Papikondalu Tourism'
  },
  icons: {
    icon: businessInfo.logo,
    shortcut: businessInfo.logo,
    apple: businessInfo.logo,
  },
  description: `Book Papikondalu boat tours from Rajahmundry & Bhadrachalam. Call ${businessInfo.phone} — trusted operator serving Godavari river cruises for 20+ years.`,
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: businessInfo.domain,
    siteName: 'Papikondalu Tourism - Godavari River Cruise',
    title: 'Papikondalu Tours | Book Boat Tours from Rajahmundry & Bhadrachalam',
    description: `Book Papikondalu boat tours from Rajahmundry & Bhadrachalam. Call ${businessInfo.phone} — trusted operator serving Godavari river cruises for 20+ years.`,
    images: [{
      url: businessInfo.heroImage,
      width: 1200,
      height: 630,
      alt: 'Papikondalu Hills Boat Tours - Godavari River Cruise in Andhra Pradesh',
      type: 'image/jpeg'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Papikondalu Tours | Book Boat Tours from Rajahmundry & Bhadrachalam',
    description: `Book Papikondalu boat tours from Rajahmundry & Bhadrachalam. Call ${businessInfo.phone}.`,
    images: [businessInfo.heroImage],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'VTniYMmiV4j622S8nRf2la5x52w-Oj0SqPvSzaiR0zA',
  },
  alternates: {
    types: {
      'application/rss+xml': `${businessInfo.domain}/feed.xml`
    }
  },
  category: 'tourism',
  classification: 'Tourism & Travel',
  other: {
    'geo.region': 'IN-AP',
    'geo.placename': 'Rajahmundry, Andhra Pradesh',
    'geo.position': '17.0005;81.8040',
    'ICBM': '17.0005, 81.8040',
    'DC.title': 'Papikondalu Tourism - Best Boat Tours in Andhra Pradesh',
    'DC.creator': 'Papikondalu Tourism',
    'DC.subject': 'River Tourism, Boat Tours, Temple Tours, Adventure Packages',
    'DC.description': 'Premium boat tours and river cruise experiences in Papikondalu Hills',
    'DC.publisher': 'Papikondalu Tourism',
    'DC.contributor': 'Papikondalu Tourism Team',
    'DC.date': `${businessInfo.foundedYear}-01-01T00:00:00.000Z`,
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://bhadradripapikondalu.com',
    'DC.language': 'en',
    'DC.coverage': 'Andhra Pradesh, India',
    'DC.rights': '© 2024 Papikondalu Tourism. All rights reserved.'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const orgId = `${businessInfo.domain}/#organization`

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['TravelAgency', 'LocalBusiness'],
        '@id': orgId,
        'name': businessInfo.name,
        'description': `Papikondalu boat tour operator based in ${businessInfo.address.addressLocality}, Andhra Pradesh, running Godavari river cruises and temple tour packages for 20+ years.`,
        'url': businessInfo.domain,
        'logo': {
          '@type': 'ImageObject',
          'url': businessInfo.logo,
          'width': 512,
          'height': 512
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
        'areaServed': {
          '@type': 'State',
          'name': 'Andhra Pradesh'
        },
        'serviceType': ['Papikondalu Boat Tours', 'Godavari River Cruise', 'Bhadrachalam Temple Tours'],
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
        'priceRange': '₹₹',
        'currenciesAccepted': 'INR',
        'paymentAccepted': 'Cash, Card, UPI',
        'openingHours': 'Mo-Su 06:00-20:00',
        'sameAs': Object.values(businessInfo.socialLinks)
      },
      {
        '@type': 'TouristAttraction',
        '@id': `${businessInfo.domain}/#attraction`,
        'name': 'Papikondalu Hills',
        'description': 'Forested hill range along the Godavari River between Rajahmundry and Bhadrachalam, reached by scenic boat cruise and popular for river tourism in Andhra Pradesh.',
        'url': `${businessInfo.domain}/attractions/papikondalu`,
        'image': {
          '@type': 'ImageObject',
          'url': businessInfo.heroImage,
          'width': 1200,
          'height': 800
        },
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Papikondalu',
          'addressRegion': 'Andhra Pradesh',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': businessInfo.geo.latitude,
          'longitude': businessInfo.geo.longitude
        },
        'touristType': ['Family', 'Adventure', 'Nature Lovers', 'Pilgrims'],
        'availableLanguage': ['English', 'Telugu', 'Hindi']
      },
      {
        '@type': 'WebSite',
        '@id': `${businessInfo.domain}/#website`,
        'url': businessInfo.domain,
        'name': 'Papikondalu Tourism',
        'description': 'Book Papikondalu boat tours, Godavari river cruises, and Bhadrachalam temple tour packages.',
        'publisher': {
          '@id': orgId
        },
        'inLanguage': 'en-US'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${businessInfo.domain}/#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': businessInfo.domain
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Packages',
            'item': `${businessInfo.domain}/packages`
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Attractions',
            'item': `${businessInfo.domain}/attractions`
          }
        ]
      }
    ]
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://djmcbqzqt.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://djmcbqzqt.cloudinary.com" />



        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <a href="#main-content" className="skip-nav sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        <ViewportOptimizer />
        <CriticalPerformance />
        <MobileOptimizer />
        <WebVitals />
        <ImagePreloader />
        <PerformanceOptimizer />
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