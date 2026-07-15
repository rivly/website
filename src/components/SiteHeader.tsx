import { useEffect, useState } from 'react'
import { LuGithub, LuArrowRight } from 'react-icons/lu'
import ExternalLink from './ExternalLink'
import { GITHUB_REPO_URL, DOCS_URL } from '../lib/constants'
import logo from '../../brand/logo-blue-no-bg.png'
import './SiteHeader.css'

const LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how' },
  { label: 'Documentation', href: DOCS_URL, external: true },
  { label: 'Open source', href: '/#open-source' },
]

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="site-header" data-scrolled={scrolled || undefined}>
      <div className="container site-header__inner">
        <a className="site-header__logo" href="/">
          <img
            className="site-header__mark"
            src={logo}
            alt=""
            width={22}
            height={22}
          />
          Rivly
        </a>

        <nav className="site-header__nav">
          {LINKS.map((l) => (
            <a
              key={l.label}
              className="site-header__link"
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <ExternalLink
            className="site-header__icon"
            href={GITHUB_REPO_URL}
            aria-label="Rivly on GitHub"
          >
            <LuGithub size={18} />
          </ExternalLink>
          <a className="btn btn-primary site-header__cta" href="/#notify">
            Get notified
            <LuArrowRight size={15} />
          </a>
        </div>
      </div>
    </header>
  )
}
