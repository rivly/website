import ExternalLink from '../components/ExternalLink'
import { CONTACT_EMAIL, GITHUB_REPO_URL, WEBSITE_REPO_URL } from '../lib/constants'
import LegalLayout from './LegalLayout'

export default function LegalNotice() {
  return (
    <LegalLayout title="Legal notice" updated="15 July 2026">
      <section>
        <h2>Publisher</h2>
        <p>
          This site is published by a private individual acting in a
          non-professional capacity. Under article 1-1, II of French law
          no. 2004-575 of 21 June 2004 (LCEN), as amended by law no. 2024-449 of
          21 May 2024, a non-professional publisher may keep their identity
          private towards the public, provided that it has been disclosed to the
          hosting provider named below.
        </p>
        <p>
          Contact: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>

      <section>
        <h2>Hosting</h2>
        <p>This site is hosted on Cloudflare Pages by:</p>
        <address>
          Cloudflare, Inc.
          <br />
          101 Townsend Street
          <br />
          San Francisco, CA 94107
          <br />
          United States
          <br />
          Phone: +1 (888) 993-5273
        </address>
        <p>
          <ExternalLink href="https://www.cloudflare.com">
            cloudflare.com
          </ExternalLink>
        </p>
      </section>

      <section>
        <h2>Content and licence</h2>
        <p>
          Rivly is open-source software released under the MIT licence. The
          source code of the product is on{' '}
          <ExternalLink href={GITHUB_REPO_URL}>GitHub</ExternalLink>, and the
          source of this site is{' '}
          <ExternalLink href={WEBSITE_REPO_URL}>public too</ExternalLink>.
        </p>
        <p>
          The Rivly name and logo remain the property of the publisher. Docker
          and Docker Swarm are trademarks of Docker, Inc., which does not
          sponsor or endorse this project.
        </p>
      </section>

      <section>
        <h2>Personal data</h2>
        <p>
          If you join the waitlist, your email address is processed as described
          in the <a href="/privacy">privacy policy</a>.
        </p>
      </section>
    </LegalLayout>
  )
}
