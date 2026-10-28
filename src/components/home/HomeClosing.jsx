/* ─── #12 Kết trang — meta row, ảnh tròn giữa 2 cụm vạch, dải nhấn, câu lớn chia đôi ─── */
import { STRIP } from '../../data/home'
import { PROJECTS } from '../../data/projects'
import { Asterisk } from './Icons'

function MetaRow() {
  return (
    <div className="meta-row" style={{ color: 'var(--text)' }}>
      <span>Studio nội thất / TP.HCM</span>
      <span className="flex flex-wrap gap-2">
        <span className="tag">Nhà ở</span>
        <span className="tag">Cafe</span>
        <span className="tag">Nhà hàng</span>
      </span>
      <span>( {PROJECTS.length} dự án )</span>
      <span className="tag tag--accent">Est. 2017</span>
    </div>
  )
}

const BARS = Array.from({ length: 14 })

export default function HomeClosing() {
  return (
    <section style={{ paddingTop: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid var(--border)' }}>
      <div className="h-container">
        <MetaRow />
        <div className="flex items-center justify-center gap-6 md:gap-10" style={{ padding: 'clamp(40px, 6vw, 72px) 0' }} aria-hidden="true">
          <div className="bars hidden sm:flex">{BARS.map((_, i) => <span key={i} style={{ height: `${50 + ((i * 37) % 50)}%` }} />)}</div>
          <img src="/projects/cafe/hala-nguyen-hue/cover.webp" alt="" loading="lazy" style={{ width: 'clamp(140px, 16vw, 200px)', aspectRatio: 1, objectFit: 'cover', borderRadius: '50%' }} />
          <div className="bars hidden sm:flex">{BARS.map((_, i) => <span key={i} style={{ height: `${50 + ((i * 53) % 50)}%` }} />)}</div>
        </div>
      </div>

      <div className="accent-strip marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1, 2, 3].map(copy => STRIP.map(t => (
            <span key={`${copy}-${t}`} className="inline-flex items-center gap-6" style={{ padding: '0 12px' }}>
              {t} <Asterisk size={11} />
            </span>
          )))}
        </div>
      </div>

      <div className="h-container flex flex-col md:flex-row md:justify-between gap-2" style={{ padding: 'clamp(40px, 5vw, 64px) clamp(16px, 3vw, 40px)' }}>
        <p className="h-serif" style={{ fontSize: 'clamp(28px, 3.6vw, 52px)', lineHeight: 1, letterSpacing: '-.02em' }}>_ Thiết kế từ câu chuyện</p>
        <p className="h-serif md:text-right" style={{ fontSize: 'clamp(28px, 3.6vw, 52px)', lineHeight: 1, letterSpacing: '-.02em' }}>không từ catalog _</p>
      </div>
    </section>
  )
}
