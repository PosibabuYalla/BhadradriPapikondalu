// SEO-friendly URL slugs for attractions and packages

export const attractionSlugs = {
  1: 'papikondalu',
  2: 'perantalapalli',
  3: 'gandipochamma-temple',
  4: 'bhadrachalam',
  5: 'sirivaka-night-stay-camping',
  6: 'maredumilli',
  7: 'parnasala',
  8: 'gudisa'
}

export const packageSlugs = {
  1: 'papikondalu-packages',
  2: 'bhadrachalam-papikondalu-packages',
  3: 'maredumilli-packages',
  4: 'rampachodavaram-waterfalls-tour-package',
  5: 'rajahmundry-papikondalu-packages',
  6: 'sirivaka-night-stay-package',
  7: 'parnasala-packages',
  8: 'gudisa-packages',
  9: 'perantalapalli-packages'
}

// Old typo'd slugs ("pakages") kept only so next.config.js can 301-redirect
// them to the corrected slug above without losing the ranking history.
export const legacyPackageSlugRedirects: Record<string, string> = {
  'papikondalu-pakages': 'papikondalu-packages',
  'bhadradrachalam-papikondalu-pakages': 'bhadrachalam-papikondalu-packages',
  'maredumilli-pakages': 'maredumilli-packages',
  'rajahmundry-papikondalu-pakages': 'rajahmundry-papikondalu-packages',
  'parnasala-pakages': 'parnasala-packages',
}

// Reverse mapping for slug to ID conversion
export const attractionSlugToId = Object.fromEntries(
  Object.entries(attractionSlugs).map(([id, slug]) => [slug, parseInt(id)])
)

export const packageSlugToId = Object.fromEntries(
  Object.entries(packageSlugs).map(([id, slug]) => [slug, parseInt(id)])
)

// Helper functions
export function getAttractionSlug(id: number): string {
  return attractionSlugs[id as keyof typeof attractionSlugs] || `attraction-${id}`
}

export function getPackageSlug(id: number): string {
  return packageSlugs[id as keyof typeof packageSlugs] || `package-${id}`
}

export function getAttractionIdFromSlug(slug: string): number | null {
  return attractionSlugToId[slug] || null
}

export function getPackageIdFromSlug(slug: string): number | null {
  return packageSlugToId[slug] || null
}