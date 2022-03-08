import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //base: "https://gfouz.github.io/react-workshop/",
  base: "/react-workshop/",
  plugins: [react()]
})
