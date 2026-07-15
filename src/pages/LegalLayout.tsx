import type { ReactNode } from 'react'
import SiteHeader from '../components/SiteHeader'
import Footer from '../components/Footer'
import './LegalLayout.css'

type Props = {
  title: string
  updated: string
  children: ReactNode
}

export default function LegalLayout({ title, updated, children }: Props) {
  return (
    <>
      <SiteHeader />
      <main className="legal">
        <div className="legal__inner">
          <h1 className="legal__title">{title}</h1>
          <p className="legal__updated">Last updated {updated}</p>
          <div className="legal__body">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}
