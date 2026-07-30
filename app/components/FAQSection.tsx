import Script from 'next/script'
import { businessInfo } from '../lib/businessInfo'

export const homeFAQs = [
  {
    question: 'What is Papikondalu?',
    answer: 'Papikondalu is a range of forested hills where the Godavari River narrows into a gorge, roughly between Rajahmundry and Bhadrachalam in Andhra Pradesh. It\'s reached by boat, not by road.',
  },
  {
    question: 'How do I get to Papikondalu from Rajahmundry?',
    answer: 'By boat. Our tours depart directly from Rajahmundry, cruise along the Godavari, and pass through Papikondalu hills with a stop at Perantalapalli.',
  },
  {
    question: 'Can I do a Papikondalu tour from Bhadrachalam instead?',
    answer: 'Yes — we also run departures from Bhadrachalam, useful if you\'re combining the boat trip with a temple visit.',
  },
  {
    question: 'What is the best time to visit Papikondalu?',
    answer: 'October to March, when the river level and weather make for the most comfortable cruise. Some routes run outside this window — ask us for current availability.',
  },
  {
    question: 'How long does the boat ride take?',
    answer: 'It depends on the package — day tours and overnight tours cover different distances. Check each package page for its exact itinerary and duration.',
  },
  {
    question: 'What is the ticket price for Papikondalu boat tours?',
    answer: `Pricing depends on the package, boat, and season. Call or WhatsApp us at ${businessInfo.phone} for current rates.`,
  },
  {
    question: 'Are life jackets and safety equipment provided?',
    answer: 'Yes, our boats carry life jackets and safety equipment for all passengers.',
  },
  {
    question: 'Can families and children join the boat tour?',
    answer: 'Yes, our day tour and temple-tour packages are commonly booked by families.',
  },
  {
    question: 'Is an overnight stay available near Papikondalu?',
    answer: 'Yes — we run a camping and night-stay package at Sirivaka with a bonfire and nature walks, in addition to day tours.',
  },
  {
    question: 'How do I book a Papikondalu boat tour?',
    answer: `Call or WhatsApp ${businessInfo.phone}, or use the contact form on this site. We'll confirm your departure point, date, and package.`,
  },
]

const FAQSection = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="section-padding bg-neutral-50">
      <div className="max-w-4xl mx-auto container-padding">
        <Script
          id="home-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <h2 className="heading-lg mb-8 text-center">Papikondalu tour FAQs</h2>
        <div className="space-y-4">
          {homeFAQs.map((faq) => (
            <details key={faq.question} className="group border border-neutral-200 rounded-xl p-5 open:shadow-md transition-shadow">
              <summary className="font-semibold text-neutral-900 cursor-pointer list-none flex justify-between items-center">
                {faq.question}
                <span className="text-primary-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="text-neutral-600 mt-3 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
