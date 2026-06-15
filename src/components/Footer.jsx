/* ─── Footer — espresso, 4 cột, copyright ─── */

const MONO = { fontFamily: '"Space Mono", monospace' }

const COLUMNS = {
  'Khám phá': [
    { label: 'Dịch vụ',     href: '#dichvu'   },
    { label: 'Dự án',       href: '#duan'     },
    { label: 'Quy trình',   href: '#quytrinh' },
    { label: 'Giới thiệu',  href: '#'         },
  ],
  'Kết nối': [
    { label: 'Instagram', href: '#' },
    { label: 'Pinterest',  href: '#' },
    { label: 'Facebook',   href: '#' },
    { label: 'Behance',    href: '#' },
  ],
  'Liên hệ': [
    { label: 'hello@nutshell.vn',           href: 'mailto:hello@nutshell.vn' },
    { label: '0901 234 567',                href: 'tel:0901234567'           },
    { label: '12 Nguyễn Văn Bình, Q.1\nTP. Hồ Chí Minh', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#2A2018', padding: '88px 0 44px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/images/logo.jpeg"
              alt="Nutt shell"
              style={{ height: '48px', width: 'auto', objectFit: 'contain', borderRadius: '4px', marginBottom: '18px' }}
            />
            <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '14px', fontWeight: 300, color: '#B6A88F', lineHeight: 1.85, maxWidth: '220px' }}>
              Studio thiết kế & thi công nội thất sang trọng, tối giản tại Việt Nam.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(COLUMNS).map(([title, links]) => (
            <div key={title}>
              <p style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: '#A8623C', marginBottom: '20px', textTransform: 'uppercase' }}>
                {title}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{ fontFamily: 'Jost, sans-serif', fontSize: '14px', fontWeight: 300, color: '#B6A88F', textDecoration: 'none', lineHeight: 1.65, whiteSpace: 'pre-line', transition: 'color .2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#E3D2B0'}
                      onMouseLeave={e => e.currentTarget.style.color = '#B6A88F'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,.07)', marginBottom: '32px' }} />

        {/* Copyright bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ ...MONO, fontSize: '10px', letterSpacing: '1px', color: '#4A3B2E' }}>
            © 2026 Nutt shell. Bảo lưu mọi quyền.
          </p>
          <p style={{ ...MONO, fontSize: '10px', letterSpacing: '1px', color: '#4A3B2E' }}>
            THIẾT KẾ BỞI NUTT SHELL STUDIO
          </p>
        </div>

      </div>
    </footer>
  )
}
