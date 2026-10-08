import 'server-only'
import { getTourLogistics, type TourLogistics } from '../packages/tourLogistics'

// Papikondalu ticket prices. BASE is the owner's minimum price per person and
// never leaves the server: 'server-only' makes the build fail if a client
// component imports this file, and getDisplayFares() strips `base` before
// anything reaches a page.
//
// The price shown to customers is BASE + ₹100 or BASE + ₹200. The step is
// picked per fare per ISO week (not per visitor or page load), so everyone
// sees the same price at the same time, the price never drops below BASE,
// and the Offer price in structured data always matches the visible price.
// Pages revalidate daily, so a new week's step goes live within a day.
//
// To change a price: edit `base` and bump PRICES_CHECKED_ON.

export const PRICES_CHECKED_ON = '2026-10-08'

const STEPS = [100, 200] as const

type FareGroup = 'boat' | 'nightStay' | 'combo' | 'heritage'

type Fare = {
  id: string
  route: string
  group: FareGroup
  base: number
  minMembers: number | null
  // Package page this fare belongs to, if one exists.
  packageId: number | null
}

const FARES: Fare[] = [
  { id: 'papikondalu-bhadrachalam', route: 'Papikondalu → Bhadrachalam', group: 'boat', base: 1300, minMembers: null, packageId: null },
  { id: 'bhadrachalam-papikondalu-rajahmundry', route: 'Bhadrachalam → Papikondalu → Rajahmundry', group: 'boat', base: 2200, minMembers: null, packageId: 2 },
  { id: 'rajahmundry-papikondalu', route: 'Rajahmundry → Papikondalu', group: 'boat', base: 1300, minMembers: null, packageId: 5 },
  { id: 'rajahmundry-papikondalu-bhadrachalam', route: 'Rajahmundry → Papikondalu → Bhadrachalam', group: 'boat', base: 2150, minMembers: null, packageId: null },
  { id: 'papikondalu-maredumilli-2d', route: 'Papikondalu + Maredumilli, 2 days', group: 'combo', base: 5600, minMembers: null, packageId: null },
  { id: 'night-stay-cottage', route: 'Papikondalu Night Stay: Cottage', group: 'nightStay', base: 6000, minMembers: null, packageId: 6 },
  { id: 'night-stay-bamboo-hut', route: 'Papikondalu Night Stay: Bamboo Hut', group: 'nightStay', base: 5500, minMembers: null, packageId: 6 },
  { id: 'night-stay-tent', route: 'Papikondalu Night Stay: Tent', group: 'nightStay', base: 5000, minMembers: null, packageId: 6 },
  { id: 'maredumilli-mothugudem-2d', route: 'Maredumilli + Mothugudem, 2 days', group: 'combo', base: 6000, minMembers: 4, packageId: null },
  { id: 'mothugudem-maredumilli-1d', route: 'Mothugudem + Maredumilli, 1 day', group: 'combo', base: 2300, minMembers: 4, packageId: null },
  { id: 'mothugudem-maredumilli-1d-group', route: 'Mothugudem + Maredumilli, 1 day (8+ members)', group: 'combo', base: 2000, minMembers: 8, packageId: null },
  { id: 'parnasala', route: 'Parnasala', group: 'heritage', base: 200, minMembers: 8, packageId: 7 },
]

export type DisplayFare = Omit<Fare, 'base'> & { price: number }

// ISO-8601 week number, so the step changes on Mondays.
function isoWeek(date: Date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const day = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - day)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return d.getUTCFullYear() * 100 + Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
}

// Small deterministic hash: same fare + same week → same step, for every visitor.
function step(fareId: string, week: number) {
  let h = week
  for (const c of fareId) h = (h * 31 + c.charCodeAt(0)) >>> 0
  return STEPS[h % STEPS.length]
}

export function getDisplayFares(now = new Date()): DisplayFare[] {
  const week = isoWeek(now)
  return FARES.map(({ base, ...fare }) => ({ ...fare, price: base + step(fare.id, week) }))
}

// Lowest displayed fare for a package page ("Starting from ₹X"), with its minimum group size.
export function getPackageFare(packageId: number, now = new Date()) {
  const fares = getDisplayFares(now).filter((f) => f.packageId === packageId)
  if (fares.length === 0) return null
  const lowest = fares.reduce((a, b) => (b.price < a.price ? b : a))
  return { fromPrice: lowest.price, minMembers: lowest.minMembers, options: fares.length > 1 ? fares : null }
}

// Package logistics with the displayed price merged in — what server pages pass to the client.
export function getPricedLogistics(packageId: number, now = new Date()): TourLogistics {
  const logistics = getTourLogistics(packageId)
  const fare = getPackageFare(packageId, now)
  if (!fare) return logistics
  return {
    ...logistics,
    fromPrice: fare.fromPrice,
    minMembers: fare.minMembers,
    priceOptions: fare.options?.map(({ route, price, minMembers }) => ({ route, price, minMembers })) ?? null,
    priceCheckedOn: PRICES_CHECKED_ON,
  }
}
