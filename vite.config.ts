/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react(), svgr(), eslintPlugin()],
    server: {
      port: 3000,
      host: true,
    },
  }
})
