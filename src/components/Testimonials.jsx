/* ─── Testimonials — full-width image overlay + brand marquee ─── */

const MONO  = { fontFamily: '"Space Mono", monospace' }
const SERIF = { fontFamily: 'Lora, serif' }

const TESTIMONIALS = [
  {
    quote: 'Không gian phòng khách nhà tôi hoàn toàn thay đổi sau khi Nut Shell thiết kế. Từng chi tiết đều được cân nhắc kỹ lưỡng, ánh sáng và vật liệu hài hòa với nhau hoàn hảo.',
    name: 'Chị Minh Anh',
    role: 'Chủ biệt thự, Thủ Đức',
    initials: 'MA',
  },
  {
    quote: 'Team rất chuyên nghiệp, lắng nghe và hiểu ý tưởng ngay từ buổi đầu tư vấn. Quán cafe của tôi giờ có identity riêng biệt, khách hàng liên tục hỏi về đơn vị thiết kế.',
    name: 'Anh Tuấn Kiệt',
    role: 'Founder, Café TK Quận 1',
    initials: 'TK',
  },
  {
    quote: 'Họ không chỉ thiết kế đẹp mà còn tính toán rất kỹ về công năng sử dụng. Ngôi nhà vừa sang trọng vừa thực sự tiện nghi cho cả gia đình.',
    name: 'Chị Thanh Hà',
    role: 'Chủ nhà, Nhà phố Bình Dương',
    initials: 'TH',
  },
  {
    quote: 'Nut Shell đã biến nhà hàng của chúng tôi thành một trải nghiệm ẩm thực hoàn chỉnh. Khách hàng không chỉ đến ăn mà còn ở lại vì không gian quá đẹp.',
    name: 'Anh Việt Hoàng',
    role: 'Founder, Nhà hàng Bloom Q.7',
    initials: 'VH',
  },
]

const BRANDS = [
  'Vinhomes', 'Sun Group', 'Masterise Homes', 'Phú Mỹ Hưng',
  'Novaland', 'Nam Long Group', 'Hưng Thịnh Corp', 'CapitaLand Vietnam',
]

export default function Testimonials() {
  return (
    <section style={{ background: '#2A2018', overflow: 'hidden' }}>

      {/* ── Heading ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ paddingTop: '96px', paddingBottom: '64px' }}>
        <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '16px' }}>
          KHÁCH HÀNG NÓI GÌ
        </p>
        <h2 style={{ ...SERIF, fontSize: 'clamp(32px, 4vw, 54px)', color: '#F4EFE7', lineHeight: 1.1 }}>
          Tin tưởng từ những<br />không gian thật
        </h2>
      </div>

      {/* ── Full-width image with glass cards ── */}
      <div style={{
        backgroundImage: 'url(/images/proj2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        position: 'relative',
      }}>
        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(42,32,24,.42) 0%, rgba(42,32,24,.22) 50%, rgba(42,32,24,.52) 100%)',
        }} />

        {/* Cards grid */}
        <div
          className="max-w-6xl mx-auto px-6 lg:px-12"
          style={{ position: 'relative', zIndex: 1, paddingTop: '72px', paddingBottom: '72px' }}
        >
          <div
            style={{ display: 'grid', gap: '12px' }}
            className="lg:grid-cols-2"
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{
                background: 'rgba(242,235,223,.84)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                borderRadius: '4px',
                padding: '32px 28px',
              }}>
                {/* Quote */}
                <p style={{
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  fontSize: '14px', fontWeight: 300,
                  color: '#2A2018', lineHeight: 1.9,
                  marginBottom: '28px',
                }}>
                  "{t.quote}"
                </p>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '50%',
                    background: '#E3D2B0', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ ...MONO, fontSize: '11px', color: '#2A2018', fontWeight: 700 }}>
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 600, fontSize: '14px', color: '#2A2018', marginBottom: '3px' }}>
                      {t.name}
                    </p>
                    <p style={{ ...MONO, fontSize: '9px', letterSpacing: '1.5px', color: '#6B5E4F' }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Brand marquee ── */}
      <div style={{
        borderTop: '1px solid rgba(244,239,231,.07)',
        padding: '32px 0',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 28s linear infinite',
        }}>
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <span style={{
                ...MONO,
                fontSize: '10px', letterSpacing: '3.5px',
                color: 'rgba(244,239,231,.25)',
                padding: '0 44px',
                whiteSpace: 'nowrap',
              }}>
                {brand.toUpperCase()}
              </span>
              <span style={{
                width: '3px', height: '3px', borderRadius: '50%',
                background: 'rgba(244,239,231,.1)',
                flexShrink: 0,
              }} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
