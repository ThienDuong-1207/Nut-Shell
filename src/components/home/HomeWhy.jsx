/* ─── #7 Vì sao chọn Nut Shell — số lớn {4} + lưới 2×2 ─── */
import RevealOnScroll from '../../ui/RevealOnScroll'
import { VALUES } from '../../data/home'
import { Asterisk } from './Icons'

export default function HomeWhy() {
  return (
    <section className="h-section h-dark">
      <div className="h-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
        <div className="lg:col-span-5 flex flex-col justify-between gap-10">
          <div>
            <RevealOnScroll><p className="h-label" style={{ marginBottom: '18px' }}>/ Vì sao chọn Nut Shell</p></RevealOnScroll>
            <RevealOnScroll delay={80}><h2 className="h-h2">Một người đồng hành cho cả hành trình.</h2></RevealOnScroll>
          </div>
          <RevealOnScroll delay={160}>
            <p className="h-serif" style={{ fontWeight: 300, fontSize: 'clamp(110px, 11vw, 170px)', lineHeight: 1, letterSpacing: '-.04em', color: 'var(--accent)' }} aria-hidden="true">
              {'{'}{VALUES.length}{'}'}
            </p>
            <p className="h-body">Bốn điều chúng tôi giữ trong mọi dự án.</p>
          </RevealOnScroll>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {VALUES.map((v, i) => (
            <RevealOnScroll key={v.num} delay={i * 90}>
              <article className="card card--dark" style={{ height: '100%' }}>
                <div className="flex justify-between items-start" style={{ color: 'var(--text-light-secondary)' }}>
                  <span className="card__index">/ {v.num}</span>
                  <span className="icon-ring" style={{ color: 'var(--accent)' }}><Asterisk size={14} /></span>
                </div>
                <div style={{ marginTop: '56px' }}>
                  <h3 className="h-serif" style={{ fontSize: '28px', fontWeight: 500, lineHeight: 1.1, color: 'var(--text-light)', marginBottom: '10px' }}>{v.name}</h3>
                  <p className="h-body" style={{ fontSize: '14px' }}>{v.desc}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
