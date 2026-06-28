/* ─── Quote — cream với grain texture, không có eyebrow ─── */
import RevealOnScroll from '../ui/RevealOnScroll'

export default function Quote() {
  return (
    <section style={{ background: '#F2EBDF', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Grain texture overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
        opacity: .035,
        mixBlendMode: 'multiply',
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ position: 'relative', zIndex: 1 }}>
        <RevealOnScroll>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>

            <p
              aria-hidden
              style={{
                fontFamily: 'Lora, serif',
                fontSize: '88px', lineHeight: .6,
                color: '#A8623C', opacity: .18,
                marginBottom: '28px',
                userSelect: 'none',
              }}
            >
              "
            </p>

            <blockquote style={{
              fontFamily: 'Lora, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(22px, 3vw, 34px)',
              lineHeight: 1.5, color: '#2A2018',
              marginBottom: '44px',
              textWrap: 'balance',
            }}>
              Một không gian đẹp không chỉ làm vừa lòng ánh mắt — nó nuôi dưỡng tâm hồn của những người sống trong đó.
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
              <div style={{ width: '36px', height: '1px', background: '#A8623C' }} />
              <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '2.5px', color: '#6B5E4F' }}>
                HOÀNG VÂN ANH — NHÀ THIẾT KẾ SÁNG LẬP
              </p>
              <div style={{ width: '36px', height: '1px', background: '#A8623C' }} />
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
