/* Renders a gradient block with a diagonal stripe texture and a label.
   Replace with <img> or background-image when real photos are ready. */

const GRADIENTS = [
  'linear-gradient(135deg, #2A2018 0%, #5C3D28 40%, #A8623C 75%, #7A4E32 100%)',
  'linear-gradient(155deg, #3D2810 0%, #7A4E32 38%, #A8623C 62%, #5C3D28 100%)',
  'linear-gradient(120deg, #5C3D28 0%, #A8623C 48%, #7A4E32 72%, #2A2018 100%)',
  'linear-gradient(145deg, #2A2018 0%, #8B6345 45%, #A8623C 68%, #3D2810 100%)',
]

export default function PlaceholderImage({ label = 'ảnh', className = '', style = {}, variant = 0 }) {
  const bg = GRADIENTS[variant % GRADIENTS.length]

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: bg, ...style }}
    >
      {/* Subtle diagonal stripe texture */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(255,255,255,.025) 14px, rgba(255,255,255,.025) 15px)',
        }}
      />
      {/* Label */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <span
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '9px',
            letterSpacing: '2.5px',
            color: 'rgba(227,210,176,.55)',
            textTransform: 'uppercase',
            textAlign: 'center',
            lineHeight: 1.8,
          }}
        >
          [ {label} ]
        </span>
      </div>
    </div>
  )
}
