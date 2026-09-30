import type { Metadata } from 'next'
import AttractionsClient from './AttractionsClient'
import { pageMetadata } from '../lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Places to Visit Around Papikondalu | Attractions',
  description: 'Papikondalu hills, Perantalapalli, Bhadrachalam temple, Parnasala, Sirivaka, Maredumilli and Gudisa: what each place offers and the best time to visit.',
  path: '/attractions'
})

export default function Attractions() {
  return <AttractionsClient />
}