import ButtonLink from './Button'
import Section from './Section'

// Set `flush` when the previous section is also white, to avoid doubled spacing.
export default function CallToAction({ flush = false }: { flush?: boolean }) {
  return (
    <Section labelledBy="cta-heading" className={flush ? 'pt-0 sm:pt-0' : ''}>
      <div className="flex flex-col items-start gap-6 rounded-lg border border-slate-200 bg-slate-50 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <h2 id="cta-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
          Have an idea? Let's talk.
        </h2>
        <ButtonLink to="/contact">Contact us</ButtonLink>
      </div>
    </Section>
  )
}
