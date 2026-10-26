/* ─── Footer — sandcastle reveal, stagger columns ─── */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const MONO = { fontFamily: '"Space Mono", monospace' }
const JOST = { fontFamily: '"Be Vietnam Pro", sans-serif' }

const LINK_COLOR = '#5A3820'
const LINK_HOVER = '#3D1608'

const COLUMNS = {
  'Khám phá': [
    { label: 'Dịch vụ',   href: '/#dichvu',   router: false },
    { label: 'Dự án',     href: '/du-an',     router: true  },
    { label: 'Quy trình', href: '/#quytrinh', router: false },
    { label: 'Chia sẻ',   href: '/chia-se',  router: true  },
  ],
  'Kết nối': [
    { label: 'Instagram', href: '#' },
    { label: 'Pinterest',  href: '#' },
    { label: 'Facebook',   href: '#' },
    { label: 'Behance',    href: '#' },
  ],
  'Liên hệ': [
    { label: 'hello@nutshell.vn',                         href: 'mailto:hello@nutshell.vn' },
    { label: '0901 234 567',                              href: 'tel:0901234567'           },
    { label: '12 Nguyễn Văn Bình, Q.1\nTP. Hồ Chí Minh', href: '#'                       },
  ],
}

function FooterLink({ link }) {
  const base = { ...JOST, fontSize: '14px', fontWeight: 300, color: LINK_COLOR, textDecoration: 'none', lineHeight: 1.65, whiteSpace: 'pre-line', transition: 'color .2s' }
  const hover = e => e.currentTarget.style.color = LINK_HOVER
  const leave = e => e.currentTarget.style.color = LINK_COLOR
  return link.router
    ? <Link to={link.href} style={base} onMouseEnter={hover} onMouseLeave={leave}>{link.label}</Link>
    : <a href={link.href} style={base} onMouseEnter={hover} onMouseLeave={leave}>{link.label}</a>
}

export default function Footer() {
  const [revealed, setRevealed] = useState(false)
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReduced) { setRevealed(true); return }
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (window.scrollY > maxScroll - 320) setRevealed(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [prefersReduced])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const colStyle = (i) => ({
    transition: `opacity .6s ease ${i * 110}ms, transform .6s ease ${i * 110}ms`,
    opacity: revealed ? 1 : 0,
    transform: revealed ? 'translateY(0)' : 'translateY(20px)',
  })

  return (
    <footer style={{ background: '#DCC99B', overflow: 'hidden', position: 'relative' }}>


      {/* Ghost wordmark */}
      <div aria-hidden style={{
        position: 'absolute', bottom: '36px', left: '50%',
        fontFamily: 'Lora, serif',
        fontSize: 'clamp(64px, 10vw, 140px)',
        letterSpacing: '-1px',
        color: 'rgba(107,51,24,.055)',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        pointerEvents: 'none',
        lineHeight: 1,
        transition: 'opacity 1.2s ease .2s, transform 1.2s ease .2s',
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translate(-50%, 0)' : 'translate(-50%, 18px)',
      }}>
        NUT SHELL
      </div>

      {/* ── Top: logo + columns ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ paddingTop: '72px', paddingBottom: '56px', position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1" style={colStyle(0)}>
            <img
              src="/images/logo.jpeg"
              alt="Nut Shell"
              style={{ height: '44px', width: 'auto', objectFit: 'contain', marginBottom: '16px', opacity: .85 }}
            />
            <p style={{ ...JOST, fontSize: '13px', fontWeight: 300, color: '#5A3820', lineHeight: 1.85, maxWidth: '200px' }}>
              Studio thiết kế & thi công nội thất sang trọng tại Việt Nam.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(COLUMNS).map(([title, links], i) => (
            <div key={title} style={colStyle(i + 1)}>
              <p style={{ ...MONO, fontSize: '9px', letterSpacing: '2.5px', color: '#6B3318', marginBottom: '18px', textTransform: 'uppercase' }}>
                {title}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {links.map(link => (
                  <li key={link.label}><FooterLink link={link} /></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div style={{
        borderTop: 'none',
        padding: '18px clamp(16px, 4vw, 48px)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '8px',
        position: 'relative', zIndex: 1,
        transition: 'opacity .6s ease .44s',
        opacity: revealed ? 1 : 0,
      }}>
        <p style={{ ...MONO, fontSize: '9px', letterSpacing: '1px', color: '#5A3820' }}>
          © 2026 Nut Shell. Bảo lưu mọi quyền.
        </p>
        <button
          onClick={scrollTop}
          style={{
            ...MONO, fontSize: '9px', letterSpacing: '1.5px',
            color: '#5A3820',
            background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0',
            transition: 'color .2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#3D1608'}
          onMouseLeave={e => e.currentTarget.style.color = '#5A3820'}
        >
          ↑ LÊN ĐẦU
        </button>
      </div>

    </footer>
  )
}
