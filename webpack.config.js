/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-08 15:31
 */
const { resolve } = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rawArgs = process.argv.slice(2)
const banner = require('./build/banner')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { getArgvType } = require('./build/helper')

console.log(rawArgs)

const isProduction = rawArgs[1] === 'production'

const paths = {
  def: {
    test: resolve(__dirname, 'test/index.js'),
    template: './index.html',
  },
  vue: {
    test: resolve(__dirname, 'lib/vue-calendar/test/index.js'),
    template: './index-vue.html',
  },
  react: {
    test: resolve(__dirname, 'lib/react-calendar/test/index.jsx'),
    template: './index-react.html',
  }
}

const target = paths[getArgvType(rawArgs)]

const baseConfig = {
  entry: {
    'zx-calendar.min': resolve(__dirname, 'src/index.js'),
    test: target.test
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'ZxCalendar',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      // '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          extensions: ['js', 'vue', 'jsx'],
          fix: true
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: resolve(__dirname, './build/md-loader/vue.js')
          }
        ]
      },
      {
        test: /\.mdx$/,
        use: [
          'babel-loader',
          {
            loader: resolve(__dirname, './build/md-loader/react.js')
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: _ => {
                return [
                  // remove: false
                  // -webkit-box-orient: vertical;
                  require('autoprefixer')({remove: false})
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: target.template,
      filename: 'index.html',
    }),
    new VueLoaderPlugin(),
  ]
}

let webpackConfig = {}

if (isProduction) {
  webpackConfig = merge(baseConfig, {
    plugins: [
      new webpack.BannerPlugin(banner)
    ]
  })
} else {
  webpackConfig = merge(baseConfig, {
  })
}

module.exports = webpackConfig

