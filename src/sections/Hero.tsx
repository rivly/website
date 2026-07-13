import { LuStar, LuArrowRight } from 'react-icons/lu'
import Placeholder from '../components/Placeholder'
import ExternalLink from '../components/ExternalLink'
import { GITHUB_REPO_URL } from '../lib/constants'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 className="hero__title">
            The Docker dashboard you&rsquo;ll{' '}
            <span className="hero__em">actually</span> keep open.
          </h1>

          <p className="hero__lead">
            Rivly is an open-source UI for Docker, from a single host to a full
            Swarm. Deploy your stacks, watch every container, and see it all in
            one view.
          </p>

          <div className="hero__actions">
            <ExternalLink className="btn btn-primary" href={GITHUB_REPO_URL}>
              <LuStar size={16} />
              Star on GitHub
            </ExternalLink>
            <a className="btn btn-secondary" href="#notify">
              Get notified
              <LuArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero__media">
          <Placeholder label="Dashboard preview" ratio="16 / 10" />
        </div>
      </div>
    </section>
  )
}
