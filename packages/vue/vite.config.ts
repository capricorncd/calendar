/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/11/26 18:15:35 (GMT+0900)
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: resolve(__dirname, '../../dist'),
    rollupOptions: {
      input: {
        app: './vue.html',
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // default `assets/[name].[hash].js`
          // return '[name].[hash].js';
          return '[name].min.js'
        },
        assetFileNames: (chunkInfo) => {
          console.log('assetFileNames', chunkInfo.name, chunkInfo.type)
          // if (chunkInfo.name === 'index.html') return 'demo.html'; // don't work
          // if (chunkInfo.name === 'index.css') return '[name].[hash].css';
          if (chunkInfo.name === 'index.css') return 'demo.min.css'
          // default `assets/[name].[hash].[ext]`
          return '[name].[ext]'
          // return '[name].[hash].[ext]';
        },
      },
    },
  },
})
