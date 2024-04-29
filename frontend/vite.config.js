import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const config = defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
          '/api': {
            target: 'https://wizlance-fdfed.onrender.com',
            changeOrigin: true,
            secure: false,
          }
        },
  },
})

export default config;