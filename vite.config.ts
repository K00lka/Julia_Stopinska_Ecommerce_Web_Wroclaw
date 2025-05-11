import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  build:{
    outDir: 'build',
  },
  plugins: [
    tailwindcss(),
  ],
  base: '/Julia_Stopinska_Ecommerce_Web_Wroclaw/'
})
