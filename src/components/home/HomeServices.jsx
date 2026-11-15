/* ─── #4 Dịch vụ — 2 khối ảnh, bấm để hiện danh sách A–Z ngay trên ảnh ─── */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import RevealOnScroll from '../../ui/RevealOnScroll'
import { SERVICES } from '../../data/services'
import { Plus, Arrow } from '../ui/Icons'

function ServiceTile({ svc, open, onToggle }) {
  const listId = `svc-list-${svc.num}`
  return (
    <article className="svc-tile" data-open={open}>
      <img src={svc.img} alt="" loading="lazy" className="svc-tile__img" />
      <div className="svc-tile__shade" />

      {/* Cả khối là nút bấm; nút nằm dưới link "Liên hệ tư vấn" trong danh sách */}
      <button className="svc-tile__hit" aria-expanded={open} aria-controls={listId} onClick={onToggle}>
        <span className="sr-only">{open ? 'Thu gọn' : 'Xem các hạng mục'}: {svc.name}</span>
      </button>

      <span className="svc-tile__toggle" aria-hidden="true"><Plus /></span>

      {/* Mặt trước: tên dịch vụ */}
      <div className="svc-tile__front" aria-hidden={open}>
        <p className="svc-tile__num">{svc.num} /</p>
        <h3 className="svc-tile__title">{svc.name}</h3>
        <p className="svc-tile__summary">{svc.summary}</p>
      </div>

      {/* Khi mở: danh sách A–Z trên ảnh */}
      <div id={listId} className="svc-tile__list" inert={open ? undefined : ''}>
        <p className="svc-tile__num">{svc.num} / {svc.itemsLabel}</p>
        <h3 className="svc-tile__title svc-tile__title--sm">{svc.name}</h3>
        <ul>
          {svc.items.map(item => (
            <li key={item.key}>
              <span className="svc-tile__key">{item.key}</span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
        <Link to="/lien-he" className="btn btn--light svc-tile__cta">Liên hệ tư vấn <Arrow /></Link>
      </div>
    </article>
  )
}

export default function HomeServices() {
  const [open, setOpen] = useState({})
  const toggle = num => setOpen(o => ({ ...o, [num]: !o[num] }))
  return (
    <section id="dichvu" className="h-section">
      <div className="h-container">
        <div className="section-head">
          <div>
            <RevealOnScroll><p className="h-label" style={{ marginBottom: '18px' }}>/ Dịch vụ</p></RevealOnScroll>
            <RevealOnScroll delay={80}><h2 className="h-h2">Hai cách để bắt đầu không gian của bạn.</h2></RevealOnScroll>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
          {SERVICES.map((svc, i) => (
            <RevealOnScroll key={svc.num} delay={i * 100}>
              <ServiceTile svc={svc} open={!!open[svc.num]} onToggle={() => toggle(svc.num)} />
            </RevealOnScroll>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5" style={{ marginTop: '40px' }}>
          <p className="h-serif" style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', color: 'var(--heading)' }}>Một đội ngũ. Từ ý tưởng đến bàn giao.</p>
          <Link to="/lien-he" className="btn btn--dark">Liên hệ tư vấn <Arrow /></Link>
        </div>
      </div>
    </section>
  )
}
