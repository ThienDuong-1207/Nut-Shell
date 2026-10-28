/* ─── Navigation — trong suốt chữ sáng khi nằm trên ảnh [data-hero], còn lại nền kem ─── */
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'GIỚI THIỆU', to: '/gioi-thieu' },
  { label: 'DỊCH VỤ',    href: '/#dichvu'   },
  { label: 'DỰ ÁN',      to: '/du-an'       },
  { label: 'CHIA SẺ',    to: '/chia-se'     },
]

const MONO = { fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '10.5px', letterSpacing: '2px' }

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [overHero,   setOverHero]   = useState(false)
  const location = useLocation()

  // Trang có ảnh đầu trang tràn màn hình (đánh dấu data-hero) → nav trong suốt cho đến khi cuộn qua ảnh
  useEffect(() => {
    const check = () => {
      const hero = document.querySelector('[data-hero]')
      setOverHero(!!hero && hero.getBoundingClientRect().bottom > 72)
    }
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    check()   // effect chạy sau khi trang mới đã render nên [data-hero] đã có trong DOM
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [location.pathname])

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
  const heroMode   = overHero
  const isActive   = (to) => to && (location.pathname === to || location.pathname.startsWith(to + '/'))

  /* ── Theme tokens ── */
  const navBg      = heroMode ? 'transparent' : 'var(--bg)'
  const navBorder  = heroMode ? '1px solid rgba(255,255,255,.18)' : '1px solid rgba(42,32,24,.08)'
  const textColor  = heroMode ? '#FFFFFF' : '#6B3318'
  const hoverColor = heroMode ? 'var(--accent)' : '#9B5030'
  const activeCol  = heroMode ? 'var(--accent)' : '#9B5030'
  const barColor   = heroMode && !mobileOpen ? '#FFFFFF' : '#6B3318'

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
            src={heroMode && !mobileOpen ? '/images/logo-text-light.png' : '/images/logo-text.png'}
            alt="Nut Shell Interior Design"
            style={{
              height: '40px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
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
              background: heroMode ? '#FFFFFF' : (isActive('/lien-he') ? '#9B5030' : '#6B3318'),
              color: heroMode ? 'var(--text)' : '#F0E5CC',
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
          className="md:hidden flex flex-col items-center justify-center gap-[5px] min-w-[44px] min-h-[44px] -mr-3"
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
        background: '#F0E8D8',
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
              color: location.pathname === '/' ? '#9B5030' : '#6B3318',
              textDecoration: 'none',
            }}
          >
            TRANG CHỦ
          </Link>

          {NAV_LINKS.map(l => {
            const active = isActive(l.to)
            const color  = active ? '#9B5030' : '#6B3318'

            if (l.href) {
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ ...MONO, color: '#6B3318', textDecoration: 'none' }}
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
              background: '#6B3318', color: '#F0E5CC',
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
