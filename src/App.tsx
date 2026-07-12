import SiteHeader from './components/SiteHeader'
import Hero from './sections/Hero'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import OpenSource from './sections/OpenSource'
import NotifyCTA from './sections/NotifyCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <OpenSource />
        <NotifyCTA />
      </main>
      <Footer />
    </>
  )
}
