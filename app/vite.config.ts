import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: {
    //   '@yuue/util': path.resolve(__dirname, '../materials/util/src/'),
    // },
    alias: [{ find: /@yuue\/(.*)/, replacement: path.resolve(__dirname, '../materials/$1/src/')}]
  },
})
