import Hero from './components/Hero'
import FeaturedAttractions from './components/FeaturedAttractions'
import PackageShowcase from './components/PackageShowcase'
import PapikondaluOverview from './components/PapikondaluOverview'
import FAQSection from './components/FAQSection'
import { LazyTestimonials, LazyNewsletter } from './components/LazyComponents'
import CriticalCSS from './components/CriticalCSS'
import JsonLd from './components/JsonLd'
import { Metadata } from 'next'
import { businessInfo } from './lib/businessInfo'
import { pageMetadata } from './lib/seo'

const description = 'Book Papikondalu boat tours on the Godavari from Rajahmundry and Bhadrachalam: one day trips, two day tours and Sirivaka night stays. Call or WhatsApp.'

export const metadata: Metadata = pageMetadata({
  title: 'Papikondalu Boat Tours | Godavari River Cruises',
  description,
  path: '/',
  imageAlt: 'Papikondalu hills on the Godavari River',
})

export default function Home() {
  const homePageStructuredData = {
    '@type': 'WebPage',
    '@id': `${businessInfo.domain}/#webpage`,
    'url': businessInfo.domain,
    'name': 'Papikondalu Boat Tours | Godavari River Cruises',
    'description': description,
    'isPartOf': { '@id': `${businessInfo.domain}/#website` },
    'about': { '@id': `${businessInfo.domain}/#organization` },
    'inLanguage': 'en-IN',
  }

  return (
    <>
      <CriticalCSS />
      <JsonLd data={homePageStructuredData} />
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