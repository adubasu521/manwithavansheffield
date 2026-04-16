export const siteConfig = {
  name: 'Man With A Van Sheffield',
  url: 'https://manwithavansheffield.co.uk',
  siteUrl: 'https://manwithavansheffield.co.uk',
  phone: '+44 20 3318 4720',
  phoneDisplay: '020 3318 4720',
  phoneTel: '+442033184720',
  email: 'contact@manwithavansheffield.co.uk',
  address: {
    city: 'Sheffield',
    region: 'South Yorkshire',
    postcode: 'S1',
    country: 'GB',
  },
  geo: {
    latitude: 53.3811,
    longitude: -1.4701,
  },
  schemaType: 'MovingCompany',
  serviceRadius: 'Sheffield and surrounding South Yorkshire',
  citySlug: 'sheffield',
  hours: [
    { day: 'Monday', hours: '7:00 AM - 7:00 PM' },
    { day: 'Tuesday', hours: '7:00 AM - 7:00 PM' },
    { day: 'Wednesday', hours: '7:00 AM - 7:00 PM' },
    { day: 'Thursday', hours: '7:00 AM - 7:00 PM' },
    { day: 'Friday', hours: '7:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '7:00 AM - 7:00 PM' },
    { day: 'Sunday', hours: '7:00 AM - 7:00 PM' },
  ],
  openingHoursSchema: 'Mo-Su 07:00-19:00',
  stats: {
    reviews: '500+',
    movesCompleted: '3,000+',
    averageRating: 4.9,
    yearsActive: 8,
  },
  social: {
    google: '#',
    trustpilot: '#',
    facebook: '#',
  },
  certifications: [
    'Fully Insured — Goods-in-Transit & Public Liability',
    'CRB-Checked Drivers',
    'Price Match Guarantee',
  ],
  usps: [
    { title: 'Fixed-Price Quotes', description: 'You know the full cost before we arrive. No hourly meter, no surprise charges.' },
    { title: 'Fully Insured', description: 'Goods-in-transit and public liability insurance on every job. Your belongings are covered.' },
    { title: '7 Days a Week', description: 'Available every day including weekends and bank holidays.' },
    { title: 'Same-Day Available', description: 'Most local Sheffield jobs can be booked for the same day or next day.' },
    { title: 'Price Match Guarantee', description: 'We match any comparable like-for-like written quote.' },
    { title: 'Local Sheffield Knowledge', description: 'We know every part of Sheffield — hilly streets, tram restrictions, terrace access. No delays.' },
  ],
  vanFleet: [
    {
      name: 'Long Wheelbase (LWB) Van',
      loadSpace: '3.5m long x 1.7m wide x 1.8m high (~10 cubic metres)',
      bestFor: 'Studio flats, 1-bed moves, single-room collections, small furniture deliveries. Ideal for steep Sheffield streets.',
      pricing: { selfLoading: '£20/h', driverLoading: '£25/h', twoMan: '£40/h' },
    },
    {
      name: 'Sprinter Van',
      loadSpace: '4.2m long x 1.8m wide x 1.9m high (~14 cubic metres)',
      bestFor: '2-3 bed properties, larger flat moves, student house moves, Sheffield terrace houses',
      pricing: { selfLoading: '£30/h', driverLoading: '£35/h', twoMan: '£50/h' },
    },
    {
      name: 'Luton Van',
      loadSpace: '4.5m long x 2.2m wide x 2.0m high (~20 cubic metres)',
      bestFor: '3-4 bed houses, full house removals, large volume moves',
      pricing: { selfLoading: '£40/h', driverLoading: '£45/h', twoMan: '£60/h' },
    },
  ],
  affiliateBase: 'https://www.anyvan.com/instant-prices/furniture/listing-items?credit-code=FurnPKing5481n3320&utm_source=manwithavansheffield&utm_medium=organic',
  ga4Id: 'G-CSMTBDPTFV',
} as const;

// subid is injected dynamically on click via BaseLayout script (mwv_sheffield_{timestamp})
export const affiliateUrl = siteConfig.affiliateBase;
