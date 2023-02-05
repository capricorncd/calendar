/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/11/26 18:15:35 (GMT+0900)
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue2'
import vue from './vite-plugins/src'
import { formatVueMdSource } from './vite-plugins/formatter'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: resolve(__dirname, '../../dist'),
    rollupOptions: {
      input: {
        vue: resolve(__dirname, './vue.html'),
      },
      output: {
        entryFileNames: () => {
          // default `assets/[name].[hash].js`
          // return '[name].[hash].js';
          return '[name].min.js'
        },
        assetFileNames: (chunkInfo) => {
          console.log('assetFileNames', chunkInfo.name, chunkInfo.type)
          return '[name].min.[ext]'
        },
      },
    },
  },
  server: {
    open: '/vue.html',
  },
  plugins: [
    vue({
      include: /\.(md|vue)$/,
      customSourceFormatter: formatVueMdSource,
    }),
  ],
})
