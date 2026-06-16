/* ─── About Page — câu chuyện studio ─── */
import { Link } from 'react-router-dom'
import RevealOnScroll from '../ui/RevealOnScroll'

const SERIF = { fontFamily: 'Lora, serif' }
const MONO  = { fontFamily: '"Space Mono", monospace' }
const JOST  = { fontFamily: '"Be Vietnam Pro", sans-serif' }

const VALUES = [
  {
    num: '01',
    name: 'Tính xác thực',
    desc: 'Mỗi không gian chúng tôi tạo ra phản ánh đúng cá tính và lối sống của chủ nhân — không theo trào lưu, không copy mẫu có sẵn.',
  },
  {
    num: '02',
    name: 'Sự tỉ mỉ',
    desc: 'Từ góc chiếu sáng đến texture vải bọc — mọi chi tiết đều được cân nhắc kỹ lưỡng trước khi chốt phương án cuối cùng.',
  },
  {
    num: '03',
    name: 'Đồng hành dài lâu',
    desc: 'Mối quan hệ với khách hàng không kết thúc khi bàn giao. Chúng tôi ở đây cho mọi điều chỉnh nhỏ sau này.',
  },
]

const TEAM = [
  {
    name: 'Hoàng Vân Anh',
    role: 'Nhà thiết kế sáng lập',
    img: '/projects/nha-o/indochine-cover.jpg',
    desc: 'Tốt nghiệp kiến trúc ĐH Kiến trúc TP.HCM, 12 năm kinh nghiệm thiết kế nội thất cao cấp.',
  },
  {
    name: 'Trần Minh Khoa',
    role: 'Kiến trúc sư trưởng',
    img: '/projects/cafe/nina-cover.jpg',
    desc: 'Chuyên gia về không gian thương mại, đã thiết kế hơn 80 quán cafe và nhà hàng tại Việt Nam.',
  },
  {
    name: 'Lê Thùy Linh',
    role: 'Thiết kế nội thất',
    img: '/projects/nha-o/wabi-cover.jpg',
    desc: 'Chuyên sâu về phong cách Wabi-Sabi và tối giản châu Á, mang chất liệu tự nhiên vào từng không gian.',
  },
]

const MILESTONES = [
  { year: '2017', text: 'Thành lập Nut Shell từ xưởng nhỏ tại quận 1, TP.HCM' },
  { year: '2019', text: 'Hoàn thành 100 dự án đầu tiên, mở rộng sang thiết kế thương mại' },
  { year: '2021', text: 'Đội ngũ lên 15 người, nhận giải thưởng thiết kế nội thất toàn quốc' },
  { year: '2024', text: 'Vượt mốc 400 công trình, phủ rộng 8 tỉnh thành trên cả nước' },
]

export default function AboutPage() {
  return (
    <main style={{ background: '#F2EBDF', paddingTop: '80px' }}>

      {/* ── Hero banner ── */}
      <section style={{ background: '#2A2018', padding: '100px 0 88px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '20px' }}>
              VỀ CHÚNG TÔI
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <h1 style={{ ...SERIF, fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1.1, color: '#F4EFE7', maxWidth: '680px', marginBottom: '32px' }}>
              Câu chuyện của Nut Shell Studio
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={160}>
            <p style={{ ...JOST, fontSize: '17px', fontWeight: 300, color: '#B6A88F', lineHeight: 1.9, maxWidth: '540px' }}>
              Được thành lập với niềm tin rằng mỗi không gian sống đều có thể trở thành một tác phẩm — nơi ánh sáng, chất liệu và cảm xúc hòa quyện thành một.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Founder story ── */}
      <section style={{ background: '#F2EBDF', padding: '120px 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <RevealOnScroll>
                <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '20px' }}>
                  NGUỒN GỐC
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={80}>
                <h2 style={{ ...SERIF, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.2, color: '#2A2018', marginBottom: '32px' }}>
                  Từ một xưởng nhỏ đến 400+ công trình
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={150}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '28px', marginBottom: '28px' }}>
                  <div style={{ width: '2px', flexShrink: 0, height: '56px', background: 'linear-gradient(to bottom, #A8623C, transparent)', marginTop: '4px' }} />
                  <p style={{ ...JOST, fontSize: '16px', fontWeight: 300, color: '#6B5E4F', lineHeight: 1.9 }}>
                    Năm 2017, kiến trúc sư Hoàng Vân Anh bắt đầu hành trình từ một xưởng thiết kế nhỏ tại quận 1, TP.HCM. Với triết lý "ít hơn nhưng có ý nghĩa hơn", mỗi dự án là bài toán cân bằng giữa vẻ đẹp thẩm mỹ và giá trị công năng thực sự.
                  </p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={210}>
                <p style={{ ...JOST, fontSize: '16px', fontWeight: 300, color: '#6B5E4F', lineHeight: 1.9 }}>
                  Hơn 7 năm sau, Nut Shell đã đồng hành cùng hơn 400 công trình — từ nhà ở, biệt thự đến không gian thương mại — nhưng vẫn giữ nguyên cam kết từ ngày đầu: thiết kế từ câu chuyện của bạn, không phải từ catalog.
                </p>
              </RevealOnScroll>
            </div>

            {/* Image */}
            <RevealOnScroll delay={100}>
              <div style={{ aspectRatio: '4/5', borderRadius: '2px', overflow: 'hidden' }}>
                <img
                  src="/images/team1.jpg"
                  alt="Nut Shell Studio workspace"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── Milestones ── */}
      <section style={{ background: '#2A2018', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '20px' }}>
              HÀNH TRÌNH
            </p>
          </RevealOnScroll>
          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {MILESTONES.map((m, i) => (
              <RevealOnScroll key={m.year} delay={i * 80}>
                <div style={{
                  display: 'flex', gap: '40px', alignItems: 'flex-start',
                  padding: '32px 0',
                  borderBottom: i < MILESTONES.length - 1 ? '1px solid rgba(244,239,231,.08)' : 'none',
                }}>
                  <p style={{ ...SERIF, fontSize: 'clamp(28px, 3vw, 42px)', color: '#A8623C', opacity: 0.6, lineHeight: 1, flexShrink: 0, width: '80px' }}>
                    {m.year}
                  </p>
                  <p style={{ ...JOST, fontSize: '16px', fontWeight: 300, color: '#B6A88F', lineHeight: 1.8, paddingTop: '6px' }}>
                    {m.text}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ background: '#EAE0CE', padding: '120px 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '20px' }}>
              GIÁ TRỊ CỐT LÕI
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <h2 style={{ ...SERIF, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.15, color: '#2A2018', marginBottom: '72px', maxWidth: '480px' }}>
              Những điều chúng tôi tin tưởng
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {VALUES.map((v, i) => (
              <RevealOnScroll key={v.num} delay={i * 100}>
                <div>
                  <p style={{ ...SERIF, fontSize: '64px', color: '#A8623C', opacity: 0.12, lineHeight: 1, marginBottom: '16px' }}>{v.num}</p>
                  <div style={{ width: '28px', height: '2px', background: '#A8623C', marginBottom: '16px' }} />
                  <h3 style={{ ...SERIF, fontSize: '22px', color: '#2A2018', marginBottom: '12px' }}>{v.name}</h3>
                  <p style={{ ...JOST, fontSize: '15px', fontWeight: 300, color: '#6B5E4F', lineHeight: 1.85 }}>{v.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ background: '#F2EBDF', padding: '120px 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealOnScroll>
            <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '20px' }}>
              ĐỘI NGŨ
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <h2 style={{ ...SERIF, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.15, color: '#2A2018', marginBottom: '72px', maxWidth: '420px' }}>
              Những người kiến tạo không gian
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM.map((member, i) => (
              <RevealOnScroll key={member.name} delay={i * 100}>
                <div>
                  <div style={{ aspectRatio: '3/4', borderRadius: '2px', overflow: 'hidden', marginBottom: '22px' }}>
                    <img
                      src={member.img}
                      alt={member.name}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .55s ease' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <h3 style={{ ...SERIF, fontSize: '20px', color: '#2A2018', marginBottom: '6px' }}>{member.name}</h3>
                  <p style={{ ...MONO, fontSize: '9.5px', letterSpacing: '2px', color: '#A8623C', marginBottom: '12px' }}>
                    {member.role.toUpperCase()}
                  </p>
                  <p style={{ ...JOST, fontSize: '14px', fontWeight: 300, color: '#6B5E4F', lineHeight: 1.8 }}>{member.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#2A2018', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ textAlign: 'center' }}>
          <RevealOnScroll>
            <h2 style={{ ...SERIF, fontSize: 'clamp(28px, 4vw, 52px)', color: '#F4EFE7', marginBottom: '20px', lineHeight: 1.2 }}>
              Sẵn sàng bắt đầu dự án của bạn?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p style={{ ...JOST, fontSize: '16px', fontWeight: 300, color: '#B6A88F', marginBottom: '40px', lineHeight: 1.8 }}>
              Buổi tư vấn đầu tiên hoàn toàn miễn phí.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={180}>
            <Link
              to="/lien-he"
              style={{
                ...MONO, fontSize: '11px', letterSpacing: '2px',
                background: '#E3D2B0', color: '#2A2018',
                padding: '14px 36px', borderRadius: '999px',
                textDecoration: 'none', display: 'inline-block',
                transition: 'opacity .2s, transform .2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '.82'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              LIÊN HỆ TƯ VẤN →
            </Link>
          </RevealOnScroll>
        </div>
      </section>

    </main>
  )
}
