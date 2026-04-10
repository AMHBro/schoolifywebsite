/** بادئة المسار من Vite، مثل `/schoolify-form` (بدون شرطة نهائية). */
export function getBasePath(): string {
  const base = import.meta.env.BASE_URL
  return base === '/' ? '' : base.replace(/\/+$/, '')
}

export function withBase(path: string): string {
  const base = getBasePath()
  const p = path.startsWith('/') ? path : `/${path}`
  return `${base}${p}`
}
