/* ─── Marquee — credibility bar, auto-scrolling city names ─── */
import { useState } from 'react'

const CITIES = [
  'TP. HỒ CHÍ MINH', 'HÀ NỘI', 'BÌNH DƯƠNG', 'ĐÀ NẴNG',
  'LONG AN', 'ĐỒNG NAI', 'CẦN THƠ', 'NHA TRANG',
]

function MarqueeContent() {
  return (
    <>
      {CITIES.map((city, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
          <span style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '9px',
            letterSpacing: '3px',
            color: 'rgba(244,239,231,.35)',
          }}>
            {city}
          </span>
          <span style={{
            color: '#A8623C',
            margin: '0 20px',
            fontSize: '8px',
          }}>
            ✦
          </span>
        </span>
      ))}
    </>
  )
}

export default function Marquee() {
  const [paused, setPaused] = useState(false)

  return (
    <section
      style={{
        background: '#1A130D',
        padding: '16px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(244,239,231,.05)',
        borderBottom: '1px solid rgba(244,239,231,.05)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          width: 'max-content',
          animation: 'marquee 28s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <MarqueeContent />
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <MarqueeContent />
        </span>
      </div>
    </section>
  )
}
