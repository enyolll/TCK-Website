# TCK Website

Multilingual corporate site for **TCK — Cross-Border Business Support Between Korea and Europe**. Built with Next.js 16 (App Router), TypeScript, Tailwind v4, and `next-intl`.

## Stack

- Next.js 16 · React 19 · TypeScript 5
- Tailwind CSS v4 with `@theme inline` tokens (see `app/globals.css`)
- `next-intl` for EN / KO / DE — English default, Korean and German prefixed (`/ko`, `/de`)
- Framer Motion for restrained reveals
- React Hook Form + Zod for the contact form

## Locales

| Path | Locale | Language |
| --- | --- | --- |
| `/` | `en` | English (default) |
| `/ko` | `ko` | Korean (Pretendard) |
| `/de` | `de` | German |

Locale config: [`i18n/routing.ts`](i18n/routing.ts). Messages: [`messages/`](messages/). Locale layout swaps body fonts and emits a JSON-LD `Organization` block.

## Pages

- `/` — Hero · Trust metrics · Core services · Made-in-Germany specialization · Audiences · Selected experience · Process · Founder · CTA
- `/services` — Seven detailed service sections with sticky sub-nav
- `/industries` — Five sector blocks (alternating layout)
- `/about` — Founder bio, timeline, expertise, approach
- `/contact` — Form + office card + embedded map

## Run

```bash
cp .env.example .env.local       # edit when domain is registered
npm install
npm run dev                      # http://localhost:3000
npm run build && npm run start   # production check
```

## Asset prep

Source assets live at `C:\Users\Admin\Desktop\Markus\` (overridable via `TCK_ASSET_SRC`). Run once after install to copy logos and CEO photo into `public/`:

```bash
npm run prep:assets
```

Manifest of partner logos: [`lib/partners.ts`](lib/partners.ts). Filenames are normalized to kebab-case at copy time. Originals are not modified.

## Project layout

```
app/
  layout.tsx                # root metadata only
  globals.css               # @theme tokens (the design system)
  api/contact/route.ts      # POST stub — wire to Resend / Formspree later
  opengraph-image.tsx       # 1200×630 dynamic OG
  icon.tsx                  # favicon
  sitemap.ts · robots.ts
  [locale]/
    layout.tsx              # html lang, providers, JSON-LD, Header, Footer
    page.tsx                # composes 9 home sections
    services · industries · about · contact /page.tsx
components/
  layout/    Header · Footer · LocaleSwitcher · Logo
  ui/        Button · Container · Section · Card · Eyebrow · AnimatedCounter
  sections/  Hero · TrustMetrics · CoreServices · Specialization
             WhoWeWorkWith · SelectedExperience · HowItWorks
             AboutPreview · FinalCTA
  forms/     ContactForm
i18n/        routing.ts · navigation.ts
i18n.ts      message loader
lib/         cn · contact · motion · partners · seo
messages/    en.json · ko.json · de.json
public/      logo · team · partners
tools/       prep-tck-assets.mjs
```

## Design tokens

Defined in [`app/globals.css`](app/globals.css). Palette is white / soft grey / navy (`#143055`) with a restrained copper accent (`#B08D57`). Headlines use Inter; Korean swaps to Pretendard via `html[lang='ko']`.

## Contact form

`/api/contact` is a logging stub. To wire real email, replace the `console.log` in [`app/api/contact/route.ts`](app/api/contact/route.ts) with Resend / SES / Formspree. The Zod schema and rate limiting belong here too.

## Deployment

Vercel zero-config. After registering a domain:

1. Set `NEXT_PUBLIC_SITE_URL` in Vercel.
2. Update the JSON-LD `url` and the OG canonical via env.
3. Update partner-logo licensing if any rights questions arise (current page framing: "Selected Project Experience").
