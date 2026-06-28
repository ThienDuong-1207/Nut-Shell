# Design System — Nut Shell Studio

> **Tự động tạo lúc:** 22:35:49 17/6/2026

---

## Màu sắc (Tailwind tokens)

| Token | Hex | Dùng ở đâu |
|---|---|---|
| `cream` | `#F2EBDF` | Nền trang, background chính |
| `cream-dark` | `#EAE0CE` | Hover state trên nền cream |
| `espresso` | `#2A2018` | Text chính, dark overlay, nav page-mode |
| `sable` | `#A8623C` | Accent, scrollbar, active link, CTA |
| `sandcastle` | `#E3D2B0` | Button fill, secondary accent |
| `text-secondary` | `#6B5E4F` | Body text mờ trên nền sáng |
| `text-light` | `#F4EFE7` | Text trên nền tối (hero, footer) |
| `text-light-secondary` | `#B6A88F` | Text phụ trên nền tối |

---

## Typography

| Vai trò | Font | Weights | Biến CSS |
|---|---|---|---|
| Heading / Display | **Lora** (serif) | 400 500 600 700 + italic | `SERIF` |
| Body / UI text | **Be Vietnam Pro** | 300 400 500 600 | `JOST` |
| Labels / Mono accent | **Space Mono** | 400 700 | `MONO` |

### Pattern dùng trong component
```js
const SERIF = { fontFamily: 'Lora, serif' }
const JOST  = { fontFamily: '"Be Vietnam Pro", sans-serif' }
const MONO  = { fontFamily: '"Space Mono", monospace' }
```

---

## Spacing & Layout

| Yếu tố | Giá trị |
|---|---|
| Nav height | `72px` |
| Nav z-index | `9999` |
| Card border-radius | `14px` |
| Button border-radius | `999px` (pill) |
| Max content width | `max-w-7xl` (Tailwind = 80rem) |
| Section padding desktop | `clamp(80px, 12vh, 140px)` |

---

## Animation patterns

| Pattern | Nơi dùng | Cách implement |
|---|---|---|
| Fade up on load | Hero text | `@keyframes fadeUp` trong `index.css` + `FADEIN(delayMs)` helper |
| Scroll reveal | Tất cả sections | `<RevealOnScroll delay={ms}>` (IntersectionObserver) |
| Crossfade slideshow | Hero | opacity 0→1, interval 4500ms |
| Footer peel | CTA → Footer | translateY + boxShadow qua scroll progress |
| Horizontal scroll | Projects | sticky + translateX theo scroll progress |
