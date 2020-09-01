/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-30 15:12
 */
const { resolve } = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rawArgs = process.argv.slice(2)
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isProduction = rawArgs[1] === 'production'

const baseConfig = {
  entry: {
    test: resolve(__dirname, 'test/index.js')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      // '@': resolve('src'),
    }
  },
  module: {
    rules: [
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
            loader: resolve(__dirname, './build/md-loader/index.js')
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx?)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          extensions: ['js', 'vue', 'jsx'],
          fix: true
        }
      },
      {
        test: /\.js$/,
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
      template: './index.html',
      filename: 'index.html',
    })
  ]
}

module.exports = isProduction
  ? merge(baseConfig, {})
  : merge(baseConfig, {
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin()
    ]
  })
