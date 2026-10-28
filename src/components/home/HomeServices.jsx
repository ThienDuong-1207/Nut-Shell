/* ─── #4 Dịch vụ — 2 thẻ lớn, bấm để mở chi tiết ─── */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import RevealOnScroll from '../../ui/RevealOnScroll'
import { SERVICES } from '../../data/services'
import { Plus, Arrow } from './Icons'

function ServiceCard({ svc, open, onToggle }) {
  const headId = `svc-head-${svc.num}`
  const bodyId = `svc-body-${svc.num}`
  return (
    <div className="svc" data-open={open}>
      <button id={headId} className="svc__head" aria-expanded={open} aria-controls={bodyId} onClick={onToggle}>
        <span className="card__index" style={{ color: 'var(--accent)' }}>{svc.num} /</span>
        <span className="svc__toggle" style={{ gridRow: 'span 3', alignSelf: 'start' }}><Plus /></span>
        <span className="h-serif" style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 500, lineHeight: 1.05 }}>{svc.name}</span>
        <span className="h-body" style={{ maxWidth: '560px' }}>{svc.summary}</span>
      </button>

      <div id={bodyId} role="region" aria-labelledby={headId} className="svc__body" inert={open ? undefined : ''}>
        <div className="svc__inner">
          <div className="svc__items">
            {svc.items.map(item => (
              <div key={item.key} className="svc__item">
                <div className="flex items-baseline gap-3" style={{ marginBottom: '10px' }}>
                  <span className="svc__key">{item.key}</span>
                  <h4 className="h-serif" style={{ fontSize: '22px', fontWeight: 500, color: 'var(--text-light)', lineHeight: 1.2 }}>{item.name}</h4>
                </div>
                <p className="h-body" style={{ fontSize: '14px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          {svc.note && (
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
              <p className="h-body" style={{ maxWidth: '620px' }}>{svc.note}</p>
              <Link to={svc.cta.to} className="btn btn--accent" style={{ flexShrink: 0 }}>{svc.cta.label} <Arrow /></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function HomeServices() {
  const [openNum, setOpenNum] = useState(null)
  return (
    <section id="dichvu" className="h-section h-dark">
      <div className="h-container">
        <div className="section-head">
          <div>
            <RevealOnScroll><p className="h-label" style={{ marginBottom: '18px' }}>/ Dịch vụ</p></RevealOnScroll>
            <RevealOnScroll delay={80}><h2 className="h-h2">Hai cách để bắt đầu không gian của bạn.</h2></RevealOnScroll>
          </div>
          <RevealOnScroll delay={160}>
            <div className="flex items-end gap-6">
              <img src="/images/thiet_ke.jpg" alt="" loading="lazy" style={{ width: '120px', height: '150px', objectFit: 'cover', borderRadius: '999px', flexShrink: 0 }} />
              <p className="h-body">Chỉ cần thiết kế, hay muốn chúng tôi đồng hành đến ngày nhận chìa khóa — chọn phạm vi phù hợp, bấm vào từng dịch vụ để xem chi tiết.</p>
            </div>
          </RevealOnScroll>
        </div>

        <div className="flex flex-col gap-3">
          {SERVICES.map((svc, i) => (
            <RevealOnScroll key={svc.num} delay={i * 100}>
              <ServiceCard svc={svc} open={openNum === svc.num} onToggle={() => setOpenNum(n => n === svc.num ? null : svc.num)} />
            </RevealOnScroll>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5" style={{ marginTop: '40px' }}>
          <p className="h-serif" style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', color: 'var(--text-light)' }}>Một đội ngũ. Từ ý tưởng đến bàn giao.</p>
          <Link to="/lien-he" className="btn btn--accent">Liên hệ tư vấn <Arrow /></Link>
        </div>
      </div>
    </section>
  )
}
