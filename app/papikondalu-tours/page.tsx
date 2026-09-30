import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Users, Phone, MessageCircle, Sun, Backpack, ShieldCheck, Ticket } from 'lucide-react'
import JsonLd from '../components/JsonLd'
import { businessInfo } from '../lib/businessInfo'
import { pageMetadata, absoluteUrl, breadcrumbSchema, faqSchema } from '../lib/seo'
import { packagesData } from '../packages/packagesData'
import { getPackageSlug } from '../utils/slugs'
import CoverImage from '../components/CoverImage'

const description = 'Plan a Papikondalu tour: one day and two day Godavari boat trips from Rajahmundry and Bhadrachalam, timings, how prices work, what to carry and booking.'

export const metadata: Metadata = pageMetadata({
  title: 'Papikondalu Tours | Routes, Timings, Price & Booking',
  description,
  path: '/papikondalu-tours',
  image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_fill,w_1200,h_630,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg',
  imageAlt: 'Papikondalu hills rising above the Godavari River',
})

const pkg = (id: number) => {
  const data = packagesData.find((p) => p.id === id)!
  return { ...data, href: `/packages/${getPackageSlug(id)}` }
}

// Every package detail here is read from packagesData so this guide can't drift
// from the package pages. Durations are only stated where the itinerary says so.
const tourOptions = [
  { ...pkg(5), heading: 'One Day Papikondalu Tour from Rajahmundry', duration: 'Same-day return' },
  { ...pkg(2), heading: 'Two Day Papikondalu Tour from Bhadrachalam', duration: 'Two days with an overnight stay' },
  { ...pkg(1), heading: 'Papikondalu River Cruise from Bhadrachalam', duration: 'Ask us for the current schedule' },
  { ...pkg(6), heading: 'Sirivaka Night Stay in the Papikondalu Hills', duration: 'Overnight camping' },
]

const faqs = [
  {
    question: 'Where does the Papikondalu boat tour start?',
    answer: 'Our Papikondalu tours start from Rajahmundry or from Bhadrachalam. Choose Rajahmundry for the one day trip, or Bhadrachalam if you want to combine the boat ride with a Sri Rama temple visit. We confirm the exact boarding point and reporting time when you book.',
  },
  {
    question: 'Is there a one day Papikondalu tour?',
    answer: 'Yes. The Rajahmundry to Papikondalu day tour cruises through the Papikondalu hills, stops at Perantalapalli and returns the same evening, with lunch on board.',
  },
  {
    question: 'How much does a Papikondalu tour cost?',
    answer: `The price depends on the starting point, the package (day trip or overnight), the date and your group size. Call or WhatsApp ${businessInfo.phone} for the current rate for your date.`,
  },
  {
    question: 'What are the Papikondalu boat timings?',
    answer: 'Day tours leave in the morning and return in the evening. The exact reporting time depends on the package and the date, and we share it with your booking confirmation.',
  },
  {
    question: 'Do I need an ID for the Papikondalu boat trip?',
    answer: 'Yes. Every passenger needs a valid photo ID, and life jackets must be worn during the boat ride.',
  },
  {
    question: 'Can I cancel my Papikondalu tour booking?',
    answer: 'Cancellations made more than 48 hours before departure get a full refund, 24 to 48 hours before get 50%, and within 24 hours there is no refund. If a trip is cancelled because of weather, you get a full refund or a new date.',
  },
]

export default function PapikondaluToursPage() {
  const url = absoluteUrl('/papikondalu-tours')
  const jsonLd = {
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: 'Papikondalu Tours',
        description,
        isPartOf: { '@id': `${businessInfo.domain}/#website` },
        about: { '@id': `${businessInfo.domain}/#organization` },
      },
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Papikondalu Tours', path: '/papikondalu-tours' },
      ]),
      faqSchema(faqs),
    ],
  }

  return (
    <div className="min-h-screen">
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center">
        <CoverImage
          src="https://res.cloudinary.com/djmcbqzqt/image/upload/c_fill,w_1920,h_1080,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg"
          alt="Papikondalu hills rising above the Godavari River"
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Papikondalu Tours</h1>
          <p className="text-lg md:text-2xl mb-8">
            Boat trips on the Godavari through the Papikondalu hills, starting from Rajahmundry or Bhadrachalam,
            as a one day tour, a two day tour or an overnight camp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={businessInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center">
              <MessageCircle size={20} className="mr-2" aria-hidden="true" />
              Book on WhatsApp
            </a>
            <a href={businessInfo.phoneHref} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center">
              <Phone size={20} className="mr-2" aria-hidden="true" />
              Call {businessInfo.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-16 space-y-16">
        {/* Overview */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Papikondalu Tour Overview</h2>
          <p className="text-lg text-gray-700 mb-4">
            Papikondalu is a range of forested hills where the Godavari narrows into a gorge, between Rajahmundry and
            Bhadrachalam. There is no road through the gorge, so you see it by boat. A typical tour boards in the morning,
            cruises upriver into the hills, stops at the riverside village and Shiva temple at{' '}
            <Link href="/attractions/perantalapalli" className="text-primary-600 hover:underline">Perantalapalli</Link>,
            and then either returns the same evening or continues to an overnight stay.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {[
              { label: 'River', value: 'Godavari' },
              { label: 'Starting points', value: 'Rajahmundry or Bhadrachalam' },
              { label: 'Main stop', value: 'Perantalapalli' },
              { label: 'Trip types', value: 'One day, two day, overnight camp' },
              { label: 'Best season', value: 'October to March' },
              { label: 'Booking', value: 'Phone, WhatsApp or enquiry form' },
            ].map((item) => (
              <div key={item.label} className="border border-gray-200 rounded-xl p-4">
                <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">{item.label}</div>
                <div className="font-semibold text-gray-900">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Papikondalu Boat Tour Packages</h2>
          <p className="text-lg text-gray-700 mb-8">
            Pick a tour by where you are starting from and how much time you have. Each package page has the full
            itinerary. You can also browse{' '}
            <Link href="/packages" className="text-primary-600 hover:underline">all Papikondalu tour packages</Link>,
            including temple and forest trips.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {tourOptions.map((option) => (
              <div key={option.id} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.heading}</h3>
                <div className="space-y-2 text-gray-700 text-sm mb-4">
                  <div className="flex items-center"><MapPin size={16} className="mr-2 text-primary-600" aria-hidden="true" />Starts from {option.departure}</div>
                  <div className="flex items-center"><Clock size={16} className="mr-2 text-primary-600" aria-hidden="true" />{option.duration}</div>
                  <div className="flex items-center"><Users size={16} className="mr-2 text-primary-600" aria-hidden="true" />Up to {option.capacity.toLowerCase()}</div>
                </div>
                <p className="text-gray-700 mb-2">{option.shortDescription}</p>
                <p className="text-sm text-gray-600 mb-4">Includes: {option.inclusions.join(', ')}.</p>
                <Link href={option.href} className="mt-auto inline-block text-primary-600 font-semibold hover:underline">
                  See the {option.heading.toLowerCase()} itinerary
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Price */}
        <section id="price" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center"><Ticket className="mr-3 text-primary-600" aria-hidden="true" />Papikondalu Tour Price</h2>
          {/* TODO(owner): add a price table (per adult / child, per package, weekday vs weekend) once rates are confirmed. */}
          <p className="text-lg text-gray-700 mb-4">
            We quote Papikondalu tour prices for your specific date, because the rate depends on:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>where you start (Rajahmundry or Bhadrachalam)</li>
            <li>whether it is a day trip or includes an overnight stay and meals</li>
            <li>the date and season, as weekends and October to March are busiest</li>
            <li>your group size and the boat assigned</li>
          </ul>
          <p className="text-gray-700">
            Call or WhatsApp <a href={businessInfo.phoneHref} className="text-primary-600 hover:underline">{businessInfo.phone}</a> with
            your date and number of travellers for the current price.
          </p>
        </section>

        {/* Timings */}
        <section id="timings" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center"><Clock className="mr-3 text-primary-600" aria-hidden="true" />Papikondalu Boat Timings and Boarding</h2>
          {/* TODO(owner): add reporting time, departure time, return time and the exact boarding point for each route. */}
          <p className="text-lg text-gray-700 mb-4">
            Day tours leave in the morning and return in the evening. Overnight tours continue the next day. The exact
            reporting time and boarding point depend on the package and the date, and we send them with your booking
            confirmation.
          </p>
          <p className="text-gray-700">
            Trips can be rescheduled when weather or river conditions are unsafe, so check with us a day before you travel.
          </p>
        </section>

        {/* How to reach */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Reach Papikondalu</h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Rajahmundry to Papikondalu</h3>
          <p className="text-gray-700 mb-6">
            Rajahmundry (Rajamahendravaram) is the usual starting point for the{' '}
            <Link href="/packages/rajahmundry-papikondalu-packages" className="text-primary-600 hover:underline">Rajahmundry to Papikondalu one day tour</Link>.
            The city has a railway station and an airport, so it is the easiest base if you are coming from Vijayawada,
            Visakhapatnam or further afield.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Bhadrachalam to Papikondalu</h3>
          <p className="text-gray-700 mb-6">
            Bhadrachalam, in Telangana, sits on the Godavari upstream of the gorge and is known for its Sri Rama temple.
            The nearest railway station is Bhadrachalam Road at Kothagudem. Start here for the{' '}
            <Link href="/packages/bhadrachalam-papikondalu-packages" className="text-primary-600 hover:underline">Bhadrachalam to Papikondalu two day tour</Link>,
            or read about{' '}
            <Link href="/badrachalam-temple-tours" className="text-primary-600 hover:underline">Bhadrachalam temple tours</Link>.
          </p>
        </section>

        {/* Best time */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center"><Sun className="mr-3 text-primary-600" aria-hidden="true" />Best Time to Visit Papikondalu</h2>
          <p className="text-lg text-gray-700">
            October to March is the most comfortable time for the cruise, with cooler weather and clear views of the hills.
            In the monsoon the river runs high and trips are more likely to be rescheduled, and summer afternoons on the
            open deck are hot. Book a day or more ahead between November and February, the busiest months.
          </p>
        </section>

        {/* What to carry */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center"><Backpack className="mr-3 text-primary-600" aria-hidden="true" />What to Carry on a Papikondalu Boat Trip</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>A valid photo ID for every passenger</li>
            <li>Sun protection: a hat, sunglasses and sunscreen</li>
            <li>Comfortable, non-slip footwear for boarding and the Perantalapalli stop</li>
            <li>Drinking water and any personal medicines</li>
            <li>Some cash for small purchases at stops</li>
            <li>For overnight trips: a warm layer and a torch</li>
          </ul>
        </section>

        {/* Safety */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center"><ShieldCheck className="mr-3 text-primary-600" aria-hidden="true" />Safety on the Boat</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Life jackets are provided and must be worn during the boat ride.</li>
            <li>Follow the crew&apos;s instructions when boarding and at stops.</li>
            <li>Children must be accompanied by an adult.</li>
            <li>Tell us about any medical conditions when you book.</li>
          </ul>
        </section>

        {/* Cancellation */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cancellation and Refunds</h2>
          <p className="text-gray-700">
            Full refund if you cancel more than 48 hours before departure, 50% between 24 and 48 hours, and no refund
            within 24 hours. If we cancel for weather, you get a full refund or a new date. Read the full{' '}
            <Link href="/terms" className="text-primary-600 hover:underline">booking and cancellation terms</Link>.
          </p>
        </section>

        {/* Places */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Places to See on a Papikondalu Tour</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
            <li><Link href="/attractions/papikondalu" className="text-primary-600 hover:underline">Papikondalu hills</Link>: the gorge itself, best seen from the upper deck</li>
            <li><Link href="/attractions/perantalapalli" className="text-primary-600 hover:underline">Perantalapalli</Link>: riverside Shiva temple and village, reached by boat</li>
            <li><Link href="/attractions/gandipochamma-temple" className="text-primary-600 hover:underline">Gandipochamma Temple</Link> on the banks of the Godavari</li>
            <li><Link href="/attractions/sirivaka-night-stay-camping" className="text-primary-600 hover:underline">Sirivaka</Link>: riverside camping for overnight trips</li>
            <li><Link href="/attractions/bhadrachalam" className="text-primary-600 hover:underline">Bhadrachalam Sri Rama temple</Link> at the upstream end</li>
            <li><Link href="/attractions/parnasala" className="text-primary-600 hover:underline">Parnasala</Link>, the Ramayana site near Bhadrachalam</li>
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border border-gray-200 rounded-xl p-5">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-primary-600 group-open:rotate-45 transition-transform text-xl leading-none" aria-hidden="true">+</span>
                </summary>
                <p className="text-gray-700 mt-3 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Papikondalu Tour</h2>
          <p className="text-lg mb-6">
            Send us your date, group size and starting point, and we&apos;ll confirm availability, price and boarding details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={businessInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              WhatsApp Us
            </a>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Send an Enquiry
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
