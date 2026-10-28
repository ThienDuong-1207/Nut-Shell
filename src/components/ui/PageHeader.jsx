/* ─── Đầu trang con — breadcrumb, nhãn "/ MỤC", tiêu đề lớn trái, mô tả phải ─── */
import { Link } from 'react-router-dom'
import RevealOnScroll from '../../ui/RevealOnScroll'

export default function PageHeader({ label, title, desc, crumbs = [], children }) {
  return (
    <header className="page-head">
      <div className="h-container">
        <nav aria-label="Breadcrumb" className="crumbs">
          <Link to="/">Trang chủ</Link>
          {crumbs.map(c => (
            <span key={c.label} className="flex gap-2">
              <span aria-hidden="true">/</span>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page" style={{ color: 'var(--text)' }}>{c.label}</span>}
            </span>
          ))}
        </nav>
        <div className="section-head" style={{ marginBottom: children ? '40px' : 0 }}>
          <div>
            {label && <RevealOnScroll><p className="h-label" style={{ marginBottom: '18px' }}>/ {label}</p></RevealOnScroll>}
            <RevealOnScroll delay={80}><h1 className="page-head__title">{title}</h1></RevealOnScroll>
          </div>
          {desc && <RevealOnScroll delay={160}><p className="h-body" style={{ maxWidth: '440px' }}>{desc}</p></RevealOnScroll>}
        </div>
        {children}
      </div>
    </header>
  )
}
