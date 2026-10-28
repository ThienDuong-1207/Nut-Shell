# DESIGN.md — Nut Shell × bố cục Socvra

> Bố cục editorial dạng lưới: chữ to, thẻ bo tròn và các nhãn kiểu "/ MỤC". Mượn cấu trúc của Socvra, nền kem ấm và tối than nâu, font serif của Nut Shell.

Tham chiếu: https://socvra.framer.website/ (chụp ngày 28/10/2026, khổ 1440×900, 14 màn hình).
Chỉ lấy **bố cục, nhịp khoảng cách, cấu trúc thành phần**. Không lấy chữ, ảnh, icon hay logo của Socvra.

---

## 0. Bản đồ các phần (duyệt phần này trước)

Socvra có 13 phần, Nut Shell dùng 12 (bỏ Bảng giá). Cột "Nut Shell" là nội dung thay vào.

| # | Phần trên Socvra | Bố cục | Nut Shell dùng cho | Nội dung có sẵn? |
|---|---|---|---|---|
| 1 | Nav | Logo trái · link "/ MỤC" chữ nhỏ · nút pill | Giữ menu hiện tại | ✅ |
| 2 | Hero | **Wordmark khổng lồ tràn ngang** · tagline nhỏ trái · H1 lớn phải · khối "bento" tối 4 ô (năm dọc / câu ngắn / ảnh / vòng tròn biểu tượng) · đoạn giới thiệu + 2 nút · hàng meta (nhãn · 3 tag pill · bộ đếm · huy hiệu EST.) | Wordmark "NUT SHELL" · H1 "Thiết kế bắt đầu từ sự thấu hiểu" · bento: "2017" dọc, câu định vị, ảnh bìa dự án, vòng tròn logo hạt · tag: NHÀ Ở / CAFE / NHÀ HÀNG · EST. 2017 | ✅ |
| 3 | Dải logo đối tác | Nền tối · nhãn trái + câu phải · marquee tên thương hiệu xen dấu ✱ | Marquee **tên dự án** (Indochine ✱ Wabi ✱ HALA ✱ Penthouse …) | ✅ (32 tên) |
| 4 | Dịch vụ | Nền tối · H2 màu nhấn + ảnh tròn · **2 thẻ lớn đánh số "01 /", bấm để mở chi tiết** (xem mục 4 › Thẻ dịch vụ mở rộng) · câu kết + nút | 01 / Tư vấn & Thiết kế (5 gói A–E) · 02 / Thiết kế & Thi công trọn gói (6 bước) | ✅ |
| 5 | Quy trình | Nền sáng · H2 + 2 vòng tròn trang trí · danh sách hàng: số · **chữ rất to** · mô tả phải | 4 bước: Lắng nghe → Concept & 3D → Thi công → Bàn giao | ✅ |
| 6 | Dự án chọn lọc | Nền xanh xám nhạt (ở đây đổi sang cát) · H2 + mô tả · 3 thẻ ảnh (nhãn · tên · mô tả) · nút "Xem tất cả" | 3 dự án `featured` + link /du-an | ✅ |
| 7 | Vì sao chọn | Nền tối · H2 màu nhấn · số lớn "{4}" · lưới 2×2 thẻ đánh số | 4 giá trị: Tính xác thực · Sự tỉ mỉ · Đồng hành dài lâu · + 1 | ⚠️ cần thêm 1 giá trị |
| 8 | Cảm nhận khách hàng | Nền sáng · 3 thẻ trích dẫn · avatar pill + vòng số thứ tự | Testimonials hiện có (4 người → hiện 3) | ✅ |
| ~~9~~ | ~~Bảng giá~~ | — | **Bỏ** | — |
| 10 | FAQ | Trái: H2 + câu + nút · phải: accordion có nút ⊕ | Câu hỏi thường gặp (chi phí, thời gian, bảo hành…) | ❌ cần nội dung |
| 11 | CTA | Thẻ tối bo lớn · H2 + câu + nút · **vòng tròn màu nhấn khổng lồ** chứa ✱ | "Sẵn sàng bắt đầu dự án của bạn?" + nút Liên hệ | ✅ |
| 12 | Kết trang | Hàng meta · ảnh tròn kẹp giữa 2 cụm vạch dọc · dải marquee màu nhấn chữ nhỏ · câu lớn chia đôi "_ … / … _" | "_ THIẾT KẾ TỪ CÂU CHUYỆN / KHÔNG TỪ CATALOG _" | ✅ |
| 13 | Footer | Câu tagline + nút · 3 cột "/ ĐIỀU HƯỚNG / LIÊN HỆ / MẠNG XÃ HỘI" · **wordmark khổng lồ** · dòng bản quyền | Footer hiện tại sắp lại | ✅ |

**Các section trang chủ hiện tại sẽ ánh xạ như sau:** Hero → #2 · About → gộp vào #2 (đoạn giới thiệu) · Services → #4 · Projects → #6 · Testimonials → #8 · Marquee → #3 + #12 · Stats → hàng meta ở #2 hoặc vào #7 · Process → #5 · Quote → #12 · CTA → #11.

---

## 1. Visual Theme & Atmosphere

**Style**: Warm Editorial Grid. Lưới biên tập, chữ to, thẻ bo tròn.
**Keywords**: editorial, ấm, đất, chữ khổng lồ, thẻ bento, nhãn "/ mục", marquee, trầm tĩnh
**Tone**: tự tin, chậm rãi, cao cấp. Không ồn ào, không dùng neon hay gradient.
**Feel**: như một cuốn tạp chí kiến trúc in trên giấy kem, xen giữa là các trang in nền nâu đậm.

**Interaction Tier**: **L2, tương tác mượt**. Có hiện dần khi cuộn, marquee, menu đổi trạng thái khi cuộn, hover thẻ, accordion.
**Dependencies**: Chỉ CSS + IntersectionObserver (đã có sẵn `RevealOnScroll`). Không thêm GSAP hay Lenis.

> Khác với skill: skill yêu cầu L2 phải có đủ 6 loại hiệu ứng "signature". Socvra thực tế khá tiết chế, nên chỉ làm đúng các hiệu ứng Socvra có, không thêm nền WebGL hay chữ chạy hiệu ứng.

## 2. Color Palette & Roles

Bảng màu do Nut Shell chốt (28/10/2026), kèm các điều chỉnh để đạt tương phản chuẩn WCAG AA:

| Vai trò | Màu | Ghi chú |
|---|---|---|
| Nền trang | `#F0E7D7` kem ấm | Gần như trùng màu kem cũ `#F0E8D8` (tỉ lệ 1.01:1), người xem không thấy khác |
| Nền tối | `#1D1A19` than nâu | Thay cho nâu `#6B3318` ở các mảng tối lớn |
| Thẻ tối | `#3A302C` | Thẻ nằm trên nền tối, ô bento |
| Màu nhấn | `#DCC99B` cát | **Chỉ dùng trên nền tối** hoặc làm nền nút có chữ tối |
| Chữ phụ | `#6B675F` | Đạt chuẩn trên nền trang (4.59:1). Trên nền xen kẽ dùng `#5C5851` |
| Nền xen kẽ | `#E6DAC3` | Phần Dự án, Cảm nhận khách hàng |

**Kiểm tra tương phản** (chuẩn AA: chữ thường ≥ 4.5, chữ lớn ≥ 3):

| Cặp màu | Tỉ lệ | Kết quả |
|---|---|---|
| Chữ tối `#1D1A19` trên nền `#F0E7D7` | 14.1 | ✅ |
| Chữ phụ `#6B675F` trên nền `#F0E7D7` | 4.59 | ✅ vừa đủ |
| Chữ phụ `#6B675F` trên nền xen kẽ `#E6DAC3` | 4.07 | ❌ → dùng `#5C5851` (5.11) |
| Cát `#DCC99B` trên nền tối `#1D1A19` | 10.6 | ✅ |
| Cát `#DCC99B` trên thẻ tối `#3A302C` | 7.85 | ✅ |
| Kem `#F0E7D7` trên thẻ tối `#3A302C` | 10.4 | ✅ |
| Cát `#DCC99B` trên nền kem `#F0E7D7` | 1.33 | ❌ không bao giờ dùng làm chữ hay viền trên nền sáng |
| Nền xen kẽ so với nền trang | 1.13 | Ranh giới rất nhẹ, giống Socvra. Có thể thêm đường kẻ `--border` nếu muốn tách rõ hơn |
| Nâu `#6B3318` trên nền trang / nền xen kẽ | 8.1 / 7.2 | ✅ giữ làm màu nhấn trên nền sáng (nhãn "/ MỤC", link) |

```css
:root {
  /* Backgrounds */
  --bg: #F0E7D7;                 /* nền trang */
  --surface: #F6F0E4;            /* thẻ trên nền sáng */
  --surface-alt: #E6DAC3;        /* phần xen kẽ */
  --surface-dark: #1D1A19;       /* phần tối (Dịch vụ, Vì sao, CTA, dải logo) */
  --surface-dark-card: #3A302C;  /* thẻ / ô bento trên nền tối */
  --surface-dark-hover: #453A35;

  /* Borders */
  --border: rgba(29, 26, 25, .14);
  --border-hover: rgba(29, 26, 25, .36);
  --border-light: rgba(240, 231, 215, .14);   /* viền trên nền tối */

  /* Text */
  --text: #1D1A19;               /* tiêu đề, chữ chính trên nền sáng */
  --text-secondary: #6B675F;     /* đoạn văn trên --bg */
  --text-secondary-alt: #5C5851; /* đoạn văn trên --surface-alt */
  --text-light: #F0E7D7;         /* chữ trên nền tối */
  --text-light-secondary: #B8AE9C; /* đoạn văn trên nền tối (6.6:1 trên --surface-dark) */

  /* Accent */
  --accent: #DCC99B;             /* nút chính, vòng tròn lớn, H2 trên nền tối */
  --accent-hover: #E6D6AE;
  --accent-strong: #6B3318;      /* nhãn "/ MỤC", link trên nền sáng */

  /* RGB */
  --bg-rgb: 240, 231, 215;
  --dark-rgb: 29, 26, 25;
  --accent-rgb: 220, 201, 155;

  /* Semantic */
  --success: #5E7A4A;
  --error: #A8432C;
}
```

**Color Rules:**
- Mọi màu gọi qua biến CSS. Không viết thẳng mã hex trong component.
- Nhịp nền: sáng → tối → sáng → xen kẽ → tối → sáng… Hai phần tối không đặt liền nhau.
- Trên nền tối: H2 dùng `--accent`, nhãn dùng **trắng/kem** (quy ước sẵn có của dự án), đoạn văn dùng `--text-light-secondary`.
- `--accent` (cát) chỉ xuất hiện trên nền tối, hoặc làm nền nút với chữ `--text`. Không dùng cát trên nền kem.

## 3. Typography Rules

Socvra dùng Switzer (sans) cho tiêu đề, Inter cho đoạn văn, Geist Mono cho nhãn. Nut Shell giữ **2 font**:

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Wordmark khổng lồ (hero/footer) | Cormorant Garamond | `clamp(88px, 17vw, 260px)` | 600 | 0.85 | -0.04em |
| Hero H1 | Cormorant Garamond | `clamp(44px, 6vw, 88px)` | 500 | 0.95 | -0.03em |
| Section H2 | Cormorant Garamond | `clamp(34px, 4vw, 60px)` | 500 | 1.0 | -0.02em |
| Chữ danh sách lớn (Quy trình) | Cormorant Garamond | `clamp(36px, 4.4vw, 64px)` | 400 | 1.0 | -0.02em |
| H3 thẻ | Cormorant Garamond | 26px | 500 | 1.15 | -0.01em |
| Số lớn "{4}" | Cormorant Garamond | `clamp(96px, 10vw, 150px)` | 300 | 1 | -0.04em |
| Body lớn (intro) | Be Vietnam Pro | 19px | 300 | 1.55 | -0.005em |
| Body | Be Vietnam Pro | 15px | 300 | 1.7 | 0 |
| Label "/ MỤC" | Be Vietnam Pro | 11px | 500 | 1.2 | 0.14em, VIẾT HOA |
| Tag pill / meta | Be Vietnam Pro | 11px | 500 | 1 | 0.1em, VIẾT HOA |
| Nút | Be Vietnam Pro | 14px | 500 | 1 | 0 |

**Typography Rules:**
- Cormorant có x-height nhỏ hơn Switzer, nên cỡ chữ tiêu đề **tăng khoảng 10–15%** so với số đo gốc của Socvra (60px → khoảng 66px).
- Nhãn luôn có tiền tố "/ " (ví dụ `/ DỊCH VỤ`). Đây là chi tiết nhận diện chính của bố cục.
- Socvra dùng Geist Mono cho nhãn. Ở đây thay bằng Be Vietnam Pro viết hoa, tăng letter-spacing để giữ cảm giác "mono".
- **NEVER use**: Lora, Space Mono, Marcellus, Jost, Inter, Arial, Georgia, font hệ thống.

**Text Decoration:** Không dùng chữ gradient, không đổ bóng chữ. Nhấn bằng màu `--accent` trên nền tối, hoặc bằng cỡ chữ.

## 4. Component Stylings

### Buttons — pill đơn giản (bỏ vòng chấm ✱ của Socvra)
```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-height: 44px; padding: 0 24px;
  border-radius: 999px; border: 1px solid transparent;
  font: 500 14px/1 "Be Vietnam Pro", sans-serif;
  transition: background-color .25s ease, color .25s ease, border-color .25s ease, transform .25s ease;
}
.btn--dark   { background: var(--surface-dark); color: var(--text-light); }
.btn--dark:hover { background: var(--surface-dark-card); }
.btn--accent { background: var(--accent); color: var(--text); }        /* dùng trên nền tối */
.btn--accent:hover { background: var(--accent-hover); }
.btn--ghost  { background: transparent; color: var(--text); border-color: var(--border-hover); }
.btn--ghost:hover { border-color: var(--text); }
.btn--ghost-light { background: transparent; color: var(--text-light); border-color: var(--border-light); }

.btn__arrow { transition: transform .3s ease; }   /* mũi tên "→" thay cho chấm tròn */
.btn:hover .btn__arrow { transform: translateX(3px); }
.btn:hover   { transform: translateY(-1px); }
.btn:active  { transform: translateY(0) scale(.98); }
.btn:focus-visible { outline: 2px solid var(--accent-strong); outline-offset: 3px; }
.btn--accent:focus-visible, .btn--ghost-light:focus-visible { outline-color: var(--accent); }
.btn:disabled, .btn[aria-disabled="true"] { opacity: .45; pointer-events: none; }
```

### Cards — thẻ đánh số
```css
.card {
  border-radius: 20px; padding: 24px;
  background: var(--surface); border: 1px solid var(--border);
  display: flex; flex-direction: column; justify-content: space-between;
  min-height: 260px;
  transition: background-color .3s ease, border-color .3s ease, transform .3s ease;
}
.card--dark { background: var(--surface-dark-card); border-color: var(--border-light); color: var(--text-light); }
.card__index { font: 500 11px/1 "Be Vietnam Pro"; letter-spacing: .14em; }   /* "/ 01" */
.card__icon  { width: 32px; height: 32px; border-radius: 50%; border: 1px solid currentColor; opacity: .7; }
.card:hover  { border-color: var(--border-hover); transform: translateY(-3px); }
.card--dark:hover { background: var(--surface-dark-hover); }
.card:focus-within { outline: 2px solid var(--accent); outline-offset: 2px; }
```

### Thẻ dịch vụ mở rộng (#4)
Hai thẻ lớn trên nền tối. Bấm vào thẻ (hoặc nút "Xem chi tiết") để mở phần chi tiết ngay bên dưới. Mỗi lần chỉ mở một thẻ.

```
┌─────────────────────────────── thẻ đóng ────────────────────────────────┐
│ 01 /                                                          [ + ]     │
│ Tư vấn & Thiết kế                                                       │
│ Dành cho khách hàng cần giải pháp thiết kế, hồ sơ ý tưởng hoặc …        │
└─────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────── thẻ mở ──────────────────────────────────┐
│ 01 /  Tư vấn & Thiết kế                                       [ × ]     │
│ ─────────────────────────────────────────────────────────────────────── │
│ A  Khảo sát & Tư vấn    │ B  Thiết kế Concept   │ C  Diễn họa 3D        │
│ D  Hồ sơ Kỹ thuật       │ E  Thiết kế Tổng thể  │                       │
│ ─────────────────────────────────────────────────────────────────────── │
│ Mỗi dự án đều có nhu cầu …                       [ LIÊN HỆ TƯ VẤN → ]   │
└─────────────────────────────────────────────────────────────────────────┘
```
- Thẻ 01: 5 mục A–E (lưới 3 cột) + câu kết + nút "LIÊN HỆ TƯ VẤN".
- Thẻ 02: 6 bước đánh số 1–6 (lưới 3×2), chính là quy trình thiết kế & thi công.
- Ký hiệu A–E / 1–6 dùng font Cormorant cỡ 28px, màu `--accent`. Tên mục là H3 màu `--text-light`, mô tả dùng `--text-light-secondary`.

```css
.svc { border-radius: 20px; background: var(--surface-dark-card); border: 1px solid var(--border-light); }
.svc__head { width: 100%; min-height: 44px; padding: 28px; display: grid; grid-template-columns: 1fr auto; gap: 8px 24px;
  text-align: left; color: var(--text-light); cursor: pointer; }
.svc__head:hover { background: var(--surface-dark-hover); }
.svc__head:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
.svc__toggle { width: 40px; height: 40px; border-radius: 50%; border: 1px solid var(--border-light);
  display: grid; place-items: center; transition: transform .35s ease, background-color .25s ease; }
.svc[data-open="true"] .svc__toggle { transform: rotate(45deg); background: var(--accent); color: var(--text); }
/* mở/đóng mượt bằng grid-rows (không animate height) */
.svc__body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .45s cubic-bezier(.2,.7,.2,1); }
.svc[data-open="true"] .svc__body { grid-template-rows: 1fr; }
.svc__inner { overflow: hidden; }
.svc__items { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border-light); margin: 0 28px; }
.svc__item { background: var(--surface-dark-card); padding: 24px 20px; }
```
- Dùng `<button aria-expanded aria-controls>` cho phần đầu thẻ. Phần chi tiết có `role="region"` và `aria-labelledby`.
- Khi `prefers-reduced-motion`: bỏ transition, mở và đóng ngay lập tức.

### Bento hero
```css
.bento {
  display: grid; gap: 8px; padding: 8px; border-radius: 28px;
  background: var(--surface-dark);
  grid-template-columns: 90px 1.6fr 1.4fr 1.4fr; height: 300px;
}
.bento > * { border-radius: 20px; border: 1px solid var(--border-light); background: var(--surface-dark-card); overflow: hidden; }
```

### Navigation
```css
.nav { position: fixed; inset: 0 0 auto; height: 72px; z-index: 50;
  display: flex; align-items: center; justify-content: space-between; padding: 0 clamp(16px, 3vw, 40px);
  background: rgba(var(--bg-rgb), .0); transition: background-color .35s ease, border-color .35s ease;
  border-bottom: 1px solid transparent; }
.nav.is-scrolled { background: rgba(var(--bg-rgb), .92); border-color: var(--border); }
.nav__link { font: 500 11px/1 "Be Vietnam Pro"; letter-spacing: .14em; text-transform: uppercase; }
.nav__link::before { content: "/ "; opacity: .6; }
```

### Links
```css
.link { color: var(--text); text-decoration: none; background: linear-gradient(currentColor, currentColor) 0 100% / 0 1px no-repeat;
  transition: background-size .35s ease, color .2s ease; }
.link:hover { background-size: 100% 1px; color: var(--accent-strong); }
.link:focus-visible { outline: 2px solid var(--accent-strong); outline-offset: 2px; }
```

### Tags / Badges
```css
.tag { display: inline-flex; align-items: center; height: 26px; padding: 0 12px; border-radius: 999px;
  border: 1px solid currentColor; font: 500 11px/1 "Be Vietnam Pro"; letter-spacing: .1em; text-transform: uppercase; }
.badge-est { background: var(--accent); color: var(--surface-dark); border-color: transparent; }
```

### Accordion (FAQ)
```css
.faq__item { border-top: 1px solid var(--border); }
.faq__btn  { width: 100%; min-height: 64px; display: flex; justify-content: space-between; align-items: center;
  font: 500 20px/1.3 "Cormorant Garamond"; text-align: left; }
.faq__plus { width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--border-hover);
  transition: transform .35s ease, background-color .25s ease; }
.faq__item[open] .faq__plus { transform: rotate(45deg); background: var(--surface-dark); color: var(--accent); }
.faq__btn:focus-visible { outline: 2px solid var(--accent-strong); outline-offset: 4px; }
```

### Marquee
```css
.marquee { overflow: hidden; white-space: nowrap; }
.marquee__track { display: inline-flex; gap: 48px; animation: marquee 40s linear infinite; }
.marquee:hover .marquee__track { animation-play-state: paused; }
@keyframes marquee { to { transform: translateX(-50%); } }
```

## 5. Layout Principles

**Container:**
- Max width: 1280px. Riêng wordmark được tràn hết chiều ngang.
- Padding ngang: `clamp(16px, 3vw, 40px)`
- Khối chữ hẹp: tối đa 560px

**Spacing Scale** (bội số của 8):
- Khoảng cách trên/dưới mỗi phần: `clamp(88px, 10vw, 140px)`
- Từ tiêu đề phần tới nội dung: 56px
- Khoảng cách giữa các thẻ: 8px (bento) / 12px (lưới thẻ)
- Padding trong thẻ: 24px
- Bo góc: 999px (pill) · 20px (thẻ) · 28px (khối bento, thẻ CTA)

**Grid:**
```css
.section-head { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: end; margin-bottom: 56px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.process-row { display: grid; grid-template-columns: 80px 1fr 1fr; align-items: center; padding: 22px 0; border-top: 1px solid var(--border); }
```

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | Không đổ bóng, chỉ có viền 1px | Mặc định cho mọi thẻ (Socvra không dùng bóng) |
| Contrast | Đổi màu nền (kem ↔ nâu) | Tạo chiều sâu bằng phần tối / thẻ tối |
| Lift | `translateY(-3px)` + viền đậm hơn | Hover thẻ |
| Overlay | `rgba(var(--dark-rgb), .55)` | Chữ đặt trên ảnh |
| Open | Thẻ dịch vụ mở: nền giữ nguyên, nút ⊕ chuyển sang nền cát | #4 |

## 7. Animation & Interaction

**Motion Philosophy**: Chậm, chắc và tiết chế. Chỉ animate `opacity` và `transform`.
**Tier**: L2. Chỉ dùng CSS + `RevealOnScroll` có sẵn.

| Hiệu ứng | Chỗ dùng | Thông số |
|---|---|---|
| Hiện dần + trượt lên 24px | Mọi tiêu đề, thẻ (lệch nhau 80ms) | `RevealOnScroll`, .9s `cubic-bezier(.2,.7,.2,1)` |
| Wordmark mask reveal | Hero lúc tải | `clip-path: inset(0 0 100% 0)` → `inset(0)`, 1.1s, chạy 1 lần |
| Marquee | Dải tên dự án (#3), dải nhấn (#12) | 40s linear, dừng khi hover |
| Nav đổi nền khi cuộn | Nav | nền trong suốt → kem 92% sau 60px |
| Mũi tên trượt khi hover nút | Mọi nút pill | translateX 3px, .3s |
| Mở/đóng thẻ dịch vụ | #4 | grid-rows 0fr → 1fr, .45s · nút ⊕ xoay 45° |
| Accordion | FAQ | `<details>` gốc, dấu ⊕ xoay 45° |
| Vòng ✱ quay chậm | Vòng tròn lớn ở CTA (#11) | 1 vòng / 24s, linear |

```css
@media (prefers-reduced-motion: reduce) {
  .marquee__track, .spin-slow { animation: none; }
  .wordmark { clip-path: none; animation: none; }
  .btn:hover .btn__arrow, .card:hover { transform: none; }
  .svc__body, .svc__toggle { transition: none; }
}
```

## 8. Do's and Don'ts

**Do**
1. Bắt đầu mỗi phần bằng nhãn `/ TÊN MỤC` rồi tới H2. Đây là nhịp chủ đạo của bố cục.
2. Đặt tiêu đề phần và đoạn mô tả trên cùng một hàng: H2 bên trái, mô tả bên phải (`.section-head`).
3. Ký hiệu ✱ chỉ dùng ở 3 chỗ: dải marquee, vòng tròn lớn ở CTA và icon thẻ. Nút không dùng ✱.
4. Ảnh dùng ảnh render thật từ `public/projects/`, bo 20px.
5. Xen kẽ phần sáng và tối để trang có nhịp.
6. Lưới thẻ luôn đủ hàng (3, 6 hoặc 2×2). Không để một thẻ lẻ.
7. Nút và vùng bấm tối thiểu 44×44px, có focus ring rõ.

**Don't**
1. Không đổ bóng cho thẻ (Socvra phẳng hoàn toàn).
2. Không dùng font thứ ba, kể cả cho số hay nhãn.
3. Không chép chữ, tên thương hiệu hay ảnh của Socvra (Northstar, Form & Field…).
4. Không làm bảng giá. Không ghi giá hay số liệu chưa xác thực ("98% hài lòng"…) nếu Nut Shell chưa xác nhận.
5. Không dùng emoji làm icon. ✱ là ký tự chữ, các icon khác dùng SVG.
6. Không làm parallax hay pin section. Bố cục này dựa vào lưới, không dựa vào hiệu ứng cuộn.
7. Không đặt hai phần nền tối liền nhau.
8. Không viết thẳng mã hex trong component. Dùng biến ở mục 2.
9. Không dùng màu cát `#DCC99B` trên nền kem (tương phản 1.33:1).

## 9. Responsive Behavior

| Breakpoint | Thay đổi |
|---|---|
| ≥ 1280 | Như thiết kế |
| 1024–1279 | Bento 4 cột → cột năm dọc ẩn, còn 3 ô · lưới 3 cột giữ nguyên |
| 768–1023 | `.section-head` 1 cột · lưới 3 → 2 cột · menu thu thành nút ☰ |
| < 768 | Thẻ dịch vụ: mục chi tiết xếp 1 cột · Mọi lưới 1 cột · bento thành 2×2 (ảnh chiếm 2 ô trên) · Quy trình: số + chữ lớn ở trên, mô tả ở dưới · wordmark `17vw` không tràn ngang · padding ngang 16px |

- Vùng chạm ≥ 44×44px. Accordion cao tối thiểu 64px.
- Không cuộn ngang ở mọi khổ màn hình (wordmark dùng `vw` và `overflow: hidden`).

---

## Đã chốt (28/10/2026)

- Bỏ Bảng giá (#9).
- Bỏ vòng chấm ✱ ở nút. Nút là pill đơn giản, có mũi tên "→".
- Dịch vụ gồm 2 thẻ mở rộng, nội dung chi tiết ở `src/data/services.js`.
- Bảng màu: nền `#F0E7D7` · tối `#1D1A19` / `#3A302C` · nhấn `#DCC99B` · chữ phụ `#6B675F` · xen kẽ `#E6DAC3`. Giữ nâu `#6B3318` cho nhãn và link trên nền sáng.

## Cập nhật (28/10/2026, lần 2)

- **Hero trang chủ:** đổi sang ảnh tràn màn hình tự chuyển (Villa Long Hậu, Cheese Tart, Muted Spark, Kingdom 101) với tiêu đề lớn so le. Bỏ wordmark và khối bento.
- **Bỏ ký hiệu ✱ của Socvra.** CTA dùng `logo-round.png`. Marquee và dải nhấn dùng chấm tròn nhỏ. Thẻ "Vì sao" không còn icon.
- **FAQ:** giữ bản nháp, chỉnh sau.
- **Giá trị thứ 4:** tạm dùng "Minh bạch".

## Kế hoạch áp dụng cho các trang khác

**Bước 0. Nền chung (làm trước):** tách các class trong `src/pages/home.css` (`.btn`, `.tag`, `.card`, `.h-label`, `.h-h2`, `.section-head`, `.faq__*`, `.cta-card`) ra `src/styles/ui.css` để mọi trang dùng chung. Tạo 2 component dùng chung:
- `PageHeader`: nhãn "/ MỤC", H2 lớn bên trái, mô tả bên phải, breadcrumb.
- `CtaCard`: thẻ tối, logo tròn, nút "Đặt lịch tư vấn".

| Trang | Hiện tại | Đề xuất |
|---|---|---|
| **Footer** (mọi trang) | Nền cát, wordmark mờ, 4 cột | Nền `--bg` · tagline + nút · 3 cột "/ ĐIỀU HƯỚNG / LIÊN HỆ / MẠNG XÃ HỘI" · logo chữ khổ lớn · dòng bản quyền |
| **Dự án** `/du-an` | Header nâu, tab lọc, lưới thẻ | `PageHeader` · bộ lọc dạng `.tag` (NHÀ Ở / CAFE / NHÀ HÀNG) kèm số lượng · lưới 3 cột dùng thẻ `.work-card` như trang chủ (ảnh bo 20px, nhãn hạng mục, tên Cormorant) · `CtaCard` |
| **Chi tiết dự án** | Ảnh hero, 2 cột thông tin, gallery, CTA | Ảnh bìa tràn màn hình, tên dự án lớn đặt góc dưới trái (giống Hero trang chủ) · hàng thông tin dạng meta-row (phong cách · diện tích · địa điểm · năm, ẩn mục trống) · gallery xen kẽ 1 ảnh rộng + 2 ảnh hẹp · điều hướng dự án trước/sau dạng 2 thẻ lớn · `CtaCard` |
| **Giới thiệu** | Bố cục Interiia, màu nâu | Giữ bố cục, đổi sang token mới (`--surface-dark` thay nâu `#6B3318`) · Hành trình dùng `.process-row` · Đội ngũ dùng thẻ bo 20px · CTA thay bằng `CtaCard` |
| **Chia sẻ** `/chia-se` | Header, lưới bài | `PageHeader` · bài đầu tiên làm thẻ lớn ngang (ảnh trái, tiêu đề phải) · các bài còn lại lưới 3 cột kiểu `.work-card` (nhãn chuyên mục · ngày · thời gian đọc) |
| **Bài viết** | Cover, bài + sidebar | Cover bo 28px trong container · tiêu đề Cormorant lớn · thân bài rộng tối đa 680px, Be Vietnam Pro 17px · sidebar thành thẻ tối `CtaCard` thu nhỏ · "Bài viết khác" 3 thẻ |
| **Liên hệ** | Header, thông tin trái, form phải | `PageHeader` · trái: thẻ tối chứa thông tin liên hệ + bản đồ bo 20px · phải: form trên nền `--surface`, input viền `--border`, bo 12px, focus viền `--text` · nút gửi `.btn--dark` · bên dưới tái dùng FAQ trang chủ |
| **404** | Chữ nâu giữa trang | Nền `--bg`, "404" Cormorant cỡ lớn, nút `.btn--dark` về trang chủ |

**Thứ tự đề xuất:** Bước 0 → Footer → Dự án + Chi tiết dự án (khách xem nhiều nhất) → Liên hệ → Giới thiệu → Chia sẻ + Bài viết → 404.

## Còn chờ quyết định

1. **FAQ (#10):** nội dung chính thức (đang dùng bản nháp).
2. **Giá trị thứ 4:** xác nhận "Minh bạch" hoặc đổi.
