import JsonLd from '../../components/JsonLd'
import { packagesData } from '../packagesData'
import PackageDetailClient from './PackageDetailClient'
import { notFound } from 'next/navigation'
import { getPackageSlug, getPackageIdFromSlug } from '../../utils/slugs'
import { pageMetadata, absoluteUrl, breadcrumbSchema, organizationRef } from '../../lib/seo'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return packagesData.map((pkg) => ({
    id: getPackageSlug(pkg.id),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const packageId = getPackageIdFromSlug(id)
  const packageData = packagesData.find(p => p.id === packageId)

  if (!packageData) {
    return {
      title: 'Package Not Found',
      robots: { index: false, follow: true },
    }
  }

  return pageMetadata({
    title: packageData.title,
    description: packageData.metaDescription,
    path: `/packages/${id}`,
    image: packageData.image,
    imageAlt: packageData.name,
  })
}

export default async function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const packageId = getPackageIdFromSlug(id)

  if (!packageId) {
    notFound()
  }

  const packageData = packagesData.find(p => p.id === packageId)

  if (!packageData) {
    notFound()
  }

  const url = absoluteUrl(`/packages/${id}`)

  // TouristTrip rather than Product: Product without offers/reviews is flagged
  // as invalid in Search Console. No price or rating is published because the
  // site has no verified per-package price or review data — add offers here
  // once real prices exist.
  const jsonLd = {
    '@graph': [
      {
        '@type': 'TouristTrip',
        '@id': `${url}#trip`,
        name: packageData.name,
        description: packageData.description,
        image: packageData.image,
        url,
        provider: organizationRef,
        itinerary: {
          '@type': 'ItemList',
          itemListElement: packageData.itinerary.map((step, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: step,
          })),
        },
      },
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Tour Packages', path: '/packages' },
        { name: packageData.name, path: `/packages/${id}` },
      ]),
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <PackageDetailClient packageData={packageData} />
    </>
  )
}
