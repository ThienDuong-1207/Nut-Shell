/* ─── Project Detail Page — ảnh bìa tràn màn hình, thông tin gọn, gallery xen kẽ ─── */
import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getProjectBySlug, PROJECTS } from '../data/projects'
import RevealOnScroll from '../ui/RevealOnScroll'
import CtaCard from '../components/ui/CtaCard'

// Nhóm 3 ảnh: 1 ảnh rộng + 2 ảnh hẹp
const chunk = (arr, n) => Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => arr.slice(i * n, i * n + n))

function NeighbourCard({ project, dir }) {
  return (
    <Link to={`/du-an/${project.slug}`} className="work-card relative block" style={{ borderRadius: '20px', overflow: 'hidden' }}>
      <div className="work-card__img" style={{ aspectRatio: '16 / 9' }}>
        <img src={project.cover} alt="" loading="lazy" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end" style={{ padding: '24px', background: 'linear-gradient(to top, rgba(var(--dark-rgb), .75), rgba(var(--dark-rgb), 0) 60%)', color: '#FFFFFF', textAlign: dir === 'next' ? 'right' : 'left' }}>
        <span className="h-label" style={{ color: '#FFFFFF', marginBottom: '8px' }}>{dir === 'next' ? 'Dự án tiếp →' : '← Dự án trước'}</span>
        <span className="h-serif" style={{ fontSize: 'clamp(24px, 2.6vw, 34px)', lineHeight: 1.1 }}>{project.name}</span>
      </div>
    </Link>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (!project) navigate('/du-an')
  }, [project, navigate])

  if (!project) return null

  const currentIndex = PROJECTS.findIndex(p => p.slug === slug)
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length]
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length]

  const facts = [
    { label: 'Phong cách', value: project.style },
    { label: 'Diện tích', value: project.area },
    { label: 'Địa điểm', value: project.location },
    { label: 'Năm', value: project.year },
  ].filter(f => f.value)

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Ảnh bìa tràn màn hình — nav nằm đè lên (data-hero) */}
      <section data-hero style={{ position: 'relative', height: '88svh', minHeight: '520px', overflow: 'hidden', background: 'var(--surface-dark)' }}>
        <img src={project.cover} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(var(--dark-rgb), .5) 0%, rgba(var(--dark-rgb), .1) 35%, rgba(var(--dark-rgb), .7) 100%)' }} />
        <div className="h-container" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingBottom: 'clamp(28px, 5vh, 56px)', color: '#FFFFFF' }}>
          <nav aria-label="Breadcrumb" className="crumbs" style={{ color: 'rgba(255,255,255,.8)', marginBottom: '20px' }}>
            <Link to="/">Trang chủ</Link><span aria-hidden="true">/</span>
            <Link to="/du-an">Dự án</Link><span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: '#FFFFFF' }}>{project.category}</span>
          </nav>
          <h1 className="h-serif" style={{ fontWeight: 500, fontSize: 'clamp(48px, 8vw, 132px)', lineHeight: .95, letterSpacing: '-.03em', paddingRight: '64px' }}>
            {project.name}
          </h1>
        </div>
      </section>

      {/* Thông tin dự án */}
      <section className="h-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)', paddingBottom: 'clamp(48px, 6vw, 80px)' }}>
        <div className="meta-row" style={{ paddingBottom: '20px', borderBottom: '1px solid var(--border)', justifyContent: 'flex-start', gap: '12px 40px' }}>
          <span className="tag tag--accent">{project.category}</span>
          {facts.map(f => (
            <span key={f.label} className="flex gap-2">
              <span style={{ color: 'var(--text-secondary)' }}>{f.label}</span>
              <span style={{ color: 'var(--text)' }}>{f.value}</span>
            </span>
          ))}
          <span style={{ marginLeft: 'auto', color: 'var(--text-secondary)' }}>{project.gallery.length + 1} ảnh</span>
        </div>

        {(project.description || project.tags.length > 0) && (
          <div className="section-head" style={{ marginTop: '48px', marginBottom: 0, alignItems: 'start' }}>
            <div>
              <p className="h-label" style={{ marginBottom: '18px' }}>/ Về dự án</p>
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <span key={tag} className="tag" style={{ color: 'var(--text)' }}>{tag}</span>)}
                </div>
              )}
            </div>
            {project.description && <p className="h-lead">{project.description}</p>}
          </div>
        )}
      </section>

      {/* Gallery xen kẽ */}
      {project.gallery.length > 0 && (
        <section className="h-container" style={{ paddingBottom: 'clamp(72px, 8vw, 120px)' }} aria-label={`Hình ảnh ${project.name}`}>
          <div className="flex flex-col gap-4">
            {chunk(project.gallery, 3).map((group, gi) => (
              <div key={gi} className="flex flex-col gap-4">
                <RevealOnScroll>
                  <div className="work-card__img" style={{ aspectRatio: '16 / 9' }}>
                    <img src={group[0]} alt={`${project.name} — ảnh ${gi * 3 + 2}`} loading="lazy" />
                  </div>
                </RevealOnScroll>
                {group.length > 1 && (
                  <div className={`grid gap-4 ${group.length === 3 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                    {group.slice(1).map((img, k) => (
                      <RevealOnScroll key={img} delay={k * 80}>
                        <div className="work-card__img" style={{ aspectRatio: group.length === 3 ? '4 / 3' : '16 / 9' }}>
                          <img src={img} alt={`${project.name} — ảnh ${gi * 3 + k + 3}`} loading="lazy" />
                        </div>
                      </RevealOnScroll>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Dự án trước / tiếp */}
      <section className="h-container" style={{ paddingBottom: 'clamp(72px, 8vw, 120px)' }}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5" style={{ paddingTop: '24px', borderTop: '1px solid var(--border)', marginBottom: '24px' }}>
          <p className="h-label">/ Xem thêm</p>
          <Link to="/du-an" className="btn btn--ghost">Tất cả dự án</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NeighbourCard project={prevProject} dir="prev" />
          <NeighbourCard project={nextProject} dir="next" />
        </div>
      </section>

      <CtaCard
        title="Bắt đầu dự án của bạn?"
        desc="Hãy để chúng tôi lắng nghe câu chuyện của bạn. Buổi tư vấn đầu tiên hoàn toàn miễn phí."
      />
    </main>
  )
}
