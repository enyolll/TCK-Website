#!/usr/bin/env node
/**
 * One-shot asset prep for tck-website.
 *
 * Reads source assets from C:\Users\Admin\Desktop\Markus\ (logo, CEO photo,
 * partner logos in /Pictures) and writes normalized copies into ./public/.
 * Originals are untouched.
 *
 * Run from tck-website/:
 *   node tools/prep-tck-assets.mjs
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SRC = process.env.TCK_ASSET_SRC || 'C:/Users/Admin/Desktop/Markus'
const PIC = path.join(SRC, 'Pictures')

const COPIES = [
  // [from, to]
  [path.join(SRC, 'TCK company logo.jpg'), path.join(ROOT, 'public/logo/tck.jpg')],
  [
    path.join(SRC, 'markus professional image.png'),
    path.join(ROOT, 'public/team/markus-rathenow.png'),
  ],

  // Partner logos
  [path.join(PIC, 'Frosta_Logo_2024.svg.png'), path.join(ROOT, 'public/partners/frosta.png')],
  [path.join(PIC, 'Zentis_Logo.svg.png'), path.join(ROOT, 'public/partners/zentis.png')],
  [path.join(PIC, 'Freiberger Logo.webp'), path.join(ROOT, 'public/partners/freiberger.webp')],
  [
    path.join(PIC, 'Schneekoppe_(Unternehmen)_logo.svg'),
    path.join(ROOT, 'public/partners/schneekoppe.svg'),
  ],
  [
    path.join(PIC, 'Bar Reichenhaller Alpensalz Logo.png'),
    path.join(ROOT, 'public/partners/bad-reichenhaller.png'),
  ],
  [
    path.join(PIC, 'swiss-delice-seeklogo.com.svg'),
    path.join(ROOT, 'public/partners/swiss-delice.svg'),
  ],

  [path.join(PIC, 'Brand Logo BeyondVita.jpg'), path.join(ROOT, 'public/partners/beyondvita.jpg')],
  [path.join(PIC, 'Pharma Vital logo.png'), path.join(ROOT, 'public/partners/pharma-vital.png')],
  [
    path.join(PIC, 'brand_view_logo_vitaschnell.svg'),
    path.join(ROOT, 'public/partners/vitaschnell.svg'),
  ],
  [path.join(PIC, 'Thymuskin Logo.avif'), path.join(ROOT, 'public/partners/thymuskin.avif')],
  [path.join(PIC, 'bio-cutin-logo-700x800-1.jpg'), path.join(ROOT, 'public/partners/bio-cutin.jpg')],
  [path.join(PIC, 'WAU_logo 5x5cm.png'), path.join(ROOT, 'public/partners/wau.png')],

  [path.join(PIC, 'AnnemarieBoerlind.png'), path.join(ROOT, 'public/partners/annemarie-borlind.png')],
  [path.join(PIC, 'Oway Logo.jpg'), path.join(ROOT, 'public/partners/oway.jpg')],

  [path.join(PIC, 'KHS_logo.svg'), path.join(ROOT, 'public/partners/khs.svg')],
  [
    path.join(PIC, 'Logo_LPKF_Laser_&_Electronics.svg.png'),
    path.join(ROOT, 'public/partners/lpkf.png'),
  ],
  [
    path.join(PIC, 'MAX Kiene_Logo_RZ_cmyk_blau.webp'),
    path.join(ROOT, 'public/partners/max-kiene.webp'),
  ],
  [path.join(PIC, 'Roth-rau logo.svg'), path.join(ROOT, 'public/partners/roth-rau.svg')],
  [path.join(PIC, 'dhl로고_(1).png'), path.join(ROOT, 'public/partners/dhl.png')],
]

async function copyOne(from, to) {
  await fs.mkdir(path.dirname(to), { recursive: true })
  try {
    await fs.copyFile(from, to)
    console.log('  ✓', path.relative(ROOT, to))
  } catch (err) {
    console.warn('  ✗ missing source:', from, '—', err.code || err.message)
  }
}

console.log('TCK asset prep')
console.log('  src:', SRC)
console.log('  dst:', path.join(ROOT, 'public'))

for (const [from, to] of COPIES) {
  await copyOne(from, to)
}

console.log('Done. Update lib/partners.ts manifest if file extensions changed.')
