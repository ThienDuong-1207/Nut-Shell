/* ─── #6 Dự án — 1 dự án nổi bật cỡ lớn + danh sách tên lớn, ảnh đi theo chuột ─── */
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import RevealOnScroll from '../../ui/RevealOnScroll'
import { getProjectBySlug, PROJECTS } from '../../data/projects'
import { HOME_WORK } from '../../data/home'
import { Arrow } from '../ui/Icons'

const FEATURED = getProjectBySlug(HOME_WORK.featured)
const LIST = HOME_WORK.list.map(getProjectBySlug).filter(Boolean)

// Ảnh xem trước chỉ đi theo chuột trên thiết bị có chuột và khi không bật giảm chuyển động
const canFollow = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

function FeaturedProject({ project: p }) {
  const facts = [p.style, p.area, p.location].filter(Boolean).join(' · ')
  return (
    <Link to={`/du-an/${p.slug}`} className="work-feature">
      <img src={p.cover} alt={p.name} loading="lazy" />
      <div className="work-feature__shade" />
      <div className="work-feature__body">
        <div className="flex flex-wrap items-center gap-3" style={{ marginBottom: '14px' }}>
          <span className="tag tag--accent">{p.category}</span>
          {facts && <span className="h-label" style={{ color: '#FFFFFF' }}>{facts}</span>}
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <h3 className="work-feature__title">{p.name}</h3>
          <span className="btn btn--light" aria-hidden="true">Xem dự án <Arrow /></span>
        </div>
      </div>
    </Link>
  )
}

function ProjectList({ projects }) {
  const [hovered, setHovered] = useState(null)
  const [armed, setArmed] = useState(false)      // chỉ tải ảnh xem trước khi chuột vào danh sách
  const [follow, setFollow] = useState(false)
  const preview = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => { setFollow(canFollow()) }, [])

  // ảnh trượt mượt về phía con trỏ (lerp trong rAF), chỉ chạy khi đang hover
  useEffect(() => {
    if (!follow || hovered === null) return
    let raf
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18
      pos.current.y += (target.current.y - pos.current.y) * 0.18
      if (preview.current) preview.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translateY(-50%)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [follow, hovered])

  // ảnh cố định theo chiều ngang ở khoảng trống giữa tên và thông tin (62% danh sách), chỉ theo chuột theo chiều dọc → không che tên
  const onMove = e => {
    const list = e.currentTarget.getBoundingClientRect()
    const w = preview.current ? preview.current.offsetWidth : 320
    target.current = { x: list.left + list.width * 0.62 - w / 2, y: e.clientY }
    if (hovered === null) pos.current = { ...target.current }
  }

  return (
    <div
      onPointerEnter={() => follow && setArmed(true)}
      onPointerMove={follow ? onMove : undefined}
      onPointerLeave={() => setHovered(null)}
    >
      <ul className="work-list" style={{ listStyle: 'none' }}>
        {projects.map((p, i) => (
          <li key={p.slug}>
            <Link
              to={`/du-an/${p.slug}`}
              className="work-row"
              data-dim={hovered !== null && hovered !== i}
              onPointerEnter={() => setHovered(i)}
              onFocus={() => setHovered(null)}
            >
              <span className="work-row__index">/ {String(i + 1).padStart(2, '0')}</span>
              <span className="work-row__thumb" aria-hidden="true"><img src={p.cover} alt="" loading="lazy" /></span>
              <span className="work-row__name">{p.name}</span>
              <span className="work-row__meta">{p.category}{p.location ? ` · ${p.location}` : ''}</span>
              <span className="work-row__arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>

      {follow && armed && (
        <div ref={preview} className="work-preview" data-show={hovered !== null} aria-hidden="true">
          {projects.map((p, i) => (
            <img key={p.slug} src={p.cover} alt="" data-active={hovered === i} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function HomeWork() {
  return (
    <section id="duan" className="h-section h-alt">
      <div className="h-container">
        <div className="section-head">
          <div>
            <RevealOnScroll><p className="h-label" style={{ marginBottom: '18px' }}>/ Dự án</p></RevealOnScroll>
            <RevealOnScroll delay={80}><h2 className="h-h2">Không gian mang dấu ấn của chủ nhân.</h2></RevealOnScroll>
          </div>
          <RevealOnScroll delay={160}>
            <p className="h-body" style={{ maxWidth: '440px' }}>Nhà ở, quán cafe, nhà hàng — mỗi công trình là một lời giải riêng cho cách con người sống và làm việc trong đó.</p>
          </RevealOnScroll>
        </div>

        {FEATURED && (
          <RevealOnScroll>
            <FeaturedProject project={FEATURED} />
          </RevealOnScroll>
        )}

        <div style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}>
          <ProjectList projects={LIST} />
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5" style={{ marginTop: '40px' }}>
          <p className="h-label" style={{ color: 'var(--text-secondary-alt)' }}>{PROJECTS.length} công trình · Nhà ở · Cafe · Nhà hàng</p>
          <Link to="/du-an" className="btn btn--dark">Xem tất cả {PROJECTS.length} dự án <Arrow /></Link>
        </div>
      </div>
    </section>
  )
}
