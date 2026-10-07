import LegalPage from '../components/LegalPage'
import { site } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

// TODO: DRAFT. Review with a qualified professional before publishing.
export default function Privacy() {
  usePageMeta('Privacy Policy', 'How Divyn Labs handles information collected through divynlabs.com.')
  const email = <a href={`mailto:${site.email}`}>{site.email}</a>

  return (
    <LegalPage title="Privacy Policy" effectiveDate={site.policyEffectiveDate}>
      <section>
        <h2>Who we are</h2>
        <p>
          This website, {site.domain}, is run by {site.companyName}. If you have questions about this policy, email us
          at {email}.
        </p>
        <p>
          This policy covers this website only. Apps we build have their own privacy policies, which you can find in
          each app or on its website.
        </p>
      </section>

      <section>
        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Information you send us by email.</strong> If you email us, we receive your email address, your
            name if you include it, and anything you write in your message.
          </li>
          <li>
            <strong>Basic technical data from hosting.</strong> Our hosting provider, Cloudflare, processes technical
            data when you visit, such as your IP address, browser type, and request logs. This is needed to deliver
            the site and protect it from abuse.
          </li>
        </ul>
        <p>
          We do not use cookies for tracking or advertising, and we do not use analytics on this site. Cloudflare may
          set strictly necessary cookies to keep the site secure.
        </p>
      </section>

      <section>
        <h2>How we use it</h2>
        <ul>
          <li>To reply to your inquiries and discuss possible projects.</li>
          <li>To run, secure, and fix problems with this website.</li>
        </ul>
        <p>We do not sell your personal information, and we do not use it for advertising.</p>
      </section>

      <section>
        <h2>Third parties</h2>
        <p>We use a small number of service providers to run this site and our email:</p>
        <ul>
          <li>
            <strong>Cloudflare</strong> hosts this website and handles network traffic to it.
          </li>
          <li>
            <strong>Zoho Mail</strong> hosts our email. Messages you send us are stored by Zoho.
          </li>
        </ul>
        <p>
          These providers process data on our behalf under their own privacy policies. We may also share information
          if required by law.
        </p>
      </section>

      <section>
        <h2>Data retention</h2>
        <p>
          We keep emails for as long as needed to respond to you and manage any work we do together, and then delete
          them when they are no longer needed. Hosting logs are kept by Cloudflare for a limited period under its own
          retention policies.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have the right to ask what personal information we hold about you, to
          correct it, or to have it deleted. To make a request, email us at {email}. We will respond within a
          reasonable time.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>This website is meant for businesses and adults. We do not knowingly collect information from children.</p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The effective date at the top of this page shows when it was
          last changed.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p>
          {site.companyName}
          <br />
          Email: {email}
        </p>
      </section>
    </LegalPage>
  )
}
