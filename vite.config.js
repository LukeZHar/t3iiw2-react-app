import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // MEans that we can use describe and expect without importing them
    environment: 'jsdom',
    setupFiles: './src/setupTest.js'
    }
})
