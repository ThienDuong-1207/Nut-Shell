/* ─── Polaroid Loading Screen — v2 ─────────────────────────────────
   4 ảnh Polaroid rơi lần lượt trên nền tối, "NUT SHELL" ghost text
   hiện ra phía sau, brand text thay thế logo, rồi tất cả bay ra góc.
   ─────────────────────────────────────────────────────────────────── */
import { useState, useEffect, useRef } from 'react'

const POLAROIDS = [
  {
    src:    '/images/proj2.jpg',
    rotate: '-8deg',
    tx: '-100px', ty: '56px',
    exit: 'translate(-150vw, 90vh) rotate(-28deg)',
  },
  {
    src:    '/images/proj1.jpg',
    rotate: '7deg',
    tx: '88px', ty: '-48px',
    exit: 'translate(150vw, -90vh) rotate(26deg)',
  },
  {
    src:    '/images/proj5.jpg',
    rotate: '-3.5deg',
    tx: '-28px', ty: '-22px',
    exit: 'translate(-150vw, -90vh) rotate(-20deg)',
  },
  {
    src:    '/images/proj3.jpg',
    rotate: '10deg',
    tx: '44px', ty: '64px',
    exit: 'translate(150vw, 90vh) rotate(30deg)',
  },
]

/* Timing (ms) */
const T_DROPS  = [180, 500, 810, 1100]   // each photo starts falling
const T_BRAND  = 1620                    // "NUT SHELL" brand text fades in
const T_EXIT   = 2680                    // photos + brand fly out
const T_FADE   = 3040                    // overlay fades to transparent
const T_DONE   = 3560                    // unmount

export default function LoadingScreen({ onDone }) {
  const [landed,       setLanded]       = useState([false, false, false, false])
  const [brandVisible, setBrandVisible] = useState(false)
  const [exiting,      setExiting]      = useState(false)
  const [fading,       setFading]       = useState(false)
  const onDoneRef = useRef(onDone)

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    if (prefersReduced) {
      const t = setTimeout(() => {
        document.body.style.overflow = ''
        onDoneRef.current()
      }, 500)
      return () => { clearTimeout(t); document.body.style.overflow = '' }
    }

    const timers = []

    T_DROPS.forEach((delay, i) =>
      timers.push(setTimeout(() =>
        setLanded(prev => { const n = [...prev]; n[i] = true; return n })
      , delay))
    )

    timers.push(setTimeout(() => setBrandVisible(true), T_BRAND))
    timers.push(setTimeout(() => setExiting(true),      T_EXIT))
    timers.push(setTimeout(() => setFading(true),       T_FADE))
    timers.push(setTimeout(() => {
      document.body.style.overflow = ''
      onDoneRef.current()
    }, T_DONE))

    return () => {
      timers.forEach(clearTimeout)
      document.body.style.overflow = ''
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: '#3D1608',
        overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity:    fading ? 0 : 1,
        transition: fading ? 'opacity 0.52s ease' : 'none',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      {/* ── Film grain ── */}
      <svg aria-hidden style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: .06, pointerEvents: 'none' }}>
        <filter id="ls-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#ls-grain)" />
      </svg>

      {/* ── Ghost "NUT SHELL" watermark ── */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          fontFamily: 'Lora, serif',
          fontSize: 'clamp(72px, 14vw, 180px)',
          letterSpacing: '-2px',
          color: '#F0E5CC',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1,
          opacity: brandVisible && !exiting ? .045 : 0,
          transform: brandVisible && !exiting
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -50%) scale(1.04)',
          transition: 'opacity 1.1s ease, transform 1.1s ease',
        }}
      >
        NUT SHELL
      </div>

      {/* ── Warm ambient glow ── */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 50% 54%, rgba(107,51,24,.28) 0%, transparent 100%)',
        }}
      />

      {/* ── Polaroid photos ── */}
      {POLAROIDS.map((p, i) => {
        const idle    = `translateY(-140vh) rotate(${p.rotate})`
        const resting = `translate(${p.tx}, ${p.ty}) rotate(${p.rotate})`
        const flyout  = p.exit
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              zIndex: i + 1,
              transform: exiting ? flyout : landed[i] ? resting : idle,
              opacity:   exiting ? 0 : 1,
              transition: exiting
                ? `transform 0.55s cubic-bezier(.55,0,1,.7) ${i * 40}ms, opacity 0.38s ease ${i * 30}ms`
                : landed[i]
                ? 'transform 0.72s cubic-bezier(.34,1.38,.64,1)'
                : 'none',
            }}
          >
            <PolaroidFrame src={p.src} />
          </div>
        )
      })}

      {/* ── Brand text (replaces logo) ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '7%',
          left: '50%',
          zIndex: 10,
          textAlign: 'center',
          pointerEvents: 'none',
          opacity:    brandVisible && !exiting ? 1 : 0,
          transform:  brandVisible && !exiting
            ? 'translateX(-50%) translateY(0)'
            : 'translateX(-50%) translateY(18px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <p style={{
          fontFamily: 'Lora, serif',
          fontSize: 'clamp(22px, 3vw, 36px)',
          letterSpacing: '5px',
          color: '#F0E5CC',
          lineHeight: 1,
          marginBottom: '12px',
          whiteSpace: 'nowrap',
        }}>
          NUT SHELL
        </p>
        <div style={{
          width: '32px', height: '1px',
          background: 'linear-gradient(90deg, transparent, #9B5030, transparent)',
          margin: '0 auto 12px',
        }} />
        <p style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: '8px', letterSpacing: '3.5px',
          color: 'rgba(220,201,155,.62)',
          whiteSpace: 'nowrap',
        }}>
          STUDIO THIẾT KẾ NỘI THẤT
        </p>
      </div>
    </div>
  )
}

/* ── Polaroid frame ── */
function PolaroidFrame({ src }) {
  return (
    <div style={{
      background: '#F0E8D8',
      padding: '10px 10px 44px 10px',
      borderRadius: '2px',
      boxShadow:
        '0 32px 80px rgba(0,0,0,.65), 0 8px 24px rgba(0,0,0,.45), inset 0 0 0 1px rgba(0,0,0,.06)',
    }}>
      <img
        src={src} alt=""
        draggable={false}
        style={{
          display: 'block',
          width:  'clamp(168px, 22vw, 260px)',
          height: 'clamp(210px, 28vw, 330px)',
          objectFit: 'cover',
          userSelect: 'none',
        }}
      />
    </div>
  )
}
