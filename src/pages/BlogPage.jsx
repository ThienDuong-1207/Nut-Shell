/* ─── Blog Page — danh sách bài viết ─── */
import { Link } from 'react-router-dom'
import { POSTS } from '../data/posts'

const MONO = { fontFamily: '"Space Mono", monospace' }

export default function BlogPage() {
  return (
    <main style={{ background: '#F2EBDF', minHeight: '100vh', paddingTop: '88px' }}>

      {/* Page Header */}
      <div style={{ background: '#2A2018', padding: '80px 0 64px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '16px' }}>
            KIẾN THỨC & CẢM HỨNG
          </p>
          <h1 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(40px, 6vw, 80px)', color: '#F4EFE7', lineHeight: 1.1, marginBottom: '20px' }}>
            Chia Sẻ
          </h1>
          <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '16px', fontWeight: 300, color: '#B6A88F', lineHeight: 1.7 }}>
            Kiến thức thiết kế, xu hướng nội thất và những câu chuyện từ studio của chúng tôi.
          </p>
          {/* Breadcrumb */}
          <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to="/" style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: '#4A3B2E', textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#B6A88F'}
              onMouseLeave={e => e.currentTarget.style.color = '#4A3B2E'}
            >
              TRANG CHỦ
            </Link>
            <span style={{ ...MONO, fontSize: '10px', color: '#4A3B2E' }}>/</span>
            <span style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: '#A8623C' }}>CHIA SẺ</span>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ paddingTop: '64px', paddingBottom: '96px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '32px',
          }}
          className="lg:grid-cols-2"
        >
          {POSTS.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}

function PostCard({ post }) {
  return (
    <Link
      to={`/chia-se/${post.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <article
        style={{ background: '#fff', borderRadius: '4px', overflow: 'hidden', height: '100%', transition: 'transform .35s ease, box-shadow .35s ease' }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-6px)'
          e.currentTarget.style.boxShadow = '0 16px 40px rgba(42,32,24,.12)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Cover image */}
        <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
          <img
            src={post.cover}
            alt={post.title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .55s ease' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          {/* Category badge */}
          <span style={{
            position: 'absolute', top: '14px', left: '14px',
            fontFamily: '"Space Mono", monospace', fontSize: '8.5px', letterSpacing: '2px',
            background: 'rgba(42,32,24,.72)', color: '#F4EFE7',
            padding: '5px 12px', borderRadius: '999px',
          }}>
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: '28px' }}>
          {/* Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', letterSpacing: '1px', color: '#8B7B6E' }}>
              {post.date}
            </span>
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#C4B5A2', display: 'inline-block' }} />
            <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', letterSpacing: '1px', color: '#8B7B6E' }}>
              {post.readTime}
            </span>
          </div>

          <h2 style={{ fontFamily: 'Lora, serif', fontSize: '21px', color: '#2A2018', lineHeight: 1.35, marginBottom: '12px' }}>
            {post.title}
          </h2>
          <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '14px', fontWeight: 300, color: '#6B5A4E', lineHeight: 1.7 }}>
            {post.excerpt}
          </p>

          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', letterSpacing: '2px', color: '#A8623C' }}>
              ĐỌC TIẾP
            </span>
            <span style={{ color: '#A8623C', fontSize: '13px' }}>→</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
