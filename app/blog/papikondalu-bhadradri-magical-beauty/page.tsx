import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react'
import { pageMetadata, absoluteUrl, breadcrumbSchema, organizationRef } from '../../lib/seo'
import JsonLd from '../../components/JsonLd'
import CoverImage from '../../components/CoverImage'
import { businessInfo } from '../../lib/businessInfo'
import { contentUpdated } from '../../lib/contentDates'
import { formatCheckedOn } from '../../packages/tourLogistics'

export const metadata: Metadata = pageMetadata({
  title: 'Papikondalu & Bhadradri Travel Guide | East Godavari',
  description: 'A travel guide to the Papikondalu hills and Bhadradri (Bhadrachalam) temple: Godavari river cruises, Maredumilli waterfalls, Parnasala and when to visit.',
  path: '/blog/papikondalu-bhadradri-magical-beauty',
  image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_1200,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg',
  imageAlt: 'Papikondalu hills beside the Godavari River',
  type: 'article',
})

const path = '/blog/papikondalu-bhadradri-magical-beauty'
const reviewedOn = contentUpdated(path)
const reviewer = businessInfo.guideReviewer

const articleSchema = {
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Papikondalu & Bhadradri Travel Guide',
      description: 'A travel guide to the Papikondalu hills and Bhadradri (Bhadrachalam) temple: Godavari river cruises, Maredumilli waterfalls, Parnasala and when to visit.',
      image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_1200,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg',
      // Month-only date as shown on the page; replace with the exact publish date if known.
      datePublished: '2024-12',
      dateModified: reviewedOn,
      author: reviewer ? { '@type': 'Person', name: reviewer.name, description: reviewer.bio } : organizationRef,
      publisher: organizationRef,
      mainEntityOfPage: absoluteUrl('/blog/papikondalu-bhadradri-magical-beauty'),
    },
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: 'Papikondalu & Bhadradri Travel Guide', path: '/blog/papikondalu-bhadradri-magical-beauty' },
    ]),
  ],
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <JsonLd data={articleSchema} />
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Papikondalu &amp; Bhadradri Travel Guide
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              River cruises through the Papikondalu hills, the Sri Rama temple at Bhadrachalam, and the waterfalls and heritage sites nearby.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <article>
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>December 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>East Godavari, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
              <div className="w-full">
                Last reviewed <time dateTime={reviewedOn}>{formatCheckedOn(reviewedOn)}</time>
                {reviewer
                  ? <> by {reviewer.name}, {reviewer.bio}</>
                  : <> by the {businessInfo.name} team, Godavari boat tour operators in {businessInfo.address.addressLocality} since {businessInfo.foundedYear}</>}
                .
              </div>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <p className="text-lg leading-relaxed text-gray-700">
                Papikondalu and Bhadradri (Bhadrachalam) are two of the most visited destinations along the Godavari.
                One offers a river cruise through dramatic hills. The other is one of the most important Sri Rama temples in South India.
                Together, they make a natural two or three day trip from Rajahmundry.
              </p>
            </div>

            {/* Trip plan — built from the actual package itineraries */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  How to Combine Papikondalu and Bhadradri in One Trip
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The boat runs between the two places, so the main decision is which end you start from.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Option 1: Start at Bhadrachalam, finish in Rajahmundry</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
                  <li><strong>Day 1:</strong> darshan at the Bhadrachalam Sri Rama temple, then board the boat downriver into the Papikondalu hills. Overnight stay near the hills.</li>
                  <li><strong>Day 2:</strong> continue through the gorge and get off at Rajahmundry, which has a railway station and an airport for the journey home.</li>
                  <li>This is our <Link href="/packages/bhadrachalam-papikondalu-packages" className="text-blue-600 hover:underline">Bhadrachalam to Papikondalu two day tour</Link>, with accommodation and meals included.</li>
                  <li>If you have an extra half day at the start, add <Link href="/attractions/parnasala" className="text-blue-600 hover:underline">Parnasala</Link>, the Ramayana site near Bhadrachalam.</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Option 2: Base yourself in Rajahmundry</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
                  <li><strong>Day 1:</strong> the <Link href="/packages/rajahmundry-papikondalu-packages" className="text-blue-600 hover:underline">Rajahmundry to Papikondalu one day tour</Link>: morning boarding, the gorge, a stop at Perantalapalli, lunch on board and back the same evening.</li>
                  <li><strong>Day 2:</strong> travel by road to Bhadrachalam for the temple.</li>
                  <li><strong>Optional extra day:</strong> the <Link href="/packages/maredumilli-packages" className="text-blue-600 hover:underline">Maredumilli forest and waterfalls trip</Link> from Rajahmundry.</li>
                </ul>
                <p className="text-gray-700">
                  Not sure which suits you? The <Link href="/papikondalu-tours#routes" className="text-blue-600 hover:underline">route comparison</Link> sets
                  out the differences side by side.
                </p>
              </div>
            </section>

            {/* Papikondalu Hills Section */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64 md:h-80">
                  <CoverImage
                    src="https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_1200,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg"
                    alt="Scenic view of Papikondalu Hills with Godavari River"
                    className="object-cover"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Explore the Scenic Papikondalu Hills
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The Papikondalu hills rise on both sides of the Godavari, forming a narrow gorge that the boat passes through.
                    The scenery changes constantly as you move upriver. Green slopes, rocky outcrops and small villages appear around each bend.
                    Our{' '}
                    <Link href="/papikondalu-tours" className="text-blue-600 hover:underline">Papikondalu tour guide</Link>{' '}
                    covers the boat routes from Rajahmundry and Bhadrachalam.
                  </p>
                </div>
              </div>
            </section>

            {/* Bhadradri Temple Section */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64 md:h-80">
                  <CoverImage
                    src="https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_1200,q_auto,f_auto/v1755980906/BhadrachalamTemple-1068x421_heh1o2.png"
                    alt="Bhadradri (Bhadrachalam) Sri Rama temple above the Godavari"
                    className="object-cover"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Sacred Bhadradri Temple: A Spiritual Haven
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Bhadrachalam temple is dedicated to Lord Rama and sits on the banks of the Godavari.
                    It is one of the most visited pilgrimage sites in South India.
                    The temple is especially busy during Sri Rama Navami, when thousands gather for the celebrations.
                    Read more about{' '}
                    <Link href="/attractions/bhadrachalam" className="text-blue-600 hover:underline">visiting Bhadrachalam temple</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Maredumilli Waterfalls Section */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64 md:h-80">
                  <CoverImage
                    src="https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_1200,q_auto,f_auto/v1755978851/MAREDUMILLI_-_waterfalls_kmuppt.jpg"
                    alt="Waterfall surrounded by dense forest at Maredumilli"
                    className="object-cover"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Adventure at Maredumilli Waterfalls
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Maredumilli is a forest area in the Eastern Ghats with several waterfalls.
                    The Jalatarangini and Amruthadhara falls are the most visited.
                    Trekking trails run through the forest, and the area is good for bird watching and photography.
                    See our{' '}
                    <Link href="/attractions/maredumilli" className="text-blue-600 hover:underline">Maredumilli travel guide</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Other Attractions */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Other Enchanting Attractions</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-3"><Link href="/attractions/parnasala" className="hover:underline">Parnasala Heritage Site</Link></h3>
                    <p className="opacity-90">Dive into history and marvel at ancient monuments.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-3">Jalatarangini Waterfalls</h3>
                    <p className="opacity-90">A hidden gem offering tranquility and postcard views.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-3"><Link href="/attractions/gudisa" className="hover:underline">Gudisa Hill Station</Link></h3>
                    <p className="opacity-90">Ideal for camping and panoramic mountain vistas.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Best Time to Visit */}
            <section className="mb-16">
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">
                  When to Visit
                </h2>
                <p className="text-lg text-amber-800 leading-relaxed">
                  The best time to visit is <strong>October to March</strong>.
                  The weather is cool and dry, which makes river cruises, temple visits and forest walks comfortable.
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Plan Your Tour with Trust and Comfort
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                  We offer day tours, overnight stays and multi-day packages.
                  Our guides know the region well, and we handle transport, meals and bookings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/packages" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    View Tour Packages
                  </Link>
                  <Link 
                    href="/contact" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </section>

            {/* Final CTA */}
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
              <p className="text-xl md:text-2xl font-bold mb-4">
                Ready to plan your Godavari trip?
              </p>
              <p className="text-lg opacity-90">
                Call us or use the contact form and we will help you choose the right package.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}