/* ─── #2 Hero — ảnh tràn màn hình tự chuyển, tiêu đề căn trái ─── */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Arrow } from '../ui/Icons'

// Ảnh hero chọn tay (public/images/hero-1..5.webp), theo thứ tự hiển thị
const SLIDES = [
  { key: 'kingdom101',      src: '/images/hero-1.webp', name: 'Kingdom 101' },
  { key: 'hala-nguyen-hue', src: '/images/hero-2.webp', name: 'HALA Nguyễn Huệ' },
  { key: 'cf-gau',          src: '/images/hero-3.webp', name: 'Cafe Gấu' },
  { key: 'sashimi',         src: '/images/hero-4.webp', name: 'Sashimi Premium' },
  { key: 'hala-cf',         src: '/images/hero-5.webp', name: 'HALA Cafe' },
]
const INTERVAL = 4000

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// chỉ chạy animation vào trang khi loading screen đã xong
const enter = (on, delay) => on
  ? { animation: `fadeUp 1s cubic-bezier(.2,.7,.2,1) ${delay}ms both` }
  : { opacity: 0 }

export default function HomeHero({ appLoaded }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(prefersReducedMotion)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      if (!document.hidden) setActive(i => (i + 1) % SLIDES.length)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [paused, active])

  const pad = n => String(n).padStart(2, '0')

  return (
    <section className="hero" data-hero aria-roledescription="carousel" aria-label="Công trình tiêu biểu">
      {SLIDES.map((p, i) => (
        <div key={p.key} className="hero__slide" data-active={i === active} aria-hidden={i !== active}>
          <img src={p.src} alt={i === active ? p.name : ''} fetchpriority={i === 0 ? 'high' : undefined} loading={i === 0 ? 'eager' : 'lazy'} />
        </div>
      ))}
      <div className="hero__shade" />

      <div className="hero__content h-container">
        <div className="hero__title-wrap">
          <p className="hero__eyebrow" style={enter(appLoaded, 200)}>Mỗi không gian là một câu chuyện riêng</p>
          <h1 className="hero__title">
            <span style={enter(appLoaded, 300)}>Thiết kế</span>
            <span style={enter(appLoaded, 440)}>từ sự thấu hiểu.</span>
          </h1>
        </div>

        <div className="hero__bottom">
          <div className="hero__dots" style={enter(appLoaded, 700)}>
            <p className="hero__caption" aria-live="polite">
              {pad(active + 1)} / {pad(SLIDES.length)} — {SLIDES[active].name}
            </p>
            <div className="flex items-center gap-1">
              {SLIDES.map((p, i) => (
                <button key={p.key} className="hero__dot" data-active={i === active}
                  aria-label={`Xem ảnh ${i + 1}: ${p.name}`} aria-current={i === active || undefined}
                  onClick={() => setActive(i)}>
                  <span />
                </button>
              ))}
              <button className="hero__dot hero__pause" onClick={() => setPaused(v => !v)} aria-label={paused ? 'Tiếp tục tự chuyển ảnh' : 'Dừng tự chuyển ảnh'}>
                {paused
                  ? <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z" /></svg>
                  : <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4h4v16H6zM14 4h4v16h-4z" /></svg>}
              </button>
            </div>
          </div>

          <div className="hero__side" style={enter(appLoaded, 800)}>
            <p>Đồng hành từ ý tưởng đến bàn giao từng bước, hướng tới không gian sống bạn mơ ước.</p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/lien-he" className="btn btn--light">Liên hệ tư vấn <Arrow /></Link>
              <Link to="/du-an" className="btn btn--ghost-light">Xem dự án</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
