import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Page Not Found | Papikondalu Tourism' },
  description: 'The page you are looking for could not be found. Explore our Papikondalu tours and packages.',
  robots: {
    index: false,
    follow: true
  }
}

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-gray-900 mb-4">404</div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Oops! Page Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              It seems like you&apos;ve wandered off the beaten path. The page you&apos;re looking for 
              doesn&apos;t exist or has been moved to a new location.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Back to Home
              </Link>
              <Link href="/packages" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Packages
              </Link>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">
                Popular Pages
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link href="/papikondalu-tours" className="text-blue-600 hover:text-blue-700 transition-colors">
                  Papikondalu Tours
                </Link>
                <Link href="/attractions" className="text-blue-600 hover:text-blue-700 transition-colors">
                  Attractions
                </Link>
                <Link href="/packages" className="text-blue-600 hover:text-blue-700 transition-colors">
                  Packages
                </Link>
                <Link href="/gallery" className="text-blue-600 hover:text-blue-700 transition-colors">
                  Gallery
                </Link>
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}