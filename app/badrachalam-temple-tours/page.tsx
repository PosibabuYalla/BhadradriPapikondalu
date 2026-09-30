import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Users } from 'lucide-react'
import JsonLd from '../components/JsonLd'
import { businessInfo } from '../lib/businessInfo'
import { pageMetadata, breadcrumbSchema } from '../lib/seo'
import { packagesData } from '../packages/packagesData'
import { getPackageSlug } from '../utils/slugs'

// URL keeps the historical "badrachalam" spelling (already indexed); on-page
// copy uses the correct "Bhadrachalam".
export const metadata: Metadata = pageMetadata({
  title: 'Bhadrachalam Temple Tours with Papikondalu Boat Trip',
  description: 'Plan a Bhadrachalam Sri Rama temple visit with a Papikondalu boat tour on the Godavari. Temple visiting tips, nearby Parnasala, and tour packages.',
  path: '/badrachalam-temple-tours',
  image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_fill,w_1200,h_630,q_auto,f_auto/v1755980907/Bhadrachalam_Temple_yg8met.jpg',
  imageAlt: 'Bhadrachalam Sri Rama temple',
})

// Real packages that start at or include Bhadrachalam.
const templePackages = [2, 1, 7].map((id) => {
  const data = packagesData.find((p) => p.id === id)!
  return { ...data, href: `/packages/${getPackageSlug(id)}` }
})

export default function BadrachalamTempleToursPage() {
  const jsonLd = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Bhadrachalam Temple Tours', path: '/badrachalam-temple-tours' },
  ])

  return (
    <div className="min-h-screen">
      <JsonLd data={jsonLd} />
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/djmcbqzqt/image/upload/c_fill,w_1920,h_1080,q_auto,f_auto/v1755980907/Bhadrachalam_Temple_yg8met.jpg"
          alt="Bhadrachalam Sri Rama temple"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bhadrachalam <span className="text-yellow-400">Temple Tours</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Combine darshan at the Sri Rama temple in Bhadrachalam with a Godavari boat trip through the Papikondalu hills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages/bhadrachalam-papikondalu-packages" className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              View Bhadrachalam to Papikondalu Tour
            </Link>
            <a href={businessInfo.phoneHref} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
              Call {businessInfo.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Bhadrachalam Temple</h2>
            <p className="text-lg text-gray-700 mb-4">
              Bhadrachalam, on the banks of the Godavari in Telangana, is home to one of the most revered temples
              dedicated to Lord Rama. It draws large crowds for Sri Rama Navami, when the temple holds its main
              celebrations. The town is also the upstream starting point for boat trips into the Papikondalu hills.
            </p>
            <p className="text-gray-700">
              Read our <Link href="/attractions/bhadrachalam" className="text-primary-600 hover:underline">Bhadrachalam temple visitor guide</Link> for
              facilities and tips.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bhadrachalam Tour Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {templePackages.map((p) => (
                <div key={p.id} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{p.name}</h3>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <div className="flex items-center"><MapPin size={16} className="mr-2 text-orange-600" aria-hidden="true" />Starts from {p.departure}</div>
                    <div className="flex items-center"><Users size={16} className="mr-2 text-orange-600" aria-hidden="true" />Up to {p.capacity.toLowerCase()}</div>
                  </div>
                  <p className="text-gray-700 mb-4">{p.shortDescription}</p>
                  <Link href={p.href} className="mt-auto text-orange-700 font-semibold hover:underline">
                    See the {p.name} itinerary
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips for Your Temple Visit</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Carry a valid photo ID.</li>
              <li>Dress modestly and remove footwear before entering the temple.</li>
              <li>Check temple timings before you travel, especially around festivals.</li>
              <li>Book accommodation in advance for Sri Rama Navami and other festival dates.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nearby: Parnasala</h2>
            <p className="text-gray-700">
              <Link href="/attractions/parnasala" className="text-primary-600 hover:underline">Parnasala</Link>, near Bhadrachalam,
              is where Lord Rama, Sita and Lakshmana are believed to have stayed during their exile. It is often visited
              on the same trip as the temple.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Plan a Bhadrachalam and Papikondalu Trip</h2>
            <p className="text-lg mb-6">
              Tell us your dates and group size and we&apos;ll suggest a temple and boat-tour plan. For routes, timings and
              what to carry, see the <Link href="/papikondalu-tours" className="underline font-semibold">Papikondalu tour guide</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={businessInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                WhatsApp Us
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Send an Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
