// Booking facts that change by season: prices, boarding points and timings.
// Kept apart from packagesData so they can be updated (and dated) on their own.
//
// TODO(owner): fill these in from the real fare sheet. Every value left null
// falls back to "confirmed when you book" on the site, and no price is put in
// structured data until both fromPrice and priceCheckedOn are set. Update
// priceCheckedOn every time you re-confirm a price, even if it hasn't changed.

export type TourLogistics = {
  fromPrice: number | null // lowest per-adult fare in INR
  childPrice: number | null
  priceNote: string | null // what changes the price, e.g. "AC cabin and weekends cost more"
  priceCheckedOn: string | null // ISO date, e.g. '2026-10-08'
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
  childPrice: null,
  priceNote: null,
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

export function getTourLogistics(id: number): TourLogistics {
  return { ...empty, ...logistics[id] }
}

export const hasVerifiedPrice = (l: TourLogistics) => l.fromPrice !== null && l.priceCheckedOn !== null

export const formatINR = (n: number) => `₹${n.toLocaleString('en-IN')}`

export const formatCheckedOn = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' })
