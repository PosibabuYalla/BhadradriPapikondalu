'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { imageDimensions } from '../lib/imageDimensions'
import { motion } from 'framer-motion'
import Lightbox from '../components/Lightbox'

const galleryImages = [
  // Nature Category
  { id: 1, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg', alt: 'Papikondalu boating: tourist boat on the Godavari between the Papikondalu hills', category: 'nature' },
  { id: 2, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980789/papikondalu-900x500-1_d4f8xn.jpg', alt: 'Papikondalu night stay tents on the Godavari riverbank below the Papikondalu hills', category: 'nature' },
  { id: 3, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980789/slide-1_tpykpk.jpg', alt: 'Double-deck Papikondalu tourist boat cruising on the Godavari', category: 'nature' },
  { id: 4, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980790/Papikondalu_03_zyuwnr.jpg', alt: 'Sunset over the Papikondalu hills and the Godavari River', category: 'nature' },
  { id: 5, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755978850/Amruthadhara-Waterfalls_sy5rgq.jpg', alt: 'Amruthadhara Waterfalls near Maredumilli', category: 'nature' },
  { id: 6, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755978851/MAREDUMILLI_-_waterfalls_kmuppt.jpg', alt: 'Waterfall in the Maredumilli forest, East Godavari', category: 'nature' },
  { id: 7, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755978851/Jalatarangini-Waterfalls_ev33iz.jpg', alt: 'Jalatarangini Waterfalls in the Maredumilli forest', category: 'nature' },
  { id: 8, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755978850/Jalatharangini-1024x675_igtvje.jpg', alt: 'Jalatharangini Falls, Maredumilli', category: 'nature' },
  { id: 9, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755981756/gudisa-hill-station-800x500_gvmccv.jpg', alt: 'Green slopes at Gudisa hill station', category: 'nature' },
  { id: 10, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755981752/gudisa1_nmrhyv.png', alt: 'Tents at sunrise on the Gudisa hilltop', category: 'nature' },
  { id: 11, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756007142/Nwgbridge_q3jh6g.jpg', alt: 'Sunset over the Godavari beside the river bridge at Rajahmundry', category: 'nature' },

  // Temple Category
  { id: 12, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980906/BhadrachalamTemple-1068x421_heh1o2.png', alt: 'Bhadrachalam Sri Rama temple with the Godavari and its bridge behind', category: 'temple' },
  { id: 13, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980905/Rama-Navami-1_wapuc1.jpg', alt: 'Priests performing Sri Rama Navami rituals', category: 'temple' },
  { id: 14, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980906/unnamed_2_uklsqp.jpg', alt: 'Godavari Arch Bridge at Rajahmundry with visitors on the riverbank', category: 'temple' },
  { id: 15, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980906/unnamed_1_w8jko9.jpg', alt: 'Decorated temple chariot by the roadside', category: 'temple' },
  { id: 16, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980906/unnamed_lcfpni.jpg', alt: 'Bhadrachalam temple towers with the Godavari and the bridge behind', category: 'temple' },
  { id: 17, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980907/licensed-image_gwlk90.jpg', alt: 'Bhadrachalam temple complex among trees beside the Godavari', category: 'temple' },
  { id: 18, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980907/Bhadrachalam_Temple_yg8met.jpg', alt: 'Bhadrachalam Sri Rama temple on the hill, seen from below', category: 'temple' },
  { id: 19, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756007134/dwarapudi_temple_rxlvde.jpg', alt: 'Large Shiva statue at Dwarapudi temple', category: 'temple' },

  // Heritage Category
  { id: 20, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756005704/Parnasala_Picture_cqvutp.jpg', alt: 'White lotus-shaped shrine at Parnasala', category: 'heritage' },
  { id: 21, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756005700/PXL_20211226_095318467-scaled_vl8cic.jpg', alt: 'Sacred rock markings with turmeric and flowers at Parnasala', category: 'heritage' },
  { id: 22, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756005699/36227843055_4e0449301a_b_repruw.jpg', alt: 'Large mythological statue beside the river at Parnasala', category: 'heritage' },
  { id: 23, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756005699/parnasala-bhadrachalam_n6vjpa.jpg', alt: 'Statues of Rama and Sita at Parnasala', category: 'heritage' },
  { id: 24, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756005699/download_w5sdh7.jpg', alt: 'Replica of the Parnasala hut', category: 'heritage' },
  { id: 25, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756005698/download_1_tvckad.jpg', alt: 'Idols of Rama, Sita and Lakshmana at the Parnasala hut', category: 'heritage' },

  // Accommodation Category
  { id: 26, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755978850/jungle-star-eco-camp-506x316_ddezyx.jpg', alt: 'Hanging bridge over a forest stream at Jungle Star eco camp, Maredumilli', category: 'accommodation' },
  { id: 27, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755981754/Camping_in_Mountains_ytwmvi.avif', alt: 'Tent on a misty hilltop at sunrise', category: 'accommodation' },
  
  // New Gallery Images
  { id: 28, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756059652/IMG-20250824-WA0095_qvbgh3.jpg', alt: 'Wooden cottages on a green hillside by the Godavari in the Papikondalu hills', category: 'nature' },
  { id: 29, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756059653/IMG-20250824-WA0090_bam34k.jpg', alt: 'Wooden cottage in the Papikondalu hills with a hill behind it', category: 'nature' },
  { id: 30, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756059653/IMG-20250824-WA0093_xbqlev.jpg', alt: 'Row of wooden cottages along a garden path in the Papikondalu hills', category: 'nature' },
  { id: 31, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756059654/IMG-20250824-WA0091_bsdafe.jpg', alt: 'The Godavari and the Papikondalu hills seen from a cottage porch', category: 'nature' },
  { id: 32, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756059652/IMG-20250824-WA0092_nciyzz.jpg', alt: 'Wooden cottages among trees on a hillside in Papikondalu', category: 'nature' },
  { id: 33, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756059653/IMG-20250824-WA0094_gs9otn.jpg', alt: 'The Godavari winding through the forested Papikondalu gorge', category: 'nature' },
  { id: 34, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756059652/IMG-20250824-WA0097_byc1lo.jpg', alt: 'Two-storey wooden cottage with a garden in the Papikondalu hills', category: 'nature' },
  { id: 35, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756059652/IMG-20250824-WA0096_nuvajb.jpg', alt: 'Wooden cottages with the Papikondalu hills in the background', category: 'nature' },
  { id: 36, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756059651/IMG-20250824-WA0098_ruqlbn.jpg', alt: 'Riverside path beside the Godavari below the Papikondalu hills', category: 'nature' },
  { id: 37, src: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1756059651/IMG-20250824-WA0099_wy8ety.jpg', alt: 'The Godavari and its sandbanks seen from a forested hilltop in Papikondalu', category: 'nature' },
]

// 400px-wide thumbnail height that keeps the image's real aspect ratio.
const thumbHeight = (src: string) => {
  const dims = imageDimensions[src]
  return dims ? Math.round((400 * dims[1]) / dims[0]) : 300
}

const categories = [
  { id: 'all', label: 'All Photos', count: galleryImages.length },
  { id: 'nature', label: 'Nature', count: galleryImages.filter(img => img.category === 'nature').length },
  { id: 'temple', label: 'Temple', count: galleryImages.filter(img => img.category === 'temple').length },
  { id: 'heritage', label: 'Heritage', count: galleryImages.filter(img => img.category === 'heritage').length },
  { id: 'accommodation', label: 'Accommodation', count: galleryImages.filter(img => img.category === 'accommodation').length },
]

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl font-bold mb-4"
          >
            Papikondalu Photo Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Photos of the Papikondalu hills, Godavari boat cruises, Bhadrachalam temple, Perantalapalli and Sirivaka camping.
          </motion.p>
        </div>
      </section>

      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="break-inside-avoid mb-6 cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    // Masonry layout shows each photo at its natural aspect ratio, so the
                    // height must match the real image or the column reflows on load.
                    width={400}
                    height={thumbHeight(image.src)}
                    loading={index < 4 ? 'eager' : 'lazy'}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <p className="font-semibold mb-1">{image.alt}</p>
                      <p className="text-sm capitalize">{image.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">See These Places on a Papikondalu Tour</h2>
          <p className="text-lg text-gray-700 mb-6">
            Many of these places can be visited on our Godavari tours. Pick the trip that fits your time.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Link href="/packages/rajahmundry-papikondalu-packages" className="btn-primary">Rajahmundry to Papikondalu One Day Tour</Link>
            <Link href="/packages/bhadrachalam-papikondalu-packages" className="btn-outline">Bhadrachalam to Papikondalu Two Day Tour</Link>
            <Link href="/papikondalu-tours" className="btn-outline">Papikondalu Tour Guide</Link>
          </div>
        </div>
      </section>

      <Lightbox
        images={filteredImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  )
}