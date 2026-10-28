/* ─── Contact Page — thẻ thông tin tối + form, FAQ bên dưới ─── */
import { useState } from 'react'
import { sendContact, SEND_ERROR_TEXT } from '../lib/sendContact'
import PageHeader from '../components/ui/PageHeader'
import Faq from '../components/ui/Faq'

const INFO = [
  { label: 'Địa chỉ',      lines: ['228 Thống Nhất, Phường Gò Vấp,', 'TP. Hồ Chí Minh'] },
  { label: 'Điện thoại',   lines: ['0898 123 636'], href: 'tel:0898123636' },
  { label: 'Email',        lines: ['nuttt.shell@gmail.com'], href: 'mailto:nuttt.shell@gmail.com' },
  { label: 'Giờ làm việc', lines: ['Thứ Hai – Thứ Sáu: 8:00 – 18:00', 'Thứ Bảy: 9:00 – 12:00', 'Chủ Nhật: Nghỉ'] },
]

const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=228+Th%E1%BB%91ng+Nh%E1%BA%A5t,+G%C3%B2+V%E1%BA%A5p,+H%E1%BB%93+Ch%C3%AD+Minh'

function Field({ label, id, children }) {
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>{label}</label>
      {children}
    </div>
  )
}

function Select({ id, name, value, onChange, options, required }) {
  return (
    <div style={{ position: 'relative' }}>
      <select id={id} name={name} value={value} onChange={onChange} required={required} className="field__input"
        style={{ appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer', paddingRight: '44px', color: value ? 'var(--text)' : 'var(--text-secondary)' }}>
        {options.map((opt, i) => (
          <option key={opt} value={i === 0 ? '' : opt} disabled={i === 0}>{opt}</option>
        ))}
      </select>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"
        style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-secondary)' }}>
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  )
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

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <PageHeader
        label="Liên hệ"
        title="Nói chuyện với chúng tôi."
        desc="Buổi tư vấn đầu tiên hoàn toàn miễn phí. Hãy kể cho chúng tôi nghe về không gian mơ ước của bạn."
        crumbs={[{ label: 'Liên hệ' }]}
      />

      <section className="h-container" style={{ paddingBottom: 'clamp(72px, 8vw, 120px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">

          {/* Trái — thông tin + bản đồ */}
          <div className="lg:col-span-5 h-dark" style={{ borderRadius: '28px', padding: 'clamp(28px, 4vw, 44px)' }}>
            <p className="h-label" style={{ marginBottom: '28px' }}>/ Thông tin liên hệ</p>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7" style={{ marginBottom: '32px' }}>
              {INFO.map(item => (
                <div key={item.label}>
                  <dt className="h-label" style={{ color: 'var(--accent)', fontSize: '10px', marginBottom: '10px' }}>{item.label}</dt>
                  {item.lines.map(line => (
                    <dd key={line} className="h-body" style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                      {item.href ? <a href={item.href} className="footer__link" style={{ color: 'inherit', fontSize: '14px' }}>{line}</a> : line}
                    </dd>
                  ))}
                </div>
              ))}
            </dl>
            <div style={{ height: '260px', borderRadius: '20px', overflow: 'hidden', background: 'var(--surface-dark-card)' }}>
              <iframe
                title="Bản đồ Nut Shell — 228 Thống Nhất, Phường Gò Vấp"
                src="https://www.google.com/maps?q=228+Th%E1%BB%91ng+Nh%E1%BA%A5t,+G%C3%B2+V%E1%BA%A5p,+H%E1%BB%93+Ch%C3%AD+Minh&hl=vi&z=16&output=embed"
                width="100%" height="100%" style={{ border: 0, display: 'block' }}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen
              />
            </div>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-light" style={{ marginTop: '16px' }}>
              Mở trong Google Maps ↗
            </a>
          </div>

          {/* Phải — form */}
          <div className="lg:col-span-7" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '28px', padding: 'clamp(28px, 4vw, 48px)' }}>
            <p className="h-label" style={{ marginBottom: '18px' }}>/ Gửi yêu cầu tư vấn</p>
            <h2 className="h-h2" style={{ fontSize: 'clamp(32px, 3.4vw, 48px)', marginBottom: '10px' }}>Kể cho chúng tôi về dự án.</h2>
            <p className="h-body" style={{ marginBottom: '32px' }}>Chúng tôi sẽ phản hồi trong vòng 24 giờ.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Họ và tên *" id="c-name">
                  <input id="c-name" type="text" name="name" autoComplete="name" value={form.name} onChange={handleChange} required className="field__input" />
                </Field>
                <Field label="Số điện thoại *" id="c-phone">
                  <input id="c-phone" type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={handleChange} required className="field__input" />
                </Field>
              </div>
              <Field label="Email" id="c-email">
                <input id="c-email" type="email" name="email" autoComplete="email" value={form.email} onChange={handleChange} className="field__input" />
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Loại dự án *" id="c-type">
                  <Select id="c-type" name="type" value={form.type} onChange={handleChange} options={PROJECT_TYPES} required />
                </Field>
                <Field label="Ngân sách dự kiến" id="c-budget">
                  <Select id="c-budget" name="budget" value={form.budget} onChange={handleChange} options={BUDGETS} />
                </Field>
              </div>
              <Field label="Mô tả ngắn về dự án" id="c-message">
                <textarea id="c-message" name="message" value={form.message} onChange={handleChange} rows={5} className="field__input" style={{ resize: 'vertical' }} />
              </Field>

              <button type="submit" disabled={loading} className="btn btn--dark" style={{ width: '100%', minHeight: '52px', opacity: loading ? .7 : 1, cursor: loading ? 'wait' : 'pointer' }}>
                {loading ? 'Đang gửi…' : 'Gửi yêu cầu'}
              </button>

              {error && (
                <p role="alert" className="h-body" style={{ color: 'var(--error)', textAlign: 'center' }}>{SEND_ERROR_TEXT}</p>
              )}
              {submitted && (
                <p role="status" className="h-body" style={{ color: 'var(--text)', textAlign: 'center', padding: '16px', borderRadius: '12px', background: 'var(--surface-alt)' }}>
                  Cảm ơn bạn! Chúng tôi sẽ liên hệ trong 24 giờ.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Faq showContact={false} />
    </main>
  )
}
