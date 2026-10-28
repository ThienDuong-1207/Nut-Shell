/* ─── About — dark background, light text ─── */
import { useRef, useEffect } from 'react'
import RevealOnScroll from '../ui/RevealOnScroll'

export default function About() {
  const imgRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const onScroll = () => {
      const img = imgRef.current
      if (!img) return
      const rect = img.closest('[data-zoom]').getBoundingClientRect()
      const progress = 1 - (rect.top + rect.height * 0.5) / window.innerHeight
      const scale = 1 + Math.max(0, Math.min(1, progress)) * 0.12
      img.style.transform = `scale(${scale})`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section style={{ background: '#6B3318', padding: '130px 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div
          className="grid grid-cols-1 lg:grid-cols-5 items-center"
          style={{ gap: 'clamp(48px, 5vw, 80px)' }}
        >

          {/* Left column — text (3/5 = 60%) */}
          <div className="order-2 lg:order-1 lg:col-span-3">
            <RevealOnScroll>
              <h2 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(32px, 4.5vw, 58px)',
                lineHeight: 1.15,
                color: '#F0E5CC',
                marginBottom: '44px',
                textWrap: 'balance',
              }}>
                Chúng tôi không chỉ thiết kế không gian — chúng tôi kiến tạo cảm xúc.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={140}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '36px' }}>
                <div style={{
                  width: '2px', flexShrink: 0, height: '64px',
                  background: 'linear-gradient(to bottom, #9B5030, transparent)',
                  marginTop: '6px',
                }} />
                <p style={{
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  fontSize: 'clamp(16px, 1.4vw, 19px)',
                  fontWeight: 300, lineHeight: 1.85,
                  color: '#DCC99B',
                }}>
                  Nut Shell là studio chuyên tư vấn, thiết kế và thi công nội thất tại Việt Nam.
                  Với hơn 10 năm đồng hành cùng từng ngôi nhà, chúng tôi tin rằng mỗi không gian
                  đều mang một linh hồn riêng — và nhiệm vụ của chúng tôi là thức tỉnh nó bằng ánh sáng,
                  chất liệu và những chi tiết được chọn lọc kỹ càng.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={220}>
              <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  fontSize: '10px', letterSpacing: '2px',
                  color: 'rgba(244,239,231,.38)',
                }}>
                  7+ Năm kinh nghiệm
                </span>
                <span style={{ color: 'rgba(244,239,231,.22)', fontSize: '10px' }}>·</span>
                <span style={{
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  fontSize: '10px', letterSpacing: '2px',
                  color: 'rgba(244,239,231,.38)',
                }}>
                  400+ Công trình
                </span>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right column — image (2/5 = 40%) with scroll-driven zoom */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div data-zoom style={{ aspectRatio: '3/4', borderRadius: '2px', overflow: 'hidden' }}>
              <img
                ref={imgRef}
                src="/images/founder.jpg"
                alt="Đội ngũ Nut Shell Studio"
                loading="lazy"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transform: 'scale(1)',
                  transition: 'transform .1s linear',
                  willChange: 'transform',
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
