/**
 * gen-docs.js — tự động tạo tài liệu cấu trúc dự án
 * Chạy: node scripts/gen-docs.js
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SRC  = join(ROOT, 'src')
const DOCS = join(ROOT, 'docs')

if (!existsSync(DOCS)) mkdirSync(DOCS)

const now = () =>
  new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false })

function read(path) { return readFileSync(path, 'utf-8') }

function write(filename, content) {
  writeFileSync(join(DOCS, filename), content, 'utf-8')
  console.log(`  ✓ docs/${filename}`)
}

/* ── Extract component name ── */
function componentName(src) {
  const m = src.match(/export default function (\w+)/)
  return m?.[1] ?? null
}

/* ── Extract props from function signature ── */
function extractProps(src) {
  const m = src.match(/export default function \w+\(\{([^}]+)\}/)
  if (!m) return []
  return m[1]
    .split(',')
    .map(s => s.trim().split(/[=:\n]/)[0].trim())
    .filter(s => /^\w+$/.test(s))
}

/* ── Parse routes from App.jsx ── */
function parseRoutes() {
  const src = read(join(SRC, 'App.jsx'))
  const routes = []
  const re = /<Route\s+path="([^"]+)"\s+element=\{<(\w+)/g
  let m
  while ((m = re.exec(src)) !== null) routes.push({ path: m[1], component: m[2] })
  return routes
}

/* ── Scan all .jsx files in a dir ── */
function scanJsx(dir) {
  return readdirSync(dir)
    .filter(f => f.endsWith('.jsx'))
    .sort()
    .map(file => {
      const src = read(join(dir, file))
      return { file, name: componentName(src), props: extractProps(src), src }
    })
}

/* ── Extract imports between components ── */
function extractLocalImports(src) {
  const re = /import\s+(\w+)\s+from\s+'(\.\.?\/[^']+)'/g
  const out = []
  let m
  while ((m = re.exec(src)) !== null) out.push(m[1])
  return out
}

/* ── git log (last 10 commits) ── */
function gitLog() {
  try {
    return execSync('git log --oneline -10', { cwd: ROOT }).toString().trim()
  } catch {
    return 'Không có git history.'
  }
}

/* ════════════════════════════════════════════
   STRUCTURE.md
════════════════════════════════════════════ */
function genStructure() {
  const components = scanJsx(join(SRC, 'components'))
  const pages      = scanJsx(join(SRC, 'pages'))
  const routes     = parseRoutes()

  let md = `# Cấu Trúc Dự Án — Nut Shell Studio\n\n`
  md += `> **Tự động tạo lúc:** ${now()}  \n`
  md += `> Chạy \`npm run docs\` để cập nhật thủ công.\n\n`
  md += `---\n\n`

  /* Components */
  md += `## Components (\`src/components/\`)\n\n`
  md += `| # | Component | File | Props |\n`
  md += `|---|---|---|---|\n`
  components.forEach(({ name, file, props }, i) => {
    md += `| ${i + 1} | **${name ?? file}** | \`${file}\` | ${props.length ? props.map(p => `\`${p}\``).join(', ') : '—'} |\n`
  })

  md += `\n---\n\n`

  /* Pages */
  md += `## Pages (\`src/pages/\`)\n\n`
  md += `| # | Page | File | Route | Props |\n`
  md += `|---|---|---|---|---|\n`
  pages.forEach(({ name, file, props }, i) => {
    const route = routes.find(r => r.component === name)
    const path  = route?.path ?? '—'
    md += `| ${i + 1} | **${name ?? file}** | \`${file}\` | \`${path}\` | ${props.length ? props.map(p => `\`${p}\``).join(', ') : '—'} |\n`
  })

  md += `\n---\n\n`

  /* Component tree per page */
  md += `## Cây Component (mỗi page dùng gì)\n\n`
  pages.forEach(({ name, file, src }) => {
    const route   = routes.find(r => r.component === name)
    const imports = extractLocalImports(src)
    if (!imports.length) return
    md += `### ${name} (\`${route?.path ?? file}\`)\n`
    imports.forEach(imp => { md += `- \`${imp}\`\n` })
    md += '\n'
  })

  write('STRUCTURE.md', md)
}

/* ════════════════════════════════════════════
   DESIGN.md
════════════════════════════════════════════ */
function genDesign() {
  let md = `# Design System — Nut Shell Studio\n\n`
  md += `> **Tự động tạo lúc:** ${now()}\n\n`
  md += `---\n\n`

  md += `## Màu sắc (Tailwind tokens)\n\n`
  md += `| Token | Hex | Dùng ở đâu |\n`
  md += `|---|---|---|\n`
  const colors = [
    ['cream',                '#F2EBDF', 'Nền trang, background chính'],
    ['cream-dark',           '#EAE0CE', 'Hover state trên nền cream'],
    ['espresso',             '#2A2018', 'Text chính, dark overlay, nav page-mode'],
    ['sable',                '#A8623C', 'Accent, scrollbar, active link, CTA'],
    ['sandcastle',           '#E3D2B0', 'Button fill, secondary accent'],
    ['text-secondary',       '#6B5E4F', 'Body text mờ trên nền sáng'],
    ['text-light',           '#F4EFE7', 'Text trên nền tối (hero, footer)'],
    ['text-light-secondary', '#B6A88F', 'Text phụ trên nền tối'],
  ]
  colors.forEach(([token, hex, desc]) => {
    md += `| \`${token}\` | \`${hex}\` | ${desc} |\n`
  })

  md += `\n---\n\n`

  md += `## Typography\n\n`
  md += `| Vai trò | Font | Weights | Biến CSS |\n`
  md += `|---|---|---|---|\n`
  md += `| Heading / Display | **Lora** (serif) | 400 500 600 700 + italic | \`SERIF\` |\n`
  md += `| Body / UI text | **Be Vietnam Pro** | 300 400 500 600 | \`JOST\` |\n`
  md += `| Labels / Mono accent | **Space Mono** | 400 700 | \`MONO\` |\n\n`

  md += `### Pattern dùng trong component\n\`\`\`js\n`
  md += `const SERIF = { fontFamily: 'Lora, serif' }\n`
  md += `const JOST  = { fontFamily: '"Be Vietnam Pro", sans-serif' }\n`
  md += `const MONO  = { fontFamily: '"Space Mono", monospace' }\n`
  md += `\`\`\`\n\n`

  md += `---\n\n`

  md += `## Spacing & Layout\n\n`
  md += `| Yếu tố | Giá trị |\n`
  md += `|---|---|\n`
  md += `| Nav height | \`72px\` |\n`
  md += `| Nav z-index | \`9999\` |\n`
  md += `| Card border-radius | \`14px\` |\n`
  md += `| Button border-radius | \`999px\` (pill) |\n`
  md += `| Max content width | \`max-w-7xl\` (Tailwind = 80rem) |\n`
  md += `| Section padding desktop | \`clamp(80px, 12vh, 140px)\` |\n`

  md += `\n---\n\n`

  md += `## Animation patterns\n\n`
  md += `| Pattern | Nơi dùng | Cách implement |\n`
  md += `|---|---|---|\n`
  md += `| Fade up on load | Hero text | \`@keyframes fadeUp\` trong \`index.css\` + \`FADEIN(delayMs)\` helper |\n`
  md += `| Scroll reveal | Tất cả sections | \`<RevealOnScroll delay={ms}>\` (IntersectionObserver) |\n`
  md += `| Crossfade slideshow | Hero | opacity 0→1, interval 4500ms |\n`
  md += `| Footer peel | CTA → Footer | translateY + boxShadow qua scroll progress |\n`
  md += `| Horizontal scroll | Projects | sticky + translateX theo scroll progress |\n`

  write('DESIGN.md', md)
}

/* ════════════════════════════════════════════
   ROUTES.md
════════════════════════════════════════════ */
function genRoutes() {
  const routes = parseRoutes()

  const meta = {
    '/':            { title: 'Trang Chủ',       desc: 'Hero + toàn bộ sections homepage' },
    '/gioi-thieu':  { title: 'Giới Thiệu',      desc: 'Về studio, team, triết lý thiết kế' },
    '/du-an':       { title: 'Dự Án',           desc: 'Danh sách tất cả dự án theo category' },
    '/du-an/:slug': { title: 'Chi Tiết Dự Án',  desc: 'Gallery + thông tin từng dự án' },
    '/chia-se':     { title: 'Chia Sẻ (Blog)',   desc: 'Danh sách bài viết' },
    '/chia-se/:slug': { title: 'Chi Tiết Bài',  desc: 'Nội dung từng bài viết' },
    '/lien-he':     { title: 'Liên Hệ',         desc: 'Form liên hệ + thông tin studio' },
    '*':            { title: '404',              desc: 'Trang không tìm thấy' },
  }

  let md = `# Routes — Nut Shell Studio\n\n`
  md += `> **Tự động tạo lúc:** ${now()}\n\n`
  md += `---\n\n`
  md += `| Path | Component | Tiêu đề | Mô tả |\n`
  md += `|---|---|---|---|\n`

  routes.forEach(({ path, component }) => {
    const m = meta[path] ?? {}
    md += `| \`${path}\` | \`${component}\` | ${m.title ?? '—'} | ${m.desc ?? '—'} |\n`
  })

  md += `\n---\n\n`
  md += `## Anchor sections (scroll within homepage)\n\n`
  md += `| Anchor | Section | Link |\n`
  md += `|---|---|---|\n`
  md += `| \`#dichvu\` | Services | \`href="/#dichvu"\` |\n`
  md += `| \`#duan\` | Projects | \`href="#duan"\` |\n`
  md += `| \`#lienhe\` | CTA / Contact | \`href="#lienhe"\` |\n`

  write('ROUTES.md', md)
}

/* ════════════════════════════════════════════
   CHANGELOG.md
════════════════════════════════════════════ */
function genChangelog() {
  const log = gitLog()

  let md = `# Changelog — Nut Shell Studio\n\n`
  md += `> **Tự động tạo lúc:** ${now()}\n\n`
  md += `---\n\n`
  md += `## 10 commit gần nhất\n\n`
  md += `\`\`\`\n${log}\n\`\`\`\n`

  write('CHANGELOG.md', md)
}

/* ── Run all ── */
console.log(`\nGenerating docs... (${now()})\n`)
genStructure()
genDesign()
genRoutes()
genChangelog()
console.log('\nDone! Xem thư mục docs/\n')
