import ExternalLink from '../components/ExternalLink'
import { CONTACT_EMAIL } from '../lib/constants'
import LegalLayout from './LegalLayout'

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy policy" updated="15 July 2026">
      <section>
        <h2>Who is responsible</h2>
        <p>
          Rivly is published by a private individual acting in a
          non-professional capacity, who is the data controller for the
          processing described on this page. For any question, or to exercise
          your rights, write to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>

      <section>
        <h2>What we collect</h2>
        <p>
          Only your email address, and the date and time you submitted it. That
          is all. We do not store your IP address, we run no analytics, and we
          set no cookies.
        </p>
      </section>

      <section>
        <h2>Why we collect it</h2>
        <p>
          To send you one message on the day Rivly is released. No newsletter,
          no marketing, no spam.
        </p>
      </section>

      <section>
        <h2>Giving it is optional</h2>
        <p>
          Nothing on this site requires your email address, and everything else
          works without it. The only consequence of not giving it is that we
          will not be able to tell you when Rivly is released.
        </p>
      </section>

      <section>
        <h2>Legal basis</h2>
        <p>
          Your consent, under article 6(1)(a) of the GDPR, given when you submit
          the form. You can withdraw it at any time, and withdrawing it is as
          easy as giving it.
        </p>
      </section>

      <section>
        <h2>Who has access</h2>
        <p>
          Nobody else. Your address is never sold, rented or shared. It is
          stored by our hosting provider, Cloudflare, Inc., acting as a
          processor on our behalf, using Cloudflare Workers KV.
        </p>
      </section>

      <section>
        <h2>Transfers outside the European Union</h2>
        <p>
          Cloudflare stores and replicates data on infrastructure that may sit
          outside the European Union, including in the United States. Those
          transfers are covered by the European Commission&rsquo;s standard
          contractual clauses, included in{' '}
          <ExternalLink href="https://www.cloudflare.com/cloudflare-customer-dpa/">
            Cloudflare&rsquo;s data processing addendum
          </ExternalLink>
          , which you can read in full.
        </p>
      </section>

      <section>
        <h2>How long we keep it</h2>
        <p>
          Until the release message has been sent, after which your address is
          deleted. If that message has not been sent within 24 months, the list
          is deleted anyway. You can ask for deletion at any point before that.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Under the GDPR you can access your data, correct it, delete it,
          restrict or object to its processing, ask for it in a portable form,
          and withdraw your consent at any time. Write to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will act
          on it.
        </p>
        <p>
          You can also lodge a complaint with a data protection authority, in
          particular in the country where you live, where you work, or where you
          think the problem happened. The authority competent for us is the{' '}
          <ExternalLink href="https://www.cnil.fr">CNIL</ExternalLink>, in
          France.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          If this policy changes, the date at the top of this page is updated.
        </p>
      </section>
    </LegalLayout>
  )
}
