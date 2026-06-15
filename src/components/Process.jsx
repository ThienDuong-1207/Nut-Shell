/* ─── Process — 4 bước quy trình ─── */
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

export default function Process() {
  return (
    <section id="quytrinh" style={{ background: '#F2EBDF', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <RevealOnScroll>
          <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '18px' }}>
            QUY TRÌNH
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <h2 style={{
            fontFamily: 'Marcellus, serif',
            fontSize: 'clamp(32px, 4.5vw, 58px)',
            lineHeight: 1.15, color: '#2A2018',
            marginBottom: '80px', maxWidth: '500px',
          }}>
            Từ ý tưởng đến bàn giao
          </h2>
        </RevealOnScroll>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {STEPS.map((step, i) => (
            <RevealOnScroll key={step.num} delay={i * 90}>
              <div>
                {/* Big number */}
                <p style={{ fontFamily: 'Marcellus, serif', fontSize: '68px', lineHeight: 1, color: '#A8623C', opacity: .18, marginBottom: '18px' }}>
                  {step.num}
                </p>
                {/* Accent rule */}
                <div style={{ width: '28px', height: '2px', background: '#A8623C', marginBottom: '18px' }} />
                <h3 style={{ fontFamily: 'Marcellus, serif', fontSize: '20px', color: '#2A2018', marginBottom: '12px', lineHeight: 1.3 }}>
                  {step.name}
                </h3>
                <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '14.5px', fontWeight: 300, color: '#6B5E4F', lineHeight: 1.85 }}>
                  {step.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
