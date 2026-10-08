import JsonLd from '../../components/JsonLd'
import { packagesData } from '../packagesData'
import { getTourLogistics, hasVerifiedPrice } from '../tourLogistics'
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

  const logistics = getTourLogistics(packageData.id)

  // TouristTrip rather than Product: Product without offers/reviews is flagged
  // as invalid in Search Console. An Offer is only published once a fare and
  // its check date are set in tourLogistics.ts, so the markup always matches
  // the price visible on the page. No rating is published.
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
        ...(hasVerifiedPrice(logistics) ? {
          offers: {
            '@type': 'Offer',
            price: logistics.fromPrice,
            priceCurrency: 'INR',
            url,
            availability: 'https://schema.org/InStock',
            seller: organizationRef,
          },
        } : {}),
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
      <PackageDetailClient packageData={packageData} logistics={logistics} />
    </>
  )
}
