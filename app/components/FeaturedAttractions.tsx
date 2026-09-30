'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock } from 'lucide-react'
import { getAttractionSlug } from '../utils/slugs'
import CoverImage from './CoverImage'

const attractions = [
  {
    id: 1,
    name: 'Papikondalu',
    description: 'Majestic hills along the Godavari River offering breathtaking views',
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg',
    duration: '4-6 hours',
    highlight: 'Most Popular',
    link: `/attractions/${getAttractionSlug(1)}`
  },
  {
    id: 2,
    name: 'Bhadrachalam Temple',
    description: 'Sacred temple dedicated to Lord Rama with rich spiritual heritage',
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980906/BhadrachalamTemple-1068x421_heh1o2.png',
    duration: '2-3 hours',
    highlight: 'Spiritual',
    link: `/attractions/${getAttractionSlug(4)}`
  },
  {
    id: 3,
    name: 'Maredumilli Waterfalls',
    description: 'Pristine waterfalls surrounded by lush green forests',
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755978851/MAREDUMILLI_-_waterfalls_kmuppt.jpg',
    duration: '3-4 hours',
    highlight: 'Adventure',
    link: `/attractions/${getAttractionSlug(6)}`
  },
  {
    id: 4,
    name: 'Parnasala',
    description: 'Historic site with cultural significance and natural beauty',
    image: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_400,q_auto,f_auto/v1755979312/dev_parnasala_pfvan7.jpg',
    duration: '2-3 hours',
    highlight: 'Heritage',
    link: `/attractions/${getAttractionSlug(7)}`
  }
]

const FeaturedAttractions = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white" data-section="featured-attractions">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin size={16} className="mr-2" />
            Top Destinations
          </div>
          <h2 className="heading-lg mb-6">
            Featured <span className="gradient-text">Attractions</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            The hills, temples and forests most visitors combine with a Godavari boat trip. See the full{' '}
            <Link href="/papikondalu-tours" className="text-primary-600 font-semibold hover:underline">Papikondalu tour guide</Link>{' '}
            for routes and planning tips.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attractions.map((attraction, index) => (
            <motion.div
              key={attraction.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-elevated overflow-hidden group hover-glow"
            >
              <div className="relative h-56 overflow-hidden">
                <CoverImage
                  src={attraction.image}
                  alt={attraction.name}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Highlight Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {attraction.highlight}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center">
                  <Clock className="w-3 h-3 text-neutral-600 mr-1" />
                  <span className="text-xs font-medium text-neutral-800">{attraction.duration}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="heading-sm mb-3 group-hover:text-primary-600 transition-colors">
                  {attraction.name}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {attraction.description}
                </p>
                <Link 
                  href={attraction.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group/link transition-colors"
                >
                  Explore {attraction.name}
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/attractions" className="btn-primary group text-lg px-8 py-4">
            View All Attractions
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </Link>
          <p className="text-muted mt-4">Discover 8+ amazing destinations</p>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedAttractions