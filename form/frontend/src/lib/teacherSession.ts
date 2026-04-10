const KEY = 'schoolify.teacherSession.v1'

/** Persist across browser restarts (was sessionStorage-only). */
const storage = (): Storage =>
  typeof localStorage !== 'undefined' ? localStorage : sessionStorage

function readRaw(): string | null {
  const ls = storage()
  let raw = ls.getItem(KEY)
  if (!raw && typeof sessionStorage !== 'undefined') {
    raw = sessionStorage.getItem(KEY)
    if (raw) {
      ls.setItem(KEY, raw)
      sessionStorage.removeItem(KEY)
    }
  }
  return raw
}

export type TeacherSession = {
  token: string
  teacherId: string
  fullName: string
}

export function getTeacherSession(): TeacherSession | null {
  try {
    const raw = readRaw()
    if (!raw) return null
    const p = JSON.parse(raw) as Partial<TeacherSession>
    if (
      typeof p.token === 'string' &&
      typeof p.teacherId === 'string' &&
      typeof p.fullName === 'string'
    ) {
      return { token: p.token, teacherId: p.teacherId, fullName: p.fullName }
    }
    return null
  } catch {
    return null
  }
}

export function setTeacherSession(s: TeacherSession) {
  const ls = storage()
  ls.setItem(KEY, JSON.stringify(s))
  if (typeof sessionStorage !== 'undefined') {
    sessionStorage.removeItem(KEY)
  }
}

export function clearTeacherSession() {
  storage().removeItem(KEY)
  if (typeof sessionStorage !== 'undefined') {
    sessionStorage.removeItem(KEY)
  }
}

export function requireTeacherSession(): TeacherSession | null {
  return getTeacherSession()
}
