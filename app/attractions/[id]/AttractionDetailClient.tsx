'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, MapPin, Camera, Info, CheckCircle } from 'lucide-react'
import { getAttractionSlug } from '../../utils/slugs'

interface Attraction {
  id: number
  name: string
  shortDescription: string
  description: string
  image: string
  gallery: string[]
  highlights: string[]
  bestTime: string
  activities: string[]
  facilities: string[]
  tips: string[]
}

interface AttractionDetailClientProps {
  attraction: Attraction
}

// The most relevant tour page for each attraction, keyed by attraction slug.
const relatedTour: Record<string, { href: string; label: string }> = {
  'papikondalu': { href: '/papikondalu-tours', label: 'Plan a Papikondalu Boat Tour' },
  'perantalapalli': { href: '/packages/perantalapalli-packages', label: 'View Perantalapalli Eco Tour' },
  'gandipochamma-temple': { href: '/papikondalu-tours', label: 'Plan a Papikondalu Boat Tour' },
  'bhadrachalam': { href: '/packages/bhadrachalam-papikondalu-packages', label: 'View Bhadrachalam to Papikondalu Tour' },
  'sirivaka-night-stay-camping': { href: '/packages/sirivaka-night-stay-package', label: 'View Sirivaka Night Stay Package' },
  'maredumilli': { href: '/packages/maredumilli-packages', label: 'View Maredumilli Tour Package' },
  'parnasala': { href: '/packages/parnasala-packages', label: 'View Parnasala Temple Tour' },
  'gudisa': { href: '/packages/gudisa-packages', label: 'View Gudisa Hills Tour' },
}

export default function AttractionDetailClient({ attraction }: AttractionDetailClientProps) {
  const related = relatedTour[getAttractionSlug(attraction.id)] || { href: '/packages', label: 'View Tour Packages' }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src={attraction.image}
          alt={attraction.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {attraction.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto px-4"
            >
              {attraction.shortDescription}
            </motion.p>
          </div>
        </div>
        
        {/* Back Button */}
        <Link
          href="/attractions"
          className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          <ArrowLeft size={20} aria-hidden="true" />
          <span className="sr-only">Back to all attractions</span>
        </Link>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-elevated p-8 mb-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Info className="text-primary-600" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900">About This Place</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {attraction.description}
                </p>
              </motion.div>

              {/* Activities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card-elevated p-8 mb-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Camera className="text-primary-600" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900">Activities</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {attraction.activities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Facilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card-elevated p-8 mb-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="text-primary-600" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900">Facilities</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {attraction.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-blue-500" size={16} />
                      <span className="text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="card-elevated p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel Tips</h2>
                <div className="space-y-3">
                  {attraction.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card-elevated p-6 mb-8 sticky top-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Info</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Star className="text-primary-600" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Best Time</p>
                      <p className="text-gray-600">{attraction.bestTime}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {attraction.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href={related.href} className="w-full btn-primary text-center block">
                    {related.label}
                  </Link>
                  <Link href="/contact" className="w-full btn-outline text-center block">
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}