import JsonLd from '../../components/JsonLd'
import { attractionsData } from '../attractionsData'
import AttractionDetailClient from './AttractionDetailClient'
import { notFound } from 'next/navigation'
import { getAttractionSlug, getAttractionIdFromSlug } from '../../utils/slugs'
import { pageMetadata, absoluteUrl, breadcrumbSchema } from '../../lib/seo'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return attractionsData.map((attraction) => ({
    id: getAttractionSlug(attraction.id),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const attractionId = getAttractionIdFromSlug(id)
  const attraction = attractionsData.find(a => a.id === attractionId)

  if (!attraction) {
    return {
      title: 'Attraction Not Found',
      robots: { index: false, follow: true },
    }
  }

  return pageMetadata({
    title: attraction.seoTitle,
    description: attraction.metaDescription,
    path: `/attractions/${id}`,
    image: attraction.image,
    imageAlt: attraction.name,
  })
}

export default async function AttractionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const attractionId = getAttractionIdFromSlug(id)

  if (!attractionId) {
    notFound()
  }

  const attraction = attractionsData.find(a => a.id === attractionId)

  if (!attraction) {
    notFound()
  }

  const url = absoluteUrl(`/attractions/${id}`)

  // No geo/address: the previous schema gave every attraction the Rajahmundry
  // office coordinates and "East Godavari", which is wrong for Bhadrachalam and
  // Parnasala (Telangana). Add per-place coordinates once verified.
  const jsonLd = {
    '@graph': [
      {
        '@type': 'TouristAttraction',
        '@id': `${url}#place`,
        name: attraction.name,
        description: attraction.shortDescription,
        url,
        image: attraction.image,
      },
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Attractions', path: '/attractions' },
        { name: attraction.name, path: `/attractions/${id}` },
      ]),
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <AttractionDetailClient attraction={attraction} />
    </>
  )
}
