import type { Metadata } from 'next'
import { pageMetadata } from '../lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Booking & Cancellation Terms | Papikondalu Tourism',
  description: 'Booking, cancellation, refund and safety terms for Papikondalu Tourism boat tours and packages, including weather-related rescheduling and ID rules.',
  path: '/terms'
})

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl">Terms and conditions for our services</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-8">
              These terms of service govern your use of Papikondalu Tourism services. 
              By booking our tours, you agree to these terms and conditions.
            </p>

            <h2 className="text-3xl font-bold mb-6">Booking Terms</h2>
            <ul className="mb-8 space-y-2">
              <li>All bookings are subject to availability</li>
              <li>Full payment or advance payment required to confirm booking</li>
              <li>Booking confirmation will be sent via email or SMS</li>
              <li>Valid ID proof required for all passengers</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Cancellation Policy</h2>
            <ul className="mb-8 space-y-2">
              <li>Cancellation 48 hours before tour: Full refund</li>
              <li>Cancellation 24-48 hours before: 50% refund</li>
              <li>Cancellation less than 24 hours: No refund</li>
              <li>Weather-related cancellations: Full refund or rescheduling</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Safety and Responsibilities</h2>
            <ul className="mb-8 space-y-2">
              <li>Passengers must follow safety instructions</li>
              <li>Life jackets mandatory during boat rides</li>
              <li>Children must be accompanied by adults</li>
              <li>Company not liable for personal belongings</li>
              <li>Medical conditions must be disclosed before booking</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Tour Inclusions</h2>
            <ul className="mb-8 space-y-2">
              <li>Transportation as per itinerary</li>
              <li>Professional guide services</li>
              <li>Entry fees to attractions (where mentioned)</li>
              <li>Meals as specified in package</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Tour Exclusions</h2>
            <ul className="mb-8 space-y-2">
              <li>Personal expenses and shopping</li>
              <li>Additional meals not mentioned</li>
              <li>Travel insurance</li>
              <li>Tips and gratuities</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Weather Policy</h2>
            <p className="mb-8">
              Tours may be cancelled or modified due to adverse weather conditions for safety reasons. 
              In such cases, we offer full refund or rescheduling options.
            </p>

            <h2 className="text-3xl font-bold mb-6">Liability</h2>
            <p className="mb-8">
              Papikondalu Tourism acts as an agent for transportation, accommodation, and other services. 
              We are not liable for any loss, injury, or damage during the tour beyond our direct control.
            </p>

            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>Phone:</strong> +91 9848323488</p>
              <p><strong>Email:</strong> aswinigodavari@gmail.com</p>
              <p><strong>Address:</strong> Rajahmundry, Andhra Pradesh</p>
            </div>

            <p className="mt-8 text-sm text-gray-600">
              These terms were last updated on January 2024. We reserve the right to modify 
              these terms at any time. Continued use of our services constitutes acceptance of any changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}