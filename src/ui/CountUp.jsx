import { useEffect, useRef, useState } from 'react'

/* Animates a number from 0 → target when it enters the viewport. */
export default function CountUp({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref     = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2200
          const start    = performance.now()

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased    = 1 - Math.pow(1 - progress, 3) // ease-out cubic
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}
