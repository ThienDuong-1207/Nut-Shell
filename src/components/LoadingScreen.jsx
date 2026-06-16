/* ─── Polaroid Loading Screen ───────────────────────────────────────
   4 ảnh rơi xuống lần lượt như Polaroid thả lên bàn, "Nutt shell"
   xuất hiện đè lên, sau đó tất cả bay ra 4 góc để lộ hero.
   ─────────────────────────────────────────────────────────────────── */
import { useState, useEffect, useRef } from 'react'

const POLAROIDS = [
  {
    src:    '/images/proj2.jpg',
    rotate: '-8deg',
    tx: '-78px', ty: '44px',
    exit: 'translate(-140vw, 80vh) rotate(-30deg)',
  },
  {
    src:    '/images/proj1.jpg',
    rotate: '6deg',
    tx: '66px', ty: '-38px',
    exit: 'translate(140vw, -80vh) rotate(24deg)',
  },
  {
    src:    '/images/proj5.jpg',
    rotate: '-3.5deg',
    tx: '-22px', ty: '-16px',
    exit: 'translate(-140vw, -90vh) rotate(-18deg)',
  },
  {
    src:    '/images/proj3.jpg',
    rotate: '9deg',
    tx: '30px', ty: '52px',
    exit: 'translate(140vw, 90vh) rotate(28deg)',
  },
]

/* Timing (ms) */
const T_DROPS   = [220, 560, 890, 1220]  // when each photo starts falling
const T_LOGO    = 1760                    // "Nutt shell" fades in
const T_EXIT    = 2640                    // photos fly out
const T_FADE    = 2980                    // dark overlay fades out
const T_DONE    = 3540                    // unmount

export default function LoadingScreen({ onDone }) {
  const [landed,      setLanded]      = useState([false, false, false, false])
  const [logoVisible, setLogoVisible] = useState(false)
  const [exiting,     setExiting]     = useState(false)
  const [fading,      setFading]      = useState(false)
  const onDoneRef = useRef(onDone)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const timers = []

    T_DROPS.forEach((delay, i) =>
      timers.push(setTimeout(() =>
        setLanded(prev => { const n = [...prev]; n[i] = true; return n })
      , delay))
    )

    timers.push(setTimeout(() => setLogoVisible(true), T_LOGO))
    timers.push(setTimeout(() => setExiting(true),     T_EXIT))
    timers.push(setTimeout(() => setFading(true),      T_FADE))
    timers.push(setTimeout(() => {
      document.body.style.overflow = ''
      onDoneRef.current()
    }, T_DONE))

    return () => {
      timers.forEach(clearTimeout)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: '#2A2018',
        overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: fading ? 0 : 1,
        transition: fading ? 'opacity 0.55s ease' : 'none',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      {/* Warm ambient glow behind the pile */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 65% 55% at 50% 54%, rgba(168,98,60,.22) 0%, transparent 100%)',
        }}
      />

      {/* ── Polaroid photos ── */}
      {POLAROIDS.map((p, i) => {
        const idle     = `translateY(-130vh) rotate(${p.rotate})`
        const resting  = `translate(${p.tx}, ${p.ty}) rotate(${p.rotate})`
        const flyout   = p.exit

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              zIndex: i + 1,
              /* initial: off-screen above; once landed: bounce to resting; on exit: fly away */
              transform: exiting ? flyout : landed[i] ? resting : idle,
              opacity:   exiting ? 0 : 1,
              transition: exiting
                ? `transform 0.52s cubic-bezier(.55,0,1,.7) ${i * 45}ms,
                   opacity   0.35s ease ${i * 35}ms`
                : landed[i]
                ? 'transform 0.68s cubic-bezier(.34,1.42,.64,1)'
                : 'none',
            }}
          >
            <PolaroidFrame src={p.src} />
          </div>
        )
      })}

      {/* ── Brand logo — đặt phía dưới, tránh đè ảnh ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '50%',
          transform: logoVisible && !exiting
            ? 'translateX(-50%) translateY(0)'
            : 'translateX(-50%) translateY(16px)',
          zIndex: 10,
          textAlign: 'center',
          pointerEvents: 'none',
          opacity:    logoVisible && !exiting ? 1 : 0,
          transition: 'opacity 0.75s ease, transform 0.75s ease',
        }}
      >
        <img
          src="/images/logo.jpeg"
          alt="Nutt shell"
          draggable={false}
          style={{
            height: 'clamp(52px, 7vw, 72px)',
            width: 'auto',
            objectFit: 'contain',
            borderRadius: '6px',
            boxShadow: '0 8px 32px rgba(0,0,0,.55)',
            display: 'block',
            margin: '0 auto 12px',
            filter: 'brightness(1.1) contrast(1.05)',
          }}
        />
        <p style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: '9px', letterSpacing: '3.5px',
          color: '#B6A88F',
          textShadow: '0 1px 12px rgba(0,0,0,.6)',
        }}>
          STUDIO THIẾT KẾ NỘI THẤT
        </p>
      </div>
    </div>
  )
}

/* ── Polaroid frame component ── */
function PolaroidFrame({ src }) {
  return (
    <div style={{
      background: '#FAF8F3',
      padding: '9px 9px 38px 9px',
      borderRadius: '2px',
      boxShadow:
        '0 28px 70px rgba(0,0,0,.6), 0 6px 20px rgba(0,0,0,.4), inset 0 0 0 1px rgba(0,0,0,.06)',
    }}>
      <img
        src={src} alt=""
        draggable={false}
        style={{
          display: 'block',
          width:  'clamp(150px, 19vw, 218px)',
          height: 'clamp(190px, 24vw, 278px)',
          objectFit: 'cover',
          userSelect: 'none',
        }}
      />
    </div>
  )
}
