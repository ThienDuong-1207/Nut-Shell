/* ─── #8 Cảm nhận khách hàng — 3 thẻ trích dẫn ─── */
import RevealOnScroll from '../../ui/RevealOnScroll'
import { TESTIMONIALS } from '../../data/home'

export default function HomeTestimonials() {
  return (
    <section className="h-section">
      <div className="h-container">
        <div className="section-head">
          <div>
            <RevealOnScroll><p className="h-label" style={{ marginBottom: '18px' }}>/ Cảm nhận khách hàng</p></RevealOnScroll>
            <RevealOnScroll delay={80}><h2 className="h-h2">Những không gian được sống trọn vẹn.</h2></RevealOnScroll>
          </div>
          <RevealOnScroll delay={160}>
            <p className="h-body" style={{ maxWidth: '420px' }}>Điều chúng tôi trân trọng nhất là khi chủ nhân thấy mình trong chính không gian của họ.</p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {TESTIMONIALS.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 100}>
              <figure className="card" style={{ height: '100%', minHeight: '320px', gap: '40px' }}>
                <blockquote className="h-serif" style={{ fontSize: '22px', lineHeight: 1.35, color: 'var(--text)' }}>
                  “{t.quote}”
                </blockquote>
                <figcaption className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-3" style={{ background: 'var(--bg)', borderRadius: '999px', padding: '5px 16px 5px 5px', border: '1px solid var(--border)' }}>
                    <span aria-hidden="true" className="grid place-items-center" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--surface-dark)', color: 'var(--accent)', font: '500 11px/1 "Be Vietnam Pro", sans-serif', letterSpacing: '.06em' }}>{t.initials}</span>
                    <span>
                      <span style={{ display: 'block', font: '500 14px/1.2 "Be Vietnam Pro", sans-serif', color: 'var(--text)' }}>{t.name}</span>
                      <span className="h-label" style={{ display: 'block', fontSize: '10px', color: 'var(--text-secondary)', marginTop: '3px' }}>{t.role}</span>
                    </span>
                  </span>
                  <span className="grid place-items-center card__index" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--border-hover)', flexShrink: 0 }}>0{i + 1}</span>
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
