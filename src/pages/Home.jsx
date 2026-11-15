/* ─── Home Page — bố cục theo DESIGN.md (tham chiếu Socvra) ─── */
import './home.css'
import HomeHero from '../components/home/HomeHero'
import NameMarquee from '../components/home/NameMarquee'
import HomeServices from '../components/home/HomeServices'
import HomeProcess from '../components/home/HomeProcess'
import HomeWork from '../components/home/HomeWork'
import HomeWhy from '../components/home/HomeWhy'
import HomeTestimonials from '../components/home/HomeTestimonials'
import Faq from '../components/ui/Faq'
import HomeCta from '../components/home/HomeCta'

// Các phần đang tạm ẩn — đổi thành true để hiện lại
const SHOW_PROCESS = false   // "Quy trình"

export default function Home({ appLoaded }) {
  return (
    <main className="home">
      <HomeHero appLoaded={appLoaded} />
      <NameMarquee />
      <HomeServices />
      {SHOW_PROCESS && <HomeProcess />}
      <HomeWork />
      <HomeWhy />
      <HomeTestimonials />
      <Faq />
      <HomeCta />
    </main>
  )
}
