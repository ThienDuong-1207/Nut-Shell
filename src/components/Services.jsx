/* ─── Services — story scroll (desktop) / stacked cards (mobile) ─── */
import { useRef, useState, useEffect } from 'react'

const SERVICES = [
  {
    num: '01',
    tag: 'FULL-SERVICE',
    name: 'Thiết kế & thi công trọn gói',
    img: '/images/svc1.jpg',
    desc: 'Từ bản vẽ khái niệm đến ngày bàn giao chìa khóa — chúng tôi đồng hành toàn bộ hành trình, đảm bảo chất lượng và tiến độ tuyệt đối.',
  },
  {
    num: '02',
    tag: 'CONSULTING',
    name: 'Tư vấn thiết kế kiến trúc',
    img: '/images/thiet_ke.jpg',
    desc: 'Định hướng phong cách, lập kế hoạch không gian, chọn vật liệu và bảng màu phù hợp với cá tính và ngân sách của bạn.',
  },
  {
    num: '03',
    tag: 'RENOVATION',
    name: 'Cải tạo không gian',
    img: '/images/svc3.jpg',
    desc: 'Biến diện mạo cũ kỹ thành tổ ấm hiện đại mà không cần phá dỡ toàn bộ — tối ưu chi phí, tối đa giá trị thẩm mỹ.',
  },
]

export default function Services() {
  const storyRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = storyRef.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const scrolled = -rect.top
      const total = rect.height - window.innerHeight
      if (scrolled <= 0) { setActive(0); return }
      if (scrolled >= total) { setActive(SERVICES.length - 1); return }
      setActive(Math.floor((scrolled / total) * SERVICES.length))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const svc = SERVICES[active]

  return (
    <section id="dichvu">

      {/* ── DESKTOP: story scroll ── */}
      <div
        ref={storyRef}
        className="hidden lg:block"
        style={{ height: `${SERVICES.length * 100}vh`, position: 'relative' }}
      >
        <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', background: '#F2EBDF', overflow: 'hidden' }}>

          {/* Left text panel */}
          <div style={{
            width: '46%',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '0 64px 0 clamp(40px, 8vw, 120px)',
          }}>
            <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '3px', color: '#8B7B6E', marginBottom: '20px' }}>
              DỊCH VỤ
            </p>

            <h2 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(26px, 3vw, 44px)', lineHeight: 1.2, color: '#2A2018', marginBottom: '52px', maxWidth: '400px' }}>
              Ba cách chúng tôi kiến tạo không gian
            </h2>

            {/* Animated service block — key forces remount on change */}
            <div key={active} style={{ animation: 'svcIn .45s ease both' }}>
              <p style={{
                fontFamily: 'Marcellus, serif',
                fontSize: 'clamp(72px, 9vw, 120px)',
                lineHeight: 1, color: '#2A2018', opacity: 0.08,
                marginBottom: '-8px', letterSpacing: '-3px', userSelect: 'none',
              }}>
                {svc.num}
              </p>
              <h3 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(20px, 2.2vw, 32px)', color: '#2A2018', marginBottom: '16px', lineHeight: 1.25 }}>
                {svc.name}
              </h3>
              <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '15px', fontWeight: 300, color: '#6B5E4F', lineHeight: 1.95, maxWidth: '370px' }}>
                {svc.desc}
              </p>
            </div>

            {/* Progress bars */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '52px', alignItems: 'flex-start' }}>
              {SERVICES.map((s, i) => (
                <div key={s.num} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{
                    height: '2px',
                    width: i === active ? '52px' : '24px',
                    background: i === active ? '#A8623C' : '#D4C7B0',
                    borderRadius: '1px',
                    transition: 'width .45s ease, background .45s ease',
                  }} />
                  <p style={{
                    fontFamily: '"Space Mono", monospace', fontSize: '9px', letterSpacing: '1.5px',
                    color: i === active ? '#A8623C' : '#B6A88F',
                    transition: 'color .45s ease',
                  }}>
                    {s.tag}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image panel */}
          <div style={{ width: '54%', position: 'relative', overflow: 'hidden' }}>
            {SERVICES.map((s, i) => (
              <img
                key={s.num}
                src={s.img}
                alt={s.name}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%', objectFit: 'cover',
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? 'scale(1)' : 'scale(1.05)',
                  transition: 'opacity .75s ease, transform .75s ease',
                }}
              />
            ))}
            {/* Soft vignette at edges */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, rgba(242,235,223,.18) 0%, transparent 12%, transparent 85%, rgba(242,235,223,.06) 100%)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Vertical progress — right edge */}
          <div style={{
            position: 'absolute', right: '24px', top: '50%', transform: 'translateY(-50%)',
            display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center',
          }}>
            {SERVICES.map((_, i) => (
              <div key={i} style={{
                width: '2px',
                height: i === active ? '36px' : '12px',
                borderRadius: '1px',
                background: i === active ? '#A8623C' : '#D4C7B0',
                transition: 'height .45s ease, background .45s ease',
              }} />
            ))}
          </div>

        </div>
      </div>

      {/* ── MOBILE: stacked cards ── */}
      <div className="lg:hidden" style={{ background: '#EAE0CE', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '3px', color: '#8B7B6E', marginBottom: '16px' }}>
            DỊCH VỤ
          </p>
          <h2 style={{ fontFamily: 'Marcellus, serif', fontSize: 'clamp(28px, 7vw, 40px)', lineHeight: 1.2, color: '#2A2018', marginBottom: '40px', maxWidth: '380px' }}>
            Ba cách chúng tôi kiến tạo không gian
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {SERVICES.map(s => (
              <div key={s.num} style={{ background: '#F2EBDF', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img src={s.img} alt={s.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '24px' }}>
                  <p style={{ fontFamily: 'Marcellus, serif', fontSize: '40px', color: '#2A2018', opacity: 0.12, lineHeight: 1, marginBottom: '8px' }}>{s.num}</p>
                  <h3 style={{ fontFamily: 'Marcellus, serif', fontSize: '20px', color: '#2A2018', marginBottom: '10px', lineHeight: 1.3 }}>{s.name}</h3>
                  <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '14px', fontWeight: 300, color: '#6B5E4F', lineHeight: 1.85 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
