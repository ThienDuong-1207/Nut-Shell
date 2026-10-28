/* ─── #11 CTA — thẻ tối bo lớn + vòng tròn màu nhấn ─── */
import { Link } from 'react-router-dom'
import RevealOnScroll from '../../ui/RevealOnScroll'
import { Asterisk, Arrow } from './Icons'

export default function HomeCta() {
  return (
    <section id="lienhe" style={{ paddingBottom: 'clamp(72px, 8vw, 120px)' }}>
      <div className="h-container">
        <RevealOnScroll>
          <div className="cta-card">
            <div>
              <p className="h-label" style={{ color: '#FFFFFF', marginBottom: '18px' }}>/ Bắt đầu</p>
              <h2 className="h-h2" style={{ color: 'var(--accent)', marginBottom: '20px' }}>Sẵn sàng bắt đầu dự án của bạn?</h2>
              <p className="h-body" style={{ color: 'var(--text-light-secondary)', maxWidth: '460px', marginBottom: '32px' }}>
                Buổi tư vấn đầu tiên hoàn toàn miễn phí — kể cho chúng tôi nghe về không gian bạn mơ ước.
              </p>
              <Link to="/lien-he" className="btn btn--accent">Đặt lịch tư vấn <Arrow /></Link>
            </div>
            <div className="cta-orb" aria-hidden="true">
              <span className="spin-slow grid place-items-center"><Asterisk size={96} strokeWidth={1.2} /></span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
