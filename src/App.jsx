import { useState, useRef, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import LoadingScreen from './components/LoadingScreen'
import Nav from './components/Nav'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

// Pages
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetail from './pages/ProjectDetail'
import BlogPage from './pages/BlogPage'
import BlogDetail from './pages/BlogDetail'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

function NotFound() {
  return (
    <main style={{ background: '#F2EBDF', minHeight: '100vh', paddingTop: '88px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
      <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '3px', color: '#2A2018' }}>404</p>
      <h1 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 48px)', color: '#2A2018' }}>Trang không tìm thấy</h1>
      <Link to="/" style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '2px', color: '#2A2018', border: '1px solid #2A2018', padding: '12px 28px', borderRadius: '999px', textDecoration: 'none' }}>
        VỀ TRANG CHỦ →
      </Link>
    </main>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const footerRef = useRef(null)
  const [footerH, setFooterH] = useState(320)

  useEffect(() => {
    const el = footerRef.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setFooterH(e.contentRect.height))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}

      {/* Footer: fixed underlay at z-index 0 */}
      <div ref={footerRef} style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 0 }}>
        <Footer />
      </div>

      {/* Nav: outside content wrapper — position:fixed, no pointer-events conflicts */}
      <Nav />

      {/* Page content: z-index 1, normal pointer-events */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home appLoaded={loaded} />} />
          <Route path="/gioi-thieu" element={<AboutPage />} />
          <Route path="/du-an" element={<ProjectsPage />} />
          <Route path="/du-an/:slug" element={<ProjectDetail />} />
          <Route path="/chia-se" element={<BlogPage />} />
          <Route path="/chia-se/:slug" element={<BlogDetail />} />
          <Route path="/lien-he" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Spacer: non-positioned (stacking layer below fixed footer) + pointer-events none
          → footer is visually & interactively on top in this area */}
      <div style={{ height: footerH, pointerEvents: 'none' }} aria-hidden="true" />

      <FloatingContact />
    </BrowserRouter>
  )
}
