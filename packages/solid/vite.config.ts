/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/12/30 15:05:21 (GMT+0900)
 */
import { resolve } from 'path'
import { defineConfig, UserConfigExport } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import VitePluginFmtMdx from './vite-solid-plugins/mdx.plugin'

const argv = process.argv.slice(2)

// 自定义参数长度不能大于1, --demo(NG) --d(OK)
// throw new CACError(`Unknown option \`${name.length > 1 ? `--${name}` : `-${name}`}\``);
const isDemo = argv.includes('--d')
console.log(argv, isDemo)

const cfg: UserConfigExport = {
  base: './',
  build: {
    outDir: resolve(__dirname, '../../dist'),
    // lib: {
    //   entry: resolve(__dirname, 'src/index.tsx'),
    //   name: 'ZxSolidCalendar',
    //   fileName: (format) => `zx-solid-calendar.${format}.js`,
    // },
    rollupOptions: {
      // external: ['solid-js'],
      // input: {
      //   solid: resolve(__dirname, './solid.html'),
      // },
      output: {
        entryFileNames: (chunkInfo) => {
          // 防止编译后JS文件被放入assets目录中
          return '[name].min.js'
        },
        assetFileNames: (assetInfo) => {
          // 重命名编译后的css文件名
          if (assetInfo.name === 'style.css') return 'zx-solid-calendar.min.css'
          return '[name].min.[ext]'
        },
      },
    },
  },
  plugins: [solidPlugin()],
  server: {
    open: '/solid.html',
  },
}

if (isDemo) {
  cfg.plugins.push(VitePluginFmtMdx())
  cfg.build.rollupOptions.input = {
    solid: resolve(__dirname, './solid.html'),
  }
} else {
  cfg.build.lib = {
    entry: resolve(__dirname, 'src/index.tsx'),
    name: 'ZxSolidCalendar',
    fileName: (format) => `zx-solid-calendar.${format}.js`,
  }
  cfg.build.rollupOptions.external = ['solid-js']
}

// https://vitejs.dev/config/
export default defineConfig(cfg)
