/* ─── CTA — gradient tối, form với stagger entrance + animated feedback ─── */
import { useState, useRef, useEffect } from 'react'
import RevealOnScroll from '../ui/RevealOnScroll'
import { sendContact, SEND_ERROR_TEXT } from '../lib/sendContact'

const MONO = { fontFamily: '"Be Vietnam Pro", sans-serif' }
const JOST = { fontFamily: '"Be Vietnam Pro", sans-serif' }

const INPUT_BASE = {
  ...JOST,
  fontSize: '14px',
  background: 'rgba(244,239,231,0.08)',
  border: '1px solid rgba(244,239,231,0.2)',
  color: '#F0E5CC',
  padding: '14px 18px',
  borderRadius: '4px',
  width: '100%',
  outline: 'none',
  transition: 'border-color .2s, box-shadow .2s, opacity .5s ease, transform .5s ease',
  appearance: 'none',
  WebkitAppearance: 'none',
}

const FOCUS_ON  = { borderColor: '#DCC99B', boxShadow: '0 0 0 3px rgba(220,201,155,.14)' }
const FOCUS_OFF = { borderColor: 'rgba(244,239,231,0.2)', boxShadow: 'none' }

const PROJECT_TYPES = [
  'Chọn loại dự án',
  'Nhà ở', 'Biệt thự', 'Quán cafe', 'Văn phòng', 'Công trình khác',
]

function Spinner() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" style={{ animation: 'spinCW .7s linear infinite', display: 'inline-block' }}>
      <circle cx="8.5" cy="8.5" r="6.5" stroke="rgba(107,51,24,.28)" strokeWidth="2" />
      <path d="M8.5 2A6.5 6.5 0 0 1 15 8.5" stroke="#6B3318" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function SuccessMark() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', animation: 'popIn .35s ease both' }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="10" cy="10" r="9" stroke="#DCC99B" strokeWidth="1.2" />
        <path
          d="M6 10L8.5 12.5L14 7"
          stroke="#DCC99B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ strokeDasharray: 14, animation: 'drawCheck .45s ease .2s both' }}
        />
      </svg>
      <p style={{ ...JOST, fontSize: '14px', color: '#D4B080' }}>
        Cảm ơn! Chúng tôi sẽ liên hệ trong 24 giờ.
      </p>
    </div>
  )
}

export default function CTA() {
  const [form, setForm]           = useState({ name: '', phone: '', type: '' })
  const [loading, setLoading]     = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]         = useState(false)
  const [visible, setVisible]     = useState(false)

  const sectionRef = useRef(null)
  const formRef    = useRef(null)

  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  /* Peel effect */
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

  /* Form stagger entrance */
  useEffect(() => {
    if (prefersReduced) { setVisible(true); return }
    const el = formRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [prefersReduced])

  const fieldStyle = (delay) => ({
    ...INPUT_BASE,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(14px)',
    transitionDelay: `${delay}ms`,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      await sendContact(`Yêu cầu tư vấn mới — ${form.name}`, {
        'Họ tên': form.name,
        'Số điện thoại': form.phone,
        'Loại dự án': form.type,
        'Nguồn': 'Form trang chủ',
      })
      setForm({ name: '', phone: '', type: '' })
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 6000)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div ref={sectionRef} style={{ borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px', willChange: 'transform' }}>
    <section id="lienhe" style={{ position: 'relative', padding: '148px 0', overflow: 'hidden', borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px' }}>

      {/* Layered dark background */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #3D1608 0%, #5A2810 45%, #9B5030 100%)' }} />
      {/* Grain */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat', backgroundSize: '128px 128px',
        opacity: .04, mixBlendMode: 'screen',
      }} />
      {/* Vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,.35) 100%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative" style={{ zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px', alignItems: 'center' }} className="lg:grid-cols-2">

          {/* Left — text */}
          <div>
            <RevealOnScroll>
              <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(34px, 5vw, 68px)', lineHeight: 1.1, color: '#F0E5CC', marginBottom: '28px', textWrap: 'balance' }}>
                Biến không gian của bạn thành điều đáng nhớ.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={180}>
              <p style={{ ...JOST, fontSize: '17px', fontWeight: 300, color: '#D4B080', lineHeight: 1.85 }}>
                Hãy để chúng tôi lắng nghe câu chuyện của bạn. Buổi tư vấn đầu tiên hoàn toàn miễn phí.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right — form */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

              <input
                type="text" name="name" placeholder="Họ và tên"
                value={form.name} onChange={handleChange} required
                style={fieldStyle(0)}
                onFocus={e => Object.assign(e.currentTarget.style, FOCUS_ON)}
                onBlur={e => Object.assign(e.currentTarget.style, FOCUS_OFF)}
              />

              <input
                type="tel" name="phone" placeholder="Số điện thoại"
                value={form.phone} onChange={handleChange} required
                style={fieldStyle(90)}
                onFocus={e => Object.assign(e.currentTarget.style, FOCUS_ON)}
                onBlur={e => Object.assign(e.currentTarget.style, FOCUS_OFF)}
              />

              <select
                name="type" value={form.type} onChange={handleChange} required
                style={{
                  ...fieldStyle(180),
                  color: form.type ? '#F0E5CC' : 'rgba(244,239,231,0.45)',
                  cursor: 'pointer',
                }}
                onFocus={e => Object.assign(e.currentTarget.style, FOCUS_ON)}
                onBlur={e => Object.assign(e.currentTarget.style, FOCUS_OFF)}
              >
                {PROJECT_TYPES.map((opt, i) => (
                  <option key={opt} value={i === 0 ? '' : opt} disabled={i === 0}
                    style={{ background: '#6B3318', color: '#F0E5CC' }}>
                    {opt}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                disabled={loading}
                style={{
                  ...MONO, fontSize: '12px', letterSpacing: '2.5px',
                  background: '#DCC99B', color: '#6B3318',
                  padding: '18px 38px', borderRadius: '999px',
                  border: 'none', cursor: loading ? 'wait' : 'pointer',
                  width: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  transition: 'opacity .25s, transform .25s',
                  ...(!prefersReduced ? {
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(14px)',
                    transitionProperty: 'opacity, transform',
                    transitionDuration: '.5s',
                    transitionDelay: '270ms',
                  } : {}),
                }}
                onMouseEnter={e => { if (!loading) { e.currentTarget.style.opacity = '.82'; e.currentTarget.style.transform = 'translateY(-3px)' } }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {loading ? <Spinner /> : 'GỬI YÊU CẦU'}
              </button>

              {submitted && <SuccessMark />}
              {error && (
                <p role="alert" style={{ ...JOST, fontSize: '14px', color: '#F2B8A0', textAlign: 'center' }}>
                  {SEND_ERROR_TEXT}
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}
