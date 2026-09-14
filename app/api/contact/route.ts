import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

  const { name, company, email, phone, projectType, message } = parsed.data

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? 'TCK Website <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL ?? 'mrathenow@naver.com',
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ''}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company && `Company: ${company}`,
        phone && `Phone: ${phone}`,
        projectType && `Project type: ${projectType}`,
        '',
        message,
      ].filter(Boolean).join('\n'),
    })
  } catch (err) {
    console.error('[contact] resend error', err)
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}