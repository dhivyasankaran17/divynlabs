import { Link } from 'react-router-dom'
import AppCard from '../components/AppCard'
import ButtonLink from '../components/Button'
import CallToAction from '../components/CallToAction'
import Section, { Container, SectionHeading } from '../components/Section'
import ServicesGrid from '../components/ServicesGrid'
import { featuredApps } from '../data/apps'
import { usePageMeta } from '../lib/usePageMeta'

const reasons = [
  {
    title: 'Built for real users',
    body: 'We ship to the App Store and Google Play ourselves.',
  },
  {
    title: 'Full stack, one team',
    body: 'Design, mobile, backend, and launch under one roof.',
  },
  {
    title: 'Clear communication',
    body: 'Regular updates and fixed milestones.',
  },
]

export default function Home() {
  usePageMeta(
    '',
    'Divyn Labs designs and develops iOS, Android, and web apps, from first idea to App Store launch.',
  )

  return (
    <>
      <section aria-labelledby="hero-heading" className="bg-white">
        <Container className="py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              We build mobile apps for everyone.
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl">
              Divyn Labs designs and develops iOS, Android, and web apps, from first idea to App Store launch.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink to="/apps">See our apps</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">
                Start a project
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="gray" labelledBy="services-heading">
        <SectionHeading id="services-heading" title="What we do" intro="We build apps people use every day." />
        <ServicesGrid />
      </Section>

      <Section labelledBy="apps-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading id="apps-heading" title="Featured app" />
          <Link to="/apps" className="text-sm font-semibold text-accent hover:underline">
            View apps <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </Section>

      <Section tone="gray" labelledBy="why-heading">
        <SectionHeading id="why-heading" title="Why Divyn Labs" />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="border-t-2 border-accent pt-5">
              <h3 className="text-lg font-semibold text-slate-900">{reason.title}</h3>
              <p className="mt-2 text-slate-600">{reason.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CallToAction />
    </>
  )
}
