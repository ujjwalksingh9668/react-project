import { useEffect } from 'react'
import { initScrollAnimations } from './animations/scrollAnimations'
import HomeBackdrop from './components/HomeBackdrop'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import LegacySection from './sections/LegacySection'
import InnovationGalaxy from './sections/InnovationGalaxy'
import EventsUniverse from './sections/EventsUniverse'
import TechLab from './sections/TechLab'
import SponsorsSection from './sections/SponsorsSection'
import CountdownSection from './sections/CountdownSection'
import Footer from './sections/Footer'

function App() {
  useEffect(() => {
    initScrollAnimations()
  }, [])

  return (
    <div className="app-shell overflow-x-hidden text-slate-100">
      <HomeBackdrop />
      <div className="app-content relative z-10">
        <Navbar />
        <HeroSection />
        <LegacySection />
        <InnovationGalaxy />
        <EventsUniverse />
        <TechLab />
        <SponsorsSection />
        <CountdownSection />
        <Footer />
      </div>
    </div>
  )
}

export default App
