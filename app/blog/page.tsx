import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { pageMetadata } from '../lib/seo'
import CoverImage from '../components/CoverImage'

export const metadata: Metadata = pageMetadata({
  title: 'Papikondalu Travel Blog | Guides & Trip Tips',
  description: 'Travel guides for Papikondalu, Bhadrachalam and the Godavari region: how to plan a boat trip, when to go, what to carry and places to visit nearby.',
  path: '/blog'
})

const blogPosts = [
  {
    id: 'papikondalu-bhadradri-magical-beauty',
    title: 'Discover the Magical Beauty of Papikondalu Hills and Bhadradri Temples',
    excerpt: 'If you\'re looking for a breathtaking getaway filled with natural wonders, spiritual experiences, and cultural richness, Papikondalu and Bhadradri are your perfect destinations.',
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg',
    date: 'December 2024',
    readTime: '8 min read',
    category: 'Travel Guide'
  }
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Travel Blog
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Travel guides for Papikondalu, Bhadrachalam temple and the Godavari region, written by the team that runs the boat tours.
          </p>
          <p className="text-white/90 max-w-3xl mx-auto mt-4">
            Planning a trip now? Start with the{' '}
            <Link href="/papikondalu-tours" className="underline font-semibold">Papikondalu tour guide</Link>{' '}
            or compare{' '}
            <Link href="/packages" className="underline font-semibold">Papikondalu tour packages</Link>.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="relative h-64 md:h-full">
                      <CoverImage
                        src={post.image}
                        alt={post.title}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-700 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      Read the Papikondalu &amp; Bhadradri guide
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}