import { useEffect, useRef } from 'react'

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function RevealOnScroll({ children, delay = 0, className = '', layoutStyle = {} }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Skip animation entirely for users who prefer reduced motion
    if (prefersReducedMotion) {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
      return
    }

    const reveal = () => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }

    const fallback = setTimeout(reveal, 2500)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          clearTimeout(fallback)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className} style={layoutStyle}>
        {children}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(24px)',
        transition: `opacity .9s cubic-bezier(.2,.7,.2,1) ${delay}ms,
                     transform .9s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        ...layoutStyle,
      }}
    >
      {children}
    </div>
  )
}
