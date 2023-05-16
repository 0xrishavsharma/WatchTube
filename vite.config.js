import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:8800/',
        target: 'https://watchtube-backend.onrender.com/',
        changeOrigin: true,
        secure: true,
      },
    },
    rewrite: (path) => path.replace(/^\/api/, ''),
  },
})
