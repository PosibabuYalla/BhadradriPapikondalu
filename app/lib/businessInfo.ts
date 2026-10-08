// Single source of truth for NAP (Name/Address/Phone) and trust data.
// Keep every schema block and component reading from here so the site
// never shows conflicting phone numbers, emails, or domains again.
// Fields left null are unverified/unconfirmed — do NOT fabricate a value.
// Fill them in once the real business record (GST certificate, association
// membership card, Google Business Profile) is on hand.

export const businessInfo = {
  name: 'Papikondalu Tourism',
  legalName: 'Papikondalu Tourism',
  // Must match the primary domain configured in Vercel (apex redirects to www).
  domain: 'https://www.bhadradripapikondalu.com',
  phone: '+91 9848323488',
  phoneHref: 'tel:+919848323488',
  whatsappNumber: '919848323488',
  whatsappHref: 'https://wa.me/919848323488?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Papikondalu%20boat%20tour%20packages.',
  email: 'aswinigodavari@gmail.com',
  foundedYear: 2004,
  // Derived so "20+ years" can never drift from foundedYear.
  get yearsInBusiness() {
    return `${Math.floor((new Date().getFullYear() - this.foundedYear) / 5) * 5}+`
  },
  logo: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png',
  heroImage: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_1200,h_630,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg',

  address: {
    streetAddress: null as string | null, // TODO: exact street/building address
    addressLocality: 'Rajahmundry',
    addressRegion: 'Andhra Pradesh',
    postalCode: '533101',
    addressCountry: 'IN',
  },

  geo: {
    latitude: 17.0005,
    longitude: 81.8040,
  },

  // Legal/trust credentials — only render badges for values that are set.
  gstNumber: null as string | null, // TODO: add real GSTIN
  associationMembership: null as string | null, // TODO: e.g. "Godavari Boat Operators Association, Reg. No. ___"

  // Real aggregate rating from Google Business Profile — leave null until
  // confirmed. Never hardcode a review count; that's a Google spam-policy
  // violation (fabricated review markup) and the reason old schema had to be ripped out.
  googleRating: null as number | null,
  googleReviewCount: null as number | null,
  // Public Google Business Profile reviews link, so visitors can verify the
  // testimonials on the site. Leave null until the GBP is claimed.
  googleReviewsUrl: null as string | null,

  // Headline trust figures. Every page that shows a customer count reads it
  // from here, so changing or removing it is a one-line edit. Only show a
  // figure you can back up (booking registers, ticket counts); set to null to
  // hide it everywhere.
  customersServed: '7+ Lakh' as string | null,

  // Named person who checks the travel guides (shown as "Reviewed by" on the
  // blog and tour hub). TODO(owner): real name + one-line local experience.
  guideReviewer: null as { name: string; bio: string } | null,

  socialLinks: {
    facebook: 'https://www.facebook.com/profile.php?id=61579935625167',
    instagram: 'https://www.instagram.com/aswinigodavari_travel/',
    youtube: 'https://www.youtube.com/channel/UCzqJxEIGKQyIi9-EkCfR5ng',
  },
}
