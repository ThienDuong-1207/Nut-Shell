/**
 * watch-docs.js — theo dõi src/ và tự động tạo lại docs khi có thay đổi
 * Chạy: npm run docs:watch
 */
import { watch } from 'fs'
import { execSync } from 'child_process'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SRC  = join(ROOT, 'src')

function regen(filename) {
  const time = new Date().toLocaleTimeString('vi-VN', { hour12: false })
  console.log(`[${time}] Đã thay đổi: ${filename} — đang cập nhật docs...`)
  try {
    execSync('node scripts/gen-docs.js', { cwd: ROOT, stdio: 'inherit' })
  } catch (e) {
    console.error('Lỗi khi tạo docs:', e.message)
  }
}

let debounce = null

watch(SRC, { recursive: true }, (event, filename) => {
  if (!filename) return
  if (!filename.endsWith('.jsx') && !filename.endsWith('.js')) return
  clearTimeout(debounce)
  debounce = setTimeout(() => regen(filename), 600)
})

console.log('👀  Đang theo dõi src/ — docs sẽ tự cập nhật khi có thay đổi.')
console.log('    Nhấn Ctrl+C để dừng.\n')

// Tạo lần đầu ngay khi khởi động
regen('(khởi động)')
