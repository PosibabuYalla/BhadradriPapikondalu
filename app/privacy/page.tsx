import type { Metadata } from 'next'
import { pageMetadata } from '../lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy | Papikondalu Tourism',
  description: 'How Papikondalu Tourism collects, uses and protects the personal information you share when you enquire about or book a Godavari boat tour.',
  path: '/privacy'
})

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl">Your privacy is important to us</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-8">
              At Papikondalu Tourism, we are committed to protecting your privacy and personal information. 
              This privacy policy explains how we collect, use, and safeguard your information.
            </p>

            <h2 className="text-3xl font-bold mb-6">Information We Collect</h2>
            <ul className="mb-8 space-y-2">
              <li>Personal information (name, email, phone number) when you book tours</li>
              <li>Payment information for processing bookings</li>
              <li>Communication preferences and feedback</li>
              <li>Website usage data for improving our services</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">How We Use Your Information</h2>
            <ul className="mb-8 space-y-2">
              <li>Processing tour bookings and payments</li>
              <li>Communicating about your bookings and services</li>
              <li>Sending promotional offers (with your consent)</li>
              <li>Improving our website and services</li>
              <li>Complying with legal requirements</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Information Protection</h2>
            <p className="mb-8">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. Your payment information 
              is processed through secure payment gateways.
            </p>

            <h2 className="text-3xl font-bold mb-6">Information Sharing</h2>
            <p className="mb-8">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              information with trusted service providers who assist us in operating our business, 
              conducting tours, or servicing you.
            </p>

            <h2 className="text-3xl font-bold mb-6">Your Rights</h2>
            <ul className="mb-8 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="mb-4">
              If you have questions about this privacy policy or your personal information, contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>Phone:</strong> +91 9848323488</p>
              <p><strong>Email:</strong> aswinigodavari@gmail.com</p>
              <p><strong>Address:</strong> Rajahmundry, Andhra Pradesh</p>
            </div>

            <p className="mt-8 text-sm text-gray-600">
              This privacy policy was last updated on January 2024. We may update this policy 
              from time to time, and we will notify you of any significant changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}