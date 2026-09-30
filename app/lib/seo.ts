import type { Metadata } from 'next'
import { businessInfo } from './businessInfo'

// Canonical host is www (Vercel redirects the apex to it). Paths have no
// trailing slash, matching next.config trailingSlash: false.
export const absoluteUrl = (path = '/') =>
  path === '/' ? businessInfo.domain : `${businessInfo.domain}${path}`

type PageMetaInput = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
}

// One place to build title/description/canonical/OG/Twitter for a page, so
// every indexable route gets a self-referencing canonical and matching OG url.
export function pageMetadata({ title, description, path, image, imageAlt, type = 'website' }: PageMetaInput): Metadata {
  const url = absoluteUrl(path)
  const ogImage = image || businessInfo.heroImage
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: businessInfo.name,
      locale: 'en_IN',
      images: [{ url: ogImage, alt: imageAlt || title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export const organizationRef = { '@id': `${businessInfo.domain}/#organization` }

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}
