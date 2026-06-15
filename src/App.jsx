import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Nav      from './components/Nav'
import Hero     from './components/Hero'
import About    from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Stats    from './components/Stats'
import Process  from './components/Process'
import Quote    from './components/Quote'
import CTA      from './components/CTA'
import Footer   from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Stats />
        <Process />
        <Quote />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
