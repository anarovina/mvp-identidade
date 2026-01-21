import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['marca.arovinastudio.com.br', 'wontedly-dismissible-soo.ngrok-free.dev', '*.ngrok-free.dev'],
  },
})
