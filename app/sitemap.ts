import { MetadataRoute } from 'next'
import { attractionSlugs, packageSlugs } from './utils/slugs'
import { attractionsData } from './attractions/attractionsData'
import { packagesData } from './packages/packagesData'
import { absoluteUrl } from './lib/seo'

// Update when page content actually changes. A lastmod that is always "now"
// teaches Google to ignore it.
const CONTENT_UPDATED = '2026-09-30'

type Entry = { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly'; images?: string[] }

export default function sitemap(): MetadataRoute.Sitemap {
  // Only canonical, indexable, 200-status URLs belong here.
  const staticPages: Entry[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/papikondalu-tours', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/packages', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/attractions', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/badrachalam-temple-tours', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/east-godavari-tourism', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/blog/papikondalu-bhadradri-magical-beauty', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/aboutus', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/gallery', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.2, changeFrequency: 'yearly' },
  ]

  const packagePages: Entry[] = packagesData.map(pkg => ({
    path: `/packages/${packageSlugs[pkg.id as keyof typeof packageSlugs]}`,
    priority: 0.85,
    changeFrequency: 'monthly',
    images: Array.from(new Set([pkg.image, ...(pkg.gallery || [])])).slice(0, 5),
  }))

  const attractionPages: Entry[] = attractionsData.map(attraction => ({
    path: `/attractions/${attractionSlugs[attraction.id as keyof typeof attractionSlugs]}`,
    priority: 0.7,
    changeFrequency: 'monthly',
    images: Array.from(new Set([attraction.image, ...(attraction.gallery || [])])).slice(0, 5),
  }))

  return [...staticPages, ...packagePages, ...attractionPages].map(entry => ({
    url: absoluteUrl(entry.path),
    lastModified: CONTENT_UPDATED,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
    ...(entry.images ? { images: entry.images } : {}),
  }))
}
