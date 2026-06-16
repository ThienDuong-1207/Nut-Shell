/* ─── Process — 2-column, 2 steps each ─── */
import RevealOnScroll from '../ui/RevealOnScroll'

const STEPS = [
  {
    num: '01',
    name: 'Lắng nghe & khảo sát',
    desc: 'Chúng tôi gặp gỡ, lắng nghe mong muốn và khảo sát thực địa để hiểu rõ không gian cũng như phong cách sống của bạn.',
  },
  {
    num: '02',
    name: 'Concept & 3D',
    desc: 'Định hình phong cách, lên bản vẽ concept và dựng hình 3D photorealistic để bạn hình dung không gian tương lai trước khi thi công.',
  },
  {
    num: '03',
    name: 'Thi công & giám sát',
    desc: 'Đội ngũ thi công chuyên nghiệp triển khai theo bản vẽ, kỹ sư giám sát hàng ngày đảm bảo chất lượng và tiến độ cam kết.',
  },
  {
    num: '04',
    name: 'Hoàn thiện & bàn giao',
    desc: 'Kiểm tra từng chi tiết, vệ sinh công trình và bàn giao kèm tài liệu bảo hành. Bạn chỉ cần bước vào và cảm nhận.',
  },
]

function Step({ step, delay }) {
  return (
    <RevealOnScroll delay={delay}>
      <div style={{
        borderTop: '1px solid rgba(42,32,24,.1)',
        paddingTop: '40px',
        paddingBottom: '48px',
      }}>
        {/* Ghost number */}
        <p style={{
          fontFamily: 'Lora, serif',
          fontSize: 'clamp(56px, 8vw, 112px)',
          lineHeight: .85,
          color: '#2A2018',
          opacity: .07,
          letterSpacing: '-3px',
          userSelect: 'none',
          marginBottom: '20px',
        }}>
          {step.num}
        </p>

        {/* Title */}
        <h3 style={{
          fontFamily: 'Lora, serif',
          fontSize: 'clamp(20px, 2vw, 28px)',
          color: '#2A2018',
          lineHeight: 1.2,
          marginBottom: '18px',
        }}>
          {step.name}
        </h3>

        {/* Divider */}
        <div style={{ width: '28px', height: '1px', background: 'rgba(42,32,24,.2)', marginBottom: '18px' }} />

        {/* Description */}
        <p style={{
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontSize: '15px', fontWeight: 300,
          color: '#6B5E4F', lineHeight: 1.85,
        }}>
          {step.desc}
        </p>
      </div>
    </RevealOnScroll>
  )
}

export default function Process() {
  return (
    <section id="quytrinh" style={{ background: '#F2EBDF', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <RevealOnScroll>
          <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '3px', color: '#8B7B6E', marginBottom: '18px' }}>
            QUY TRÌNH
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <h2 style={{
            fontFamily: 'Lora, serif',
            fontSize: 'clamp(32px, 4.5vw, 58px)',
            lineHeight: 1.15, color: '#2A2018',
            marginBottom: '72px', maxWidth: '500px',
          }}>
            Từ ý tưởng đến bàn giao
          </h2>
        </RevealOnScroll>

        {/* 2-column grid */}
        <div
          style={{ display: 'grid', gap: '0 80px' }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left column: steps 01 & 02 */}
          <div>
            <Step step={STEPS[0]} delay={0} />
            <Step step={STEPS[1]} delay={80} />
            <div style={{ borderTop: '1px solid rgba(42,32,24,.1)' }} />
          </div>

          {/* Right column: steps 03 & 04 */}
          <div>
            <Step step={STEPS[2]} delay={120} />
            <Step step={STEPS[3]} delay={200} />
            <div style={{ borderTop: '1px solid rgba(42,32,24,.1)' }} />
          </div>
        </div>

      </div>
    </section>
  )
}
