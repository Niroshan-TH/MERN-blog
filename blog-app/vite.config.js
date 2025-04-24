import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        // Optionally rewrite the path if your backend expects it differently
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [react(), flowbiteReact()],
})