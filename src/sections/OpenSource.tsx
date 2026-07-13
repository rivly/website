import { LuGithub, LuStar } from 'react-icons/lu'
import ExternalLink from '../components/ExternalLink'
import { GITHUB_REPO_URL } from '../lib/constants'
import './OpenSource.css'

export default function OpenSource() {
  return (
    <section id="open-source" className="oss">
      <div className="container oss__inner">
        <span className="oss__icon" aria-hidden="true">
          <LuGithub size={26} />
        </span>

        <h2 className="oss__title">Open source, no asterisks.</h2>

        <p className="oss__lead">
          Rivly is MIT licensed and runs entirely on your own hardware. Read the
          code, fork it, send a pull request. No accounts, no telemetry, no
          lock-in.
        </p>

        <div className="oss__actions">
          <ExternalLink className="btn btn-primary" href={GITHUB_REPO_URL}>
            <LuStar size={16} />
            Star on GitHub
          </ExternalLink>
          <ExternalLink className="btn btn-secondary" href={GITHUB_REPO_URL}>
            Browse the code
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}
