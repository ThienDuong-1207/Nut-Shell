/* ─── sendContact — gửi form liên hệ về email qua Web3Forms (không cần backend) ─── */
// Access key lấy tại https://web3forms.com (nhập email nhận → key gửi về hộp thư).
// Key này được thiết kế để dùng ở phía trình duyệt, đặt trong .env.local: VITE_WEB3FORMS_KEY=...
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export async function sendContact(subject, fields) {
  if (!ACCESS_KEY) throw new Error('Thiếu VITE_WEB3FORMS_KEY')

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject,
      from_name: 'Website Nut Shell',
      ...fields,
    }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok || !data.success) throw new Error(data.message || 'Gửi thất bại')
}

export const SEND_ERROR_TEXT = 'Gửi chưa thành công. Vui lòng gọi 0898 123 636 hoặc nhắn Zalo cho chúng tôi.'
