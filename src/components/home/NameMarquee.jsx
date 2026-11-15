/* ─── #3 Dải tên dự án — nền đất nung, chỉ có dải chữ chạy xen chấm tròn ─── */
import { PROJECTS } from '../../data/projects'

export default function NameMarquee() {
  const names = PROJECTS.map(p => p.name)
  return (
    <section className="h-dark" aria-label="Công trình tiêu biểu" style={{ padding: '28px 0' }}>
      <div className="marquee" style={{ padding: '18px 0' }}>
        <div className="marquee__track">
          {[0, 1].map(copy => (
            <span key={copy} className="inline-flex items-center" aria-hidden={copy === 1 || undefined}>
              {names.map(n => (
                <span key={n} className="inline-flex items-center">
                  <span className="h-serif" style={{ fontSize: 'clamp(26px, 2.6vw, 36px)', color: 'var(--peach)', padding: '0 28px' }}>{n}</span>
                  <span aria-hidden="true" style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--text-light-secondary)', display: 'inline-block' }} />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
