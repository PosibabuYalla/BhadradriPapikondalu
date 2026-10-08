import Link from 'next/link'
import { Anchor, MapPin, Users, ShieldCheck } from 'lucide-react'
import { businessInfo } from '../lib/businessInfo'

const atAGlance = [
  { label: 'River', value: 'Godavari' },
  { label: 'Region', value: `${businessInfo.address.addressLocality} → Bhadrachalam, Andhra Pradesh` },
  { label: 'Best season', value: 'October to March' },
  { label: 'Our fleet', value: '3 boats, 100 to 150 passengers each' },
  { label: 'Route', value: 'Rajahmundry / Bhadrachalam → Papikondalu hills → Perantalapalli' },
  { label: 'Operator since', value: String(businessInfo.foundedYear) },
]

const PapikondaluOverview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="max-w-3xl mb-12">
          <h2 className="heading-lg mb-4">Papikondalu at a glance</h2>
          <p className="text-body">
            Papikondalu is the stretch of forested hills where the Godavari narrows into a gorge between
            Rajahmundry and Bhadrachalam. Boats leave from either town, cruise past the hills, and stop at
            Perantalapalli. We run this route as a day trip or overnight package, with October to March the
            main season; monsoon trips depend on the river level.
          </p>
          <p className="text-body mt-4">
            Compare the{' '}
            <Link href="/packages/rajahmundry-papikondalu-packages" className="text-primary-600 font-semibold hover:underline">Rajahmundry to Papikondalu one day tour</Link>{' '}
            and the{' '}
            <Link href="/packages/bhadrachalam-papikondalu-packages" className="text-primary-600 font-semibold hover:underline">Bhadrachalam to Papikondalu two day tour</Link>,
            or read the{' '}
            <Link href="/papikondalu-tours" className="text-primary-600 font-semibold hover:underline">complete Papikondalu tour guide</Link>.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {atAGlance.map((item) => (
            <div key={item.label} className="border border-neutral-200 rounded-xl p-4">
              <div className="text-xs uppercase tracking-wide text-neutral-500 mb-1">{item.label}</div>
              <div className="font-semibold text-neutral-900">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <Anchor className="text-primary-600 shrink-0 mt-1" size={22} />
            <div>
              <h3 className="font-semibold text-neutral-900 mb-1">Boats we run</h3>
              <p className="text-sm text-neutral-600">
                Our own covered passenger boats, Aswini, Sri Godavari and Srilaxmi, with life jackets for every passenger.{' '}
                <Link href="/aboutus" className="text-primary-600 hover:underline">Meet the fleet</Link>.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="text-primary-600 shrink-0 mt-1" size={22} />
            <div>
              <h3 className="font-semibold text-neutral-900 mb-1">Departure points</h3>
              <p className="text-sm text-neutral-600">Rajahmundry and Bhadrachalam, matched to the package you book.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Users className="text-primary-600 shrink-0 mt-1" size={22} />
            <div>
              <h3 className="font-semibold text-neutral-900 mb-1">Who it suits</h3>
              <p className="text-sm text-neutral-600">Families, temple pilgrims heading to Bhadrachalam, and groups booking day or overnight tours.</p>
            </div>
          </div>
        </div>

        {(businessInfo.gstNumber || businessInfo.associationMembership || businessInfo.address.streetAddress) && (
          <div className="mt-12 flex flex-wrap gap-4 items-center text-sm text-neutral-600 border-t border-neutral-200 pt-8">
            <ShieldCheck className="text-primary-600" size={18} />
            {businessInfo.gstNumber && <span>GST: {businessInfo.gstNumber}</span>}
            {businessInfo.associationMembership && <span>{businessInfo.associationMembership}</span>}
            {businessInfo.address.streetAddress && (
              <span>{businessInfo.address.streetAddress}, {businessInfo.address.addressLocality}</span>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default PapikondaluOverview
