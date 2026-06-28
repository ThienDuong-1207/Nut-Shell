/* ─── Project Detail Page ─── */
import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getProjectBySlug, PROJECTS } from '../data/projects'

const MONO = { fontFamily: '"Space Mono", monospace' }

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
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null

  return (
    <main style={{ background: '#F2EBDF', minHeight: '100vh', paddingTop: '88px' }}>

      {/* Hero Image */}
      <div style={{ width: '100%', height: '70vh', overflow: 'hidden', position: 'relative' }}>
        <img
          src={project.cover}
          alt={project.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,.1) 0%, rgba(0,0,0,.4) 100%)' }} />
        <div style={{ position: 'absolute', bottom: '40px', left: 0, right: 0 }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <span style={{
              fontFamily: '"Space Mono", monospace', fontSize: '9px', letterSpacing: '2px',
              background: 'rgba(42,32,24,.72)', color: '#F4EFE7',
              padding: '6px 16px', borderRadius: '999px',
            }}>
              {project.category}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Breadcrumb */}
        <div style={{ paddingTop: '36px', paddingBottom: '0', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <Link to="/" style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: '#8B7B6E', textDecoration: 'none', transition: 'color .2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#2A2018'}
            onMouseLeave={e => e.currentTarget.style.color = '#8B7B6E'}
          >
            TRANG CHỦ
          </Link>
          <span style={{ ...MONO, fontSize: '10px', color: '#8B7B6E' }}>/</span>
          <Link to="/du-an" style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: '#8B7B6E', textDecoration: 'none', transition: 'color .2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#2A2018'}
            onMouseLeave={e => e.currentTarget.style.color = '#8B7B6E'}
          >
            DỰ ÁN
          </Link>
          <span style={{ ...MONO, fontSize: '10px', color: '#8B7B6E' }}>/</span>
          <span style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: '#A8623C' }}>
            {project.name.toUpperCase()}
          </span>
        </div>

        {/* Project Info — 2 columns */}
        <div
          style={{ paddingTop: '56px', paddingBottom: '72px', display: 'grid', gap: '64px', alignItems: 'start' }}
          className="lg:grid-cols-2"
        >
          {/* Left — name + description */}
          <div>
            <h1 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(32px, 5vw, 62px)', color: '#2A2018', lineHeight: 1.1, marginBottom: '32px' }}>
              {project.name}
            </h1>
            <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '17px', fontWeight: 300, color: '#4A3B2E', lineHeight: 1.85 }}>
              {project.description}
            </p>
            {/* Tags */}
            <div style={{ marginTop: '28px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{
                  ...MONO, fontSize: '9px', letterSpacing: '1.5px',
                  color: '#2A2018', border: '1px solid rgba(42,32,24,.22)',
                  padding: '5px 14px', borderRadius: '999px',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — metadata */}
          <div style={{ background: '#EAE2D5', borderRadius: '4px', padding: '40px' }}>
            <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '28px' }}>
              THÔNG TIN DỰ ÁN
            </p>
            {[
              { label: 'Phong cách', value: project.style },
              { label: 'Diện tích', value: project.area },
              { label: 'Địa điểm', value: project.location },
              { label: 'Năm hoàn thiện', value: project.year },
            ].map(item => (
              <div key={item.label} style={{ paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid rgba(42,32,24,.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '13px', fontWeight: 300, color: '#8B7B6E' }}>
                  {item.label}
                </span>
                <span style={{ fontFamily: 'Lora, serif', fontSize: '16px', color: '#2A2018', textAlign: 'right' }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        {project.gallery && project.gallery.length > 0 && (
          <div style={{ paddingBottom: '88px' }}>
            <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '32px' }}>
              GALLERY
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
            }}>
              {project.gallery.map((img, i) => (
                <div key={i} style={{ aspectRatio: '4/3', borderRadius: '4px', overflow: 'hidden' }}>
                  <img
                    src={img}
                    alt={`${project.name} — ${i + 2}`}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .55s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Navigation */}
        <div style={{
          borderTop: '1px solid rgba(42,32,24,.12)',
          padding: '48px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          {prevProject ? (
            <Link to={`/du-an/${prevProject.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ ...MONO, fontSize: '9px', letterSpacing: '2px', color: '#8B7B6E' }}>← DỰ ÁN TRƯỚC</span>
              <span style={{ fontFamily: 'Lora, serif', fontSize: '18px', color: '#2A2018', transition: 'color .2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#A8623C'}
                onMouseLeave={e => e.currentTarget.style.color = '#2A2018'}
              >
                {prevProject.name}
              </span>
            </Link>
          ) : <div />}

          <Link to="/du-an" style={{
            ...MONO, fontSize: '9.5px', letterSpacing: '2px',
            color: '#6B5E4F', textDecoration: 'none',
            border: '1px solid rgba(42,32,24,.2)',
            padding: '10px 24px', borderRadius: '999px',
            transition: 'all .2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#2A2018'; e.currentTarget.style.color = '#E3D2B0' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#6B5E4F' }}
          >
            TẤT CẢ DỰ ÁN
          </Link>

          {nextProject ? (
            <Link to={`/du-an/${nextProject.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
              <span style={{ ...MONO, fontSize: '9px', letterSpacing: '2px', color: '#8B7B6E' }}>DỰ ÁN TIẾP →</span>
              <span style={{ fontFamily: 'Lora, serif', fontSize: '18px', color: '#2A2018', transition: 'color .2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#A8623C'}
                onMouseLeave={e => e.currentTarget.style.color = '#2A2018'}
              >
                {nextProject.name}
              </span>
            </Link>
          ) : <div />}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ background: '#2A2018', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ textAlign: 'center' }}>
          <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '20px' }}>
            BẮT ĐẦU NGAY HÔM NAY
          </p>
          <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 52px)', color: '#F4EFE7', marginBottom: '24px', lineHeight: 1.2 }}>
            Bắt đầu dự án của bạn?
          </h2>
          <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '16px', fontWeight: 300, color: '#B6A88F', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
            Hãy để chúng tôi lắng nghe câu chuyện của bạn. Buổi tư vấn đầu tiên hoàn toàn miễn phí.
          </p>
          <Link to="/lien-he" style={{
            ...MONO, fontSize: '11px', letterSpacing: '2.5px',
            background: '#E3D2B0', color: '#2A2018',
            padding: '16px 40px', borderRadius: '999px',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'opacity .25s, transform .25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '.82'; e.currentTarget.style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            LIÊN HỆ TƯ VẤN
          </Link>
        </div>
      </div>

    </main>
  )
}
