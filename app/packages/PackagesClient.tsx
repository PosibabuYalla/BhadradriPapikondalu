'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, MapPin, Star } from 'lucide-react'
import { packagesData } from './packagesData'
import { getPackageSlug } from '../utils/slugs'
import CoverImage from '../components/CoverImage'

export default function PackagesClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl font-bold mb-4"
          >
            Papikondalu Tour Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Godavari boat tours to Papikondalu from Rajahmundry and Bhadrachalam, plus temple, forest and camping trips in the region. Pick a package below, or ask us to plan a custom trip.
          </motion.p>
          <p className="mt-6 text-white/90">
            New to Papikondalu? Read the{' '}
            <Link href="/papikondalu-tours" className="underline font-semibold">
              Papikondalu tour guide
            </Link>{' '}
            for routes, timings and what to carry, or see{' '}
            <Link href="/papikondalu-tours#price" className="underline font-semibold">
              how Papikondalu tour prices work
            </Link>.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagesData.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elevated overflow-hidden group hover-glow"
              >
                <div className="relative h-64 overflow-hidden">
                  <CoverImage
                    src={pkg.image}
                    alt={pkg.name}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {pkg.name}
                  </h2>
                  <p className="text-gray-700 mb-4 text-sm">
                    {pkg.shortDescription}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Users size={14} className="mr-2" />
                      <span className="text-sm">{pkg.capacity}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={14} className="mr-2" />
                      <span className="text-sm">{pkg.departure}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Star size={14} className="mr-2" />
                      <span className="text-sm">{pkg.bestTime}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link 
                      href={`/packages/${getPackageSlug(pkg.id)}`} 
                      className="flex-1 btn-primary text-center"
                    >
                      View Itinerary<span className="sr-only">: {pkg.name}</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 btn-outline text-center"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
            <p className="text-xl mb-8">
              We can create personalized itineraries based on your preferences and requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary">
                Contact Us
              </a>
              <a href="tel:+919848323488" className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Call Now: +91 9848323488
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}