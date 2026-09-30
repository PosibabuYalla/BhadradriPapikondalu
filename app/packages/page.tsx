import type { Metadata } from 'next'
import PackagesClient from './PackagesClient'
import { pageMetadata } from '../lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Papikondalu Tour Packages | Boat Tours & Itineraries',
  description: 'Compare Papikondalu tour packages from Rajahmundry and Bhadrachalam, including one and two day boat trips, camping and temple tours.',
  path: '/packages'
})

export default function Packages() {
  return <PackagesClient />
}