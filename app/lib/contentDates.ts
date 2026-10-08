// When each page's content last changed in a way a visitor would notice.
// The sitemap's <lastmod> and the "last checked" lines on pages both read
// from here. Bump a path's date only for a real content change (new facts,
// prices, sections) — not for styling or refactors — or Google learns to
// ignore lastmod for the whole site.

const DEFAULT_UPDATED = '2026-09-30'

const updated: Record<string, string> = {
  '/': '2026-10-08',
  '/papikondalu-tours': '2026-10-08',
  '/aboutus': '2026-10-08',
  '/contact': '2026-10-08',
  '/blog/papikondalu-bhadradri-magical-beauty': '2026-10-08',
  '/packages/bhadrachalam-papikondalu-packages': '2026-10-08',
  '/packages/maredumilli-packages': '2026-10-08',
  '/packages/sirivaka-night-stay-package': '2026-10-08',
  '/packages/parnasala-packages': '2026-10-08',
  '/packages/gudisa-packages': '2026-10-08',
  '/packages/perantalapalli-packages': '2026-10-08',
  '/attractions/papikondalu': '2026-10-08',
  '/attractions/maredumilli': '2026-10-08',
  '/attractions/gudisa': '2026-10-08',
}

export function contentUpdated(path: string): string {
  return updated[path] ?? DEFAULT_UPDATED
}
