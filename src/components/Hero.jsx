/* ─── Hero — luxury split screen with hover expand + image slideshow ─── */
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
  const [active, setActive]   = useState(0)
  const [hovered, setHovered] = useState(null)   // 'left' | 'right' | null
  const [imgScale, setImgScale] = useState(false) // true = zoomed
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

  /* Auto-cycle — pauses on hover */
  useEffect(() => {
    if (hovered) {
      clearInterval(intervalRef.current)
    } else {
      intervalRef.current = setInterval(next, 4500)
    }
    return () => clearInterval(intervalRef.current)
  }, [hovered, next])

  const leftW  = hovered === 'left'  ? '52%' : hovered === 'right' ? '36%' : '43%'
  const transition = 'width 0.7s cubic-bezier(0.77,0,0.175,1)'

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>

      {/* ── DESKTOP: flex split ── */}
      <div className="hidden lg:flex" style={{ height: '100%' }}>

        {/* LEFT — dark editorial panel */}
        <div
          style={{
            width: leftW,
            minWidth: 0,
            background: '#1E1610',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(88px,11vh,120px) clamp(40px,5vw,88px) clamp(40px,5vh,64px)',
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
            transition,
            cursor: 'default',
            zIndex: 1,
          }}
          onMouseEnter={() => setHovered('left')}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Vertical rule right edge */}
          <div style={{
            position: 'absolute', top: '15%', right: 0, bottom: '15%', width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(244,239,231,.1) 40%, rgba(244,239,231,.1) 60%, transparent)',
          }} />

          {/* ── TOP: Studio label ── */}
          <p style={{ ...MONO, fontSize: '9px', letterSpacing: '3.5px', color: 'rgba(244,239,231,.42)', ...FADEIN(200) }}>
            NUT SHELL STUDIO — EST. 2017
          </p>

          {/* ── MIDDLE: Headline + tagline + CTAs ── */}
          <div>
            <h1 style={{ ...SERIF, fontSize: 'clamp(36px, 3.8vw, 64px)', lineHeight: 1.1, color: '#F4EFE7', marginBottom: '28px' }}>
              <span style={{ display: 'block', ...FADEIN(320) }}>Nơi ánh sáng</span>
              <span style={{ display: 'block', ...FADEIN(420) }}>chạm vào</span>
              <span style={{ display: 'block', color: '#E3D2B0', ...FADEIN(520) }}>chất liệu.</span>
            </h1>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '36px', ...FADEIN(600) }}>
              <div style={{ width: '28px', height: '1px', background: '#A8623C', marginTop: '10px', flexShrink: 0 }} />
              <p style={{ ...JOST, fontSize: '14px', fontWeight: 300, color: 'rgba(244,239,231,.58)', lineHeight: 1.85 }}>
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
                border: '1px solid rgba(244,239,231,.22)',
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
                  e.currentTarget.style.borderColor = 'rgba(244,239,231,.22)'
                  e.currentTarget.style.color = 'rgba(244,239,231,.75)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                TƯ VẤN MIỄN PHÍ
              </a>
            </div>
          </div>

          {/* ── BOTTOM: Stats ── */}
          <div style={{ display: 'flex', gap: '32px', ...FADEIN(900) }}>
            {[['400+', 'Công trình'], ['7+', 'Năm KN'], ['98%', 'Hài lòng']].map(([n, l]) => (
              <div key={l}>
                <p style={{ ...SERIF, fontSize: '22px', color: '#E3D2B0', lineHeight: 1 }}>{n}</p>
                <p style={{ ...MONO, fontSize: '8px', letterSpacing: '2px', color: 'rgba(244,239,231,.32)', marginTop: '4px' }}>{l.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — full-bleed image panel */}
        <div
          style={{ flex: 1, position: 'relative', overflow: 'hidden', cursor: 'none' }}
          onMouseEnter={() => { setHovered('right'); setImgScale(true) }}
          onMouseLeave={() => { setHovered(null); setImgScale(false) }}
        >
          {/* Images — crossfade */}
          {SLIDES.map((slide, i) => (
            <div
              key={slide.src}
              style={{
                position: 'absolute', inset: 0,
                opacity: i === active ? 1 : 0,
                transition: 'opacity 1s ease',
              }}
            >
              <img
                src={slide.src}
                alt={slide.label}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center',
                  display: 'block',
                  transform: imgScale && i === active ? 'scale(1.06)' : 'scale(1)',
                  transition: 'transform 0.8s cubic-bezier(0.4,0,0.2,1)',
                }}
              />
            </div>
          ))}

          {/* Subtle left shadow for depth */}
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: '120px', zIndex: 1,
            background: 'linear-gradient(to right, rgba(30,22,16,.35) 0%, transparent 100%)',
          }} />

          {/* Top-right: slide counter */}
          <div style={{ position: 'absolute', top: '40px', right: '40px', zIndex: 2, textAlign: 'right', ...FADEIN(800) }}>
            <p style={{ ...MONO, fontSize: '11px', letterSpacing: '2px', color: 'rgba(244,239,231,.55)' }}>
              {String(active + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
            </p>
          </div>

          {/* Bottom-left: project label */}
          <div style={{
            position: 'absolute', bottom: '40px', left: '40px', zIndex: 2,
            opacity: 1, transition: 'opacity .4s',
            ...FADEIN(800),
          }}>
            <p style={{ ...MONO, fontSize: '8.5px', letterSpacing: '2.5px', color: 'rgba(244,239,231,.45)', marginBottom: '6px' }}>
              {SLIDES[active].cat}
            </p>
            <p style={{ ...SERIF, fontSize: '20px', color: '#F4EFE7' }}>
              {SLIDES[active].label}
            </p>
          </div>

          {/* Bottom-right: dot indicators */}
          <div style={{
            position: 'absolute', bottom: '44px', right: '40px', zIndex: 2,
            display: 'flex', gap: '8px', alignItems: 'center',
          }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? '24px' : '6px',
                  height: '2px',
                  borderRadius: '1px',
                  background: i === active ? '#E3D2B0' : 'rgba(244,239,231,.3)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'width .4s ease, background .4s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE: stacked ── */}
      <div className="lg:hidden" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

        {/* Image top */}
        <div style={{ flex: '0 0 52%', position: 'relative', overflow: 'hidden' }}>
          {SLIDES.map((slide, i) => (
            <div key={slide.src} style={{ position: 'absolute', inset: 0, opacity: i === active ? 1 : 0, transition: 'opacity 1s ease' }}>
              <img src={slide.src} alt={slide.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(30,22,16,.6) 100%)' }} />
          {/* Dots */}
          <div style={{ position: 'absolute', bottom: '16px', right: '20px', display: 'flex', gap: '6px' }}>
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

        {/* Text bottom */}
        <div style={{ flex: 1, background: '#1E1610', padding: '36px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ ...MONO, fontSize: '8.5px', letterSpacing: '3px', color: '#4A3B2E', marginBottom: '20px' }}>
            NUT SHELL STUDIO
          </p>
          <h1 style={{ ...SERIF, fontSize: 'clamp(30px, 8vw, 44px)', lineHeight: 1.1, color: '#F4EFE7', marginBottom: '28px' }}>
            Nơi ánh sáng<br />chạm vào <span style={{ color: '#E3D2B0' }}>chất liệu.</span>
          </h1>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="#duan" style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', background: '#E3D2B0', color: '#2A2018', padding: '12px 24px', borderRadius: '999px', textDecoration: 'none' }}>
              XEM DỰ ÁN →
            </a>
            <a href="#lienhe" style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: '#6B5A4E', padding: '12px 0', textDecoration: 'none' }}>
              TƯ VẤN
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
