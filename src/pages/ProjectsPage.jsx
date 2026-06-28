/* ─── Projects Page — danh sách tất cả dự án với filter ─── */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS, CATEGORIES } from '../data/projects'

const MONO = { fontFamily: '"Space Mono", monospace' }

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('TẤT CẢ')

  const filtered = activeCategory === 'TẤT CẢ'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory)

  return (
    <main style={{ background: '#F2EBDF', minHeight: '100vh', paddingTop: '88px' }}>

      {/* Page Header */}
      <div style={{ background: '#2A2018', padding: '80px 0 64px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '16px' }}>
            PORTFOLIO
          </p>
          <h1 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(40px, 6vw, 80px)', color: '#F4EFE7', lineHeight: 1.1, marginBottom: '20px' }}>
            Dự Án
          </h1>
          <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '16px', fontWeight: 300, color: '#B6A88F', lineHeight: 1.7 }}>
            Những công trình chúng tôi tâm huyết — từ tổ ấm gia đình đến không gian thương mại đặc sắc.
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
            <span style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: '#A8623C' }}>DỰ ÁN</span>
          </div>
        </div>
      </div>

      {/* Filter + Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ padding: '56px 24px' }}>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '48px', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => {
            const isActive = cat === activeCategory
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  ...MONO,
                  fontSize: '9.5px',
                  letterSpacing: '2px',
                  padding: '10px 22px',
                  borderRadius: '999px',
                  border: isActive ? 'none' : '1px solid rgba(42,32,24,.25)',
                  background: isActive ? '#2A2018' : 'transparent',
                  color: isActive ? '#E3D2B0' : '#6B5E4F',
                  cursor: 'pointer',
                  transition: 'all .2s ease',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(42,32,24,.08)' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}
          className="lg:grid-cols-3 md:grid-cols-2"
        >
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '16px', color: '#6B5E4F' }}>
              Chưa có dự án trong danh mục này.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

function ProjectCard({ project }) {
  return (
    <Link
      to={`/du-an/${project.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        style={{ background: '#fff', borderRadius: '4px', overflow: 'hidden', transition: 'transform .35s ease, box-shadow .35s ease' }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-6px)'
          e.currentTarget.style.boxShadow = '0 16px 40px rgba(42,32,24,.14)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Image */}
        <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
          <img
            src={project.cover}
            alt={project.name}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .55s ease', display: 'block' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          {/* Category badge */}
          <span style={{
            position: 'absolute', top: '14px', left: '14px',
            fontFamily: '"Space Mono", monospace',
            fontSize: '8.5px', letterSpacing: '2px',
            background: 'rgba(42,32,24,.82)', color: '#E3D2B0',
            padding: '5px 12px', borderRadius: '999px',
            backdropFilter: 'blur(8px)',
          }}>
            {project.category}
          </span>
          {/* Hover overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(42,32,24,.45)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: 0, transition: 'opacity .3s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '1'}
            onMouseLeave={e => e.currentTarget.style.opacity = '0'}
          >
            <span style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '10px', letterSpacing: '3px', color: '#F4EFE7',
              border: '1px solid rgba(244,239,231,.6)',
              padding: '12px 24px', borderRadius: '999px',
            }}>
              XEM DỰ ÁN →
            </span>
          </div>
        </div>

        {/* Meta */}
        <div style={{ padding: '20px' }}>
          <h3 style={{ fontFamily: 'Lora, serif', fontSize: '19px', color: '#2A2018', marginBottom: '10px', lineHeight: 1.3 }}>
            {project.name}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', letterSpacing: '1px', color: '#A8623C' }}>
              {project.area}
            </span>
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#C4B5A2', display: 'inline-block' }} />
            <span style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '13px', fontWeight: 300, color: '#6B5E4F' }}>
              {project.location}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
