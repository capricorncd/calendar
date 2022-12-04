/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/11/26 18:15:35 (GMT+0900)
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginFmtMdx from './vite-plugins/mdx.plugin'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: resolve(__dirname, '../../dist'),
    rollupOptions: {
      input: {
        react: resolve(__dirname, './react.html'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
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
    open: '/react.html',
  },
  plugins: [react(), VitePluginFmtMdx()],
})
