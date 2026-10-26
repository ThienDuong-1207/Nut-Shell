/* ─── Services — story scroll (desktop) / stacked cards (mobile) ─── */
import { useRef, useState, useEffect } from 'react'

const SERVICES = [
  {
    num: '01',
    tag: 'FULL-SERVICE',
    name: 'Thiết kế & thi công trọn gói',
    img: '/images/svc1.jpg',
    imgPosition: 'center center',
    desc: 'Từ bản vẽ khái niệm đến ngày bàn giao chìa khóa — chúng tôi đồng hành toàn bộ hành trình, đảm bảo chất lượng và tiến độ tuyệt đối.',
  },
  {
    num: '02',
    tag: 'CONSULTING',
    name: 'Tư vấn thiết kế kiến trúc',
    img: '/images/thiet_ke.jpg',
    imgPosition: 'center top',
    desc: 'Định hướng phong cách, lập kế hoạch không gian, chọn vật liệu và bảng màu phù hợp với cá tính và ngân sách của bạn.',
  },
]

export default function Services() {
  const storyRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = storyRef.current
    if (!el) return
    const onScroll = () => {
      const newActive = Math.round(el.scrollTop / window.innerHeight)
      setActive(Math.min(newActive, SERVICES.length - 1))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const svc = SERVICES[active]

  return (
    <section id="dichvu">

      {/* ── DESKTOP: scroll-snap container ── */}
      <div
        ref={storyRef}
        className="hidden lg:block svc-snap"
        style={{ height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory' }}
      >
        {/* height:0 keeps sticky panel out of scroll-flow so snap spacers set the scroll range */}
        <div style={{ position: 'sticky', top: 0, height: 0, zIndex: 1 }}>
        <div style={{ height: '100vh', display: 'flex', background: '#DCC99B', overflow: 'hidden' }}>

          {/* Left text panel */}
          <div style={{
            width: '46%',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '0 64px 0 clamp(40px, 8vw, 120px)',
          }}>
            <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '3px', color: '#6B3318', marginBottom: '20px' }}>
              DỊCH VỤ
            </p>

            <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(26px, 3vw, 44px)', lineHeight: 1.2, color: '#6B3318', marginBottom: '52px', maxWidth: '400px' }}>
              Hai cách chúng tôi kiến tạo không gian
            </h2>

            {/* Animated service block — key forces remount on change */}
            <div key={active} style={{ animation: 'svcSlideIn .52s cubic-bezier(.25,.1,.25,1) both' }}>
              <p style={{
                fontFamily: 'Lora, serif',
                fontSize: 'clamp(72px, 9vw, 120px)',
                lineHeight: 1, color: '#6B3318', opacity: 0.08,
                marginBottom: '-8px', letterSpacing: '-3px', userSelect: 'none',
              }}>
                {svc.num}
              </p>
              <h3 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(20px, 2.2vw, 32px)', color: '#6B3318', marginBottom: '16px', lineHeight: 1.25 }}>
                {svc.name}
              </h3>
              <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '15px', fontWeight: 300, color: '#5A3820', lineHeight: 1.95, maxWidth: '370px' }}>
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
                    background: i === active ? '#9B5030' : 'rgba(107,51,24,.22)',
                    borderRadius: '1px',
                    transition: 'width .45s ease, background .45s ease',
                  }} />
                  <p style={{
                    fontFamily: '"Space Mono", monospace', fontSize: '9px', letterSpacing: '1.5px',
                    color: i === active ? '#9B5030' : '#6B3318',
                    transition: 'color .45s ease',
                  }}>
                    {s.tag}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image panel — sable bg for contrast */}
          <div style={{ width: '54%', position: 'relative', overflow: 'hidden', background: '#6B3318' }}>
            {SERVICES.map((s, i) => (
              <img
                key={s.num}
                src={s.img}
                alt={s.name}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: s.imgPosition,
                  clipPath: i === active ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
                  zIndex: i === active ? 2 : 1,
                  transition: 'clip-path 0.84s cubic-bezier(.77,0,.18,1)',
                  willChange: 'clip-path',
                }}
              />
            ))}
            {/* Soft vignette at left edge (sandcastle bleed) — above images */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 3,
              background: 'linear-gradient(to right, rgba(220,201,155,.22) 0%, transparent 14%)',
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
                background: i === active ? '#9B5030' : '#D4C7B0',
                transition: 'height .45s ease, background .45s ease',
              }} />
            ))}
          </div>

        </div>
        </div>{/* end sticky wrapper */}

        {/* Snap points — one per service, define scroll range */}
        {SERVICES.map((_, i) => (
          <div key={i} style={{ height: '100vh', scrollSnapAlign: 'start', flexShrink: 0 }} />
        ))}
      </div>

      {/* ── MOBILE: stacked cards ── */}
      <div className="lg:hidden" style={{ background: '#DCC99B', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '3px', color: '#6B3318', marginBottom: '16px' }}>
            DỊCH VỤ
          </p>
          <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 7vw, 40px)', lineHeight: 1.2, color: '#6B3318', marginBottom: '40px', maxWidth: '380px' }}>
            Hai cách chúng tôi kiến tạo không gian
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {SERVICES.map(s => (
              <div key={s.num} style={{ background: '#F0E8D8', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img src={s.img} alt={s.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.imgPosition }} />
                </div>
                <div style={{ padding: '24px' }}>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '40px', color: '#6B3318', opacity: 0.12, lineHeight: 1, marginBottom: '8px' }}>{s.num}</p>
                  <h3 style={{ fontFamily: 'Lora, serif', fontSize: '20px', color: '#6B3318', marginBottom: '10px', lineHeight: 1.3 }}>{s.name}</h3>
                  <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '14px', fontWeight: 300, color: '#5A3820', lineHeight: 1.85 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
