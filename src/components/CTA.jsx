/* ─── CTA — nền gradient tối, tiêu đề lớn + nút đặt lịch ─── */
import RevealOnScroll from '../ui/RevealOnScroll'

export default function CTA() {
  return (
    <section id="lienhe" style={{ position: 'relative', padding: '148px 0', overflow: 'hidden' }}>

      {/* Layered dark background */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1A1208 0%, #3D2B1A 45%, #2A2018 100%)' }} />
      {/* Warm texture overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 22px, rgba(168,98,60,.04) 22px, rgba(168,98,60,.04) 23px)',
      }} />
      {/* Subtle vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,.35) 100%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative" style={{ zIndex: 1 }}>
        <div style={{ maxWidth: '680px' }}>

          <RevealOnScroll>
            <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '28px' }}>
              BẮT ĐẦU HÀNH TRÌNH
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={90}>
            <h2 style={{
              fontFamily: 'Marcellus, serif',
              fontSize: 'clamp(34px, 5vw, 68px)',
              lineHeight: 1.1, color: '#F4EFE7',
              marginBottom: '28px',
            }}>
              Biến không gian của bạn thành điều đáng nhớ.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={180}>
            <p style={{
              fontFamily: 'Jost, sans-serif', fontSize: '17px', fontWeight: 300,
              color: '#B6A88F', lineHeight: 1.85,
              marginBottom: '52px',
            }}>
              Hãy để chúng tôi lắng nghe câu chuyện của bạn. Buổi tư vấn đầu tiên hoàn toàn miễn phí.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={270}>
            <a
              href="mailto:hello@nutshell.vn"
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '12px', letterSpacing: '2.5px',
                background: '#A8623C', color: '#F4EFE7',
                padding: '18px 38px', borderRadius: '999px',
                textDecoration: 'none', display: 'inline-block',
                transition: 'opacity .25s, transform .25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = '.82'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              ĐẶT LỊCH TƯ VẤN →
            </a>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  )
}
