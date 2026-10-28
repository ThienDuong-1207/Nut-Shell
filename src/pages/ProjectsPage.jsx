/* ─── Projects Page — danh sách tất cả dự án với bộ lọc ─── */
import { useState } from 'react'
import { PROJECTS, CATEGORIES } from '../data/projects'
import PageHeader from '../components/ui/PageHeader'
import WorkCard from '../components/ui/WorkCard'
import CtaCard from '../components/ui/CtaCard'
import RevealOnScroll from '../ui/RevealOnScroll'

const countOf = cat => cat === 'TẤT CẢ' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('TẤT CẢ')

  const filtered = activeCategory === 'TẤT CẢ'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory)

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <PageHeader
        label="Dự án"
        title="Không gian chúng tôi đã kể."
        desc="Những công trình chúng tôi tâm huyết — từ tổ ấm gia đình đến không gian thương mại đặc sắc."
        crumbs={[{ label: 'Dự án' }]}
      >
        <div className="flex flex-wrap gap-2" role="group" aria-label="Lọc theo hạng mục">
          {CATEGORIES.map(cat => (
            <button key={cat} className="pill" aria-pressed={cat === activeCategory} onClick={() => setActiveCategory(cat)}>
              {cat} <span className="pill__count">{countOf(cat)}</span>
            </button>
          ))}
        </div>
      </PageHeader>

      <section className="h-container" style={{ paddingBottom: 'clamp(88px, 10vw, 140px)', borderTop: '1px solid var(--border)', paddingTop: '48px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
          {filtered.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={(i % 3) * 80}>
              <WorkCard project={project} />
            </RevealOnScroll>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="h-body" style={{ textAlign: 'center', padding: '80px 0' }}>Chưa có dự án trong danh mục này.</p>
        )}
      </section>

      <CtaCard />
    </main>
  )
}
