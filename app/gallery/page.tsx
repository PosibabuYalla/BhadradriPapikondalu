import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'
import { pageMetadata } from '../lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Papikondalu Photo Gallery | Godavari Boat Tour Pictures',
  description: 'Photos of the Papikondalu hills, Godavari boat cruises, Bhadrachalam temple, Perantalapalli and Sirivaka camping from around the Papikondalu region.',
  path: '/gallery'
})

export default function Gallery() {
  return <GalleryClient />
}