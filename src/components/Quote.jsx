/* ─── Quote — trích dẫn căn giữa, nền kem đậm ─── */
import RevealOnScroll from '../ui/RevealOnScroll'

export default function Quote() {
  return (
    <section style={{ background: '#EAE0CE', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealOnScroll>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>

            {/* Decorative opening mark */}
            <p
              aria-hidden
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '96px', lineHeight: .6,
                color: '#A8623C', opacity: .18,
                marginBottom: '28px',
                userSelect: 'none',
              }}
            >
              "
            </p>

            <blockquote style={{
              fontFamily: 'Marcellus, serif',
              fontSize: 'clamp(22px, 3vw, 36px)',
              lineHeight: 1.45, color: '#2A2018',
              marginBottom: '44px',
            }}>
              Một không gian đẹp không chỉ làm vừa lòng ánh mắt — nó nuôi dưỡng tâm hồn của những người sống trong đó.
            </blockquote>

            {/* Attribution */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
              <div style={{ width: '36px', height: '1px', background: '#A8623C' }} />
              <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '2.5px', color: '#6B5E4F' }}>
                NGUYỄN THÀNH AN — NHÀ THIẾT KẾ SÁNG LẬP
              </p>
              <div style={{ width: '36px', height: '1px', background: '#A8623C' }} />
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
