import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,       // <-- enables expect, test, describe globally
    environment: "jsdom" // <-- simulates a browser for React testing
  }
})
