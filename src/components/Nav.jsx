/* ─── Navigation — fixed top, transparent → espresso on scroll ─── */
import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'DỊCH VỤ', href: '#dichvu' },
  { label: 'DỰ ÁN',   href: '#duan'   },
  { label: 'QUY TRÌNH', href: '#quytrinh' },
]

const MONO = { fontFamily: '"Space Mono", monospace', fontSize: '11px', letterSpacing: '2px' }

export default function Nav() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navBg     = scrolled ? 'rgba(42,32,24,.93)' : 'transparent'
  const navBlur   = scrolled ? 'blur(14px)'          : 'none'
  const navPad    = scrolled ? '14px 0'               : '26px 0'
  const textColor = scrolled ? '#B6A88F'               : 'rgba(244,239,231,.85)'
  const logoColor = '#E3D2B0'

  const barColor = mobileOpen || scrolled ? '#E3D2B0' : '#F4EFE7'

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: navBg,
        backdropFilter: navBlur,
        WebkitBackdropFilter: navBlur,
        padding: navPad,
        transition: 'background .45s ease, padding .45s ease, backdrop-filter .45s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src="/images/logo.jpeg"
            alt="Nutt shell"
            style={{
              height: scrolled ? '48px' : '60px',
              width: 'auto',
              objectFit: 'contain',
              transition: 'height .45s ease',
              borderRadius: '4px',
            }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a
              key={l.href} href={l.href}
              style={{ ...MONO, color: textColor, textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#E3D2B0'}
              onMouseLeave={e => e.currentTarget.style.color = textColor}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#lienhe"
            style={{
              ...MONO,
              background: '#E3D2B0', color: '#2A2018',
              padding: '9px 22px', borderRadius: '999px',
              textDecoration: 'none', transition: 'opacity .2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '.82'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            LIÊN HỆ
          </a>
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
                background: barColor,
                borderRadius: '1px',
                transition: 'transform .35s ease, opacity .35s ease, background .3s',
                transform:
                  mobileOpen
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

      {/* Mobile menu drawer */}
      <div
        style={{
          background: 'rgba(42,32,24,.97)',
          maxHeight: mobileOpen ? '320px' : '0',
          overflow: 'hidden',
          transition: 'max-height .4s cubic-bezier(.4,0,.2,1)',
        }}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {LINKS.map(l => (
            <a
              key={l.href} href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{ ...MONO, color: '#B6A88F', textDecoration: 'none' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#lienhe"
            onClick={() => setMobileOpen(false)}
            style={{
              ...MONO,
              background: '#E3D2B0', color: '#2A2018',
              padding: '11px 24px', borderRadius: '999px',
              textDecoration: 'none', width: 'fit-content',
            }}
          >
            LIÊN HỆ
          </a>
        </div>
      </div>
    </nav>
  )
}
