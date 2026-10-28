/* ─── Thẻ dự án — ảnh bo 20px, nhãn hạng mục, tên Cormorant ─── */
import { Link } from 'react-router-dom'

export default function WorkCard({ project: p, ratio = '4 / 3', tone = 'default' }) {
  const muted = tone === 'alt' ? 'var(--text-secondary-alt)' : 'var(--text-secondary)'
  return (
    <Link to={`/du-an/${p.slug}`} className="work-card">
      <div className="work-card__img" style={{ aspectRatio: ratio }}>
        <img src={p.cover} alt={p.name} loading="lazy" />
      </div>
      <div className="flex justify-between gap-4 h-label" style={{ color: 'var(--text)', margin: '18px 0 10px' }}>
        <span>{p.category}</span>
        {(p.style || p.area) && <span style={{ color: muted }}>{p.style || p.area}</span>}
      </div>
      <h3 className="h-serif" style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.15, marginBottom: '8px' }}>{p.name}</h3>
      {p.description && <p className="h-body clamp-2" style={{ color: muted }}>{p.description}</p>}
    </Link>
  )
}
