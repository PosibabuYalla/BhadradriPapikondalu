import type { Metadata } from 'next'
import JsonLd from '../components/JsonLd'
import { businessInfo } from '../lib/businessInfo'
import AboutUsClient from './AboutUsClient'
import { pageMetadata, breadcrumbSchema } from '../lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'About Papikondalu Tourism | Godavari Boat Tours Since 2004',
  description: 'Papikondalu Tourism has run Godavari boat tours from Rajahmundry since 2004. Meet our boats and team, and see how we plan Papikondalu and temple trips.',
  path: '/aboutus',
  image: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1756004871/aboutus_papikonalu_mjtxyo.jpg',
  imageAlt: 'Papikondalu Tourism boats on the Godavari'
})

export default function AboutUs() {
  const aboutUsSchema = {
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${businessInfo.domain}/aboutus#webpage`,
        url: `${businessInfo.domain}/aboutus`,
        name: 'About Papikondalu Tourism',
        isPartOf: { '@id': `${businessInfo.domain}/#website` },
        about: { '@id': `${businessInfo.domain}/#organization` },
      },
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/aboutus' },
      ]),
    ],
  }

  return (
    <>
      <JsonLd data={aboutUsSchema} />
      <AboutUsClient />
    </>
  )
}