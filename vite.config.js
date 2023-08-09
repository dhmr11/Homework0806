import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Homework0806/",// 추가된 부분
  plugins: [react()],
})
