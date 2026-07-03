import { NextResponse } from 'next/server'
import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(1).max(120),
  company: z.string().max(160).optional().or(z.literal('')),
  email: z.string().email(),
  phone: z.string().max(40).optional().or(z.literal('')),
  projectType: z.string().max(60).optional().or(z.literal('')),
  message: z.string().min(10).max(4000),
  locale: z.enum(['en', 'ko', 'de']).optional(),
})

export async function POST(request: Request) {
  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  const parsed = ContactSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'validation', issues: parsed.error.flatten() },
      { status: 422 },
    )
  }

  // Stub: in production wire up Resend / Formspree / SES.
  console.log('[contact] new inquiry', {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
  })

  return NextResponse.json({ ok: true })
}
