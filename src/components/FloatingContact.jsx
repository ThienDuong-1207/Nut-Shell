/* ─── FloatingContact — fixed bottom-right Zalo + Messenger + Phone buttons ─── */
import { useState, useEffect } from 'react'

// Username của fanpage Facebook (phần sau facebook.com/) — m.me/<username> mở thẳng Messenger
export const FB_PAGE_USERNAME = 'nutshell.interior'
export const FB_PAGE_URL = `https://www.facebook.com/${FB_PAGE_USERNAME}`
const MESSENGER_URL = `https://m.me/${FB_PAGE_USERNAME}`

const MESSENGER_SVG = (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" fill="white" d="M.001 11.639C.001 4.949 5.241 0 12.001 0S24 4.95 24 11.639c0 6.689-5.24 11.638-12 11.638-1.21 0-2.38-.16-3.47-.46a.96.96 0 00-.64.05l-2.39 1.05a.96.96 0 01-1.35-.85l-.07-2.14a.97.97 0 00-.32-.68A11.39 11.389 0 01.002 11.64zm8.32-2.19l-3.52 5.6c-.35.53.32 1.139.82.75l3.79-2.87c.26-.2.6-.2.87 0l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86 0l-2.8-2.1a1.8 1.8 0 00-2.61.48z"/>
  </svg>
)

const ZALO_SVG = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.919 1.397 5.523 3.584 7.25L4.5 22l3.978-1.77C9.563 20.717 10.76 21 12 21c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2z" fill="white"/>
    <path d="M7.5 13.5L9.75 11l2.25 2.25L14.25 9" stroke="#0068FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PHONE_SVG = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" fill="white"/>
  </svg>
)

export default function FloatingContact() {
  const [visible, setVisible] = useState(false)
  const [zaloHover, setZaloHover] = useState(false)
  const [msgHover, setMsgHover] = useState(false)
  const [phoneHover, setPhoneHover] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3600)
    return () => clearTimeout(timer)
  }, [])

  const btnBase = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 16px rgba(0,0,0,0.22)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    textDecoration: 'none',
    position: 'relative',
  }

  const tooltipBase = {
    position: 'absolute',
    right: '64px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(42,32,24,0.88)',
    color: '#F0E5CC',
    fontFamily: '"Space Mono", monospace',
    fontSize: '10px',
    letterSpacing: '1.5px',
    padding: '6px 12px',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    transition: 'opacity 0.2s ease',
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '24px',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Zalo button */}
      <a
        href="https://zalo.me/0898123636"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...btnBase,
          background: '#0068FF',
          transform: zaloHover ? 'scale(1.1)' : 'scale(1)',
          boxShadow: zaloHover
            ? '0 6px 24px rgba(0,104,255,0.4)'
            : '0 4px 16px rgba(0,0,0,0.22)',
        }}
        onMouseEnter={() => setZaloHover(true)}
        onMouseLeave={() => setZaloHover(false)}
        aria-label="Liên hệ Zalo"
      >
        {/* Tooltip */}
        <span style={{ ...tooltipBase, opacity: zaloHover ? 1 : 0 }}>
          Zalo
        </span>
        {ZALO_SVG}
      </a>

      {/* Messenger button */}
      <a
        href={MESSENGER_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...btnBase,
          background: 'linear-gradient(45deg, #0099FF 0%, #A033FF 60%, #FF5280 90%, #FF7061 100%)',
          transform: msgHover ? 'scale(1.1)' : 'scale(1)',
          boxShadow: msgHover
            ? '0 6px 24px rgba(160,51,255,0.4)'
            : '0 4px 16px rgba(0,0,0,0.22)',
        }}
        onMouseEnter={() => setMsgHover(true)}
        onMouseLeave={() => setMsgHover(false)}
        aria-label="Nhắn tin qua Messenger"
      >
        {/* Tooltip */}
        <span style={{ ...tooltipBase, opacity: msgHover ? 1 : 0 }}>
          Messenger
        </span>
        {MESSENGER_SVG}
      </a>

      {/* Phone button */}
      <a
        href="tel:0898123636"
        style={{
          ...btnBase,
          background: '#6B3318',
          transform: phoneHover ? 'scale(1.1)' : 'scale(1)',
          boxShadow: phoneHover
            ? '0 6px 24px rgba(42,32,24,0.4)'
            : '0 4px 16px rgba(0,0,0,0.22)',
        }}
        onMouseEnter={() => setPhoneHover(true)}
        onMouseLeave={() => setPhoneHover(false)}
        aria-label="Gọi điện thoại"
      >
        {/* Tooltip */}
        <span style={{ ...tooltipBase, opacity: phoneHover ? 1 : 0 }}>
          Gọi ngay
        </span>
        {PHONE_SVG}
      </a>
    </div>
  )
}
