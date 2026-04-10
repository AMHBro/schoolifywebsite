import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const formDist = join(root, 'form', 'frontend', 'dist')
const dest = join(root, 'public', 'schoolify-form')

if (!existsSync(formDist)) {
  console.error('Missing form build:', formDist)
  console.error('Run: npm run build --prefix form/frontend')
  process.exit(1)
}

rmSync(dest, { recursive: true, force: true })
mkdirSync(join(root, 'public'), { recursive: true })
cpSync(formDist, dest, { recursive: true })
console.log('Copied form app to', dest)
