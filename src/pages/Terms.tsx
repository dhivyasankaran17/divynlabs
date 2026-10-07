import LegalPage from '../components/LegalPage'
import { site } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

// TODO: DRAFT. Review with a qualified professional before publishing.
export default function Terms() {
  usePageMeta('Terms of Use', 'Terms of use for the Divyn Labs website.')
  const email = <a href={`mailto:${site.email}`}>{site.email}</a>

  return (
    <LegalPage title="Terms of Use" effectiveDate={site.policyEffectiveDate}>
      <section>
        <h2>Using this site</h2>
        <p>
          These terms apply to your use of {site.domain}, run by {site.companyName}. By using this site, you agree to
          these terms. If you do not agree, please do not use the site.
        </p>
        <p>
          This site is for general information about {site.companyName} and our work. Nothing on it is an offer or a
          binding agreement. Any project work is covered by a separate written agreement.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          All content on this site, including text, graphics, logos, and app names, belongs to {site.companyName} or
          its respective owners. You may not copy, reuse, or distribute it without written permission, except for
          personal, non-commercial viewing.
        </p>
      </section>

      <section>
        <h2>No warranties</h2>
        <p>
          The information on this site is provided "as is" and "as available," without warranties of any kind. We try
          to keep it accurate and up to date, but we do not guarantee that it is complete, correct, or always
          available.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent allowed by law, {site.companyName} is not liable for any direct, indirect, incidental,
          or consequential damages that result from your use of, or inability to use, this site.
        </p>
      </section>

      <section>
        <h2>Links to other sites</h2>
        <p>
          This site may link to websites we do not control, such as app stores or our app websites. We are not
          responsible for their content or privacy practices. Visiting them is at your own risk.
        </p>
      </section>

      <section>
        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. The effective date at the top of this page shows when they were
          last changed.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        {/* TODO: set the governing state in src/data/site.ts (governingLawState). */}
        <p>
          These terms are governed by the laws of the United States and the State of {site.governingLawState}, without
          regard to conflict of law rules.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p>Questions about these terms? Email us at {email}.</p>
      </section>
    </LegalPage>
  )
}
