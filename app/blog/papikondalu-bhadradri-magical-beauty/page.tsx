import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react'
import { pageMetadata, absoluteUrl, breadcrumbSchema, organizationRef } from '../../lib/seo'
import JsonLd from '../../components/JsonLd'
import CoverImage from '../../components/CoverImage'

export const metadata: Metadata = pageMetadata({
  title: 'Papikondalu & Bhadradri Travel Guide | East Godavari',
  description: 'A travel guide to the Papikondalu hills and Bhadradri (Bhadrachalam) temple: Godavari river cruises, Maredumilli waterfalls, Parnasala and when to visit.',
  path: '/blog/papikondalu-bhadradri-magical-beauty',
  image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_1200,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg',
  imageAlt: 'Papikondalu hills beside the Godavari River'
})

const articleSchema = {
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Papikondalu & Bhadradri Travel Guide',
      description: 'A travel guide to the Papikondalu hills and Bhadradri (Bhadrachalam) temple: Godavari river cruises, Maredumilli waterfalls, Parnasala and when to visit.',
      image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_1200,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg',
      // Month-only date as shown on the page; replace with the exact publish date if known.
      datePublished: '2024-12',
      author: organizationRef,
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
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <p className="text-lg leading-relaxed text-gray-700">
                If you&apos;re looking for a breathtaking getaway filled with natural wonders, spiritual experiences, and cultural richness, 
                Papikondalu and Bhadradri are your perfect destinations. Nestled in the heart of East Godavari, Andhra Pradesh, 
                this region offers stunning river cruises, majestic hills, sacred temples, and tranquil waterfalls.
              </p>
            </div>

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
                    Experience the serene beauty of the Papikondalu hills by cruising along the Godavari River. 
                    The lush green hills and the peaceful river landscape create a perfect backdrop for travelers 
                    seeking both adventure and relaxation. Our{' '}
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
                    alt="Ancient Bhadradri Temple dedicated to Lord Rama"
                    className="object-cover"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Sacred Bhadradri Temple: A Spiritual Haven
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Visit the ancient Bhadradri temple, a place of worship dedicated to Lord Rama. 
                    This temple is renowned for its architectural grandeur and festive celebrations like Rama Navami, 
                    where thousands gather to seek blessings. Read more about{' '}
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
                    alt="Beautiful Maredumilli Waterfalls surrounded by dense forest"
                    className="object-cover"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Adventure at Maredumilli Waterfalls
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    If you love nature and adventure, Maredumilli Waterfalls should be on your list. 
                    Trek through dense forests, enjoy the misty spray of the waterfalls, and embrace the serenity of untouched nature. See our{' '}
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
                  The best time to explore Papikondalu and Bhadradri is from <strong>October to March</strong>. 
                  The weather is pleasant, perfect for river cruises, temple tours, and nature outings.
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
                  Choose from a variety of customizable tour packages including day tours, overnight stays, and multi-day adventures. 
                  Our expert guides and 24/7 customer support ensure that you have an unforgettable and safe journey.
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
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Book your adventure today and immerse yourself in the natural and spiritual wonders of East Godavari!
              </h2>
              <p className="text-lg opacity-90">
                Let us help you create memories that last a lifetime.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}