import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const config = defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       // target: `http://localhost:3000`,
  //       target: 'https://wizlance-fdfed.onrender.com',
  //       changeOrigin: true,
  //       secure: false,
  //     }
  //   },
  // },
})

export default config;