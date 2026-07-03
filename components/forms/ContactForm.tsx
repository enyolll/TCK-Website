'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useLocale, useTranslations } from 'next-intl'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/cn'
import { buttonClasses } from '@/components/ui/Button'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const PROJECT_TYPES = [
  'sourcing',
  'marketEntry',
  'supplements',
  'qc',
  'industrial',
  'other',
] as const

export function ContactForm() {
  const t = useTranslations('contact.form')
  const locale = useLocale()

  const Schema = z.object({
    name: z.string().min(1, t('required')),
    company: z.string().optional(),
    email: z.string().min(1, t('required')).email(t('invalidEmail')),
    phone: z.string().optional(),
    projectType: z.string().optional(),
    message: z.string().min(10, t('tooShort')),
  })
  type FormValues = z.infer<typeof Schema>

  const [status, setStatus] = useState<Status>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: { projectType: 'sourcing' },
  })

  const onSubmit = async (values: FormValues) => {
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, locale }),
      })
      if (!res.ok) throw new Error('request_failed')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-brand-soft)]/40 p-8"
      >
        <CheckCircle2 size={28} className="text-[var(--color-brand)]" />
        <h3 className="mt-4 text-[20px] font-semibold text-[var(--color-ink)]">
          {t('successTitle')}
        </h3>
        <p className="mt-2 text-[15px] text-[var(--color-muted)]">
          {t('successBody')}
        </p>
      </div>
    )
  }

  const inputCls =
    'mt-2 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-4 py-3 text-[15px] text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-muted)]/70 focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/15'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={t('name')}
          required
          error={errors.name?.message}
          input={<input type="text" autoComplete="name" {...register('name')} className={inputCls} />}
        />
        <Field
          label={t('company')}
          error={errors.company?.message}
          input={<input type="text" autoComplete="organization" {...register('company')} className={inputCls} />}
        />
        <Field
          label={t('email')}
          required
          error={errors.email?.message}
          input={<input type="email" autoComplete="email" {...register('email')} className={inputCls} />}
        />
        <Field
          label={t('phone')}
          error={errors.phone?.message}
          input={<input type="tel" autoComplete="tel" {...register('phone')} className={inputCls} />}
        />
      </div>

      <Field
        label={t('projectType')}
        error={errors.projectType?.message}
        input={
          <select {...register('projectType')} className={cn(inputCls, 'pr-10 appearance-none')}>
            {PROJECT_TYPES.map((p) => (
              <option key={p} value={p}>
                {t(`projectTypes.${p}`)}
              </option>
            ))}
          </select>
        }
      />

      <Field
        label={t('message')}
        required
        error={errors.message?.message}
        input={
          <textarea
            rows={6}
            placeholder={t('messagePlaceholder')}
            {...register('message')}
            className={cn(inputCls, 'min-h-[160px] resize-y')}
          />
        }
      />

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={buttonClasses('primary', 'lg')}
        >
          <Send size={16} />
          {status === 'submitting' ? t('submitting') : t('submit')}
        </button>
        {status === 'error' && (
          <p className="flex items-center gap-2 text-[14px] text-red-600">
            <AlertCircle size={15} />
            {t('errorBody')}
          </p>
        )}
      </div>
    </form>
  )
}

function Field({
  label,
  required,
  error,
  input,
}: {
  label: string
  required?: boolean
  error?: string
  input: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="text-[13px] font-medium text-[var(--color-ink)]">
        {label}
        {required && <span className="text-[var(--color-accent)]"> *</span>}
      </span>
      {input}
      {error && (
        <span className="mt-1.5 block text-[12px] text-red-600">{error}</span>
      )}
    </label>
  )
}
