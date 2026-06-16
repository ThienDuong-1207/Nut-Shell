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
            color: '#6B5E4F',
          }}>
            {city}
          </span>
          <span style={{
            color: '#6B5E4F',
            margin: '0 20px',
            fontSize: '9px',
          }}>
            ·
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
        background: '#EAE0CE',
        padding: '18px 0',
        overflow: 'hidden',
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
        {/* Duplicate content twice for seamless loop */}
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
