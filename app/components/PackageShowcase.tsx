'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, MapPin, ArrowRight, Calendar, Heart } from 'lucide-react'
import { getPackageSlug } from '../utils/slugs'
import { packagesData } from '../packages/packagesData'
import CoverImage from './CoverImage'

// Capacity/departure come from packagesData so the homepage never contradicts
// the package page it links to.
const showcase = [
  {
    packageId: 2,
    name: 'Bhadrachalam to Papikondalu',
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980906/BhadrachalamTemple-1068x421_heh1o2.png',
    highlights: ['Temple Visit', 'Scenic Boat Ride', 'Overnight Stay', 'Professional Guide'],
    badge: 'Temple + Cruise',
    badgeColor: 'bg-gradient-to-r from-orange-500 to-red-500',
    description: 'Two day trip from Bhadrachalam temple through the Papikondalu hills to Rajahmundry'
  },
  {
    packageId: 5,
    name: 'Rajahmundry to Papikondalu',
    image: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_400,q_auto,f_auto/v1756003757/rajamundry_v2aufm.jpg',
    highlights: ['One Day Tour', 'Perantalapalli Stop', 'Onboard Lunch', 'Same-day Return'],
    badge: 'Day Trip',
    badgeColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
    description: 'One day boat tour through the Papikondalu hills with same-day return'
  },
  {
    packageId: 6,
    name: 'Sirivaka Night Stay',
    image: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_400,q_auto,f_auto/v1756003855/sirivaka_fdzsuf.avif',
    highlights: ['Night Stay', 'Campfire', 'Nature Walk', 'Stargazing'],
    badge: 'Overnight',
    badgeColor: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    description: 'Overnight camping in the Papikondalu hills beside the Godavari'
  }
]

const packages = showcase.map((item) => {
  const data = packagesData.find((pkg) => pkg.id === item.packageId)
  return { ...item, capacity: data?.capacity ?? '', departure: data?.departure ?? '' }
})

const PackageShowcase = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar size={16} className="mr-2" />
            Tour Packages
          </div>
          <h2 className="heading-lg mb-6">
            Popular <span className="gradient-text">Tour Packages</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Three ways to see Papikondalu by boat: a one day trip from Rajahmundry, a two day trip from Bhadrachalam, and an overnight camp at Sirivaka.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.packageId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card-elevated overflow-hidden group hover-glow relative"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`${pkg.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                  {pkg.badge}
                </span>
              </div>

              {/* Heart Icon */}
              <button className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors group/heart" aria-label={`Add ${pkg.name} to favorites`} suppressHydrationWarning>
                <Heart className="w-4 h-4 text-neutral-600 group-hover/heart:text-red-500 transition-colors" />
              </button>

              <div className="relative h-64 overflow-hidden">
                <CoverImage
                  src={pkg.image}
                  alt={pkg.name}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="heading-sm mb-4 group-hover:text-primary-600 transition-colors">
                  {pkg.name}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {pkg.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center text-neutral-600">
                    <Users size={16} className="mr-2 text-primary-500" />
                    <span className="text-sm font-medium">{pkg.capacity}</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <MapPin size={16} className="mr-2 text-primary-500" />
                    <span className="text-sm font-medium">{pkg.departure}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 px-3 py-2 rounded-lg text-xs font-medium border border-primary-100 text-center"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-3">
                    <p className="text-primary-600 font-semibold text-sm">Contact for Best Pricing</p>
                    <p className="text-xs text-gray-600 mt-1">Customizable packages available</p>
                  </div>
                </div>

                <Link
                  href={`/packages/${getPackageSlug(pkg.packageId)}`}
                  className="w-full btn-primary text-center group/btn"
                >
                  View {pkg.name} Tour
                  <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/packages" className="btn-outline group text-lg px-8 py-4">
            View All 9 Packages
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </Link>
          <p className="text-muted mt-4">Customizable packages available • Group bookings • Phone &amp; WhatsApp support</p>
        </motion.div>
      </div>
    </section>
  )
}

export default PackageShowcase