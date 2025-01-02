import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  plugins: [react()],
  build: {
    // Menambahkan konfigurasi jika perlu
  }
}