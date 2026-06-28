/* ─── Contact Page — full layout standalone ─── */
import { useState } from 'react'
import { Link } from 'react-router-dom'

const MONO = { fontFamily: '"Space Mono", monospace' }

const INPUT_STYLE = {
  fontFamily: '"Be Vietnam Pro", sans-serif',
  fontSize: '15px',
  background: '#fff',
  border: '1px solid rgba(42,32,24,.18)',
  color: '#2A2018',
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form:', form)
    setForm({ name: '', phone: '', email: '', type: '', budget: '', message: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 8000)
  }

  const focusStyle = { borderColor: '#2A2018' }
  const blurStyle = { borderColor: 'rgba(42,32,24,.18)' }

  return (
    <main style={{ background: '#F2EBDF', minHeight: '100vh', paddingTop: '88px' }}>

      {/* Page Header */}
      <div style={{ background: '#2A2018', padding: '80px 0 64px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p style={{ ...MONO, fontSize: '10px', letterSpacing: '3px', color: '#A8623C', marginBottom: '16px' }}>
            LIÊN HỆ
          </p>
          <h1 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(40px, 6vw, 80px)', color: '#F4EFE7', lineHeight: 1.1, marginBottom: '20px' }}>
            Nói chuyện với chúng tôi
          </h1>
          <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '16px', fontWeight: 300, color: '#B6A88F', lineHeight: 1.7 }}>
            Buổi tư vấn đầu tiên hoàn toàn miễn phí. Hãy kể cho chúng tôi nghe về không gian mơ ước của bạn.
          </p>
          {/* Breadcrumb */}
          <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to="/" style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: '#4A3B2E', textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#B6A88F'}
              onMouseLeave={e => e.currentTarget.style.color = '#4A3B2E'}
            >
              TRANG CHỦ
            </Link>
            <span style={{ ...MONO, fontSize: '10px', color: '#4A3B2E' }}>/</span>
            <span style={{ ...MONO, fontSize: '10px', letterSpacing: '2px', color: '#A8623C' }}>LIÊN HỆ</span>
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
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(26px, 3vw, 40px)', color: '#2A2018', lineHeight: 1.2, marginBottom: '32px' }}>
              Thông tin liên hệ
            </h2>

            {/* Info items */}
            {[
              {
                icon: '📍',
                label: 'ĐỊA CHỈ',
                lines: ['12 Nguyễn Văn Bình, Phường Bến Nghé,', 'Quận 1, TP. Hồ Chí Minh'],
              },
              {
                icon: '📞',
                label: 'ĐIỆN THOẠI',
                lines: ['0901 234 567', '(Thứ Hai – Thứ Sáu, 8:00 – 18:00)'],
              },
              {
                icon: '✉️',
                label: 'EMAIL',
                lines: ['hello@nutshell.vn'],
              },
              {
                icon: '🕐',
                label: 'GIỜ LÀM VIỆC',
                lines: ['Thứ Hai – Thứ Sáu: 8:00 – 18:00', 'Thứ Bảy: 9:00 – 12:00', 'Chủ Nhật: Nghỉ'],
              },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: '36px' }}>
                <p style={{ ...MONO, fontSize: '9px', letterSpacing: '2.5px', color: '#A8623C', marginBottom: '10px' }}>
                  {item.icon} {item.label}
                </p>
                {item.lines.map((line, i) => (
                  <p key={i} style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '15px', fontWeight: 300, color: '#3A2B1E', lineHeight: 1.7 }}>
                    {line}
                  </p>
                ))}
              </div>
            ))}

            {/* Google Maps placeholder */}
            <div style={{ marginTop: '8px' }}>
              <p style={{ ...MONO, fontSize: '9px', letterSpacing: '2.5px', color: '#A8623C', marginBottom: '14px' }}>
                📌 BẢN ĐỒ
              </p>
              <div style={{
                background: '#E0D8CF',
                height: '280px',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(42,32,24,.1)',
              }}>
                <span style={{ fontSize: '32px', marginBottom: '12px' }}>🗺️</span>
                <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '14px', fontWeight: 300, color: '#8B7B6E' }}>
                  Google Maps
                </p>
                <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '12px', fontWeight: 300, color: '#B6A88F', marginTop: '4px' }}>
                  12 Nguyễn Văn Bình, Quận 1
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ background: '#fff', borderRadius: '4px', padding: '48px', boxShadow: '0 4px 24px rgba(42,32,24,.06)' }}>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: '28px', color: '#2A2018', marginBottom: '8px' }}>
              Gửi yêu cầu tư vấn
            </h2>
            <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '14px', fontWeight: 300, color: '#8B7B6E', marginBottom: '36px' }}>
              Chúng tôi sẽ phản hồi trong vòng 24 giờ.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

              {/* Row: name + phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="sm:grid-cols-2">
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
                  color: form.type ? '#2A2018' : 'rgba(42,32,24,.4)',
                  cursor: 'pointer',
                }}
                onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}
              >
                {PROJECT_TYPES.map((opt, i) => (
                  <option key={opt} value={i === 0 ? '' : opt} disabled={i === 0} style={{ color: '#2A2018' }}>
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
                  color: form.budget ? '#2A2018' : 'rgba(42,32,24,.4)',
                  cursor: 'pointer',
                }}
                onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}
              >
                {BUDGETS.map((opt, i) => (
                  <option key={opt} value={i === 0 ? '' : opt} disabled={i === 0} style={{ color: '#2A2018' }}>
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
                style={{
                  ...MONO,
                  fontSize: '11px', letterSpacing: '2.5px',
                  background: '#2A2018', color: '#F4EFE7',
                  padding: '18px 38px', borderRadius: '999px',
                  border: 'none', cursor: 'pointer',
                  width: '100%',
                  marginTop: '4px',
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
                <div style={{
                  background: 'rgba(42,32,24,.05)',
                  border: '1px solid rgba(42,32,24,.12)',
                  borderRadius: '4px',
                  padding: '16px',
                  textAlign: 'center',
                }}>
                  <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '15px', color: '#2A2018' }}>
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
