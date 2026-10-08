'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Gift, Bell, Sparkles, CheckCircle } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setEmail('')
    setIsLoading(false)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const benefits = [
    { icon: Gift, text: 'Exclusive Offers & Discounts' },
    { icon: Bell, text: 'Early Access to New Packages' },
    { icon: Sparkles, text: 'Special Event Invitations' }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto container-padding text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl mb-8"
          >
            <Mail className="text-white" size={40} />
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Stay Updated with Our
            <span className="block text-secondary-300">Latest Adventures</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get new Papikondalu tour dates, Godavari river cruise offers and seasonal travel tips by email.
          </p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center md:justify-start space-x-3 text-white/90"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Form or Success Message */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="card-glass p-8 max-w-md mx-auto"
            >
              <CheckCircle className="mx-auto mb-4 text-accent-400" size={48} />
              <h3 className="text-xl font-semibold text-white mb-2">
                Welcome Aboard!
              </h3>
              <p className="text-white/80">
                Thank you for subscribing! Check your inbox for a special welcome offer.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <form onSubmit={handleSubmit} className="relative">
                <div className="bg-white rounded-2xl p-2 shadow-2xl">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-1 relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        disabled={isLoading}
                        className="w-full px-6 py-4 text-gray-800 placeholder-gray-500 bg-transparent border-0 focus:outline-none focus:ring-0 text-lg font-medium rounded-xl"
                        suppressHydrationWarning
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-3 rounded-xl font-semibold group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      suppressHydrationWarning
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Subscribing...
                        </div>
                      ) : (
                        'Subscribe'
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center mt-6 gap-4 sm:gap-8 text-sm text-white/80">
                  <span className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    No spam, ever
                  </span>
                  <span className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Unsubscribe anytime
                  </span>
                  <span className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-400" />
                    Free updates
                  </span>
                </div>
              </form>
            </motion.div>
          )}

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-white/60 text-sm"
          >
            <p>No spam. Unsubscribe any time.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter