import { businessInfo } from '../lib/businessInfo'

export const dynamic = 'force-static'

// Feed lists real articles/guides only; add an item when a new guide is published.
const items = [
  {
    title: 'Papikondalu & Bhadradri Travel Guide',
    description: 'A travel guide to the Papikondalu hills and Bhadradri (Bhadrachalam) temple: Godavari river cruises, Maredumilli waterfalls, Parnasala and when to visit.',
    path: '/blog/papikondalu-bhadradri-magical-beauty',
    pubDate: 'Sun, 01 Dec 2024 00:00:00 GMT',
  },
  {
    title: 'Papikondalu Tours: Routes, Timings, Price & Booking',
    description: 'One day and two day Godavari boat trips from Rajahmundry and Bhadrachalam, timings, how prices work, what to carry and how to book.',
    path: '/papikondalu-tours',
    pubDate: 'Wed, 30 Sep 2026 00:00:00 GMT',
  },
]

export async function GET() {
  const site = businessInfo.domain
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${businessInfo.name} – Papikondalu Travel Guides</title>
    <description>Travel guides for Papikondalu boat tours, Bhadrachalam and the Godavari region.</description>
    <link>${site}</link>
    <atom:link href="${site}/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-in</language>
${items.map((item) => `    <item>
      <title>${item.title.replace(/&/g, '&amp;')}</title>
      <description>${item.description.replace(/&/g, '&amp;')}</description>
      <link>${site}${item.path}</link>
      <guid>${site}${item.path}</guid>
      <pubDate>${item.pubDate}</pubDate>
    </item>`).join('\n')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  })
}
