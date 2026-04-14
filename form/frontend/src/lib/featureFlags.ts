/** تفعيل واجهة/اختصار نموذج طالب تجريبي (مثلاً DEMO2024) لبيئة التطوير فقط */
export function allowStudentDemo(): boolean {
  return import.meta.env.VITE_ALLOW_STUDENT_DEMO === 'true'
}

/** لوحة /system على الجهاز المحلي */
function isLocalSystemAdminHost(): boolean {
  if (typeof window === 'undefined') return false
  const h = window.location.hostname
  if (!h) return false
  const n = h.toLowerCase()
  return n === 'localhost' || n === '127.0.0.1' || n === '::1'
}

/** إنتاج schoolify.academy — واجهة /system مفعّلة (الحماية بمفتاح الإدارة في Supabase) */
function isSchoolifyAcademyHost(): boolean {
  if (typeof window === 'undefined') return false
  const h = window.location.hostname.toLowerCase()
  return h === 'schoolify.academy' || h.endsWith('.schoolify.academy')
}

/**
 * السماح بتحميل صفحة /system عند فتح العنوان يدويًا (لا روابط في الرأس).
 * - إنتاج: VITE_ALLOW_SYSTEM_ADMIN_PRODUCTION=true أو النطاق schoolify.academy
 * - محلي: VITE_ENABLE_SYSTEM_ADMIN_UI=true على localhost فقط.
 */
export function showSystemAdminUi(): boolean {
  if (import.meta.env.VITE_ALLOW_SYSTEM_ADMIN_PRODUCTION === 'true') return true
  if (isSchoolifyAcademyHost()) return true
  return (
    import.meta.env.VITE_ENABLE_SYSTEM_ADMIN_UI === 'true' &&
    isLocalSystemAdminHost()
  )
}
