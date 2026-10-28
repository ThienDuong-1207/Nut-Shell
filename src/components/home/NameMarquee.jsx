/* ─── #3 Dải tên dự án — nền tối, marquee xen ✱ ─── */
import { PROJECTS } from '../../data/projects'
import { Asterisk } from './Icons'

export default function NameMarquee() {
  const names = PROJECTS.map(p => p.name)
  return (
    <section className="h-dark" style={{ padding: '48px 0 40px' }}>
      <div className="h-container flex flex-col md:flex-row md:items-end md:justify-between gap-3" style={{ marginBottom: '32px' }}>
        <p className="h-label">/ Công trình tiêu biểu</p>
        <p className="h-serif" style={{ fontSize: 'clamp(22px, 2.2vw, 30px)', color: 'var(--text-light)', lineHeight: 1.2 }}>
          Mỗi không gian là một câu chuyện riêng.
        </p>
      </div>
      <div className="marquee" style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '18px 0' }}>
        <div className="marquee__track">
          {[0, 1].map(copy => (
            <span key={copy} className="inline-flex items-center" aria-hidden={copy === 1 || undefined}>
              {names.map(n => (
                <span key={n} className="inline-flex items-center">
                  <span className="h-serif" style={{ fontSize: 'clamp(26px, 2.6vw, 36px)', color: 'var(--accent)', padding: '0 28px' }}>{n}</span>
                  <span style={{ color: 'var(--text-light-secondary)' }}><Asterisk size={14} /></span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
