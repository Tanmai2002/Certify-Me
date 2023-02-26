import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
let viteConf=defineConfig({
  plugins: [react()],
  
    rollupOptions: {
      external: ["fs/promises"],
    },
  
  
})


// https://vitejs.dev/config/
export default viteConf;

