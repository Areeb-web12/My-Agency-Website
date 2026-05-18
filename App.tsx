import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import Trust from './sections/Trust'
import Introduction from './sections/Introduction'
import About from './sections/About'
import Services from './sections/Services'
import Tools from './sections/Tools'
import Pricing from './sections/Pricing'
import WhyHireUs from './sections/WhyHireUs'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navigation scrolled={scrolled} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Trust />
        <Introduction />
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <Tools />
        <section id="pricing">
          <Pricing />
        </section>
        <section id="why-us">
          <WhyHireUs />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
