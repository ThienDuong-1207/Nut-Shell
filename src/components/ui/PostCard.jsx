/* ─── Thẻ bài viết — dạng lưới hoặc dạng nổi bật (ảnh trái, chữ phải) ─── */
import { Link } from 'react-router-dom'

export default function PostCard({ post, featured = false }) {
  const meta = (
    <div className="flex flex-wrap gap-x-4 gap-y-2 h-label" style={{ color: 'var(--text)', margin: featured ? '0 0 16px' : '18px 0 10px' }}>
      <span>{post.category}</span>
      <span style={{ color: 'var(--text-secondary)' }}>{post.date}</span>
      <span style={{ color: 'var(--text-secondary)' }}>{post.readTime}</span>
    </div>
  )

  if (featured) {
    return (
      <Link to={`/chia-se/${post.slug}`} className="work-card">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="work-card__img md:col-span-7" style={{ aspectRatio: '16 / 10' }}>
            <img src={post.cover} alt={post.title} />
          </div>
          <div className="md:col-span-5">
            {meta}
            <h2 className="h-serif" style={{ fontSize: 'clamp(32px, 3.4vw, 48px)', fontWeight: 500, lineHeight: 1.05, marginBottom: '16px' }}>{post.title}</h2>
            <p className="h-body" style={{ marginBottom: '24px' }}>{post.excerpt}</p>
            <span className="btn btn--ghost" aria-hidden="true">Đọc bài viết <span className="btn__arrow">→</span></span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/chia-se/${post.slug}`} className="work-card">
      <div className="work-card__img"><img src={post.cover} alt={post.title} loading="lazy" /></div>
      {meta}
      <h3 className="h-serif" style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.15, marginBottom: '8px' }}>{post.title}</h3>
      <p className="h-body clamp-2">{post.excerpt}</p>
    </Link>
  )
}
