import type { Metadata } from 'next'
import ContactClient from './ContactClient'
import { pageMetadata } from '../lib/seo'
import { businessInfo } from '../lib/businessInfo'
import JsonLd from '../components/JsonLd'

export const metadata: Metadata = pageMetadata({
  title: 'Contact & Book Papikondalu Boat Tours | Call or WhatsApp',
  description: `Book a Papikondalu boat tour from Rajahmundry or Bhadrachalam. Call or WhatsApp ${businessInfo.phone}, or send us your date, group size and package.`,
  path: '/contact'
})

export default function Contact() {
  // References the single Organization node from the root layout instead of
  // redefining the business with a different name/address/email.
  const contactSchema = {
    '@type': 'ContactPage',
    '@id': `${businessInfo.domain}/contact#webpage`,
    url: `${businessInfo.domain}/contact`,
    name: 'Contact Papikondalu Tourism',
    about: { '@id': `${businessInfo.domain}/#organization` },
    mainEntity: {
      '@id': `${businessInfo.domain}/#organization`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: businessInfo.phone,
        email: businessInfo.email,
        contactType: 'reservations',
        availableLanguage: ['English', 'Telugu'],
      },
    },
  }

  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactClient />
    </>
  )
}