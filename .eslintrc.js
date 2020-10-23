/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-30 12:23
 */
module.exports = {
  env: {
    browser: true,
    node: true
  },
  globals: {
  },
  parserOptions: {
    parser: 'babel-eslint',
    // https://eslint.org/docs/rules/rest-spread-spacing
    // error  Parsing error: Unexpected token ..
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    'standard',
    'plugin:vue/essential',
    'plugin:react/recommended'
  ],
  plugins: [],
  rules: {
    'space-before-function-paren': ['error', 'never'],
    // 'space-before-function-paren': 0,
    // 'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
    'brace-style': 0
  }
}
