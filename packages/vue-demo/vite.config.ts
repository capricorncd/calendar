/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/11/26 18:15:35 (GMT+0900)
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: resolve(__dirname, '../../dist'),
    rollupOptions: {
      input: {
        vue3: resolve(__dirname, './vue3.html'),
      },
      output: {
        entryFileNames: () => {
          return '[name].min.js'
        },
        assetFileNames: () => {
          return '[name].min.[ext]'
        },
      },
    },
  },
  server: {
    open: '/vue3.html',
  },
  plugins: [vue()],
})
