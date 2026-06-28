# Routes — Nut Shell Studio

> **Tự động tạo lúc:** 22:35:49 17/6/2026

---

| Path | Component | Tiêu đề | Mô tả |
|---|---|---|---|
| `/` | `Home` | Trang Chủ | Hero + toàn bộ sections homepage |
| `/gioi-thieu` | `AboutPage` | Giới Thiệu | Về studio, team, triết lý thiết kế |
| `/du-an` | `ProjectsPage` | Dự Án | Danh sách tất cả dự án theo category |
| `/du-an/:slug` | `ProjectDetail` | Chi Tiết Dự Án | Gallery + thông tin từng dự án |
| `/chia-se` | `BlogPage` | Chia Sẻ (Blog) | Danh sách bài viết |
| `/chia-se/:slug` | `BlogDetail` | Chi Tiết Bài | Nội dung từng bài viết |
| `/lien-he` | `ContactPage` | Liên Hệ | Form liên hệ + thông tin studio |
| `*` | `NotFound` | 404 | Trang không tìm thấy |

---

## Anchor sections (scroll within homepage)

| Anchor | Section | Link |
|---|---|---|
| `#dichvu` | Services | `href="/#dichvu"` |
| `#duan` | Projects | `href="#duan"` |
| `#lienhe` | CTA / Contact | `href="#lienhe"` |
