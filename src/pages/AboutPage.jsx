/* ─── About Page — câu chuyện studio ─── */
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import RevealOnScroll from '../ui/RevealOnScroll'

const SERIF = { fontFamily: 'Lora, serif' }
const MONO  = { fontFamily: '"Space Mono", monospace' }
const JOST  = { fontFamily: '"Be Vietnam Pro", sans-serif' }

// Bảng màu chủ đạo của trang
const C = {
  brown:     '#6B3318',
  cream:     '#F0E8D8',
  sand:      '#DCC99B',
  accent:    '#9B5030',
  body:      '#5A3820',
  lightHead: '#F0E5CC',
  lightBody: '#D4B080',
  line:      'rgba(107,51,24,.16)',
  lineLight: 'rgba(244,239,231,.14)',
}

const LABEL = { ...MONO, fontSize: '10px', letterSpacing: '3px' }
const H2    = { ...SERIF, fontSize: 'clamp(30px, 4vw, 52px)', lineHeight: 1.15, fontWeight: 400 }
const BODY  = { ...JOST, fontSize: '16px', fontWeight: 300, lineHeight: 1.9 }

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const VALUES = [
  {
    num: '01',
    name: 'Tính xác thực',
    img: '/images/svc1.jpg',
    desc: 'Mỗi không gian chúng tôi tạo ra phản ánh đúng cá tính và lối sống của chủ nhân — không theo trào lưu, không copy mẫu có sẵn.',
  },
  {
    num: '02',
    name: 'Sự tỉ mỉ',
    img: '/images/svc2.jpg',
    desc: 'Từ góc chiếu sáng đến texture vải bọc — mọi chi tiết đều được cân nhắc kỹ lưỡng trước khi chốt phương án cuối cùng.',
  },
  {
    num: '03',
    name: 'Đồng hành dài lâu',
    img: '/images/svc3.jpg',
    desc: 'Mối quan hệ với khách hàng không kết thúc khi bàn giao. Chúng tôi ở đây cho mọi điều chỉnh nhỏ sau này.',
  },
]

// objectPosition giữ khuôn mặt trong khung khi ảnh gốc có nhiều khoảng trống
const TEAM = [
  { name: 'Hoàng Vân Anh',     role: 'FOUNDER', img: '/images/founder-1.jpeg', pos: 'center 72%' },
  { name: 'Phan Thị Kinh Anh', role: 'FOUNDER', img: '/images/founder-2.jpeg', pos: 'center 30%' },
  { name: null,                role: 'MEMBER',  img: '/images/member-1.jpeg',  pos: 'center 30%' },
  { name: null,                role: 'MEMBER',  img: '/images/member-2.jpeg',  pos: 'center 35%' },
]

const MILESTONES = [
  { year: '2017', title: 'Thành lập Nut Shell',      text: 'Khởi đầu từ xưởng nhỏ tại quận 1, TP.HCM' },
  { year: '2019', title: '100 dự án đầu tiên',       text: 'Mở rộng sang thiết kế không gian thương mại' },
  { year: '2021', title: 'Đội ngũ 15 người',         text: 'Nhận giải thưởng thiết kế nội thất toàn quốc' },
  { year: '2024', title: 'Vượt mốc 400 công trình',  text: 'Phủ rộng 8 tỉnh thành trên cả nước' },
]

// Ảnh nền dịch chậm hơn tốc độ cuộn
function useParallax(factor = 0.22) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion) return
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(0, ${window.scrollY * factor}px, 0) scale(1.08)`
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [factor])
  return ref
}

function SectionHead({ label, title, dark = false }) {
  return (
    <div style={{ borderBottom: `1px solid ${dark ? C.lineLight : C.line}`, paddingBottom: '28px', marginBottom: '56px' }}>
      {label && (
        <RevealOnScroll>
          <p style={{ ...LABEL, color: dark ? '#FFFFFF' : C.accent, marginBottom: '18px' }}>{label}</p>
        </RevealOnScroll>
      )}
      <RevealOnScroll delay={80}>
        <h2 style={{ ...H2, color: dark ? C.lightHead : C.brown }}>{title}</h2>
      </RevealOnScroll>
    </div>
  )
}

function ZoomImage({ src, alt, pos = 'center', ratio = '4/5' }) {
  return (
    <div style={{ aspectRatio: ratio, borderRadius: '2px', overflow: 'hidden', background: C.sand }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="about-zoom"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos }}
      />
    </div>
  )
}

export default function AboutPage() {
  const heroBg = useParallax(0.22)

  return (
    <main style={{ background: C.cream, paddingTop: '80px' }}>
      <style>{`
        .about-zoom { transition: transform .6s cubic-bezier(.2,.7,.2,1); }
        .about-zoom:hover { transform: scale(1.04); }
        .about-team img { filter: sepia(.35) saturate(.8); transition: filter .5s ease, transform .6s cubic-bezier(.2,.7,.2,1); }
        .about-team:hover img { filter: none; }
        .about-cta-btn { transition: opacity .2s, transform .2s; }
        .about-cta-btn:hover { opacity: .85; transform: translateY(-2px); }
        .about-cta-btn:focus-visible { outline: 2px solid ${C.lightHead}; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) {
          .about-zoom, .about-team img, .about-cta-btn { transition: none; }
          .about-zoom:hover, .about-cta-btn:hover { transform: none; }
        }
      `}</style>

      {/* ── 1. Hero — ảnh tràn màn hình ── */}
      <section style={{ position: 'relative', height: 'calc(100svh - 80px)', minHeight: '560px', overflow: 'hidden' }}>
        <div ref={heroBg} style={{ position: 'absolute', inset: '-8% 0 0 0', willChange: 'transform' }}>
          <img src="/images/hero.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, rgba(107,51,24,.45), rgba(107,51,24,.6) 45%, rgba(107,51,24,.9))` }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', textAlign: 'center', padding: '0 24px' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <RevealOnScroll>
              <p style={{ ...LABEL, color: '#FFFFFF' }}>VỀ CHÚNG TÔI</p>
            </RevealOnScroll>
          </div>
          <div style={{ paddingBottom: '64px', maxWidth: '720px' }}>
            <RevealOnScroll delay={120}>
              <h1 style={{ ...SERIF, fontSize: 'clamp(34px, 5.5vw, 72px)', lineHeight: 1.1, fontWeight: 400, color: C.lightHead, marginBottom: '24px' }}>
                Câu chuyện của Nut Shell Studio
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={220}>
              <p style={{ ...BODY, fontSize: '17px', color: C.lightBody, maxWidth: '560px', margin: '0 auto' }}>
                Được thành lập với niềm tin rằng mỗi không gian sống đều có thể trở thành một tác phẩm — nơi ánh sáng, chất liệu và cảm xúc hòa quyện thành một.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── 2. Nguồn gốc — tiêu đề trái, nội dung phải ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16" style={{ borderBottom: `1px solid ${C.line}`, paddingBottom: '64px', marginBottom: '64px' }}>
            <div className="lg:col-span-5">
              <RevealOnScroll>
                <p style={{ ...LABEL, color: C.accent, marginBottom: '18px' }}>NGUỒN GỐC</p>
              </RevealOnScroll>
              <RevealOnScroll delay={80}>
                <h2 style={{ ...H2, color: C.brown }}>Từ một xưởng nhỏ đến 400+ công trình</h2>
              </RevealOnScroll>
            </div>
            <div className="lg:col-span-7" style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '4px' }}>
              <RevealOnScroll delay={150}>
                <p style={{ ...BODY, color: C.body }}>
                  Năm 2017, hai nhà sáng lập Hoàng Vân Anh và Phan Thị Kinh Anh bắt đầu hành trình từ một xưởng thiết kế nhỏ tại quận 1, TP.HCM. Với triết lý "ít hơn nhưng có ý nghĩa hơn", mỗi dự án là bài toán cân bằng giữa vẻ đẹp thẩm mỹ và giá trị công năng thực sự.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={210}>
                <p style={{ ...BODY, color: C.body }}>
                  Hơn 7 năm sau, Nut Shell đã đồng hành cùng hơn 400 công trình — từ nhà ở, biệt thự đến không gian thương mại — nhưng vẫn giữ nguyên cam kết từ ngày đầu: thiết kế từ câu chuyện của bạn, không phải từ catalog.
                </p>
              </RevealOnScroll>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <RevealOnScroll>
              <ZoomImage src="/images/proj1.jpg" alt="Không gian do Nut Shell Studio thiết kế" ratio="1/1" />
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <ZoomImage src="/images/thiet_ke.jpg" alt="Đội ngũ Nut Shell trong quá trình thiết kế" ratio="1/1" />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── 3. Giá trị cốt lõi — thẻ có ảnh ── */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHead label="GIÁ TRỊ CỐT LÕI" title="Những điều chúng tôi tin tưởng" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            {VALUES.map((v, i) => (
              <RevealOnScroll key={v.num} delay={i * 100}>
                <div>
                  <ZoomImage src={v.img} alt={v.name} ratio="4/5" />
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', margin: '22px 0 10px' }}>
                    <span style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: C.accent }}>{v.num}</span>
                    <h3 style={{ ...SERIF, fontSize: '22px', fontWeight: 400, color: C.brown }}>{v.name}</h3>
                  </div>
                  <p style={{ ...BODY, fontSize: '15px', lineHeight: 1.8, color: C.body, maxWidth: '360px' }}>{v.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Hành trình — dạng bảng ── */}
      <section style={{ background: C.brown }} className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHead label="HÀNH TRÌNH" title="Những cột mốc đáng nhớ" dark />
          <div>
            {MILESTONES.map((m, i) => (
              <RevealOnScroll key={m.year} delay={i * 80}>
                <div
                  className="grid grid-cols-[72px_1fr] md:grid-cols-12 gap-x-6 gap-y-1"
                  style={{ padding: '26px 0', borderBottom: `1px solid ${C.lineLight}` }}
                >
                  <p className="md:col-span-2" style={{ ...SERIF, fontSize: '22px', color: '#FFFFFF', lineHeight: 1.3 }}>{m.year}</p>
                  <p className="md:col-span-4" style={{ ...SERIF, fontSize: '19px', color: C.lightHead, lineHeight: 1.4 }}>{m.title}</p>
                  <p className="col-start-2 md:col-start-auto md:col-span-6" style={{ ...BODY, fontSize: '15px', lineHeight: 1.7, color: C.lightBody }}>{m.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Dải ảnh — câu chuyện / không gian ── */}
      <section style={{ position: 'relative', height: 'clamp(440px, 85vh, 820px)', overflow: 'hidden' }}>
        <img src="/images/proj5.jpg" alt="Không gian sống do Nut Shell thiết kế" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(107,51,24,.55), rgba(107,51,24,.15) 50%, rgba(107,51,24,.55))' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: '48px', paddingBottom: '48px' }}>
          <RevealOnScroll>
            <p style={{ ...SERIF, fontSize: 'clamp(28px, 3.6vw, 48px)', color: C.lightHead, lineHeight: 1.1 }}>Câu chuyện của bạn</p>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            {/* pr-16 chừa chỗ cho nút liên hệ nổi ở góc phải */}
            <div className="pr-16" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px' }}>
              <p style={{ ...BODY, fontSize: '15px', color: C.lightHead, maxWidth: '340px' }}>
                Ít hơn nhưng có ý nghĩa hơn — mỗi chi tiết đều được thiết kế quanh cách bạn sống.
              </p>
              <p style={{ ...SERIF, fontSize: 'clamp(28px, 3.6vw, 48px)', color: C.lightHead, lineHeight: 1.1 }}>Không gian của bạn</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── 6. Đội ngũ — lưới đều ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHead label="ĐỘI NGŨ" title="Những người kiến tạo không gian" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-6">
            {TEAM.map((p, i) => (
              <RevealOnScroll key={p.img} delay={i * 90}>
                <div className="about-team">
                  <ZoomImage src={p.img} alt={p.name ? `${p.name} — ${p.role} Nut Shell` : 'Thành viên Nut Shell Studio'} pos={p.pos} ratio="3/4" />
                  {p.name && <h3 style={{ ...SERIF, fontSize: '19px', fontWeight: 400, color: C.brown, margin: '18px 0 4px' }}>{p.name}</h3>}
                  <p style={{ ...MONO, fontSize: '9.5px', letterSpacing: '2px', color: C.accent, marginTop: p.name ? 0 : '18px' }}>{p.role}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA — thẻ nâu trên nền ảnh ── */}
      <section style={{ position: 'relative', overflow: 'hidden' }} className="py-16 lg:py-24">
        <img src="/images/proj3.jpg" alt="" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(107,51,24,.25)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ position: 'relative' }}>
          <RevealOnScroll>
            <div style={{ background: C.brown, padding: 'clamp(32px, 4vw, 48px)', maxWidth: '440px', borderRadius: '2px' }}>
              <h2 style={{ ...SERIF, fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: C.lightHead, marginBottom: '18px', lineHeight: 1.2 }}>
                Sẵn sàng bắt đầu dự án của bạn?
              </h2>
              <p style={{ ...BODY, fontSize: '15px', color: C.lightBody, marginBottom: '32px', lineHeight: 1.8 }}>
                Buổi tư vấn đầu tiên hoàn toàn miễn phí — kể cho chúng tôi nghe về không gian bạn mơ ước.
              </p>
              <Link
                to="/lien-he"
                className="about-cta-btn"
                style={{
                  ...MONO, fontSize: '11px', letterSpacing: '2px',
                  background: C.sand, color: C.brown,
                  padding: '15px 32px', borderRadius: '999px',
                  textDecoration: 'none', display: 'inline-block', minHeight: '44px',
                }}
              >
                LIÊN HỆ TƯ VẤN →
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </main>
  )
}
