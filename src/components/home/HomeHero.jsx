/* ─── #2 Hero — wordmark khổng lồ, H1, bento tối, meta row ─── */
import { Link } from 'react-router-dom'
import { PROJECTS } from '../../data/projects'
import { Asterisk, Arrow, Globe } from './Icons'

// chỉ chạy animation vào trang khi loading screen đã xong
const enter = (on, delay) => on
  ? { animation: `fadeUp 1s cubic-bezier(.2,.7,.2,1) ${delay}ms both` }
  : { opacity: 0 }

export function MetaRow() {
  return (
    <div className="meta-row" style={{ color: 'var(--text)' }}>
      <span>Studio nội thất / TP.HCM</span>
      <span className="flex flex-wrap gap-2">
        <span className="tag">Nhà ở</span>
        <span className="tag">Cafe</span>
        <span className="tag">Nhà hàng</span>
      </span>
      <span>( {PROJECTS.length} dự án )</span>
      <span className="tag tag--accent">Est. 2017</span>
    </div>
  )
}

export default function HomeHero({ appLoaded }) {
  return (
    <section style={{ paddingTop: '104px', paddingBottom: 'clamp(72px, 8vw, 120px)' }}>
      <div className="h-container">
        <div style={{ overflow: 'hidden' }}>
          <p className={`wordmark ${appLoaded ? 'wordmark--reveal' : ''}`} style={appLoaded ? undefined : { opacity: 0 }} aria-hidden="true">
            NUT SHELL
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10" style={{ marginTop: 'clamp(24px, 3vw, 40px)', marginBottom: 'clamp(32px, 4vw, 48px)' }}>
          <p className="md:col-span-5 h-body" style={{ fontSize: '16px', ...enter(appLoaded, 250) }}>
            / Thiết kế & thi công nội thất.<br />Từ câu chuyện của bạn.
          </p>
          <h1 className="md:col-span-7 h-serif" style={{
            fontWeight: 500, fontSize: 'clamp(44px, 6vw, 92px)', lineHeight: .95, letterSpacing: '-.03em', color: 'var(--text)',
            ...enter(appLoaded, 350),
          }}>
            Thiết kế bắt đầu từ sự thấu hiểu.
          </h1>
        </div>

        <div className="bento" style={enter(appLoaded, 500)}>
          <div className="bento__year items-end justify-center" style={{ padding: '18px 0' }}>
            <span className="h-serif" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: '64px', lineHeight: 1, color: 'var(--accent)' }}>2017</span>
          </div>
          <div className="flex flex-col justify-between" style={{ padding: '22px', color: 'var(--accent)' }}>
            <Globe />
            <p className="h-label" style={{ color: 'var(--accent)', lineHeight: 1.6 }}>
              Thiết kế từ câu chuyện của bạn.<br />Không từ catalog.
            </p>
          </div>
          <div className="bento__img">
            <img src="/projects/nha-o/indochine/cover.webp" alt="Phòng khách Indochine Residence do Nut Shell thiết kế" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="grid place-items-center" style={{ color: 'var(--accent)' }}>
            <div className="spin-slow grid place-items-center" style={{ width: '60%', maxWidth: '150px', aspectRatio: 1, borderRadius: '50%', border: '1px solid var(--border-light)' }}>
              <Asterisk size={48} strokeWidth={1.4} />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ padding: '32px 0', borderBottom: '1px solid var(--border)', ...enter(appLoaded, 650) }}>
          <p className="h-lead" style={{ maxWidth: '560px' }}>
            Nut Shell đồng hành cùng hơn 400 công trình — từ nhà ở, biệt thự đến không gian thương mại — với cùng một cam kết: mỗi không gian là một câu chuyện riêng.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/lien-he" className="btn btn--dark">Liên hệ tư vấn <Arrow /></Link>
            <Link to="/du-an" className="btn btn--ghost">Xem dự án</Link>
          </div>
        </div>

        <div style={{ paddingTop: '20px', ...enter(appLoaded, 750) }}>
          <MetaRow />
        </div>
      </div>
    </section>
  )
}
