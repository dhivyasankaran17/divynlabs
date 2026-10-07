import { useEffect, useRef, useState } from 'react'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { mailto, site } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

const inquiryBody =
  'Name:\nCompany (optional):\nWhat you want to build:\nPlatforms (iOS / Android / Web):\nTimeline:'

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }
  // Fallback for browsers without the async clipboard API.
  const el = document.createElement('textarea')
  el.value = text
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

export default function Contact() {
  usePageMeta('Contact', 'Start a project with Divyn Labs. Email us and we usually reply within 1 to 2 business days.')

  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle')
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const onCopy = async () => {
    try {
      await copyText(site.email)
      setStatus('copied')
    } catch {
      setStatus('error')
    }
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setStatus('idle'), 2500)
  }

  return (
    <>
      <PageHeader title="Start a project">
        <p>Tell us a little about your idea. We usually reply within 1 to 2 business days.</p>
      </PageHeader>

      {/* TODO: add a phone number or mailing address here later if desired. */}
      <Section>
        <div className="max-w-2xl rounded-lg border border-slate-200 p-6 sm:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">Email</h2>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="break-all text-2xl font-semibold text-accent hover:underline sm:text-3xl"
            >
              {site.email}
            </a>
            <button
              type="button"
              onClick={onCopy}
              className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {status === 'copied' ? 'Copied' : 'Copy email'}
            </button>
          </div>
          <p role="status" aria-live="polite" className="mt-2 h-5 text-sm text-slate-600">
            {status === 'copied' && 'Email address copied to clipboard.'}
            {status === 'error' && 'Could not copy. Please select the address and copy it manually.'}
          </p>

          <div className="mt-8 border-t border-slate-200 pt-8">
            <p className="text-slate-700">Prefer a template? This opens your email app with a few questions filled in.</p>
            <a
              href={mailto('Project inquiry', inquiryBody)}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
            >
              Email us about your project
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
