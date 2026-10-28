/* ─── Blog Page — bài mới nhất nổi bật + lưới bài còn lại ─── */
import { POSTS } from '../data/posts'
import PageHeader from '../components/ui/PageHeader'
import PostCard from '../components/ui/PostCard'
import CtaCard from '../components/ui/CtaCard'
import RevealOnScroll from '../ui/RevealOnScroll'

export default function BlogPage() {
  const [first, ...rest] = POSTS
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <PageHeader
        label="Chia sẻ"
        title="Ghi chép về không gian."
        desc="Kiến thức, xu hướng và câu chuyện từ những công trình của Nut Shell."
        crumbs={[{ label: 'Chia sẻ' }]}
      />

      <section className="h-container" style={{ borderTop: '1px solid var(--border)', paddingTop: '48px', paddingBottom: 'clamp(88px, 10vw, 140px)' }}>
        {first && (
          <RevealOnScroll>
            <PostCard post={first} featured />
          </RevealOnScroll>
        )}

        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12" style={{ marginTop: 'clamp(56px, 6vw, 88px)' }}>
            {rest.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={(i % 3) * 80}>
                <PostCard post={post} />
              </RevealOnScroll>
            ))}
          </div>
        )}
      </section>

      <CtaCard />
    </main>
  )
}
