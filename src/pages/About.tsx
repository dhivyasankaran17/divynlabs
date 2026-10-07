import CallToAction from '../components/CallToAction'
import PageHeader from '../components/PageHeader'
import Section, { SectionHeading } from '../components/Section'
import ServicesGrid from '../components/ServicesGrid'
import { site } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

const steps = [
  { title: 'Discover', body: 'We learn your goals, your users, and what success looks like.' },
  { title: 'Design', body: 'We plan the screens and flows and agree on scope and milestones.' },
  { title: 'Build', body: 'We develop and test the app, with regular updates along the way.' },
  { title: 'Launch', body: 'We handle App Store and Google Play submission and support you after release.' },
]

export default function About() {
  usePageMeta(
    'About',
    'Divyn Labs is a software development studio focused on mobile and web apps, from idea to launch.',
  )

  return (
    <>
      <PageHeader title="About Divyn Labs" />

      <Section>
        <div className="max-w-3xl space-y-6 text-lg text-slate-700">
          <p>
            Divyn Labs is a software development studio focused on mobile and web apps. We take products from idea
            to launch, including design, development, testing, and App Store and Google Play submission.
          </p>
          <p>
            We build our own products as well as client work, so we understand the full path from a first build to
            real users.
          </p>
        </div>
      </Section>

      <Section tone="gray" labelledBy="services-heading">
        <SectionHeading id="services-heading" title="Services" />
        <ServicesGrid />
      </Section>

      <Section labelledBy="process-heading">
        <SectionHeading id="process-heading" title="How we work" />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-lg border border-slate-200 p-6">
              <p className="text-sm font-semibold text-accent">Step {i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-slate-600">{step.body}</p>
            </li>
          ))}
        </ol>
        {/* TODO: confirm location wording (edit `location` in src/data/site.ts). */}
        <p className="mt-12 text-slate-700">{site.location}</p>
      </Section>

      <CallToAction flush />
    </>
  )
}
