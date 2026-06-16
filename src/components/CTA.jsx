/* ─── CTA — nền gradient tối, tiêu đề lớn + form liên hệ inline ─── */
import { useState, useRef, useEffect } from 'react'
import RevealOnScroll from '../ui/RevealOnScroll'

const INPUT_STYLE = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '14px',
  background: 'rgba(244,239,231,0.08)',
  border: '1px solid rgba(244,239,231,0.2)',
  color: '#F4EFE7',
  padding: '14px 18px',
  borderRadius: '4px',
  width: '100%',
  outline: 'none',
  transition: 'border-color .2s',
  appearance: 'none',
  WebkitAppearance: 'none',
}

const FOCUS_STYLE = { borderColor: '#E3D2B0' }
const BLUR_STYLE  = { borderColor: 'rgba(244,239,231,0.2)' }

const PROJECT_TYPES = [
  'Chọn loại dự án',
  'Nhà ở',
  'Biệt thự',
  'Quán cafe',
  'Văn phòng',
  'Công trình khác',
]

export default function CTA() {
  const [form, setForm]       = useState({ name: '', phone: '', type: '' })
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const peelRange = 380
      const progress = Math.max(0, Math.min(1, (window.scrollY - (maxScroll - peelRange)) / peelRange))
      el.style.transform = `translateY(${-progress * 72}px) scale(${1 - progress * 0.015})`
      el.style.boxShadow = progress > 0.01
        ? `0 ${progress * 56}px ${progress * 112}px rgba(0,0,0,${progress * 0.48})`
        : ''
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data:', form)
    setForm({ name: '', phone: '', type: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <div ref={sectionRef} style={{ borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px', willChange: 'transform' }}>
    <section id="lienhe" style={{ position: 'relative', padding: '148px 0', overflow: 'hidden', borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px' }}>

      {/* Layered dark background */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1A1208 0%, #3D2B1A 45%, #2A2018 100%)' }} />
      {/* Warm texture overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 22px, rgba(168,98,60,.04) 22px, rgba(168,98,60,.04) 23px)',
      }} />
      {/* Subtle vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,.35) 100%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative" style={{ zIndex: 1 }}>

        {/* 2-column layout: text left, form right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="lg:grid-cols-2"
        >

          {/* Left — text */}
          <div>
            <RevealOnScroll>
              <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '3px', color: '#B6A88F', marginBottom: '28px' }}>
                BẮT ĐẦU HÀNH TRÌNH
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={90}>
              <h2 style={{
                fontFamily: 'Marcellus, serif',
                fontSize: 'clamp(34px, 5vw, 68px)',
                lineHeight: 1.1, color: '#F4EFE7',
                marginBottom: '28px',
              }}>
                Biến không gian của bạn thành điều đáng nhớ.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={180}>
              <p style={{
                fontFamily: 'Jost, sans-serif', fontSize: '17px', fontWeight: 300,
                color: '#B6A88F', lineHeight: 1.85,
              }}>
                Hãy để chúng tôi lắng nghe câu chuyện của bạn. Buổi tư vấn đầu tiên hoàn toàn miễn phí.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right — form */}
          <RevealOnScroll delay={200}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

              <input
                type="text"
                name="name"
                placeholder="Họ và tên"
                value={form.name}
                onChange={handleChange}
                required
                style={INPUT_STYLE}
                onFocus={e => Object.assign(e.currentTarget.style, FOCUS_STYLE)}
                onBlur={e => Object.assign(e.currentTarget.style, BLUR_STYLE)}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Số điện thoại"
                value={form.phone}
                onChange={handleChange}
                required
                style={INPUT_STYLE}
                onFocus={e => Object.assign(e.currentTarget.style, FOCUS_STYLE)}
                onBlur={e => Object.assign(e.currentTarget.style, BLUR_STYLE)}
              />

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                required
                style={{
                  ...INPUT_STYLE,
                  color: form.type ? '#F4EFE7' : 'rgba(244,239,231,0.45)',
                  cursor: 'pointer',
                }}
                onFocus={e => Object.assign(e.currentTarget.style, FOCUS_STYLE)}
                onBlur={e => Object.assign(e.currentTarget.style, BLUR_STYLE)}
              >
                {PROJECT_TYPES.map((opt, i) => (
                  <option
                    key={opt}
                    value={i === 0 ? '' : opt}
                    disabled={i === 0}
                    style={{ background: '#2A2018', color: '#F4EFE7' }}
                  >
                    {opt}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '12px', letterSpacing: '2.5px',
                  background: '#E3D2B0', color: '#2A2018',
                  padding: '18px 38px', borderRadius: '999px',
                  border: 'none', cursor: 'pointer',
                  width: '100%',
                  transition: 'opacity .25s, transform .25s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '.82'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                GỬI YÊU CẦU
              </button>

              {submitted && (
                <p style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '14px',
                  color: '#B6A88F',
                  textAlign: 'center',
                  marginTop: '4px',
                }}>
                  Cảm ơn! Chúng tôi sẽ liên hệ trong 24 giờ.
                </p>
              )}

            </form>
          </RevealOnScroll>

        </div>
      </div>
    </section>
    </div>
  )
}
