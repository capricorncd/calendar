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

console.log(rawArgs)

const isProduction = rawArgs[1] === 'production'

const baseConfig = {
  entry: {
    'zx-calendar.min': resolve(__dirname, 'src/index.js'),
    test: resolve(__dirname, 'test/index.js')
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'ZxCalendar',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  module: {
    rules: [
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

