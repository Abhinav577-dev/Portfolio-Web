import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your repo name (Portfolio-Web)
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-Web/', 
})
