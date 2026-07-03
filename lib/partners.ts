export type PartnerCategory =
  | 'Food & Beverage'
  | 'Health Supplements'
  | 'Cosmetics'
  | 'Beer Brands'
  | 'Industrial / Logistics'

export interface Partner {
  name: string
  file: string
  category: PartnerCategory
}

export const PARTNERS: Partner[] = [
  // Food & Beverage
  { name: 'Frosta', file: '/partners/frosta.png', category: 'Food & Beverage' },
  { name: 'Zentis', file: '/partners/zentis.png', category: 'Food & Beverage' },
  { name: 'Freiberger', file: '/partners/freiberger.webp', category: 'Food & Beverage' },
  { name: 'Schneekoppe', file: '/partners/schneekoppe.svg', category: 'Food & Beverage' },
  { name: 'Bad Reichenhaller', file: '/partners/bad-reichenhaller.png', category: 'Food & Beverage' },
  { name: 'Swiss Delice', file: '/partners/swiss-delice.svg', category: 'Food & Beverage' },
  { name: 'MAX Kiene', file: '/partners/max-kiene.webp', category: 'Food & Beverage' },

  // Health Supplements
  { name: 'BeyondVita', file: '/partners/beyondvita.jpg', category: 'Health Supplements' },
  { name: 'Pharma Vital', file: '/partners/pharma-vital.png', category: 'Health Supplements' },
  { name: 'Vitaschnell', file: '/partners/vitaschnell.svg', category: 'Health Supplements' },
  { name: 'WAU', file: '/partners/wau.png', category: 'Health Supplements' },

  // Cosmetics
  { name: 'Annemarie Börlind', file: '/partners/annemarie-borlind.png', category: 'Cosmetics' },
  { name: 'Oway', file: '/partners/oway.jpg', category: 'Cosmetics' },
  { name: 'Thymuskin', file: '/partners/thymuskin.avif', category: 'Cosmetics' },
  { name: 'Bio-Cutin', file: '/partners/bio-cutin.jpg', category: 'Cosmetics' },

  // Beer Brands
  { name: 'Duckstein', file: '/partners/beer-duckstein.webp', category: 'Beer Brands' },
  { name: 'Mönch', file: '/partners/beer-moench.webp', category: 'Beer Brands' },
  { name: 'Astra', file: '/partners/beer-astra.png', category: 'Beer Brands' },
  { name: 'Oettinger', file: '/partners/beer-oettinger.png', category: 'Beer Brands' },
  { name: 'DAB Dortmunder', file: '/partners/beer-dab.jpg', category: 'Beer Brands' },
  { name: 'Schöfferhofer', file: '/partners/beer-schofferhofer.png', category: 'Beer Brands' },
  { name: 'Tanker', file: '/partners/beer-tanker.png', category: 'Beer Brands' },
  { name: 'Clausthaler', file: '/partners/beer-clausthaler.png', category: 'Beer Brands' },
  { name: 'Meistrite Gildi', file: '/partners/beer-meistrite-gildi.png', category: 'Beer Brands' },
  { name: 'Reeper-B', file: '/partners/beer-reeper-b.png', category: 'Beer Brands' },

  // Industrial / Logistics
  { name: 'KHS', file: '/partners/khs.svg', category: 'Industrial / Logistics' },
  { name: 'LPKF Laser & Electronics', file: '/partners/lpkf.png', category: 'Industrial / Logistics' },
  { name: 'Roth & Rau', file: '/partners/roth-rau.svg', category: 'Industrial / Logistics' },
  { name: 'DHL', file: '/partners/dhl.png', category: 'Industrial / Logistics' },
]

export const PARTNER_CATEGORIES: PartnerCategory[] = [
  'Food & Beverage',
  'Health Supplements',
  'Cosmetics',
  'Beer Brands',
  'Industrial / Logistics',
]
