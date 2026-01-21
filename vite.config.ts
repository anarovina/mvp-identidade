import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/mvp-identidade/',
  plugins: [react()],
  server: {
    allowedHosts: ['wontedly-dismissible-soo.ngrok-free.dev', '*.ngrok-free.dev'],
  },
})
