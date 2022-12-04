/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/11/26 18:15:35 (GMT+0900)
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { toCamelCase } from 'zx-sml'
import pkg from '../../package.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: resolve(__dirname, '../../dist'),
    // cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: toCamelCase(pkg.name),
      fileName: (format) => `${pkg.name}.${format}.js`,
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          console.log(assetInfo.name)
          if (assetInfo.name === 'style.css') return 'zx-calendar.min.css'
          return assetInfo.name as string
        },
      },
    },
  },
})
