/* ─── Footer — tagline + nút, 3 cột "/ MỤC", logo chữ khổ lớn, dòng bản quyền ─── */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FB_PAGE_URL } from './FloatingContact'
import { Arrow } from './ui/Icons'

const COLUMNS = [
  {
    title: 'Điều hướng',
    links: [
      { label: 'Trang chủ',  href: '/',          router: true },
      { label: 'Giới thiệu', href: '/gioi-thieu', router: true },
      { label: 'Dịch vụ',    href: '/#dichvu' },
      { label: 'Dự án',      href: '/du-an',     router: true },
      { label: 'Chia sẻ',    href: '/chia-se',   router: true },
      { label: 'Liên hệ',    href: '/lien-he',   router: true },
    ],
  },
  {
    title: 'Liên hệ',
    links: [
      { label: 'nuttt.shell@gmail.com', href: 'mailto:nuttt.shell@gmail.com' },
      { label: '0898 123 636',          href: 'tel:0898123636' },
      { label: '228 Thống Nhất, P. Gò Vấp\nTP. Hồ Chí Minh', href: 'https://www.google.com/maps/search/?api=1&query=228+Th%E1%BB%91ng+Nh%E1%BA%A5t,+G%C3%B2+V%E1%BA%A5p,+H%E1%BB%93+Ch%C3%AD+Minh' },
    ],
  },
  {
    title: 'Mạng xã hội',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/nut.shellinterior/' },
      { label: 'Facebook',  href: FB_PAGE_URL },
      { label: 'Zalo',      href: 'https://zalo.me/0898123636' },
    ],
  },
]

function FooterLink({ link }) {
  if (link.router) return <Link to={link.href} className="footer__link">{link.label}</Link>
  const external = link.href.startsWith('http')
  return (
    <a href={link.href} className="footer__link" {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
      {link.label}
    </a>
  )
}

export default function Footer() {
  const [revealed, setRevealed] = useState(false)
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // footer nằm dưới nội dung (fixed underlay) → hiện dần khi cuộn gần cuối trang
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

  const step = (i) => ({
    transition: `opacity .6s ease ${i * 100}ms, transform .6s ease ${i * 100}ms`,
    opacity: revealed ? 1 : 0,
    transform: revealed ? 'none' : 'translateY(16px)',
  })

  return (
    <footer className="footer">
      <div className="h-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10" style={{ paddingTop: 'clamp(56px, 7vw, 88px)' }}>
          <div className="md:col-span-4" style={step(0)}>
            <p className="h-serif" style={{ fontSize: 'clamp(26px, 2.4vw, 34px)', lineHeight: 1.15, color: 'var(--text)', marginBottom: '24px', maxWidth: '320px' }}>
              Nut Shell — thiết kế từ câu chuyện của bạn.
            </p>
            <Link to="/lien-he" className="btn btn--dark">Liên hệ tư vấn <Arrow /></Link>
          </div>

          {COLUMNS.map((col, i) => (
            <div key={col.title} className={i === 0 ? 'md:col-span-3 md:col-start-6' : i === 1 ? 'md:col-span-2' : 'md:col-span-2'} style={step(i + 1)}>
              <p className="h-label" style={{ paddingBottom: '14px', marginBottom: '16px', borderBottom: '1px solid var(--border)' }}>/ {col.title}</p>
              <ul className="flex flex-col gap-2" style={{ listStyle: 'none' }}>
                {col.links.map(link => <li key={link.label}><FooterLink link={link} /></li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* footer là lớp fixed nằm dưới nội dung → giữ tổng chiều cao thấp hơn màn hình */}
        <div style={{ ...step(4), padding: 'clamp(40px, 5vw, 64px) 0 clamp(24px, 3vw, 32px)' }}>
          <img src="/images/logo-text.png" alt="Nut Shell Interior Design" style={{ width: '100%', maxWidth: '720px', height: 'auto', display: 'block' }} />
        </div>
      </div>

      <div className="h-container flex flex-wrap items-center justify-between gap-2" style={{ ...step(5), borderTop: '1px solid var(--border)', paddingTop: '16px', paddingBottom: '16px' }}>
        <p className="h-label" style={{ color: 'var(--text-secondary)', fontSize: '10px' }}>© 2026 Nut Shell. Bảo lưu mọi quyền.</p>
        <button className="footer__top h-label" onClick={() => window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })}>
          ↑ Lên đầu trang
        </button>
      </div>
    </footer>
  )
}
