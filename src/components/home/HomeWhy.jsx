/* ─── #7 Vì sao chọn Nut Shell — tiêu đề + lưới 2×2 ─── */
import RevealOnScroll from '../../ui/RevealOnScroll'
import { VALUES } from '../../data/home'

export default function HomeWhy() {
  return (
    <section className="h-section">
      <div className="h-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
        <div className="lg:col-span-5">
          <RevealOnScroll><p className="h-label" style={{ marginBottom: '18px' }}>/ Vì sao chọn Nut Shell</p></RevealOnScroll>
          <RevealOnScroll delay={80}><h2 className="h-h2">Một người đồng hành cho cả hành trình.</h2></RevealOnScroll>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {VALUES.map((v, i) => (
            <RevealOnScroll key={v.num} delay={i * 90}>
              <article className="card" style={{ height: '100%' }}>
                <span className="card__index" style={{ color: 'var(--text-secondary)' }}>/ {v.num}</span>
                <div style={{ marginTop: '56px' }}>
                  <h3 className="h-serif" style={{ fontSize: '28px', fontWeight: 500, lineHeight: 1.1, color: 'var(--heading)', marginBottom: '10px' }}>{v.name}</h3>
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
