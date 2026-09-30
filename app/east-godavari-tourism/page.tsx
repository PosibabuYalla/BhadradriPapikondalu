import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import JsonLd from '../components/JsonLd'
import { pageMetadata, breadcrumbSchema } from '../lib/seo'
import CoverImage from '../components/CoverImage'

export const metadata: Metadata = pageMetadata({
  title: 'East Godavari Tourism | Places to Visit Near Papikondalu',
  description: 'Places to visit around the Godavari: Papikondalu hills, Rajahmundry, Maredumilli forests, Parnasala, Sirivaka camping and Bhadrachalam temple.',
  path: '/east-godavari-tourism',
})

export default function EastGodavariTourismPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'East Godavari Tourism', path: '/east-godavari-tourism' },
      ])} />
      <section className="relative h-[70vh] flex items-center justify-center">
        <CoverImage
          src="https://res.cloudinary.com/dnz1dmnmb/image/upload/c_fill,w_1920,h_1080,q_auto,f_webp/v1755401093/papihills1_hmfpkr.jpg"
          alt="Papikondalu hills on the Godavari in East Godavari"
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-green-400">East Godavari Tourism</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Hills, river gorges, forests and temples along the Godavari, with Papikondalu at the centre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages" className="bg-green-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              Explore East Godavari
            </Link>
            <Link href="tel:+919848323488" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
              Call: +91 9848323488
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Best Tourist Places</span> in East Godavari
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              The places below are the ones most visitors combine with a Godavari boat trip. Bhadrachalam and Parnasala are
              just across the state border in Telangana but sit on the same river route.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,h_250,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg"
                alt="Papikondalu hills beside the Godavari River"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Papikondalu Hills</h3>
                <p className="text-gray-700 mb-4">
                  Crown jewel of <strong>East Godavari tourism</strong> with scenic boat rides and breathtaking hill views.
                </p>
                <Link href="/papikondalu-tours" className="text-green-600 font-semibold hover:text-green-700">
                  Papikondalu tour guide →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,h_250,q_auto,f_auto/v1755980907/Bhadrachalam_Temple_yg8met.jpg"
                alt="Bhadrachalam Sri Rama temple"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bhadrachalam Temple</h3>
                <p className="text-gray-700 mb-4">
                  Revered Lord Rama temple on the Godavari, and the upstream start of the Papikondalu boat route.
                </p>
                <Link href="/badrachalam-temple-tours" className="text-orange-600 font-semibold hover:text-orange-700">
                  Bhadrachalam temple tours →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_400,h_250,q_auto,f_auto/v1755978648/maredumilli_lqndyb.webp"
                alt="Maredumilli forest"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Maredumilli Forests</h3>
                <p className="text-gray-700 mb-4">
                  Pristine forest area with waterfalls, perfect for eco-tourism and adventure activities.
                </p>
                <Link href="/attractions/maredumilli" className="text-emerald-600 font-semibold hover:text-emerald-700">
                  Maredumilli travel guide →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_400,h_250,q_auto,f_auto/v1756003757/rajamundry_v2aufm.jpg"
                alt="Godavari riverfront at Rajahmundry"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rajahmundry City</h3>
                <p className="text-gray-700 mb-4">
                  The main starting point for one day Papikondalu boat tours, with rail and air connections.
                </p>
                <Link href="/packages/rajahmundry-papikondalu-packages" className="text-blue-600 font-semibold hover:text-blue-700">
                  Rajahmundry to Papikondalu tour →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_400,h_250,q_auto,f_auto/v1755979312/dev_parnasala_pfvan7.jpg"
                alt="Parnasala Ramayana heritage site"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Parnasala</h3>
                <p className="text-gray-700 mb-4">
                  Mythological site where Lord Rama stayed during exile, rich in cultural heritage.
                </p>
                <Link href="/attractions/parnasala" className="text-purple-600 font-semibold hover:text-purple-700">
                  About Parnasala →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_400,h_250,q_auto,f_auto/v1755979074/sirivaka-bamboo-huts-papikondalu_sgrm4p.jpg"
                alt="Bamboo huts at Sirivaka in the Papikondalu hills"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sirivaka Camping</h3>
                <p className="text-gray-700 mb-4">
                  Unique overnight camping experience in nature, perfect for adventure tourism.
                </p>
                <Link href="/attractions/sirivaka-night-stay-camping" className="text-indigo-600 font-semibold hover:text-indigo-700">
                  Sirivaka night stay →
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Tour Packages in the Region
            </h2>
            <ul className="grid md:grid-cols-2 gap-4 text-lg">
              <li><Link href="/packages/rajahmundry-papikondalu-packages" className="text-green-700 font-semibold hover:underline">Rajahmundry to Papikondalu one day tour</Link></li>
              <li><Link href="/packages/bhadrachalam-papikondalu-packages" className="text-green-700 font-semibold hover:underline">Bhadrachalam to Papikondalu two day tour</Link></li>
              <li><Link href="/packages/sirivaka-night-stay-package" className="text-green-700 font-semibold hover:underline">Sirivaka night stay and camping</Link></li>
              <li><Link href="/packages/maredumilli-packages" className="text-green-700 font-semibold hover:underline">Maredumilli waterfalls tour</Link></li>
              <li><Link href="/packages/rampachodavaram-waterfalls-tour-package" className="text-green-700 font-semibold hover:underline">Rampachodavaram tribal culture tour</Link></li>
              <li><Link href="/packages/parnasala-packages" className="text-green-700 font-semibold hover:underline">Parnasala heritage temple tour</Link></li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Plan Your <span className="text-yellow-300">Godavari Trip</span>
            </h2>
            <p className="text-xl mb-6">
              Tell us which places you want to cover and how many days you have, and we&apos;ll put together a route.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages" className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                View All Packages
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Plan Custom Tour
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}