import { useCallback, useEffect, useState } from 'react'

import { getBasePath } from '../lib/basePath'

type Loc = { pathname: string; search: string }

function stripBasePath(pathname: string): string {
  const basePath = getBasePath()
  if (!basePath || !pathname.startsWith(basePath)) return pathname
  const rest = pathname.slice(basePath.length)
  return rest ? (rest.startsWith('/') ? rest : `/${rest}`) : '/'
}

function readLoc(): Loc {
  return {
    pathname: stripBasePath(window.location.pathname),
    search: window.location.search,
  }
}

export function usePathname() {
  const [loc, setLoc] = useState<Loc>(() => readLoc())

  useEffect(() => {
    const sync = () => setLoc(readLoc())
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  const navigate = useCallback((path: string) => {
    const u = new URL(path, window.location.origin)
    const basePath = getBasePath()
    const logical = u.pathname + u.search + u.hash
    const next = `${basePath}${logical.startsWith('/') ? logical : `/${logical}`}`
    window.history.pushState({}, '', next)
    setLoc(readLoc())
  }, [])

  return { pathname: loc.pathname, search: loc.search, navigate }
}
