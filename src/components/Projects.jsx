/* ─── Projects — category pages, scroll-driven horizontal ─── */
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

const MONO  = { fontFamily: '"Space Mono", monospace' }
const SERIF = { fontFamily: 'Marcellus, serif' }

const CATEGORIES = [
  {
    id:    'NHÀ Ở',
    label: 'Nhà ở &\nBiệt thự',
    desc:  'Từ căn hộ thành phố đến biệt thự nghỉ dưỡng — mỗi không gian sống được thiết kế riêng cho chủ nhân.',
  },
  {
    id:    'CAFE',
    label: 'Café &\nTrà',
    desc:  'Không gian thương mại mang đậm cá tính — nơi mỗi góc ảnh đều kể một câu chuyện.',
  },
  {
    id:    'NHÀ HÀNG',
    label: 'Nhà hàng\n& F&B',
    desc:  'Thiết kế ẩm thực nâng tầm trải nghiệm — từ ánh đèn đến từng chất liệu bề mặt.',
  },
]

/* pick first N projects from a category */
function getByCategory(id, n = 3) {
  return PROJECTS.filter(p => p.category === id).slice(0, n)
}

export default function Projects() {
  const wrapRef    = useRef(null)
  const trackRef   = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const N = CATEGORIES.length

  useEffect(() => {
    const onScroll = () => {
      const wrap  = wrapRef.current
      const track = trackRef.current
      if (!wrap || !track) return

      const rect     = wrap.getBoundingClientRect()
      const scrolled = -rect.top
      const total    = rect.height - window.innerHeight
      if (total <= 0) return

      const progress = Math.max(0, Math.min(1, scrolled / total))
      track.style.transform = `translateX(-${progress * (N - 1) * 100}vw)`

      setActiveIdx(Math.round(progress * (N - 1)))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [N])

  return (
    <>
      {/* ── DESKTOP ── */}
      <div
        id="duan"
        ref={wrapRef}
        className="hidden lg:block"
        style={{ position: 'relative', height: `${N * 150}vh` }}
      >
        <div style={{
          position: 'sticky', top: 0,
          height: '100vh', overflow: 'hidden',
          background: '#2A2018',
        }}>

          {/* Horizontal track — N pages each 100vw */}
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              width: `${N * 100}vw`,
              height: '100%',
              willChange: 'transform',
            }}
          >
            {CATEGORIES.map((cat, ci) => {
              const projects = getByCategory(cat.id, 3)
              const [p1, p2, p3] = projects
              const count = PROJECTS.filter(p => p.category === cat.id).length

              return (
                <div
                  key={cat.id}
                  style={{
                    width: '100vw',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'stretch',
                    flexShrink: 0,
                  }}
                >
                  {/* ── Left panel: category info ── */}
                  <div style={{
                    width: '38%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '0 clamp(40px, 6vw, 96px)',
                    borderRight: '1px solid rgba(244,239,231,.07)',
                  }}>

                    {/* Index */}
                    <p style={{ ...MONO, fontSize: '9px', letterSpacing: '3px', color: '#4A3B2E', marginBottom: '32px' }}>
                      {String(ci + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
                    </p>

                    {/* Large label */}
                    <h2 style={{
                      ...SERIF,
                      fontSize: 'clamp(40px, 5.5vw, 76px)',
                      lineHeight: 1.1,
                      color: '#F4EFE7',
                      marginBottom: '28px',
                      whiteSpace: 'pre-line',
                    }}>
                      {cat.label}
                    </h2>

                    {/* Count badge */}
                    <p style={{ ...MONO, fontSize: '9px', letterSpacing: '2px', color: '#A8623C', marginBottom: '24px' }}>
                      {count} DỰ ÁN
                    </p>

                    {/* Description */}
                    <p style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '15px', fontWeight: 300,
                      color: '#6B5E4F', lineHeight: 1.9,
                      maxWidth: '320px',
                      marginBottom: '44px',
                    }}>
                      {cat.desc}
                    </p>

                    {/* CTA */}
                    <Link
                      to="/du-an"
                      style={{
                        ...MONO, fontSize: '10px', letterSpacing: '2px',
                        color: '#E3D2B0', textDecoration: 'none',
                        border: '1px solid rgba(227,210,176,.3)',
                        padding: '12px 28px', borderRadius: '999px',
                        display: 'inline-block',
                        width: 'fit-content',
                        transition: 'background .2s, color .2s, border-color .2s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#E3D2B0'
                        e.currentTarget.style.color = '#2A2018'
                        e.currentTarget.style.borderColor = '#E3D2B0'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = '#E3D2B0'
                        e.currentTarget.style.borderColor = 'rgba(227,210,176,.3)'
                      }}
                    >
                      XEM TẤT CẢ →
                    </Link>
                  </div>

                  {/* ── Right panel: image collage ── */}
                  <div style={{
                    flex: 1,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '1fr 1fr',
                    gap: '3px',
                    padding: 'clamp(24px, 4vh, 48px)',
                    paddingLeft: 'clamp(20px, 3vw, 40px)',
                  }}>
                    {/* img1 — spans both rows (tall portrait) */}
                    {p1 && (
                      <Link
                        to={`/du-an/${p1.slug}`}
                        style={{ gridRow: '1 / 3', overflow: 'hidden', borderRadius: '2px', display: 'block' }}
                      >
                        <img
                          src={p1.cover} alt={p1.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .65s ease' }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                      </Link>
                    )}
                    {/* img2 — top right */}
                    {p2 && (
                      <Link
                        to={`/du-an/${p2.slug}`}
                        style={{ overflow: 'hidden', borderRadius: '2px', display: 'block' }}
                      >
                        <img
                          src={p2.cover} alt={p2.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .65s ease' }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                      </Link>
                    )}
                    {/* img3 — bottom right */}
                    {p3 && (
                      <Link
                        to={`/du-an/${p3.slug}`}
                        style={{ overflow: 'hidden', borderRadius: '2px', display: 'block' }}
                      >
                        <img
                          src={p3.cover} alt={p3.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .65s ease' }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── Page dots — bottom center ── */}
          <div style={{
            position: 'absolute', bottom: '36px', left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', gap: '10px', alignItems: 'center',
            zIndex: 3,
          }}>
            {CATEGORIES.map((cat, i) => (
              <div key={cat.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <div style={{
                  width: i === activeIdx ? '28px' : '8px',
                  height: '2px',
                  borderRadius: '1px',
                  background: i === activeIdx ? '#E3D2B0' : 'rgba(244,239,231,.2)',
                  transition: 'width .4s ease, background .4s ease',
                }} />
                {i === activeIdx && (
                  <p style={{ ...MONO, fontSize: '8px', letterSpacing: '1.5px', color: '#6B5A4E' }}>
                    {cat.id}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* ── Scroll hint — bottom right ── */}
          <div style={{
            position: 'absolute', bottom: '40px',
            right: 'clamp(40px, 6vw, 96px)',
            zIndex: 3,
          }}>
            <p style={{ ...MONO, fontSize: '9px', letterSpacing: '2px', color: '#4A3B2E' }}>
              {activeIdx < N - 1 ? 'CUỘN TIẾP →' : 'HẾT →'}
            </p>
          </div>

        </div>
      </div>

      {/* ── MOBILE: tabbed by category ── */}
      <div id="duan" className="lg:hidden" style={{ background: '#2A2018', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '14px' }}>
            DỰ ÁN NỔI BẬT
          </p>
          <h2 style={{ ...SERIF, fontSize: 'clamp(28px, 7vw, 42px)', color: '#F4EFE7', lineHeight: 1.15, marginBottom: '40px' }}>
            Những tổ ấm chúng tôi hoàn thiện
          </h2>
          {CATEGORIES.map(cat => {
            const projects = getByCategory(cat.id, 3)
            return (
              <div key={cat.id} style={{ marginBottom: '48px' }}>
                <p style={{ ...MONO, fontSize: '9px', letterSpacing: '3px', color: '#6B5A4E', marginBottom: '16px' }}>
                  {cat.id}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {projects.map(p => (
                    <Link key={p.slug} to={`/du-an/${p.slug}`} style={{ textDecoration: 'none', display: 'block', aspectRatio: '16/9', borderRadius: '2px', overflow: 'hidden' }}>
                      <img src={p.cover} alt={p.name} loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
          <Link to="/du-an" style={{
            ...MONO, fontSize: '10px', letterSpacing: '2px',
            color: '#E3D2B0', border: '1px solid rgba(227,210,176,.3)',
            padding: '12px 28px', borderRadius: '999px',
            textDecoration: 'none', display: 'inline-block',
          }}>
            XEM TẤT CẢ →
          </Link>
        </div>
      </div>
    </>
  )
}
