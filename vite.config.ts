import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      "@loader": path.resolve(__dirname, './src/loader'),
      "@types": path.resolve(__dirname, './src/types'),
      "@router": path.resolve(__dirname, './src/router'),
      "@pages": path.resolve(__dirname, './src/pages'),
      "@components": path.resolve(__dirname, './src/components')
    }
  },
  plugins: [react(), tsconfigPaths()],
})
