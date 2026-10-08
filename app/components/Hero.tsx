'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Calendar, Ship, MapPin, Play } from 'lucide-react'
import { memo } from 'react'
import { businessInfo } from '../lib/businessInfo'
import CoverImage from './CoverImage'

const Hero = () => {
  // Only factual, checkable stats here — no "premium"/"award-winning" labels.
  const stats = [
    { icon: Calendar, label: `Since ${businessInfo.foundedYear}`, sublabel: `${businessInfo.yearsInBusiness} years on the Godavari` },
    ...(businessInfo.customersServed ? [{ icon: Users, label: businessInfo.customersServed, sublabel: 'Travellers served' }] : []),
    { icon: MapPin, label: '2 Routes', sublabel: 'Rajahmundry & Bhadrachalam' },
    { icon: Ship, label: '3 Boats', sublabel: 'Own fleet' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <CoverImage
          src="https://res.cloudinary.com/dnz1dmnmb/image/upload/c_fill,w_1920,h_1080,q_auto,f_webp/v1755976642/1b45e060-bfee-4be1-85f4-51c2c6430c70_itqkts.jpg"
          alt="Tourist boat on the Godavari in the Papikondalu gorge under monsoon clouds"
          className="object-cover scale-110"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-secondary-900/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary-400/40 rounded-full"
        />
      </div>

      <div className="relative z-10 text-center text-white max-w-6xl mx-auto container-padding">
          {/* No entrance fade on the headline block: an opacity:0 start hides the
              LCP text until JavaScript hydrates, which hurts mobile LCP. */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20">
                <MapPin size={16} className="mr-2 text-secondary-400" />
                <span className="text-sm font-medium">Godavari River, Andhra Pradesh</span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                <span className="text-yellow-400">Papikondalu Boat Tours</span>
                <span className="block">
                  <span className="bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent">
                    Authentic Godavari River Cruises
                  </span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Boat departures from Rajahmundry and Bhadrachalam through the Papikondalu hills, with stops at Perantalapalli and Bhadrachalam temple. Running these tours since {businessInfo.foundedYear}.
              </p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-center hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                  >
                    <Icon className="mx-auto mb-2 text-secondary-400" size={24} />
                    <div className="text-lg font-bold text-white">{stat.label}</div>
                    <div className="text-sm text-white/70">{stat.sublabel}</div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a href={businessInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary group text-lg px-8 py-4 bg-green-600 hover:bg-green-700 border-green-600">
                Book Now on WhatsApp
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </a>

              <Link href="/packages" className="btn-outline group bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-neutral-900 text-lg px-8 py-4">
                View Tour Packages
              </Link>

              <a
                href={businessInfo.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline group bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-neutral-900 text-lg px-8 py-4"
              >
                <Play className="mr-2 transition-transform group-hover:scale-110" size={20} />
                Watch Video
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-wrap justify-center items-center gap-8 pt-8 text-white/80"
            >
              <a href={businessInfo.phoneHref} className="text-sm hover:text-white transition-colors">📞 {businessInfo.phone}</a>
              <div className="text-sm">✓ Running Papikondalu tours since {businessInfo.foundedYear}</div>
            </motion.div>
          </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>


    </section>
  )
}

export default memo(Hero)