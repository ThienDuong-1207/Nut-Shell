/* ─── FAQ — trái: tiêu đề + nút · phải: accordion (trang chủ, Liên hệ) ─── */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import RevealOnScroll from '../../ui/RevealOnScroll'
import { FAQ } from '../../data/home'
import { Plus, Arrow } from './Icons'

export default function Faq({ showContact = true }) {
  const [open, setOpen] = useState(0)
  return (
    <section className="h-section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="h-container grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <RevealOnScroll><p className="h-label" style={{ marginBottom: '18px' }}>/ Câu hỏi thường gặp</p></RevealOnScroll>
          <RevealOnScroll delay={80}><h2 className="h-h2" style={{ marginBottom: '20px' }}>Bạn hỏi, chúng tôi trả lời.</h2></RevealOnScroll>
          <RevealOnScroll delay={160}>
            <p className="h-body" style={{ marginBottom: '28px', maxWidth: '340px' }}>Chưa thấy điều bạn cần? Hãy kể cho chúng tôi về không gian của bạn.</p>
            {showContact && <Link to="/lien-he" className="btn btn--ghost">Liên hệ Nut Shell <Arrow /></Link>}
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={120} className="lg:col-span-8">
          <div style={{ borderBottom: '1px solid var(--border)' }}>
            {FAQ.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={item.q} className="faq__item" data-open={isOpen}>
                  <h3>
                    <button id={`faq-q-${i}`} className="faq__btn" aria-expanded={isOpen} aria-controls={`faq-a-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                      {item.q}
                      <span className="faq__plus"><Plus size={14} /></span>
                    </button>
                  </h3>
                  <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="faq__body" inert={isOpen ? undefined : ''}>
                    <div>
                      <p className="h-body" style={{ maxWidth: '620px', paddingBottom: '24px' }}>{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
