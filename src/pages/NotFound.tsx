import ButtonLink from '../components/Button'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { usePageMeta } from '../lib/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found', 'The page you were looking for could not be found.')
  return (
    <>
      <PageHeader title="Page not found">
        <p>The page you were looking for doesn't exist or has moved.</p>
      </PageHeader>
      <Section>
        <ButtonLink to="/">Back to home</ButtonLink>
      </Section>
    </>
  )
}
