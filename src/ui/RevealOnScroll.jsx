import { useEffect, useRef } from 'react'

/**
 * Wraps children in a div that fades + slides up when entering the viewport.
 * Has a safety fallback: reveals after 2.5 s if IntersectionObserver never fires.
 */
export default function RevealOnScroll({ children, delay = 0, className = '', layoutStyle = {} }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = () => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }

    // Safety: always visible after 2.5 s
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

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${delay}ms,
                     transform 1s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        ...layoutStyle,
      }}
    >
      {children}
    </div>
  )
}
