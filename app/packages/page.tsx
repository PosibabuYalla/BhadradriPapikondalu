import type { Metadata } from 'next'
import PackagesClient from './PackagesClient'
import { pageMetadata } from '../lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Papikondalu Tour Packages | Boat Tours & Itineraries',
  description: 'Compare Papikondalu tour packages from Rajahmundry and Bhadrachalam: one day boat trips, two day tours, Sirivaka camping and temple tours. Enquire today.',
  path: '/packages'
})

export default function Packages() {
  return <PackagesClient />
}