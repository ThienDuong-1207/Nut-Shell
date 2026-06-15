/* ─── Hero — 100 vh, parallax background, hero text bottom-left ─── */
import { useEffect, useRef } from 'react'

const MONO  = { fontFamily: '"Space Mono", monospace' }
const SERIF = { fontFamily: 'Marcellus, serif' }
const FADEIN = (delay) => ({
  opacity: 0,
  animation: `fadeUp 1s cubic-bezier(.2,.7,.2,1) ${delay}ms forwards`,
})

export default function Hero() {
  const bgRef = useRef(null)
  const raf   = useRef(null)

  /* Parallax: background translates down at 0.22× scroll speed */
  useEffect(() => {
    const onScroll = () => {
      if (raf.current) cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(() => {
        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${window.scrollY * 0.22}px)`
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>

      {/* Background with parallax — oversized to allow scroll headroom */}
      <div
        ref={bgRef}
        style={{ position: 'absolute', inset: '-28%', willChange: 'transform' }}
      >
        <img
          src="/images/hero.jpg"
          alt=""
          aria-hidden
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Top vignette */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '38%', zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(42,32,24,.7) 0%, transparent 100%)',
      }} />

      {/* Bottom vignette */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '65%', zIndex: 1,
        background: 'linear-gradient(to top, rgba(42,32,24,.92) 0%, rgba(42,32,24,.3) 60%, transparent 100%)',
      }} />

      {/* ── Content bottom-left ── */}
      <div
        style={{ position: 'absolute', bottom: '11%', left: 0, right: 0, zIndex: 2 }}
        className="px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <div style={{ maxWidth: '740px' }}>
          <p style={{ ...MONO, fontSize: '9.5px', letterSpacing: '3px', color: '#B6A88F', marginBottom: '18px', ...FADEIN(300) }}>
            STUDIO THIẾT KẾ & THI CÔNG NỘI THẤT
          </p>
          <h1 style={{
            ...SERIF, fontSize: 'clamp(44px, 7vw, 92px)', lineHeight: 1.0,
            color: '#F4EFE7', marginBottom: '40px', ...FADEIN(500),
          }}>
            Nơi ánh sáng<br />chạm vào chất liệu.
          </h1>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', ...FADEIN(700) }}>
            <HeroBtn href="#duan" solid>XEM DỰ ÁN</HeroBtn>
            <HeroBtn href="#dichvu">DỊCH VỤ</HeroBtn>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator center-bottom ── */}
      <div style={{
        position: 'absolute', bottom: '32px',
        left: '50%', transform: 'translateX(-50%)',
        zIndex: 2, textAlign: 'center', ...FADEIN(1100),
      }}>
        <span className="bounce-slow" style={{ ...MONO, fontSize: '9px', letterSpacing: '3px', color: 'rgba(244,239,231,.45)' }}>
          CUỘN ↓
        </span>
      </div>
    </section>
  )
}

function HeroBtn({ href, children, solid }) {
  const base = {
    fontFamily: '"Space Mono", monospace', fontSize: '11px', letterSpacing: '2px',
    padding: '14px 28px', borderRadius: '999px', textDecoration: 'none',
    display: 'inline-block', transition: 'opacity .2s, transform .2s',
  }
  const variant = solid
    ? { background: '#E3D2B0', color: '#2A2018' }
    : { background: 'transparent', color: '#F4EFE7', border: '1px solid rgba(244,239,231,.5)' }

  return (
    <a
      href={href} style={{ ...base, ...variant }}
      onMouseEnter={e => { e.currentTarget.style.opacity = '.82'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.opacity = '1';   e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {children}
    </a>
  )
}
