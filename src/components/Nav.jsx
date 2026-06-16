/* ─── Navigation — hero-mode (transparent) vs page-mode (cream) ─── */
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'GIỚI THIỆU', to: '/gioi-thieu' },
  { label: 'DỊCH VỤ',    href: '/#dichvu'   },
  { label: 'DỰ ÁN',      to: '/du-an'       },
  { label: 'CHIA SẺ',    to: '/chia-se'     },
]

const MONO = { fontFamily: '"Space Mono", monospace', fontSize: '10.5px', letterSpacing: '2px' }

export default function Nav() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [heroNavColor, setHeroNavColor] = useState('rgba(244,239,231,.85)')
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e) => setHeroNavColor(e.detail.color)
    window.addEventListener('hero-nav-color', handler)
    return () => window.removeEventListener('hero-nav-color', handler)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const isHome     = location.pathname === '/'
  const heroMode   = isHome && !scrolled   // transparent hero overlay
  const isActive   = (to) => to && (location.pathname === to || location.pathname.startsWith(to + '/'))

  /* ── Theme tokens ── */
  const navBg      = heroMode ? 'transparent' : '#F2EBDF'
  const navBorder  = heroMode ? 'none' : '1px solid rgba(42,32,24,.08)'
  const textColor  = heroMode ? heroNavColor  : '#2A2018'
  const hoverColor = heroMode ? '#E3D2B0'     : '#A8623C'
  const activeCol  = heroMode ? '#E3D2B0'     : '#A8623C'
  const barColor   = heroMode && !mobileOpen  ? '#F4EFE7' : '#2A2018'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
      background: navBg,
      borderBottom: navBorder,
      transition: 'background .5s ease, border-color .5s ease',
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between" style={{ height: '72px' }}>

        {/* Logo */}
        <Link
          to="/"
          onClick={() => { if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', height: '100%', cursor: 'pointer' }}
        >
          <img
            src="/images/logo.jpeg"
            alt="Nut Shell"
            style={{
              height: '52px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              mixBlendMode: heroMode ? 'normal' : 'multiply',
              transition: 'mix-blend-mode .5s',
              pointerEvents: 'none',
            }}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => {
            const active = isActive(l.to)
            const color  = active ? activeCol : textColor

            if (l.href) {
              return (
                <a
                  key={l.href}
                  href={l.href}
                  style={{ ...MONO, color: textColor, textDecoration: 'none', transition: 'color .4s ease' }}
                  onMouseEnter={e => e.currentTarget.style.color = hoverColor}
                  onMouseLeave={e => e.currentTarget.style.color = textColor}
                >
                  {l.label}
                </a>
              )
            }

            return (
              <Link
                key={l.to}
                to={l.to}
                style={{ ...MONO, color, textDecoration: 'none', transition: 'color .4s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = hoverColor}
                onMouseLeave={e => e.currentTarget.style.color = color}
              >
                {l.label}
              </Link>
            )
          })}

          {/* LIÊN HỆ button */}
          <Link
            to="/lien-he"
            style={{
              ...MONO,
              background: heroMode
                ? (isActive('/lien-he') ? '#A8623C' : '#E3D2B0')
                : (isActive('/lien-he') ? '#A8623C' : '#2A2018'),
              color: heroMode ? '#2A2018' : '#F4EFE7',
              padding: '9px 22px',
              borderRadius: '999px',
              textDecoration: 'none',
              transition: 'background .35s ease, color .35s ease, opacity .2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '.78'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            LIÊN HỆ
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block', width: '22px', height: '1.5px',
                background: barColor, borderRadius: '1px',
                transition: 'transform .35s ease, opacity .35s ease, background .4s',
                transform: mobileOpen
                  ? i === 0 ? 'rotate(45deg) translateY(6.5px)'
                  : i === 2 ? 'rotate(-45deg) translateY(-6.5px)'
                  : 'none'
                  : 'none',
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <div style={{
        background: '#F2EBDF',
        borderTop: '1px solid rgba(42,32,24,.07)',
        maxHeight: mobileOpen ? '520px' : '0',
        overflow: 'hidden',
        transition: 'max-height .4s cubic-bezier(.4,0,.2,1)',
      }}>
        <div className="px-6 py-8 flex flex-col gap-6">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            style={{
              ...MONO,
              color: location.pathname === '/' ? '#A8623C' : '#2A2018',
              textDecoration: 'none',
            }}
          >
            TRANG CHỦ
          </Link>

          {NAV_LINKS.map(l => {
            const active = isActive(l.to)
            const color  = active ? '#A8623C' : '#2A2018'

            if (l.href) {
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ ...MONO, color: '#2A2018', textDecoration: 'none' }}
                >
                  {l.label}
                </a>
              )
            }

            return (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                style={{ ...MONO, color, textDecoration: 'none' }}
              >
                {l.label}
              </Link>
            )
          })}

          <div style={{ height: '1px', background: 'rgba(42,32,24,.08)' }} />

          <Link
            to="/lien-he"
            onClick={() => setMobileOpen(false)}
            style={{
              ...MONO,
              background: '#2A2018', color: '#F4EFE7',
              padding: '12px 26px', borderRadius: '999px',
              textDecoration: 'none', width: 'fit-content',
            }}
          >
            LIÊN HỆ
          </Link>
        </div>
      </div>
    </nav>
  )
}
