import { LuGithub, LuStar } from 'react-icons/lu'
import { GITHUB_REPO_URL } from '../lib/constants'
import './OpenSource.css'

export default function OpenSource() {
  return (
    <section id="open-source" className="oss">
      <div className="container oss__inner">
        <span className="oss__icon" aria-hidden="true">
          <LuGithub size={26} />
        </span>

        <h2 className="oss__title">Open source, and yours to run.</h2>

        <p className="oss__lead">
          Rivly is MIT licensed and self-hosted. Read every line, run it on your
          own hardware, and send a pull request. No accounts, no telemetry, no
          lock-in.
        </p>

        <div className="oss__actions">
          <a
            className="btn btn-primary"
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noreferrer"
          >
            <LuStar size={16} />
            Star on GitHub
          </a>
          <a
            className="btn btn-secondary"
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noreferrer"
          >
            Browse the code
          </a>
        </div>
      </div>
    </section>
  )
}
