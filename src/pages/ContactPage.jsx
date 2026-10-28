/* ─── Contact Page — full layout standalone ─── */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sendContact, SEND_ERROR_TEXT } from '../lib/sendContact'

const MONO = { fontFamily: '"Be Vietnam Pro", sans-serif' }

const INPUT_STYLE = {
  fontFamily: '"Be Vietnam Pro", sans-serif',
  fontSize: '15px',
  background: '#fff',
  border: '1px solid rgba(42,32,24,.18)',
  color: '#6B3318',
  padding: '14px 18px',
  borderRadius: '4px',
  width: '100%',
  outline: 'none',
  transition: 'border-color .2s',
  appearance: 'none',
  WebkitAppearance: 'none',
  boxSizing: 'border-box',
}

const PROJECT_TYPES = [
  'Chọn loại dự án',
  'Nhà ở',
  'Biệt thự / Villa',
  'Quán cafe',
  'Nhà hàng',
  'Văn phòng',
  'Công trình khác',
]

const BUDGETS = [
  'Chọn ngân sách dự kiến',
  'Dưới 200 triệu',
  '200 – 500 triệu',
  '500 triệu – 1 tỷ',
  '1 – 2 tỷ',
  'Trên 2 tỷ',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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
        email: form.email,
        'Loại dự án': form.type,
        'Ngân sách': form.budget,
        'Mô tả': form.message,
        'Nguồn': 'Trang Liên hệ',
      })
      setForm({ name: '', phone: '', email: '', type: '', budget: '', message: '' })
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 8000)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const focusStyle = { borderColor: '#6B3318' }
  const blurStyle = { borderColor: 'rgba(42,32,24,.18)' }

  return (
    <main style={{ background: '#F0E8D8', minHeight: '100vh', paddingTop: '88px' }}>

      {/* Page Header */}
      <div style={{ background: '#6B3318', padding: '80px 0 64px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#FFFFFF', marginBottom: '16px' }}>
            LIÊN HỆ
          </p>
          <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(40px, 6vw, 80px)', color: '#F0E5CC', lineHeight: 1.1, marginBottom: '20px' }}>
            Nói chuyện với chúng tôi
          </h1>
          <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '16px', fontWeight: 300, color: '#D4B080', lineHeight: 1.7 }}>
            Buổi tư vấn đầu tiên hoàn toàn miễn phí. Hãy kể cho chúng tôi nghe về không gian mơ ước của bạn.
          </p>
          {/* Breadcrumb */}
          <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to="/" style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: '#D4B080', textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={e => e.currentTarget.style.color = '#D4B080'}
            >
              TRANG CHỦ
            </Link>
            <span style={{ ...MONO, fontSize: '10px', color: '#D4B080' }}>/</span>
            <span style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: '#FFFFFF' }}>LIÊN HỆ</span>
          </div>
        </div>
      </div>

      {/* 2-column layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ padding: '72px 24px 96px' }}>
        <div
          style={{ display: 'grid', gap: '64px', alignItems: 'start' }}
          className="lg:grid-cols-2"
        >

          {/* Left — Info */}
          <div>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(26px, 3vw, 40px)', color: '#6B3318', lineHeight: 1.2, marginBottom: '32px' }}>
              Thông tin liên hệ
            </h2>

            {/* Info items */}
            {[
              {
                icon: '📍',
                label: 'ĐỊA CHỈ',
                lines: ['228 Thống Nhất, Phường Gò Vấp,', 'TP. Hồ Chí Minh'],
              },
              {
                icon: '📞',
                label: 'ĐIỆN THOẠI',
                lines: ['0898 123 636', '(Thứ Hai – Thứ Sáu, 8:00 – 18:00)'],
              },
              {
                icon: '✉️',
                label: 'EMAIL',
                lines: ['nuttt.shell@gmail.com'],
              },
              {
                icon: '🕐',
                label: 'GIỜ LÀM VIỆC',
                lines: ['Thứ Hai – Thứ Sáu: 8:00 – 18:00', 'Thứ Bảy: 9:00 – 12:00', 'Chủ Nhật: Nghỉ'],
              },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: '36px' }}>
                <p style={{ ...MONO, fontSize: '9px', letterSpacing: '2.5px', color: '#9B5030', marginBottom: '10px' }}>
                  {item.icon} {item.label}
                </p>
                {item.lines.map((line, i) => (
                  <p key={i} style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '15px', fontWeight: 300, color: '#3D2010', lineHeight: 1.7 }}>
                    {line}
                  </p>
                ))}
              </div>
            ))}

            {/* Google Maps */}
            <div style={{ marginTop: '8px' }}>
              <p style={{ ...MONO, fontSize: '9px', letterSpacing: '2.5px', color: '#9B5030', marginBottom: '14px' }}>
                📌 BẢN ĐỒ
              </p>
              <div style={{
                background: '#E0D8CF',
                height: '280px',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(42,32,24,.1)',
              }}>
                <iframe
                  title="Bản đồ Nut Shell — 228 Thống Nhất, Phường Gò Vấp"
                  src="https://www.google.com/maps?q=228+Th%E1%BB%91ng+Nh%E1%BA%A5t,+G%C3%B2+V%E1%BA%A5p,+H%E1%BB%93+Ch%C3%AD+Minh&hl=vi&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=228+Th%E1%BB%91ng+Nh%E1%BA%A5t,+G%C3%B2+V%E1%BA%A5p,+H%E1%BB%93+Ch%C3%AD+Minh"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...MONO, display: 'inline-block', fontSize: '10px', letterSpacing: '1.5px', color: '#9B5030', marginTop: '12px', padding: '12px 0', textDecoration: 'underline', textUnderlineOffset: '4px' }}
              >
                MỞ TRONG GOOGLE MAPS ↗
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ background: '#fff', borderRadius: '4px', padding: '48px', boxShadow: '0 4px 24px rgba(42,32,24,.06)' }}>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '28px', color: '#6B3318', marginBottom: '8px' }}>
              Gửi yêu cầu tư vấn
            </h2>
            <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '14px', fontWeight: 300, color: '#9A6A40', marginBottom: '36px' }}>
              Chúng tôi sẽ phản hồi trong vòng 24 giờ.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

              {/* Row: name + phone */}
              <div style={{ display: 'grid', gap: '14px' }} className="grid-cols-1 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Họ và tên *"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={INPUT_STYLE}
                  onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                  onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại *"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  style={INPUT_STYLE}
                  onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                  onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                style={INPUT_STYLE}
                onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}
              />

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                required
                style={{
                  ...INPUT_STYLE,
                  color: form.type ? '#6B3318' : 'rgba(42,32,24,.4)',
                  cursor: 'pointer',
                }}
                onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}
              >
                {PROJECT_TYPES.map((opt, i) => (
                  <option key={opt} value={i === 0 ? '' : opt} disabled={i === 0} style={{ color: '#6B3318' }}>
                    {opt}
                  </option>
                ))}
              </select>

              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                style={{
                  ...INPUT_STYLE,
                  color: form.budget ? '#6B3318' : 'rgba(42,32,24,.4)',
                  cursor: 'pointer',
                }}
                onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}
              >
                {BUDGETS.map((opt, i) => (
                  <option key={opt} value={i === 0 ? '' : opt} disabled={i === 0} style={{ color: '#6B3318' }}>
                    {opt}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Mô tả ngắn về dự án của bạn..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                style={{
                  ...INPUT_STYLE,
                  resize: 'vertical',
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  lineHeight: 1.7,
                }}
                onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}
              />

              <button
                type="submit"
                disabled={loading}
                style={{
                  ...MONO,
                  fontSize: '11px', letterSpacing: '2.5px',
                  background: '#6B3318', color: '#F0E5CC',
                  padding: '18px 38px', borderRadius: '999px',
                  border: 'none', cursor: loading ? 'wait' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  width: '100%',
                  marginTop: '4px',
                  transition: 'opacity .25s, transform .25s',
                }}
                onMouseEnter={e => {
                  if (loading) return
                  e.currentTarget.style.opacity = '.82'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = loading ? '.7' : '1'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {loading ? 'ĐANG GỬI...' : 'GỬI YÊU CẦU'}
              </button>

              {error && (
                <p role="alert" style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '14px', color: '#9B3020', textAlign: 'center' }}>
                  {SEND_ERROR_TEXT}
                </p>
              )}

              {submitted && (
                <div style={{
                  background: 'rgba(42,32,24,.05)',
                  border: '1px solid rgba(42,32,24,.12)',
                  borderRadius: '4px',
                  padding: '16px',
                  textAlign: 'center',
                }}>
                  <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '15px', color: '#6B3318' }}>
                    Cảm ơn bạn! Chúng tôi sẽ liên hệ trong 24 giờ.
                  </p>
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </main>
  )
}
