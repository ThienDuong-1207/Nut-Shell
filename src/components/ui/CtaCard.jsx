/* ─── Thẻ CTA nền nâu thương hiệu + logo chữ — dùng cuối trang chủ và các trang con ─── */
import { Link } from 'react-router-dom'
import RevealOnScroll from '../../ui/RevealOnScroll'
import { Arrow } from './Icons'

export default function CtaCard({
  label = 'Bắt đầu',
  title = 'Sẵn sàng bắt đầu dự án của bạn?',
  desc = 'Buổi tư vấn đầu tiên hoàn toàn miễn phí — kể cho chúng tôi nghe về không gian bạn mơ ước.',
  cta = { label: 'Đặt lịch tư vấn', to: '/lien-he' },
  id,
}) {
  return (
    <section id={id} style={{ paddingBottom: 'clamp(72px, 8vw, 120px)' }}>
      <div className="h-container">
        <RevealOnScroll>
          <div className="cta-card">
            <div>
              <p className="h-label" style={{ color: '#FFFFFF', marginBottom: '18px' }}>/ {label}</p>
              <h2 className="h-h2" style={{ color: 'var(--accent)', marginBottom: '20px' }}>{title}</h2>
              <p className="h-body" style={{ color: 'var(--text-on-brand)', maxWidth: '460px', marginBottom: '32px' }}>{desc}</p>
              <Link to={cta.to} className="btn btn--accent">{cta.label} <Arrow /></Link>
            </div>
            <img className="cta-card__logo" src="/images/logo-text-light.png" alt="Nut Shell Interior Design" loading="lazy" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
