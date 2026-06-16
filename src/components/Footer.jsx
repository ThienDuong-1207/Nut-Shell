/* ─── Footer — large wordmark anchor ─── */
import { Link } from 'react-router-dom'

const MONO = { fontFamily: '"Space Mono", monospace' }
const JOST = { fontFamily: '"Be Vietnam Pro", sans-serif' }

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
    { label: 'hello@nutshell.vn',                       href: 'mailto:hello@nutshell.vn' },
    { label: '0901 234 567',                            href: 'tel:0901234567'           },
    { label: '12 Nguyễn Văn Bình, Q.1\nTP. Hồ Chí Minh', href: '#'                     },
  ],
}

function FooterLink({ link }) {
  const style = {
    ...JOST,
    fontSize: '14px', fontWeight: 300,
    color: '#6B5E4F', textDecoration: 'none',
    lineHeight: 1.65, whiteSpace: 'pre-line',
    transition: 'color .2s',
  }
  const hover = e => e.currentTarget.style.color = '#2A2018'
  const leave = e => e.currentTarget.style.color = '#6B5E4F'

  return link.router
    ? <Link to={link.href} style={style} onMouseEnter={hover} onMouseLeave={leave}>{link.label}</Link>
    : <a href={link.href} style={style} onMouseEnter={hover} onMouseLeave={leave}>{link.label}</a>
}

export default function Footer() {
  return (
    <footer style={{ background: '#F2EBDF', overflow: 'hidden' }}>

      {/* ── Top: logo + columns ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ paddingTop: '72px', paddingBottom: '56px' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/images/logo.jpeg"
              alt="Nut Shell"
              style={{ height: '44px', width: 'auto', objectFit: 'contain', borderRadius: '4px', marginBottom: '16px' }}
            />
            <p style={{ ...JOST, fontSize: '13px', fontWeight: 300, color: '#6B5E4F', lineHeight: 1.85, maxWidth: '200px' }}>
              Studio thiết kế & thi công nội thất sang trọng tại Việt Nam.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(COLUMNS).map(([title, links]) => (
            <div key={title}>
              <p style={{ ...MONO, fontSize: '9px', letterSpacing: '2.5px', color: '#2A2018', marginBottom: '18px', textTransform: 'uppercase' }}>
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
        borderTop: '1px solid rgba(42,32,24,.1)',
        padding: '18px clamp(16px, 4vw, 48px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px',
      }}>
        <p style={{ ...MONO, fontSize: '9px', letterSpacing: '1px', color: '#8B7B6E' }}>
          © 2026 Nut Shell. Bảo lưu mọi quyền.
        </p>
        <p style={{ ...MONO, fontSize: '9px', letterSpacing: '1px', color: '#8B7B6E' }}>
          NUT SHELL STUDIO
        </p>
      </div>

    </footer>
  )
}
