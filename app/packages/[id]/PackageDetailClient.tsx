'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Users, Calendar, CheckCircle, Info, Route, Lightbulb, Phone, MessageCircle, ShieldCheck } from 'lucide-react'
import { agents } from '../../lib/agents'
import { getPackageSlug } from '../../utils/slugs'
import CoverImage from '../../components/CoverImage'
import { type TourLogistics, hasVerifiedPrice, formatINR, formatCheckedOn } from '../tourLogistics'

interface Package {
  id: number
  name: string
  shortDescription: string
  description: string
  image: string
  gallery: string[]
  capacity: string
  departure: string
  features: string[]
  itinerary: string[]
  bestTime: string
  inclusions: string[]
  highlights: string[]
  tips: string[]
}

interface PackageDetailClientProps {
  packageData: Package
  logistics: TourLogistics
}

const relatedPackages = [
  { id: 5, label: 'Rajahmundry to Papikondalu one day boat tour' },
  { id: 2, label: 'Bhadrachalam to Papikondalu two day boat tour' },
  { id: 6, label: 'Sirivaka night stay and camping package' },
]

// The destination guide each package visits, so guide ↔ package links run both ways.
const packageAttraction: Record<number, { slug: string; label: string }> = {
  1: { slug: 'bhadrachalam', label: 'Visiting Bhadrachalam Sri Rama temple' },
  2: { slug: 'papikondalu', label: 'About the Papikondalu hills and gorge' },
  3: { slug: 'maredumilli', label: 'Maredumilli forest and waterfalls guide' },
  5: { slug: 'papikondalu', label: 'About the Papikondalu hills and gorge' },
  6: { slug: 'sirivaka-night-stay-camping', label: 'About Sirivaka riverside camping' },
  7: { slug: 'parnasala', label: 'Parnasala Ramayana heritage site guide' },
  8: { slug: 'gudisa', label: 'Gudisa hill station guide' },
}

export default function PackageDetailClient({ packageData, logistics }: PackageDetailClientProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <CoverImage
          src={packageData.image}
          alt={packageData.name}
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {packageData.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl"
            >
              {packageData.shortDescription}
            </motion.p>
          </div>
        </div>
        
        {/* Back Button */}
        <Link
          href="/packages"
          className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          <ArrowLeft size={20} aria-hidden="true" />
          <span className="sr-only">Back to all Papikondalu tour packages</span>
        </Link>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Package Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-elevated p-8 mb-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Info className="text-primary-600" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900">Package Overview</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {packageData.description}
                </p>
                
                {/* Package Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <Users className="mx-auto text-primary-600 mb-2" size={24} />
                    <p className="text-sm text-gray-600">Capacity</p>
                    <p className="font-semibold">{packageData.capacity}</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="mx-auto text-primary-600 mb-2" size={24} />
                    <p className="text-sm text-gray-600">Departure</p>
                    <p className="font-semibold">{packageData.departure}</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="mx-auto text-primary-600 mb-2" size={24} />
                    <p className="text-sm text-gray-600">Best Time</p>
                    <p className="font-semibold text-xs">{packageData.bestTime}</p>
                  </div>
                </div>
              </motion.div>

              {/* Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card-elevated p-8 mb-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Route className="text-primary-600" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900">{packageData.name} Itinerary</h2>
                </div>
                <div className="space-y-4">
                  {packageData.itinerary.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Inclusions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card-elevated p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packageData.inclusions.map((inclusion, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">{inclusion}</span>
                    </div>
                  ))}
                </div>
                {logistics.exclusions.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Not Included</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      {logistics.exclusions.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </>
                )}
              </motion.div>

              {/* Boarding and timings — from packages/tourLogistics.ts */}
              <div className="card-elevated p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Boarding and Timings</h2>
                <dl className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-gray-700">
                  <dt className="font-medium text-gray-900">Boarding</dt>
                  <dd>
                    {logistics.boardingPoint ?? `${packageData.departure}, exact point confirmed when you book`}
                    {logistics.boardingMapUrl && (
                      <> (<a href={logistics.boardingMapUrl} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">open in Maps</a>)</>
                    )}
                  </dd>
                  <dt className="font-medium text-gray-900">Report by</dt>
                  <dd>{logistics.reportingTime ?? 'Sent with your booking confirmation'}</dd>
                  <dt className="font-medium text-gray-900">Back by</dt>
                  <dd>{logistics.returnTime ?? 'Sent with your booking confirmation'}</dd>
                  {logistics.dropPoint && (<><dt className="font-medium text-gray-900">Drop</dt><dd>{logistics.dropPoint}</dd></>)}
                  {logistics.meals && (<><dt className="font-medium text-gray-900">Meals</dt><dd>{logistics.meals}</dd></>)}
                </dl>
              </div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="card-elevated p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Package Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packageData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-blue-500" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Travel Tips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="card-elevated p-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Lightbulb className="text-primary-600" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900">Travel Tips</h2>
                </div>
                <div className="space-y-3">
                  {packageData.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Booking policies — summarised from /terms, the single source for these rules */}
              <div className="card-elevated p-8 mt-8">
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck className="text-primary-600" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900">Good to Know Before You Book</h2>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>Carry a valid photo ID for every passenger.</li>
                  <li>Life jackets are provided and must be worn during the boat ride.</li>
                  <li>Children must be accompanied by an adult.</li>
                  <li>Trips can be rescheduled or cancelled for unsafe weather or river conditions, with a full refund or a new date.</li>
                  <li>
                    Cancellation: full refund up to 48 hours before departure, 50% between 24 and 48 hours, no refund within 24 hours.
                    See our <Link href="/terms" className="text-primary-600 hover:underline">booking and cancellation terms</Link>.
                  </li>
                </ul>
              </div>

              {/* Related Papikondalu pages */}
              <div className="card-elevated p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Plan Your Papikondalu Trip</h2>
                <ul className="space-y-3">
                  <li>
                    <Link href="/papikondalu-tours" className="text-primary-600 hover:underline font-medium">
                      Papikondalu tour guide: routes, timings, prices and what to carry
                    </Link>
                  </li>
                  <li>
                    <Link href="/papikondalu-tours#timings" className="text-primary-600 hover:underline font-medium">
                      Check Papikondalu boat timings and boarding
                    </Link>
                  </li>
                  {relatedPackages
                    .filter((related) => related.id !== packageData.id)
                    .map((related) => (
                      <li key={related.id}>
                        <Link href={`/packages/${getPackageSlug(related.id)}`} className="text-primary-600 hover:underline font-medium">
                          {related.label}
                        </Link>
                      </li>
                    ))}
                  {packageAttraction[packageData.id] && (
                    <li>
                      <Link href={`/attractions/${packageAttraction[packageData.id].slug}`} className="text-primary-600 hover:underline font-medium">
                        {packageAttraction[packageData.id].label}
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link href="/attractions/perantalapalli" className="text-primary-600 hover:underline font-medium">
                      About Perantalapalli, the riverside temple stop on the boat route
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card-elevated p-6 mb-8 sticky top-6"
              >
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Highlights</h3>
                  <div className="flex flex-wrap gap-2">
                    {packageData.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    {hasVerifiedPrice(logistics) ? (
                      <>
                        <p className="text-sm text-gray-600">From</p>
                        <p className="text-2xl font-bold text-primary-700">{formatINR(logistics.fromPrice!)}<span className="text-sm font-normal text-gray-600"> per adult</span></p>
                        {logistics.childPrice !== null && <p className="text-sm text-gray-600">Child: {formatINR(logistics.childPrice)}</p>}
                        {logistics.priceNote && <p className="text-sm text-gray-600 mt-1">{logistics.priceNote}</p>}
                        <p className="text-xs text-gray-500 mt-1">Price checked on {formatCheckedOn(logistics.priceCheckedOn!)}</p>
                      </>
                    ) : (
                      <>
                        <p className="text-primary-600 font-semibold">Contact for Pricing</p>
                        <p className="text-sm text-gray-600 mt-1">Rates depend on date, group size and boat</p>
                      </>
                    )}
                    <Link href="/papikondalu-tours#price" className="text-sm text-primary-600 hover:underline mt-2 inline-block">
                      How Papikondalu tour prices work
                    </Link>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/contact" className="w-full btn-primary text-center block">
                    Book Now
                  </Link>
                  <div className="text-center text-sm text-gray-600 mb-2">Quick Contact</div>
                  {agents.slice(0, 2).map((agent) => (
                    <div key={agent.id} className="flex gap-2">
                      <a
                        href={`https://wa.me/${agent.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the ${packageData.name}. Can you help me?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                      >
                        <MessageCircle size={14} className="mr-1" />
                        {agent.name.split(' ')[0]}
                      </a>
                      <a
                        href={`tel:+91${agent.phone}`}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                      >
                        <Phone size={14} className="mr-1" />
                        Call
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready for This Adventure?</h2>
            <p className="text-xl mb-8">
              Contact us to customize this package or book your journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Customize Package
              </Link>
              <Link href="/packages" className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                View All Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}