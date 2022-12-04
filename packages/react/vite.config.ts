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
    lib: {
      entry: resolve(__dirname, 'src/index.jsx'),
      name: 'ZxReactCalendar',
      fileName: (format) => `zx-react-calendar.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
        assetFileNames: (assetInfo) => {
          console.log(assetInfo.name)
          if (assetInfo.name === 'style.css') return 'zx-react-calendar.min.css'
          return assetInfo.name as string
        },
      },
    },
  },
})
