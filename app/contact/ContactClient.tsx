'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, User, Facebook, Instagram, Youtube, Star, Award, Shield, Heart, Sparkles } from 'lucide-react'
import { agents } from '../lib/agents'
import { businessInfo } from '../lib/businessInfo'

const whatsappMessage = encodeURIComponent("Hi, I'm interested in Papikondalu tour packages. Can you help me?")

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    packageInterest: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      
      if (result.success) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', packageInterest: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
      setTimeout(() => setIsSubmitted(false), 5000)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: ['Multiple agents available', '24/7 Customer Support'],
      action: null,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['aswinigodavari@gmail.com', 'Quick Response Guaranteed'],
      action: 'mailto:aswinigodavari@gmail.com',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Rajahmundry', 'Andhra Pradesh, India'],
      action: null,
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Sun: 6:00 AM - 10:00 PM', 'Emergency: 24/7'],
      action: null,
      gradient: 'from-orange-500 to-orange-600'
    }
  ]

  const packages = [
    'Bhadrachalam to Papikondalu (2 Days)',
    'Rajahmundry to Papikondalu (8 Hours)',
    'Bhadrachalam to Rajahmundry via Papikondalu (3 Days)',
    'Sirivaka Night Stay Package',
    'Maredumalli Special Package',
    'Custom Package'
  ]

  const stats = [
    { icon: Star, value: '20+', label: 'Years Experience' },
    { icon: Heart, value: '7L+', label: 'Happy Customers' },
    { icon: Award, value: '100%', label: 'Safe Tours' },
    { icon: Shield, value: '24/7', label: 'Support' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary-300 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl mb-8"
            >
              <MessageCircle className="text-white" size={40} />
            </motion.div>
            
            <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              Let&apos;s Plan Your
              <span className="block text-secondary-300">Papikondalu Boat Tour</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90">
              Tell us your travel date, group size and starting point (Rajahmundry or Bhadrachalam), and we&apos;ll suggest the right Papikondalu boat tour or temple package.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Ready to embark on an unforgettable journey? Our experienced team is here to craft 
                  your perfect Papikondalu adventure with personalized service and attention to detail.
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className={`w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 leading-relaxed">
                              {info.action && idx === 0 ? (
                                <a href={info.action} className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl border border-primary-100"
              >
                <div className="flex items-center mb-4">
                  <Sparkles className="text-primary-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-primary-900">Why Choose Us?</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    '20+ Years of Experience',
                    '7+ Lakh Happy Customers',
                    'Professional & Safe Tours',
                    'Customizable Packages'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle size={18} className="mr-3 text-primary-600 flex-shrink-0" />
                      <span className="text-primary-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Form and Map */}
            <div className="space-y-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-3xl opacity-50" />
                
                <div className="relative">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send us a Message</h2>
                  
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="text-center py-8"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="text-green-500" size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-green-600 mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 text-lg">
                        Thank you for contacting us. We&apos;ll get back to you within 24 hours with personalized recommendations.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-gray-900 placeholder-gray-500 disabled:opacity-50"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-gray-900 placeholder-gray-500 disabled:opacity-50"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-gray-900 placeholder-gray-500 disabled:opacity-50"
                            placeholder="+91 9848323488"
                          />
                        </div>
                        <div>
                          <label htmlFor="packageInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                            Package Interest
                          </label>
                          <select
                            id="packageInterest"
                            name="packageInterest"
                            value={formData.packageInterest}
                            onChange={handleChange}
                            disabled={isLoading}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-gray-900 disabled:opacity-50"
                          >
                            <option value="">Select a package</option>
                            {packages.map((pkg, index) => (
                              <option key={index} value={pkg}>{pkg}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-gray-900 placeholder-gray-500 disabled:opacity-50"
                          placeholder="What can we help you with?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none disabled:opacity-50"
                          placeholder="Tell us about your travel plans, group size, preferred dates, or any special requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={20} className="ml-3" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Interactive Map */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8 relative overflow-hidden"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us on Map</h3>
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122064.89594777842!2d81.6871!3d17.0005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a4ca9c9d9c9d%3A0x9c9d9c9d9c9d9c9d!2sPapikondalu%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl border-0"
                    title="Papikondalu Location Map"
                  />
                </div>
                <div className="mt-4 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl">
                  <h4 className="font-semibold text-primary-900 mb-2">Papikondalu Hills</h4>
                  <p className="text-primary-800 text-sm">
                    Located along the Godavari River in Andhra Pradesh, Papikondalu is a stunning hill range known for its scenic beauty and peaceful boat rides.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Experts Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Travel Experts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect directly with our experienced travel consultants for personalized assistance and expert guidance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {agents.map((agent, index) => {
              const gradients = [
                'from-blue-500 to-blue-600',
                'from-green-500 to-green-600',
                'from-purple-500 to-purple-600',
                'from-orange-500 to-orange-600'
              ]
              const bgColors = [
                'bg-gradient-to-br from-blue-50 to-blue-100',
                'bg-gradient-to-br from-green-50 to-green-100',
                'bg-gradient-to-br from-purple-50 to-purple-100',
                'bg-gradient-to-br from-orange-50 to-orange-100'
              ]
              return (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`${bgColors[index]} rounded-2xl shadow-lg p-4 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden`}
                >
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${gradients[index]} rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <User className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{agent.name}</h3>
                    <p className="text-gray-600 mb-1 font-medium text-sm">{agent.role}</p>
                    <p className="text-gray-700 font-bold mb-4 text-sm">+91 {agent.phone}</p>
                    
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/${agent.whatsapp}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-2 rounded-lg font-medium text-xs transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105"
                      >
                        <MessageCircle size={14} className="mr-1" />
                        WhatsApp
                      </a>
                      <a
                        href={`tel:+91${agent.phone}`}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded-lg font-medium text-xs transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105"
                      >
                        <Phone size={14} className="mr-1" />
                        Call
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10 text-center relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-full blur-2xl opacity-50" />
            
            <div className="relative">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Follow Our Journey</h3>
              <p className="text-xl text-gray-600 mb-10">Stay connected and discover amazing travel stories, tips, and exclusive offers</p>
              
              <div className="flex justify-center gap-8">
                <a
                  href="https://www.facebook.com/profile.php?id=61579935625167"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on Facebook"
                  className="w-20 h-20 bg-blue-600 hover:bg-blue-700 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl group"
                >
                  <Facebook className="text-white group-hover:scale-110 transition-transform duration-300" size={28} />
                </a>
                <a
                  href="https://www.instagram.com/aswinigodavari_travel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on Instagram"
                  className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl group"
                >
                  <Instagram className="text-white group-hover:scale-110 transition-transform duration-300" size={28} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCzqJxEIGKQyIi9-EkCfR5ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Subscribe to our YouTube channel"
                  className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl group"
                >
                  <Youtube className="text-white group-hover:scale-110 transition-transform duration-300" size={28} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary-300 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Immediate Assistance?</h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Our team is available 24/7 to help you plan the perfect Papikondalu experience
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={businessInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition-colors"
              >
                <MessageCircle size={20} className="mr-2" aria-hidden="true" />
                WhatsApp {businessInfo.phone}
              </a>
              <a
                href={businessInfo.phoneHref}
                className="inline-flex items-center justify-center bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold shadow-lg transition-colors"
              >
                <Phone size={20} className="mr-2" aria-hidden="true" />
                Call {businessInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}