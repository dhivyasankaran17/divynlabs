import AppCard from '../components/AppCard'
import CallToAction from '../components/CallToAction'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { apps } from '../data/apps'
import { usePageMeta } from '../lib/usePageMeta'

export default function Apps() {
  usePageMeta('Apps', "Apps Divyn Labs has built and what we're working on next.")

  return (
    <>
      <PageHeader title="Our apps">
        <p>Apps we've built and what we're working on next.</p>
      </PageHeader>
      <Section>
        <h2 className="sr-only">App list</h2>
        <div className={`grid gap-6 md:grid-cols-2 ${apps.length > 2 ? 'lg:grid-cols-3' : ''}`}>
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </Section>
      <CallToAction flush />
    </>
  )
}
