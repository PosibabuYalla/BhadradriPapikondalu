import { MetadataRoute } from 'next'
import { businessInfo } from './lib/businessInfo'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${businessInfo.domain}/sitemap.xml`,
  }
}
