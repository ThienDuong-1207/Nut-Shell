/* ─── #5 Quy trình — danh sách hàng, chữ rất to ─── */
import RevealOnScroll from '../../ui/RevealOnScroll'
import { PROCESS } from '../../data/home'

export default function HomeProcess() {
  return (
    <section id="quytrinh" className="h-section">
      <div className="h-container">
        <div className="section-head">
          <div>
            <RevealOnScroll><p className="h-label" style={{ marginBottom: '18px' }}>/ Quy trình</p></RevealOnScroll>
            <RevealOnScroll delay={80}><h2 className="h-h2">Mỗi bước đều bắt đầu từ việc lắng nghe.</h2></RevealOnScroll>
          </div>
          <RevealOnScroll delay={160}>
            <div className="flex items-center gap-6">
              <div className="flex shrink-0" aria-hidden="true">
                <span style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--accent)' }} />
                <span style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1px solid var(--border-hover)', marginLeft: '-12px' }} />
              </div>
              <p className="h-body">Một không gian đẹp không bắt đầu từ bản vẽ, mà từ việc hiểu cách bạn sống. Bốn bước rõ ràng, minh bạch từ buổi gặp đầu tiên đến ngày bàn giao.</p>
            </div>
          </RevealOnScroll>
        </div>

        <div style={{ borderBottom: '1px solid var(--border)' }}>
          {PROCESS.map((s, i) => (
            <RevealOnScroll key={s.num} delay={i * 80}>
              <div className="process-row">
                <span className="card__index" style={{ color: 'var(--text-secondary)' }}>/ {s.num}</span>
                <h3 className="process-row__name">{s.name}</h3>
                <p className="process-row__desc h-body" style={{ maxWidth: '420px' }}>{s.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
