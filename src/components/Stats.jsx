/* ─── Stats — dải số liệu nền Sable Brown ─── */
import CountUp from '../ui/CountUp'

const DATA = [
  { value: 400, suffix: '+', label: 'Dự án hoàn thành' },
  { value: 7,   suffix: '+', label: 'Năm kinh nghiệm'  },
  { value: 98,  suffix: '%', label: 'Khách hài lòng'   },
]

export default function Stats() {
  return (
    <section style={{ background: '#2A2018', padding: '88px 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {DATA.map((item) => (
            <div key={item.label}>
              <p style={{
                fontFamily: 'Lora, serif',
                fontSize: 'clamp(54px, 6vw, 78px)',
                lineHeight: 1,
                color: '#E3D2B0',
                marginBottom: '12px',
              }}>
                <CountUp target={item.value} suffix={item.suffix} />
              </p>
              <p style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '10px',
                letterSpacing: '2.5px',
                color: '#B6A88F',
                textTransform: 'uppercase',
              }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
