'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { attractionsData } from './attractionsData'
import { getAttractionSlug } from '../utils/slugs'
import CoverImage from '../components/CoverImage'

export default function AttractionsClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl font-bold mb-4"
          >
            Places to Visit Around Papikondalu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Hills, riverside temples, forests and camping spots along the Godavari, from Papikondalu and Perantalapalli to Bhadrachalam, Parnasala and Maredumilli.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractionsData.map((attraction, index) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elevated overflow-hidden group hover-glow"
              >
                <div className="relative h-64 overflow-hidden">
                  <CoverImage
                    src={attraction.image}
                    alt={attraction.name}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {attraction.name}
                  </h2>
                  <p className="text-gray-700 mb-4 text-sm">
                    {attraction.shortDescription}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Star size={14} className="mr-2" />
                      <span className="text-sm">{attraction.bestTime}</span>
                    </div>
                  </div>

                  <Link 
                    href={`/attractions/${getAttractionSlug(attraction.id)}`} 
                    className="w-full btn-primary text-center block"
                  >
                    Know More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Route orientation — grouping follows each place's description and linked package */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Which Places Are on the Boat Route?</h2>
          <p className="text-gray-700 mb-6">
            Some of these places are seen from, or reached by, a Godavari boat. Others are road trips you can add
            before or after a boat tour.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-elevated p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">By boat on the Godavari</h3>
              <ul className="space-y-2 text-gray-700">
                <li><Link href="/attractions/papikondalu" className="text-primary-600 hover:underline">Papikondalu hills</Link>, the gorge the boat cruises through</li>
                <li><Link href="/attractions/perantalapalli" className="text-primary-600 hover:underline">Perantalapalli</Link>, a riverside temple stop reached mainly by boat</li>
                <li><Link href="/attractions/sirivaka-night-stay-camping" className="text-primary-600 hover:underline">Sirivaka</Link>, reached by river for overnight camping</li>
              </ul>
            </div>
            <div className="card-elevated p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start points and road trips</h3>
              <ul className="space-y-2 text-gray-700">
                <li><Link href="/attractions/bhadrachalam" className="text-primary-600 hover:underline">Bhadrachalam</Link>, the temple town where upstream boat tours begin</li>
                <li><Link href="/attractions/parnasala" className="text-primary-600 hover:underline">Parnasala</Link>, a Ramayana site near Bhadrachalam</li>
                <li><Link href="/attractions/maredumilli" className="text-primary-600 hover:underline">Maredumilli</Link> forest and waterfalls, a day trip from Rajahmundry</li>
                <li><Link href="/attractions/gudisa" className="text-primary-600 hover:underline">Gudisa</Link> hill station, for viewpoints and camping</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mt-6">
            To plan the boat part of your trip, see the{' '}
            <Link href="/papikondalu-tours" className="text-primary-600 hover:underline">Papikondalu tour guide</Link> or{' '}
            <Link href="/packages" className="text-primary-600 hover:underline">explore Papikondalu tour packages</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-xl mb-8">
              Contact us to create a custom package with your favorite attractions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages" className="btn-secondary">
                View Packages
              </Link>
              <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}