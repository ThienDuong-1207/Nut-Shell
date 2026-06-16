/* ─── Home Page — tập hợp tất cả sections ─── */
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'
import Process from '../components/Process'
import Quote from '../components/Quote'
import CTA from '../components/CTA'

export default function Home({ appLoaded }) {
  return (
    <main>
      <Hero appLoaded={appLoaded} />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Stats />
      <Process />
      <Quote />
      <CTA />
    </main>
  )
}
