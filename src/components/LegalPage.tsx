import type { ReactNode } from 'react'
import PageHeader from './PageHeader'
import Section from './Section'

// TODO: remove the DRAFT banners once the policy has been reviewed by a qualified professional.
function DraftBanner() {
  return (
    <p role="note" className="rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">
      DRAFT: Review with a qualified professional before publishing.
    </p>
  )
}

export default function LegalPage({
  title,
  effectiveDate,
  children,
}: {
  title: string
  effectiveDate: string
  children: ReactNode
}) {
  return (
    <>
      <PageHeader title={title}>
        <p className="text-base">Effective date: {effectiveDate}</p>
      </PageHeader>
      <Section>
        <div className="max-w-3xl">
          <DraftBanner />
          <div className="mt-10 space-y-10 text-slate-700 [&_a]:text-accent [&_a]:underline [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_li]:mt-2 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
            {children}
          </div>
          <div className="mt-12">
            <DraftBanner />
          </div>
        </div>
      </Section>
    </>
  )
}
