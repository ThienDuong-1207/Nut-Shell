/* ─── Projects — dark espresso, horizontal scroll với drag support ─── */
import { useRef } from 'react'
import RevealOnScroll from '../ui/RevealOnScroll'

const PROJECTS = [
  { name: 'Penthouse Skyline',     area: '280 m²', meta: 'Chung cư cao cấp · TP.HCM',        img: '/images/proj1.jpg' },
  { name: 'Biệt thự Thảo Điền',   area: '420 m²', meta: 'Nhà ở cao cấp · Quận 2, TP.HCM',  img: '/images/proj2.jpg' },
  { name: 'Căn hộ Studio An Phú', area: '68 m²',  meta: 'Căn hộ hiện đại · Quận 2, TP.HCM', img: '/images/proj3.jpg' },
  { name: 'MVillages Residence',   area: '180 m²', meta: 'Nhà phố · Bình Dương',              img: '/images/proj4.jpg' },
  { name: 'Villa Long Hậu',        area: '350 m²', meta: 'Nhà nghỉ dưỡng · Long An',          img: '/images/proj5.jpg' },
]

export default function Projects() {
  const trackRef = useRef(null)

  /* ─── Drag-to-scroll ─── */
  const onMouseDown = (e) => {
    const el = trackRef.current
    if (!el) return
    const startX    = e.pageX - el.offsetLeft
    const initScroll = el.scrollLeft
    el.style.cursor = 'grabbing'

    const onMove = (e) => {
      e.preventDefault()
      el.scrollLeft = initScroll - (e.pageX - el.offsetLeft - startX) * 1.4
    }
    const onUp = () => {
      el.style.cursor = 'grab'
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup',   onUp)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup',   onUp)
  }

  return (
    <section id="duan" style={{ background: '#2A2018', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '56px' }}>
          <div>
            <RevealOnScroll>
              <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '18px' }}>
                DỰ ÁN
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={80}>
              <h2 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(32px, 4.5vw, 58px)', lineHeight: 1.15, color: '#F4EFE7', maxWidth: '480px' }}>
                Những tổ ấm chúng tôi hoàn thiện
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={160}>
            <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '2px', color: '#B6A88F' }}>
              CUỘN NGANG →
            </p>
          </RevealOnScroll>
        </div>

        {/* Horizontal track */}
        <div
          ref={trackRef}
          className="hscroll"
          style={{
            display: 'flex', gap: '24px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '20px',
            cursor: 'grab',
          }}
          onMouseDown={onMouseDown}
        >
          {PROJECTS.map((p, i) => (
            <RevealOnScroll key={p.name} delay={i * 70}>
              <ProjectCard project={p} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <div style={{ flexShrink: 0, width: 'clamp(250px, 27vw, 320px)', scrollSnapAlign: 'start' }}>
      {/* Image — 4:5 ratio */}
      <div style={{ aspectRatio: '4/5', borderRadius: '12px', overflow: 'hidden' }}>
        <img
          src={project.img} alt={project.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .55s ease', display: 'block' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>

      {/* Meta */}
      <div style={{ padding: '18px 2px 0' }}>
        <h3 style={{ fontFamily: 'Marcellus, serif', fontSize: '19px', color: '#F4EFE7', marginBottom: '8px' }}>
          {project.name}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9.5px', letterSpacing: '1px', color: '#A8623C' }}>
            {project.area}
          </span>
          <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4A3B2E', display: 'inline-block' }} />
          <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', fontWeight: 300, color: '#B6A88F' }}>
            {project.meta}
          </span>
        </div>
      </div>
    </div>
  )
}
