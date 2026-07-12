import { LuGithub } from 'react-icons/lu'
import { GITHUB_REPO_URL, WEBSITE_REPO_URL, DOCS_URL } from '../lib/constants'
import logo from '../../brand/logo-blue-no-bg.png'
import euFlag from '../../brand/europe-flag.jpg'
import './Footer.css'

const LINKS = [
  { label: 'GitHub', href: GITHUB_REPO_URL },
  { label: 'Documentation', href: DOCS_URL },
  { label: 'MIT License', href: `${GITHUB_REPO_URL}/blob/main/LICENSE` },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <img src={logo} alt="" width={20} height={20} />
            Rivly
          </span>
          <span className="footer__tag">
            Open-source dashboard for Docker &amp; Swarm.
          </span>
        </div>

        <nav className="footer__links">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container footer__bottom">
        <span>© 2026 Rivly</span>

        <span className="footer__madein">
          <img className="footer__flag" src={euFlag} alt="" />
          Made in Europe
        </span>

        <a
          className="footer__source"
          href={WEBSITE_REPO_URL}
          target="_blank"
          rel="noreferrer"
        >
          <LuGithub size={14} />
          This site is open source
        </a>
      </div>
    </footer>
  )
}
