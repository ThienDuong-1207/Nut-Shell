/* ─── Blog Detail Page — tiêu đề lớn, ảnh bo 28px, thân bài 680px, bài viết khác ─── */
import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getPostBySlug, POSTS } from '../data/posts'
import PostCard from '../components/ui/PostCard'
import CtaCard from '../components/ui/CtaCard'
import RevealOnScroll from '../ui/RevealOnScroll'

// Nội dung bài: đoạn cách nhau bằng dòng trống; "**...**" đứng riêng là tiêu đề, trong đoạn là chữ đậm
function ArticleBody({ content }) {
  return (
    <div className="article">
      {content.split('\n\n').map((block, i) => {
        if (block.startsWith('**') && block.endsWith('**')) {
          return <h2 key={i}>{block.replace(/\*\*/g, '')}</h2>
        }
        const parts = block.split(/\*\*(.*?)\*\*/g)
        return <p key={i}>{parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}</p>
      })}
    </div>
  )
}

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
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <header className="page-head" style={{ paddingBottom: '40px' }}>
        <div className="h-container">
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link to="/">Trang chủ</Link><span aria-hidden="true">/</span>
            <Link to="/chia-se">Chia sẻ</Link><span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: 'var(--text)' }}>{post.category}</span>
          </nav>
          <div className="flex flex-wrap gap-x-5 gap-y-2 h-label" style={{ color: 'var(--text)', marginBottom: '20px' }}>
            <span className="tag tag--accent">{post.category}</span>
            <span style={{ color: 'var(--text-secondary)', alignSelf: 'center' }}>{post.date}</span>
            <span style={{ color: 'var(--text-secondary)', alignSelf: 'center' }}>{post.readTime}</span>
          </div>
          <h1 className="page-head__title" style={{ fontSize: 'clamp(40px, 5.6vw, 88px)', maxWidth: '1000px' }}>{post.title}</h1>
        </div>
      </header>

      <div className="h-container">
        <RevealOnScroll>
          <div className="work-card__img" style={{ aspectRatio: '21 / 9', borderRadius: '28px' }}>
            <img src={post.cover} alt={post.title} />
          </div>
        </RevealOnScroll>
      </div>

      <article className="h-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)', paddingBottom: 'clamp(72px, 8vw, 120px)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p className="h-lead" style={{ color: 'var(--text)', marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid var(--border)' }}>{post.excerpt}</p>
          <ArticleBody content={post.content} />
          <div style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <Link to="/chia-se" className="btn btn--ghost">← Tất cả bài viết</Link>
          </div>
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="h-container" style={{ paddingBottom: 'clamp(72px, 8vw, 120px)' }}>
          <div style={{ paddingTop: '24px', borderTop: '1px solid var(--border)', marginBottom: '32px' }}>
            <p className="h-label">/ Bài viết khác</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-12">
            {otherPosts.map(p => <PostCard key={p.slug} post={p} />)}
          </div>
        </section>
      )}

      <CtaCard label="Tư vấn miễn phí" title="Bạn đang ấp ủ ý tưởng thiết kế?" />
    </main>
  )
}
