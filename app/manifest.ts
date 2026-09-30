import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Papikondalu Tourism - Godavari Boat Tours',
    short_name: 'Papikondalu Tourism',
    description: 'Papikondalu boat tours on the Godavari from Rajahmundry and Bhadrachalam, plus temple and camping trips.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    categories: ['travel', 'tourism', 'entertainment'],
    icons: [
      {
        src: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    screenshots: [
      {
        src: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_1280,h_720,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg',
        sizes: '1280x720',
        type: 'image/jpeg',
        form_factor: 'wide',
        label: 'Papikondalu Hills Boat Tours'
      },
      {
        src: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_750,h_1334,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg',
        sizes: '750x1334',
        type: 'image/jpeg',
        form_factor: 'narrow',
        label: 'Mobile View - Papikondalu Tourism'
      }
    ]
  }
}