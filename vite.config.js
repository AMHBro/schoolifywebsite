import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'schoolify-form-spa-fallback',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const raw = req.url?.split('?')[0] ?? ''
          if (!raw.startsWith('/schoolify-form')) {
            next()
            return
          }
          const afterBase = raw.slice('/schoolify-form'.length) || '/'
          const last = afterBase.split('/').filter(Boolean).pop() ?? ''
          if (last.includes('.')) {
            next()
            return
          }
          req.url = '/schoolify-form/index.html'
          next()
        })
      },
    },
  ],
})
