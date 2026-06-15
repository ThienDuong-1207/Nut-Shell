/* ─── About — statement lớn + đoạn mô tả ─── */
import RevealOnScroll from '../ui/RevealOnScroll'

export default function About() {
  return (
    <section style={{ background: '#F2EBDF', padding: '130px 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div style={{ maxWidth: '860px' }}>

          <RevealOnScroll>
            <h2 style={{
              fontFamily: 'Marcellus, serif',
              fontSize: 'clamp(32px, 4.5vw, 58px)',
              lineHeight: 1.15,
              color: '#2A2018',
              marginBottom: '44px',
            }}>
              Chúng tôi không chỉ thiết kế không gian — chúng tôi kiến tạo cảm xúc.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={140}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '36px' }}>
              {/* Accent line */}
              <div style={{
                width: '2px', flexShrink: 0, height: '64px',
                background: 'linear-gradient(to bottom, #A8623C, transparent)',
                marginTop: '6px',
              }} />
              <p style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: 'clamp(16px, 1.4vw, 19px)',
                fontWeight: 300, lineHeight: 1.85,
                color: '#6B5E4F',
              }}>
                Nut Shell là studio chuyên tư vấn, thiết kế và thi công nội thất tại Việt Nam.
                Với hơn 10 năm đồng hành cùng từng ngôi nhà, chúng tôi tin rằng mỗi không gian
                đều mang một linh hồn riêng — và nhiệm vụ của chúng tôi là thức tỉnh nó bằng ánh sáng,
                chất liệu và những chi tiết được chọn lọc kỹ càng.
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  )
}
