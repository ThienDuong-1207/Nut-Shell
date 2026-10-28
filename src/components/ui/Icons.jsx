/* ─── Icon SVG dùng chung cho trang chủ ─── */

export function Plus({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function Arrow() {
  return <span className="btn__arrow" aria-hidden="true">→</span>
}

