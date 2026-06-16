/* ─── Hero — full-bleed image slideshow with overlay text ─── */
import { useEffect, useRef, useState, useCallback } from 'react'

const MONO  = { fontFamily: '"Space Mono", monospace' }
const SERIF = { fontFamily: 'Marcellus, serif' }
const JOST  = { fontFamily: 'Jost, sans-serif' }

const FADEIN = (delay) => ({
  opacity: 0,
  animation: `fadeUp 1s cubic-bezier(.2,.7,.2,1) ${delay}ms forwards`,
})

const SLIDES = [
  { src: '/projects/nha-o/penthouse-cover.jpg',    label: 'The Penthouse',  cat: 'NHÀ Ở',    navColor: 'rgba(244,239,231,.9)' },
  { src: '/projects/cafe/nina-cover.jpg',           label: 'Nina Café',      cat: 'CAFE',      navColor: 'rgba(244,239,231,.9)' },
  { src: '/projects/nha-o/villa-longhau-cover.jpg', label: 'Villa Long Hậu', cat: 'NHÀ Ở',    navColor: 'rgba(244,239,231,.9)' },
  { src: '/projects/nha-hang/sashimi-cover.jpg',    label: 'Sashimi House',  cat: 'NHÀ HÀNG', navColor: 'rgba(244,239,231,.9)' },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const intervalRef = useRef(null)

  const next = useCallback(() => {
    setActive(i => (i + 1) % SLIDES.length)
  }, [])

  /* Notify Nav of current slide's nav color */
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('hero-nav-color', {
      detail: { color: SLIDES[active].navColor },
    }))
  }, [active])

  /* Auto-cycle */
  useEffect(() => {
    intervalRef.current = setInterval(next, 4500)
    return () => clearInterval(intervalRef.current)
  }, [next])

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>

      {/* ── Full-bleed images — crossfade ── */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          style={{
            position: 'absolute', inset: 0,
            opacity: i === active ? 1 : 0,
            transition: 'opacity 1.2s ease',
          }}
        >
          <img
            src={slide.src}
            alt={slide.label}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        </div>
      ))}

      {/* ── Gradient overlay — left text zone ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(20,14,10,.88) 0%, rgba(20,14,10,.72) 32%, rgba(20,14,10,.18) 62%, transparent 100%)',
        zIndex: 1,
      }} />

      {/* ── Top/bottom vignette — desktop ── */}
      <div className="hidden lg:block" style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,.25) 0%, transparent 30%, transparent 70%, rgba(0,0,0,.28) 100%)',
        zIndex: 1,
      }} />

      {/* ── Mobile bottom overlay — strong enough for text readability ── */}
      <div className="lg:hidden" style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(20,14,10,.15) 0%, transparent 35%, rgba(20,14,10,.72) 70%, rgba(20,14,10,.92) 100%)',
        zIndex: 1,
      }} />

      {/* ── DESKTOP: text content ── */}
      <div
        className="hidden lg:flex"
        style={{
          position: 'absolute', inset: 0, zIndex: 2,
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(100px,12vh,132px) clamp(48px,6vw,96px) clamp(48px,6vh,72px)',
          maxWidth: '520px',
        }}
      >
        {/* TOP: Studio label */}
        <p style={{ ...MONO, fontSize: '9px', letterSpacing: '3.5px', color: 'rgba(244,239,231,.42)', ...FADEIN(200) }}>
          NUT SHELL STUDIO — EST. 2017
        </p>

        {/* MIDDLE: Headline + tagline + CTAs */}
        <div>
          <h1 style={{ ...SERIF, fontSize: 'clamp(38px, 4.2vw, 68px)', lineHeight: 1.08, color: '#F4EFE7', marginBottom: '28px' }}>
            <span style={{ display: 'block', ...FADEIN(320) }}>Nơi ánh sáng</span>
            <span style={{ display: 'block', ...FADEIN(420) }}>chạm vào</span>
            <span style={{ display: 'block', color: '#E3D2B0', ...FADEIN(520) }}>chất liệu.</span>
          </h1>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '36px', ...FADEIN(600) }}>
            <div style={{ width: '28px', height: '1px', background: '#A8623C', marginTop: '10px', flexShrink: 0 }} />
            <p style={{ ...JOST, fontSize: '14px', fontWeight: 300, color: 'rgba(244,239,231,.60)', lineHeight: 1.85 }}>
              Thiết kế & thi công nội thất cao cấp.<br />
              Mỗi không gian kể một câu chuyện riêng.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', ...FADEIN(700) }}>
            <a href="#duan" style={{
              ...MONO, fontSize: '10.5px', letterSpacing: '2.5px',
              background: '#E3D2B0', color: '#2A2018',
              padding: '13px 28px', borderRadius: '999px',
              textDecoration: 'none', transition: 'opacity .2s, transform .2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '.84'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1';   e.currentTarget.style.transform = 'translateY(0)' }}
            >
              XEM DỰ ÁN →
            </a>
            <a href="#lienhe" style={{
              ...MONO, fontSize: '10.5px', letterSpacing: '2.5px',
              background: 'transparent', color: 'rgba(244,239,231,.75)',
              border: '1px solid rgba(244,239,231,.28)',
              padding: '13px 28px', borderRadius: '999px',
              textDecoration: 'none', transition: 'background .25s, border-color .25s, color .25s, transform .25s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(244,239,231,.1)'
                e.currentTarget.style.borderColor = 'rgba(244,239,231,.55)'
                e.currentTarget.style.color = '#F4EFE7'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(244,239,231,.28)'
                e.currentTarget.style.color = 'rgba(244,239,231,.75)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              TƯ VẤN MIỄN PHÍ
            </a>
          </div>
        </div>

        {/* BOTTOM: Stats */}
        <div style={{ display: 'flex', gap: '36px', ...FADEIN(900) }}>
          {[['400+', 'Công trình'], ['7+', 'Năm KN'], ['98%', 'Hài lòng']].map(([n, l]) => (
            <div key={l}>
              <p style={{ ...SERIF, fontSize: '22px', color: '#E3D2B0', lineHeight: 1 }}>{n}</p>
              <p style={{ ...MONO, fontSize: '8px', letterSpacing: '2px', color: 'rgba(244,239,231,.32)', marginTop: '4px' }}>{l.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Slide counter — top right ── */}
      <div style={{ position: 'absolute', top: '40px', right: '40px', zIndex: 3, textAlign: 'right', ...FADEIN(800) }}
        className="hidden lg:block"
      >
        <p style={{ ...MONO, fontSize: '11px', letterSpacing: '2px', color: 'rgba(244,239,231,.50)' }}>
          {String(active + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
        </p>
      </div>

      {/* ── Project label — bottom right ── */}
      <div style={{
        position: 'absolute', bottom: '48px', right: '48px', zIndex: 3,
        textAlign: 'right', ...FADEIN(800),
      }}
        className="hidden lg:block"
      >
        <p style={{ ...MONO, fontSize: '8.5px', letterSpacing: '2.5px', color: 'rgba(244,239,231,.45)', marginBottom: '6px' }}>
          {SLIDES[active].cat}
        </p>
        <p style={{ ...SERIF, fontSize: '20px', color: '#F4EFE7' }}>
          {SLIDES[active].label}
        </p>
      </div>

      {/* ── Dot indicators — bottom right (below label) ── */}
      <div style={{
        position: 'absolute', bottom: '20px', right: '48px', zIndex: 3,
        display: 'flex', gap: '8px', alignItems: 'center',
      }}
        className="hidden lg:flex"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? '24px' : '6px',
              height: '2px', borderRadius: '1px',
              background: i === active ? '#E3D2B0' : 'rgba(244,239,231,.3)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'width .4s ease, background .4s ease',
            }}
          />
        ))}
      </div>

      {/* ── Vertical rule accent — right of text zone ── */}
      <div className="hidden lg:block" style={{
        position: 'absolute', top: '20%', left: '480px', bottom: '20%', width: '1px', zIndex: 2,
        background: 'linear-gradient(to bottom, transparent, rgba(244,239,231,.08) 40%, rgba(244,239,231,.08) 60%, transparent)',
      }} />

      {/* ── MOBILE ── */}
      <div className="lg:hidden flex flex-col justify-end" style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
        <div style={{ padding: '0 28px 52px' }}>
          <p style={{ ...MONO, fontSize: '8.5px', letterSpacing: '3px', color: 'rgba(244,239,231,.38)', marginBottom: '16px' }}>
            NUT SHELL STUDIO
          </p>
          <h1 style={{ ...SERIF, fontSize: 'clamp(30px, 8vw, 44px)', lineHeight: 1.1, color: '#F4EFE7', marginBottom: '28px' }}>
            Nơi ánh sáng<br />chạm vào <span style={{ color: '#E3D2B0' }}>chất liệu.</span>
          </h1>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <a href="#duan" style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', background: '#E3D2B0', color: '#2A2018', padding: '12px 24px', borderRadius: '999px', textDecoration: 'none' }}>
              XEM DỰ ÁN →
            </a>
            <a href="#lienhe" style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: 'rgba(244,239,231,.65)', border: '1px solid rgba(244,239,231,.25)', padding: '12px 20px', borderRadius: '999px', textDecoration: 'none' }}>
              TƯ VẤN
            </a>
          </div>
          {/* Mobile dots */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                width: i === active ? '20px' : '6px', height: '2px', borderRadius: '1px',
                background: i === active ? '#E3D2B0' : 'rgba(244,239,231,.35)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'width .4s ease',
              }} />
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
