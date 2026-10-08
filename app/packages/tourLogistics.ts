// Booking facts for each package page: boarding points, timings, meals, and
// the displayed price. Safe to import from client components — it holds no
// base prices. Prices are filled in on the server by getPricedLogistics() in
// lib/fares.ts, which only ever passes the displayed (customer) price.
//
// TODO(owner): fill in boarding points and times. Every value left null falls
// back to "confirmed when you book" on the site.

export type PriceOption = { route: string; price: number; minMembers: number | null }

export type TourLogistics = {
  fromPrice: number | null // lowest displayed per-person fare in INR
  minMembers: number | null
  priceOptions: PriceOption[] | null // e.g. cottage / bamboo hut / tent
  priceCheckedOn: string | null // ISO date
  boardingPoint: string | null
  boardingMapUrl: string | null
  reportingTime: string | null // e.g. '7:00 AM'
  returnTime: string | null // e.g. '7:00 PM'
  dropPoint: string | null
  meals: string | null
  exclusions: string[]
}

const empty: TourLogistics = {
  fromPrice: null,
  minMembers: null,
  priceOptions: null,
  priceCheckedOn: null,
  boardingPoint: null,
  boardingMapUrl: null,
  reportingTime: null,
  returnTime: null,
  dropPoint: null,
  meals: null,
  exclusions: [],
}

const logistics: Record<number, Partial<TourLogistics>> = {
  // 5: Rajahmundry to Papikondalu One Day Tour
  5: { dropPoint: 'Rajahmundry (same boarding area)', meals: 'Lunch on board' },
  // 2: Bhadrachalam to Papikondalu Two Day Tour
  2: { dropPoint: 'Rajahmundry', meals: 'All meals during the trip' },
  // 1: Papikondalu River Cruise from Bhadrachalam
  1: {},
  // 6: Sirivaka Night Stay
  6: { meals: 'Meals at the camp' },
}

// Non-price logistics only. Server pages use getPricedLogistics() instead.
export function getTourLogistics(id: number): TourLogistics {
  return { ...empty, ...logistics[id] }
}

export const hasVerifiedPrice = (l: TourLogistics) => l.fromPrice !== null && l.priceCheckedOn !== null

export const formatINR = (n: number) => `₹${n.toLocaleString('en-IN')}`

export const formatCheckedOn = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' })
