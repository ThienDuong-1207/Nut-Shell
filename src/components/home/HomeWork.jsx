/* ─── #6 Dự án chọn lọc — 3 thẻ ảnh ─── */
import { Link } from 'react-router-dom'
import RevealOnScroll from '../../ui/RevealOnScroll'
import { getFeaturedProjects } from '../../data/projects'
import { Arrow } from '../ui/Icons'
import WorkCard from '../ui/WorkCard'

export default function HomeWork() {
  const projects = getFeaturedProjects(3)
  return (
    <section id="duan" className="h-section h-alt">
      <div className="h-container">
        <div className="section-head">
          <div>
            <RevealOnScroll><p className="h-label" style={{ marginBottom: '18px' }}>/ Dự án chọn lọc</p></RevealOnScroll>
            <RevealOnScroll delay={80}><h2 className="h-h2">Không gian mang dấu ấn của chủ nhân.</h2></RevealOnScroll>
          </div>
          <RevealOnScroll delay={160}>
            <p className="h-body" style={{ maxWidth: '440px' }}>Nhà ở, quán cafe, nhà hàng — mỗi công trình là một lời giải riêng cho cách con người sống và làm việc trong đó.</p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
          {projects.map((p, i) => (
            <RevealOnScroll key={p.slug} delay={i * 100}>
              <WorkCard project={p} tone="alt" />
            </RevealOnScroll>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5" style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
          <p className="h-label" style={{ color: 'var(--text-secondary-alt)' }}>Nhà ở · Cafe · Nhà hàng</p>
          <Link to="/du-an" className="btn btn--ghost">Xem tất cả dự án <Arrow /></Link>
        </div>
      </div>
    </section>
  )
}
