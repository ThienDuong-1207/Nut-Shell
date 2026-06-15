/* ─── Services — 3 card dịch vụ ─── */
import RevealOnScroll from '../ui/RevealOnScroll'

const SERVICES = [
  {
    num: '01',
    name: 'Thiết kế & thi công trọn gói',
    img: '/images/svc1.jpg',
    desc: 'Từ bản vẽ khái niệm đến ngày bàn giao chìa khóa — chúng tôi đồng hành toàn bộ hành trình, đảm bảo chất lượng và tiến độ tuyệt đối.',
  },
  {
    num: '02',
    name: 'Tư vấn thiết kế kiến trúc',
    img: '/images/svc2.jpg',
    desc: 'Định hướng phong cách, lập kế hoạch không gian, chọn vật liệu và bảng màu phù hợp với cá tính và ngân sách của bạn.',
  },
  {
    num: '03',
    name: 'Cải tạo không gian',
    img: '/images/svc3.jpg',
    desc: 'Biến diện mạo cũ kỹ thành tổ ấm hiện đại mà không cần phá dỡ toàn bộ — tối ưu chi phí, tối đa giá trị thẩm mỹ.',
  },
]

export default function Services() {
  return (
    <section id="dichvu" style={{ background: '#EAE0CE', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <RevealOnScroll>
          <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '18px' }}>
            DỊCH VỤ
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <h2 style={{
            fontFamily: 'Marcellus, serif',
            fontSize: 'clamp(32px, 4.5vw, 58px)',
            lineHeight: 1.15, color: '#2A2018',
            marginBottom: '72px', maxWidth: '540px',
          }}>
            Ba cách chúng tôi kiến tạo không gian
          </h2>
        </RevealOnScroll>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((svc, i) => (
            <RevealOnScroll key={svc.num} delay={i * 100}>
              <ServiceCard svc={svc} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ svc }) {
  return (
    <div
      style={{
        background: '#F2EBDF',
        borderRadius: '13px',
        overflow: 'hidden',
        boxShadow: '0 2px 20px rgba(42,32,24,.06)',
        transition: 'transform .35s ease, box-shadow .35s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.boxShadow = '0 10px 44px rgba(42,32,24,.13)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 20px rgba(42,32,24,.06)'
      }}
    >
      {/* Image */}
      <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
        <img
          src={svc.img} alt={svc.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s ease' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '28px 28px 34px' }}>
        <p style={{ fontFamily: 'Marcellus, serif', fontSize: '40px', lineHeight: 1, color: '#A8623C', opacity: .25, marginBottom: '10px' }}>
          {svc.num}
        </p>
        <h3 style={{ fontFamily: 'Marcellus, serif', fontSize: '21px', color: '#2A2018', marginBottom: '14px', lineHeight: 1.3 }}>
          {svc.name}
        </h3>
        <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '15px', fontWeight: 300, color: '#6B5E4F', lineHeight: 1.8 }}>
          {svc.desc}
        </p>
      </div>
    </div>
  )
}
