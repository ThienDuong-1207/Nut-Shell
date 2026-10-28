/* ─── Nhập ảnh render từ _source/ → public/projects/ (WebP) ───
 * Chạy: node scripts/import-renders.mjs
 * - Sắp ảnh theo lối đi: ngoại thất → sảnh → khách/bếp → ngủ → WC, rồi theo số
 * - Ảnh bìa = ảnh ngang đầu tiên; thư viện tối đa MAX_GALLERY ảnh, lấy đều
 * - Ghi danh sách ảnh ra src/data/projectImages.js
 */
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import fs from 'node:fs/promises'
import path from 'node:path'
import os from 'node:os'

const run = promisify(execFile)
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const SRC  = path.join(ROOT, '_source', 'CÔNG TRÌNH RENDER')
const OUT  = path.join(ROOT, 'public', 'projects')
const MAX_GALLERY = 20
const MAX_EDGE = 1600
const QUALITY = 72

// thư mục nguồn → slug; slug trùng projects.js để giữ thông tin cũ
const MAP = [
  ['1. Nhà ở', 'nha-o', [
    ['1. Indochine',          'indochine'],
    ['2. Cheese Tart',        'cheese-tart'],
    ['3. Muted Spark',        'muted-spark'],
    ['4. Kingdom101',         'kingdom101'],
    ['4. Lavida',             'lavida'],
    ['5. Wabi',               'wabi'],
    ['6. Penthouse',          'penthouse'],
    ['7. Duplex',             'duplex'],
    ['8. Khuyen',             'khuyen'],
    ['9. Vinhomes',           'vinhomes'],
    ['10. Uyen',              'uyen'],
    ['11. ASH house',         'ash-house'],
    ['12. Richstar',          'richstar'],
    ['13. Indochine 2',       'indochine-2'],
    ['14. Maison Bleu Miel',  'maison-bleu-miel'],
    ['15. Rustic house',      'rustic-house'],
    ['16. MVillages',         'mvillages'],
    ['17. Villa Long Hậu',    'villa-longhau'],
  ]],
  ['2. Cafe', 'cafe', [
    ['1. cf bình chánh',      'cf-binh-chanh'],
    ['2. cf gấu',             'cf-gau'],
    ['3. cf nhà gỗ',          'cf-nha-go'],
    ['4. cf yên',             'cf-yen'],
    ['5. HALA Nguyễn Huệ',    'hala-nguyen-hue'],
    ['6. Nina de Printa',     'nina-de-printa'],
    ['7. tiệm trà đi lạc',    'tiem-tra-di-lac'],
    ['8. HALA Q7',            'hala-q7'],
    ['9. HALA Thành Thái',    'hala-thanh-thai'],
  ]],
  ['3. Nhà hàng', 'nha-hang', [
    ['1. food court',         'food-court'],
    ['2. mì ramen',           'ramen-restaurant'],
    ['3. sashimi',            'sashimi-restaurant'],
    ['4. tiệm kem',           'tiem-kem'],
    ['5. tiệm pizza',         'tiem-pizza'],
  ]],
]

// thứ tự khu vực — từ khoá đã bỏ dấu
const ROOMS = [
  [0, ['mat tien', 'ngoai that', 'facade', 'phoi canh', 'exterior', 'san vuon', 'ho boi', 'cong ']],
  [1, ['sanh', 'hanh lang', 'loi vao', 'cau thang', 'tien sanh']],
  [2, ['khach', 'giai tri', 'sinh hoat', 'bep', 'an ', 'phong an', 'bar', 'quay']],
  [3, ['lam viec', 'doc sach', 'tho', 'ban cong']],
  [4, ['ngu', 'master', 'tre em', 'con']],
  [5, ['wc', 'toilet', 'tam', 've sinh', 'giat', 'kho']],
]

const plain = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/gi, 'd').toLowerCase()

function roomRank(file) {
  const name = ' ' + plain(path.basename(file, path.extname(file))).replace(/[_\-.]/g, ' ') + ' '
  for (const [rank, words] of ROOMS) if (words.some(w => name.includes(w))) return rank
  return 2.5
}

const collator = new Intl.Collator('vi', { numeric: true, sensitivity: 'base' })

async function listImages(dir) {
  const out = []
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) out.push(...await listImages(p))
    else if (/\.(jpe?g|png)$/i.test(e.name)) out.push(p)
  }
  return out
}

async function dims(file) {
  const { stdout } = await run('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', file])
  const [w, h] = [...stdout.matchAll(/: (\d+)/g)].map(m => +m[1])
  return { w, h }
}

async function toWebp(src, dest, tmpDir) {
  const tmp = path.join(tmpDir, path.basename(dest, '.webp') + '-' + Math.random().toString(36).slice(2) + '.jpg')
  await run('sips', ['-Z', String(MAX_EDGE), '-s', 'format', 'jpeg', '-s', 'formatOptions', '92', src, '--out', tmp])
  await run('cwebp', ['-quiet', '-q', String(QUALITY), '-m', '6', tmp, '-o', dest])
  await fs.rm(tmp)
}

// lấy đều n phần tử, giữ thứ tự
const spread = (arr, n) => arr.length <= n ? arr : Array.from({ length: n }, (_, i) => arr[Math.round(i * (arr.length - 1) / (n - 1))])

async function pool(tasks, size = 6) {
  let i = 0
  await Promise.all(Array.from({ length: size }, async () => { while (i < tasks.length) await tasks[i++]() }))
}

const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'renders-'))
await fs.rm(OUT, { recursive: true, force: true })
const manifest = {}
const jobs = []

for (const [catDir, catSlug, projects] of MAP) {
  for (const [dir, slug] of projects) {
    const files = (await listImages(path.join(SRC, catDir, dir)))
      .sort((a, b) => roomRank(a) - roomRank(b) || collator.compare(path.relative(SRC, a), path.relative(SRC, b)))
    if (!files.length) { console.warn('⚠ trống:', dir); continue }

    let coverIdx = 0
    for (let i = 0; i < files.length; i++) {
      const { w, h } = await dims(files[i])
      if (w > h) { coverIdx = i; break }
    }
    const cover = files[coverIdx]
    const gallery = spread(files.filter((_, i) => i !== coverIdx), MAX_GALLERY)

    const base = path.join(OUT, catSlug, slug)
    await fs.mkdir(base, { recursive: true })
    const url = name => `/projects/${catSlug}/${slug}/${name}`
    manifest[slug] = { cover: url('cover.webp'), gallery: gallery.map((_, i) => url(`${String(i + 1).padStart(2, '0')}.webp`)) }

    jobs.push(() => toWebp(cover, path.join(base, 'cover.webp'), tmpDir))
    gallery.forEach((f, i) => jobs.push(() => toWebp(f, path.join(base, `${String(i + 1).padStart(2, '0')}.webp`), tmpDir)))
    console.log(`${slug}: ${files.length} ảnh → bìa + ${gallery.length}`)
  }
}

await pool(jobs)
await fs.rm(tmpDir, { recursive: true, force: true })

const js = `// Tự sinh bởi scripts/import-renders.mjs — không sửa tay\nexport const PROJECT_IMAGES = ${JSON.stringify(manifest, null, 2)}\n`
await fs.writeFile(path.join(ROOT, 'src', 'data', 'projectImages.js'), js)
console.log(`Xong: ${jobs.length} ảnh`)
