/* ─── Blog Detail Page ─── */
import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getPostBySlug, POSTS } from '../data/posts'

const MONO = { fontFamily: '"Space Mono", monospace' }

export default function BlogDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = getPostBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (!post) navigate('/chia-se')
  }, [post, navigate])

  if (!post) return null

  const otherPosts = POSTS.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <main style={{ background: '#F2EBDF', minHeight: '100vh', paddingTop: '88px' }}>

      {/* Hero cover */}
      <div style={{ width: '100%', height: '55vh', overflow: 'hidden', position: 'relative' }}>
        <img
          src={post.cover}
          alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,.15) 0%, rgba(0,0,0,.55) 100%)' }} />
        <div style={{ position: 'absolute', bottom: '48px', left: 0, right: 0 }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <span style={{
              ...MONO, fontSize: '9px', letterSpacing: '2px',
              background: 'rgba(42,32,24,.72)', color: '#F4EFE7',
              padding: '6px 16px', borderRadius: '999px',
            }}>
              {post.category}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Breadcrumb */}
        <div style={{ paddingTop: '36px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <Link to="/" style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: '#8B7B6E', textDecoration: 'none', transition: 'color .2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#2A2018'}
            onMouseLeave={e => e.currentTarget.style.color = '#8B7B6E'}
          >
            TRANG CHỦ
          </Link>
          <span style={{ ...MONO, fontSize: '10px', color: '#8B7B6E' }}>/</span>
          <Link to="/chia-se" style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: '#8B7B6E', textDecoration: 'none', transition: 'color .2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#2A2018'}
            onMouseLeave={e => e.currentTarget.style.color = '#8B7B6E'}
          >
            CHIA SẺ
          </Link>
          <span style={{ ...MONO, fontSize: '10px', color: '#8B7B6E' }}>/</span>
          <span style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: '#A8623C' }}>
            {post.category.toUpperCase()}
          </span>
        </div>

        {/* Main layout: article + sidebar */}
        <div
          style={{ paddingTop: '56px', paddingBottom: '96px', display: 'grid', gap: '64px', alignItems: 'start', gridTemplateColumns: '1fr' }}
          className="lg:grid-cols-2"
        >
          {/* Article */}
          <article style={{ maxWidth: '720px' }}>
            {/* Header */}
            <h1 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(28px, 4vw, 52px)', color: '#2A2018', lineHeight: 1.15, marginBottom: '24px' }}>
              {post.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
              <span style={{ ...MONO, fontSize: '9px', letterSpacing: '2px', color: '#8B7B6E' }}>{post.date}</span>
              <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#C4B5A2', display: 'inline-block' }} />
              <span style={{ ...MONO, fontSize: '9px', letterSpacing: '2px', color: '#8B7B6E' }}>{post.readTime}</span>
            </div>

            {/* Excerpt */}
            <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '18px', fontWeight: 300, color: '#4A3B2E', lineHeight: 1.85, marginBottom: '40px', fontStyle: 'italic', borderLeft: '3px solid #A8623C', paddingLeft: '20px' }}>
              {post.excerpt}
            </p>

            {/* Content */}
            <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '16px', fontWeight: 300, color: '#3A2B1E', lineHeight: 1.9 }}>
              {post.content.split('\n\n').map((block, i) => {
                if (block.startsWith('**') && block.endsWith('**')) {
                  return (
                    <h3 key={i} style={{ fontFamily: 'Marcellus, serif', fontSize: '22px', color: '#2A2018', marginTop: '44px', marginBottom: '16px' }}>
                      {block.replace(/\*\*/g, '')}
                    </h3>
                  )
                }
                // Handle inline bold
                const parts = block.split(/\*\*(.*?)\*\*/g)
                return (
                  <p key={i} style={{ marginBottom: '20px' }}>
                    {parts.map((part, j) =>
                      j % 2 === 1
                        ? <strong key={j} style={{ fontWeight: 500, color: '#2A2018' }}>{part}</strong>
                        : part
                    )}
                  </p>
                )
              })}
            </div>

            {/* Back to blog */}
            <div style={{ marginTop: '64px', paddingTop: '40px', borderTop: '1px solid rgba(42,32,24,.12)' }}>
              <Link to="/chia-se" style={{
                ...MONO, fontSize: '10px', letterSpacing: '2.5px',
                color: '#6B5A4E', textDecoration: 'none',
                border: '1px solid rgba(42,32,24,.2)',
                padding: '12px 28px', borderRadius: '999px',
                display: 'inline-block',
                transition: 'all .2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#2A2018'; e.currentTarget.style.color = '#E3D2B0' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#6B5A4E' }}
              >
                ← TẤT CẢ BÀI VIẾT
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div style={{ position: 'sticky', top: '108px' }}>
              <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '24px' }}>
                BÀI VIẾT KHÁC
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {otherPosts.map(p => (
                  <Link key={p.id} to={`/chia-se/${p.slug}`} style={{ textDecoration: 'none', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '72px', height: '72px', borderRadius: '4px', overflow: 'hidden', flexShrink: 0 }}>
                      <img src={p.cover} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </div>
                    <div>
                      <span style={{ ...MONO, fontSize: '8px', letterSpacing: '1px', color: '#A8623C', display: 'block', marginBottom: '6px' }}>
                        {p.category}
                      </span>
                      <p style={{ fontFamily: 'Marcellus, serif', fontSize: '14px', color: '#2A2018', lineHeight: 1.4, transition: 'color .2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#A8623C'}
                        onMouseLeave={e => e.currentTarget.style.color = '#2A2018'}
                      >
                        {p.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* CTA card */}
              <div style={{ marginTop: '40px', background: '#2A2018', padding: '28px', borderRadius: '4px' }}>
                <p style={{ ...MONO, fontSize: '9px', letterSpacing: '2px', color: '#A8623C', marginBottom: '12px' }}>
                  TƯ VẤN MIỄN PHÍ
                </p>
                <p style={{ fontFamily: 'Marcellus, serif', fontSize: '18px', color: '#F4EFE7', lineHeight: 1.4, marginBottom: '20px' }}>
                  Bạn đang ấp ủ ý tưởng thiết kế?
                </p>
                <Link to="/lien-he" style={{
                  ...MONO, fontSize: '9.5px', letterSpacing: '2px',
                  background: '#E3D2B0', color: '#2A2018',
                  padding: '12px 20px', borderRadius: '999px',
                  textDecoration: 'none', display: 'inline-block',
                  transition: 'opacity .2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '.82'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  LIÊN HỆ NGAY
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
