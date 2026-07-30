import Hero from './components/Hero'
import FeaturedAttractions from './components/FeaturedAttractions'
import PackageShowcase from './components/PackageShowcase'
import PapikondaluOverview from './components/PapikondaluOverview'
import FAQSection from './components/FAQSection'
import { LazyTestimonials, LazyNewsletter } from './components/LazyComponents'
import CriticalCSS from './components/CriticalCSS'
import Script from 'next/script'
import { Metadata } from 'next'
import { businessInfo } from './lib/businessInfo'

export const metadata: Metadata = {
  title: 'Papikondalu Tours | Book Boat Tours from Rajahmundry & Bhadrachalam',
  description: `Book Papikondalu boat tours from Rajahmundry & Bhadrachalam. Call ${businessInfo.phone} — trusted operator serving Godavari river cruises for 20+ years.`,
  openGraph: {
    title: 'Papikondalu Tours | Book Boat Tours from Rajahmundry & Bhadrachalam',
    description: `Book Papikondalu boat tours from Rajahmundry & Bhadrachalam. Call ${businessInfo.phone} — trusted operator serving Godavari river cruises for 20+ years.`,
    images: [{
      url: businessInfo.heroImage,
      width: 1200,
      height: 630,
      alt: 'Papikondalu Boat Tours - Rajahmundry & Bhadrachalam Godavari River Cruise'
    }]
  }
}

export default function Home() {
  const homePageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${businessInfo.domain}/#webpage`,
    'url': businessInfo.domain,
    'name': 'Papikondalu Boat Tours — Authentic Godavari River Cruises',
    'isPartOf': {
      '@id': `${businessInfo.domain}/#website`
    },
    'about': {
      '@id': `${businessInfo.domain}/#organization`
    },
    'description': `Book Papikondalu boat tours from Rajahmundry & Bhadrachalam. Call ${businessInfo.phone} — trusted operator serving Godavari river cruises for 20+ years.`,
    'breadcrumb': {
      '@id': `${businessInfo.domain}/#breadcrumb`
    },
    'inLanguage': 'en-US',
  }

  return (
    <>
      <CriticalCSS />
      <Script
        id="home-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageStructuredData) }}
      />
      <Hero />
      <PapikondaluOverview />
      <FeaturedAttractions />
      <PackageShowcase />
      <LazyTestimonials />
      <FAQSection />
      <LazyNewsletter />
    </>
  )
}