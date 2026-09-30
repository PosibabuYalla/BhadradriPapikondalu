/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'djmcbqzqt.cloudinary.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    // Cloudinary sources are at most 1920px wide, so 2048/3840 variants only
    // added bytes without adding detail.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  reactStrictMode: false,
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,


  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/aboutus',
        permanent: true,
      },
      // Old typo'd package slugs ("pakages") -> corrected slugs.
      // Keep these permanent redirects indefinitely; the old URLs may still be
      // indexed/linked externally (e.g. rajahmundry-papikondalu-pakages ranking on Google).
      {
        source: '/packages/papikondalu-pakages',
        destination: '/packages/papikondalu-packages',
        permanent: true,
      },
      {
        source: '/packages/bhadradrachalam-papikondalu-pakages',
        destination: '/packages/bhadrachalam-papikondalu-packages',
        permanent: true,
      },
      {
        source: '/packages/maredumilli-pakages',
        destination: '/packages/maredumilli-packages',
        permanent: true,
      },
      {
        source: '/packages/rajahmundry-papikondalu-pakages',
        destination: '/packages/rajahmundry-papikondalu-packages',
        permanent: true,
      },
      {
        source: '/packages/parnasala-pakages',
        destination: '/packages/parnasala-packages',
        permanent: true,
      },
      // URLs that were linked internally but never existed (crawl 404s).
      // Links are fixed at the source; these catch external links/old crawls.
      { source: '/papikondalu', destination: '/attractions/papikondalu', permanent: true },
      { source: '/bhadrachalam', destination: '/attractions/bhadrachalam', permanent: true },
      { source: '/maredumilli', destination: '/attractions/maredumilli', permanent: true },
      { source: '/aboutus/blog', destination: '/blog', permanent: true },
      { source: '/packages/rajahmundry-to-papikondalu', destination: '/packages/rajahmundry-papikondalu-packages', permanent: true },
      { source: '/packages/bhadrachalam-to-papikondalu', destination: '/packages/bhadrachalam-papikondalu-packages', permanent: true },
      { source: '/maredumilli-tours', destination: '/packages/maredumilli-packages', permanent: true },
      { source: '/rajahmundry-tours', destination: '/packages/rajahmundry-papikondalu-packages', permanent: true },
      { source: '/attractions/sirivaka-night-stay', destination: '/attractions/sirivaka-night-stay-camping', permanent: true },
    ]
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
      ],
    },
    {
      source: '/(.*)\\.(jpg|jpeg|png|webp|avif|gif|svg|ico)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/_next/static/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
}

module.exports = nextConfig