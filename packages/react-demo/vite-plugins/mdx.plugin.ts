/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/11/27 18:08:38 (GMT+0900)
 */
import { Plugin } from 'vite'
import * as babel from '@babel/core'
import * as fs from 'fs'
import { formatMdx, afterTransform } from './helpers'

export default function VitePluginFmtMdx(): Plugin {
  return {
    name: 'vite:fmt-mdx',
    // apply: 'serve',
    enforce: 'pre',
    load: (id) => {
      // console.log('load::::====', id, options)
      if (/\.mdx$/i.test(id)) {
        const source = fs.readFileSync(id).toString()
        return formatMdx(source)
      }
    },
    transform,
  }
}

async function transform(source: string, id: string) {
  if (!/\.mdx$/i.test(id)) return source
  // console.log('mdx.plugin::', id)
  // console.log(source)

  const result = babel.transformSync(source, {
    presets: ['@babel/preset-react'],
    // plugins: ['@babel/plugin-transform-react-jsx'],
  })

  // console.log('result:::::', result)
  return {
    code: afterTransform(result.code),
    map: null,
  }
}
