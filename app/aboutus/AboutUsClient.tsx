'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Award, Ship, Clock, Star, CheckCircle, Shield, Heart, MapPin, Phone, Mail, Calendar, BookOpen, ArrowRight } from 'lucide-react'

export default function AboutUsClient() {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '7+ Lakh', color: 'text-blue-600' },
    { icon: Clock, label: 'Years of Experience', value: '20+', color: 'text-green-600' },
    { icon: Ship, label: 'Fleet Size', value: '3 Boats', color: 'text-purple-600' },
    { icon: Star, label: 'Customer Rating', value: '4.8/5', color: 'text-yellow-600' },
  ]

  const boats = [
    { 
      name: 'Aswini', 
      capacity: '120 passengers', 
      image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/v1756059545/WhatsApp_Image_2025-08-24_at_22.29.36_7a1d5156_ktga3z.jpg',
      features: ['AC Cabin', 'Restaurant', 'Safety Equipment', 'Panoramic Views'] 
    },
    { 
      name: 'Sri Godavari', 
      capacity: '150 passengers', 
      image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/v1756059654/WhatsApp_Image_2025-08-24_at_22.29.36_76559ca0_vgryqk.jpg',
      features: ['Luxury Seating', 'Entertainment', 'Dining Hall', 'Upper Deck'] 
    },
    { 
      name: 'Srilaxmi', 
      capacity: '100 passengers', 
      image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/v1756059655/WhatsApp_Image_2025-08-24_at_22.29.53_d0d316b3_gjgggn.jpg',
      features: ['Panoramic Views', 'Comfort Seating', 'Refreshments', 'Photography Deck'] 
    },
  ]

  const whyChooseUs = [
    { icon: Shield, title: 'Safety First', desc: 'Modern safety equipment and trained crew' },
    { icon: Award, title: 'Expert Guides', desc: 'Local guides with deep cultural knowledge' },
    { icon: Heart, title: 'Customer Care', desc: '24/7 support and personalized service' },
    { icon: Star, title: 'Quality Service', desc: 'Consistently rated 4.8/5 by customers' },
    { icon: MapPin, title: 'Best Routes', desc: 'Carefully curated scenic routes' },
    { icon: Calendar, title: 'Flexible Booking', desc: 'Easy booking and cancellation policies' },
  ]

  return (
    <div className="min-h-screen">
      {/* About Organization Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Organization Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                  About Our Organization
                </span>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Papikondalu Tourism
                  <span className="block text-primary-600">Excellence Since 2004</span>
                </h1>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  For over <strong className="text-primary-600">two decades</strong>, Papikondalu Tourism has been the 
                  <strong className="text-secondary-600">leading name</strong> in river tourism along the scenic Godavari River. 
                  What started as a passionate family venture has evolved into Andhra Pradesh most 
                  <strong className="text-primary-600">trusted tourism brand</strong>.
                </p>
                <p>
                  We have successfully served more than <strong className="text-secondary-600">7 lakh happy customers</strong>, 
                  creating unforgettable memories through our carefully crafted boat tours, temple visits, 
                  and adventure packages in the breathtaking Papikondalu region.
                </p>
                <p>
                  Our unwavering commitment to <strong className="text-primary-600">excellence, safety, and customer satisfaction</strong> 
                  has made us the preferred choice for tourists seeking authentic experiences in one of the 
                  most scenic destinations in India.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <stat.icon className={`mx-auto mb-4 ${stat.color}`} size={36} />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Papikondalu Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dnz1dmnmb/image/upload/v1756004871/aboutus_papikonalu_mjtxyo.jpg"
                  alt="Papikondalu Scenic Beauty"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[600px] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-2xl font-bold mb-2">Papikondalu Hills</p>
                  <p className="text-white/90">Natural Paradise on Godavari River</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-500 rounded-full opacity-20 blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Boats Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Our Fleet
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Modern & Safe Boats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience comfort and safety with our well-maintained fleet of boats, 
              each designed to provide you with the perfect river journey.
            </p>
          </motion.div>

          {/* Boat 1 - Aswini (Image Left, Content Right) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={boats[0].image}
                  alt={boats[0].name}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-bold text-gray-800">{boats[0].capacity}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <Ship className="text-primary-600 mr-4" size={32} />
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{boats[0].name}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our flagship vessel designed for intimate river experiences. Perfect for smaller groups 
                  seeking comfort and personalized service on the scenic Godavari waters.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {boats[0].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Boat 2 - Sri Godavari (Content Left, Image Right) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="space-y-8 lg:order-1">
              <div>
                <div className="flex items-center mb-4">
                  <Ship className="text-primary-600 mr-4" size={32} />
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{boats[1].name}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our largest and most luxurious vessel, accommodating up to 100 passengers. 
                  Features premium amenities and spacious decks for the ultimate river cruise experience.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {boats[1].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={boats[1].image}
                  alt={boats[1].name}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-bold text-gray-800">{boats[1].capacity}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Boat 3 - Srilaxmi (Image Left, Content Right) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={boats[2].image}
                  alt={boats[2].name}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-bold text-gray-800">{boats[2].capacity}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <Ship className="text-primary-600 mr-4" size={32} />
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{boats[2].name}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The perfect balance of comfort and capacity. Ideal for medium-sized groups 
                  with excellent panoramic viewing areas and comfortable seating arrangements.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {boats[2].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-secondary-300 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto container-padding relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover what makes Papikondalu Tourism the preferred choice for 
              thousands of travelers seeking unforgettable experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
              <h3 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone size={20} className="text-secondary-300" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-white/80">+91 9848323488</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail size={20} className="text-secondary-300" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-white/80">info@papikondalutourism.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin size={20} className="text-secondary-300" />
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-white/80">Rajahmundry, AP</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact Us Today
                </Link>
                <Link 
                  href="/blog" 
                  className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  <BookOpen className="mr-2" size={20} />
                  Read Our Blog
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}