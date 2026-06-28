# Cấu Trúc Dự Án — Nut Shell Studio

> **Tự động tạo lúc:** 22:35:49 17/6/2026  
> Chạy `npm run docs` để cập nhật thủ công.

---

## Components (`src/components/`)

| # | Component | File | Props |
|---|---|---|---|
| 1 | **About** | `About.jsx` | — |
| 2 | **CTA** | `CTA.jsx` | — |
| 3 | **FloatingContact** | `FloatingContact.jsx` | — |
| 4 | **Footer** | `Footer.jsx` | — |
| 5 | **Hero** | `Hero.jsx` | — |
| 6 | **LoadingScreen** | `LoadingScreen.jsx` | `onDone` |
| 7 | **Marquee** | `Marquee.jsx` | — |
| 8 | **Nav** | `Nav.jsx` | — |
| 9 | **Process** | `Process.jsx` | — |
| 10 | **Projects** | `Projects.jsx` | — |
| 11 | **Quote** | `Quote.jsx` | — |
| 12 | **Services** | `Services.jsx` | — |
| 13 | **Stats** | `Stats.jsx` | — |
| 14 | **Testimonials** | `Testimonials.jsx` | — |

---

## Pages (`src/pages/`)

| # | Page | File | Route | Props |
|---|---|---|---|---|
| 1 | **AboutPage** | `AboutPage.jsx` | `/gioi-thieu` | — |
| 2 | **BlogDetail** | `BlogDetail.jsx` | `/chia-se/:slug` | — |
| 3 | **BlogPage** | `BlogPage.jsx` | `/chia-se` | — |
| 4 | **ContactPage** | `ContactPage.jsx` | `/lien-he` | — |
| 5 | **Home** | `Home.jsx` | `/` | `appLoaded` |
| 6 | **ProjectDetail** | `ProjectDetail.jsx` | `/du-an/:slug` | — |
| 7 | **ProjectsPage** | `ProjectsPage.jsx` | `/du-an` | — |

---

## Cây Component (mỗi page dùng gì)

### AboutPage (`/gioi-thieu`)
- `RevealOnScroll`

### Home (`/`)
- `Hero`
- `Marquee`
- `About`
- `Services`
- `Projects`
- `Testimonials`
- `Stats`
- `Process`
- `Quote`
- `CTA`

