/* ─── Projects — scroll-driven horizontal with editorial cards ─── */
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

const MONO  = { fontFamily: '"Space Mono", monospace' }
const SERIF = { fontFamily: 'Lora, serif' }

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

function getByCategory(id, n = 4) {
  return PROJECTS.filter(p => p.category === id).slice(0, n)
}

/* ── Card component ── */
function Card({ project, style }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/du-an/${project.slug}`}
      style={{
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '14px',
        textDecoration: 'none',
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={project.cover}
        alt={project.name}
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover', display: 'block',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform .75s cubic-bezier(.4,0,.2,1)',
        }}
      />

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(10,8,6,.80) 0%, rgba(10,8,6,.30) 42%, transparent 70%)',
        transition: 'opacity .35s',
        opacity: hovered ? 1 : 0.85,
      }} />

      {/* Name + arrow row */}
      <div style={{
        position: 'absolute', bottom: '18px', left: '18px', right: '18px',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '10px',
      }}>
        <div style={{ minWidth: 0 }}>
          <p style={{ ...MONO, fontSize: '7.5px', letterSpacing: '2px', color: 'rgba(255,255,255,.48)', marginBottom: '5px' }}>
            {project.category}
          </p>
          <p style={{ ...SERIF, fontSize: '17px', color: '#fff', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {project.name}
          </p>
        </div>

        {/* Arrow button */}
        <div style={{
          width: '36px', height: '36px', flexShrink: 0,
          borderRadius: '50%',
          background: hovered ? 'rgba(255,255,255,.22)' : 'rgba(255,255,255,.10)',
          border: '1px solid rgba(255,255,255,.28)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background .25s, transform .25s',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function Projects() {
  const wrapRef  = useRef(null)
  const trackRef = useRef(null)
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
          {/* Horizontal track */}
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
              const projects = getByCategory(cat.id, 4)
              const [p1, p2, p3, p4] = projects
              const count = PROJECTS.filter(p => p.category === cat.id).length

              return (
                <div
                  key={cat.id}
                  style={{
                    width: '100vw', height: '100%',
                    display: 'flex', alignItems: 'stretch', flexShrink: 0,
                  }}
                >
                  {/* ── Left panel: category info ── */}
                  <div style={{
                    width: '30%',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    padding: '0 clamp(32px, 5vw, 80px)',
                    borderRight: '1px solid rgba(244,239,231,.06)',
                  }}>
                    <p style={{ ...MONO, fontSize: '9px', letterSpacing: '3px', color: '#4A3B2E', marginBottom: '28px' }}>
                      {String(ci + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
                    </p>
                    <h2 style={{
                      ...SERIF,
                      fontSize: 'clamp(36px, 4.5vw, 68px)',
                      lineHeight: 1.1, color: '#F4EFE7',
                      marginBottom: '22px', whiteSpace: 'pre-line',
                    }}>
                      {cat.label}
                    </h2>
                    <p style={{ ...MONO, fontSize: '9px', letterSpacing: '2px', color: '#A8623C', marginBottom: '20px' }}>
                      {count} DỰ ÁN
                    </p>
                    <p style={{
                      fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '14px', fontWeight: 300,
                      color: '#6B5E4F', lineHeight: 1.9, maxWidth: '300px', marginBottom: '40px',
                    }}>
                      {cat.desc}
                    </p>
                    <Link
                      to="/du-an"
                      style={{
                        ...MONO, fontSize: '10px', letterSpacing: '2px',
                        color: '#E3D2B0', textDecoration: 'none',
                        border: '1px solid rgba(227,210,176,.28)',
                        padding: '12px 28px', borderRadius: '999px',
                        display: 'inline-block', width: 'fit-content',
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
                        e.currentTarget.style.borderColor = 'rgba(227,210,176,.28)'
                      }}
                    >
                      XEM TẤT CẢ →
                    </Link>
                  </div>

                  {/* ── Right panel: 3-column card grid ── */}
                  <div style={{
                    flex: 1,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.15fr 1fr',
                    gridTemplateRows: '1fr 1fr',
                    gap: '10px',
                    padding: 'clamp(20px, 3vh, 36px) clamp(20px, 3vw, 40px)',
                  }}>
                    {/* p1 — top-left */}
                    {p1 && <Card project={p1} style={{ gridColumn: 1, gridRow: 1 }} />}

                    {/* p2 — center tall (spans 2 rows) */}
                    {p2 && <Card project={p2} style={{ gridColumn: 2, gridRow: '1 / 3' }} />}

                    {/* p3 — top-right */}
                    {p3 && <Card project={p3} style={{ gridColumn: 3, gridRow: 1 }} />}

                    {/* p4 — bottom-left */}
                    {p4 && <Card project={p4} style={{ gridColumn: 1, gridRow: 2 }} />}

                    {/* bottom-right: "view all" CTA */}
                    <Link
                      to="/du-an"
                      style={{
                        gridColumn: 3, gridRow: 2,
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center',
                        gap: '14px',
                        borderRadius: '14px',
                        border: '1px solid rgba(244,239,231,.10)',
                        textDecoration: 'none',
                        transition: 'border-color .25s, background .25s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(244,239,231,.04)'
                        e.currentTarget.style.borderColor = 'rgba(244,239,231,.22)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.borderColor = 'rgba(244,239,231,.10)'
                      }}
                    >
                      <div style={{
                        width: '44px', height: '44px', borderRadius: '50%',
                        border: '1px solid rgba(227,210,176,.35)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="#E3D2B0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p style={{ ...MONO, fontSize: '9px', letterSpacing: '2.5px', color: '#6B5E4F', textAlign: 'center' }}>
                        XEM TẤT CẢ
                      </p>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Page dots */}
          <div style={{
            position: 'absolute', bottom: '32px', left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', gap: '10px', alignItems: 'center', zIndex: 3,
          }}>
            {CATEGORIES.map((cat, i) => (
              <div key={cat.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <div style={{
                  width: i === activeIdx ? '28px' : '8px', height: '2px',
                  borderRadius: '1px',
                  background: i === activeIdx ? '#E3D2B0' : 'rgba(244,239,231,.18)',
                  transition: 'width .4s ease, background .4s ease',
                }} />
                {i === activeIdx && (
                  <p style={{ ...MONO, fontSize: '8px', letterSpacing: '1.5px', color: '#6B5E4F' }}>
                    {cat.id}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div style={{
            position: 'absolute', bottom: '36px',
            right: 'clamp(40px, 6vw, 96px)', zIndex: 3,
          }}>
            <p style={{ ...MONO, fontSize: '9px', letterSpacing: '2px', color: '#4A3B2E' }}>
              {activeIdx < N - 1 ? 'CUỘN TIẾP →' : 'HẾT →'}
            </p>
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div id="duan" className="lg:hidden" style={{ background: '#2A2018', padding: '72px 0' }}>
        <div className="max-w-7xl mx-auto px-5">
          <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '12px' }}>
            DỰ ÁN NỔI BẬT
          </p>
          <h2 style={{ ...SERIF, fontSize: 'clamp(26px, 7vw, 40px)', color: '#F4EFE7', lineHeight: 1.15, marginBottom: '36px' }}>
            Những tổ ấm chúng tôi hoàn thiện
          </h2>
          {CATEGORIES.map(cat => {
            const projects = getByCategory(cat.id, 3)
            return (
              <div key={cat.id} style={{ marginBottom: '44px' }}>
                <p style={{ ...MONO, fontSize: '9px', letterSpacing: '3px', color: '#6B5E4F', marginBottom: '14px' }}>
                  {cat.id}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {projects.map(p => (
                    <Card
                      key={p.slug}
                      project={p}
                      style={{ aspectRatio: '16/9' }}
                    />
                  ))}
                </div>
              </div>
            )
          })}
          <Link to="/du-an" style={{
            ...MONO, fontSize: '10px', letterSpacing: '2px',
            color: '#E3D2B0', border: '1px solid rgba(227,210,176,.28)',
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
