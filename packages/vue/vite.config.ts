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
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'ZxVueCalendar',
      fileName: (format) => `zx-vue-calendar.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue',
        // 'zx-calendar',
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          console.log(assetInfo.name)
          if (assetInfo.name === 'style.css') return 'zx-vue-calendar.min.css'
          return assetInfo.name as string
        },
      },
    },
  },
  plugins: [vue()],
})
