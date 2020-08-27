/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-23 22:39
 */
module.exports = {
  env: {
    browser: true,
    node: true
  },
  globals: {
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'space-before-function-paren': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
    // @ts-ignore
    '@typescript-eslint/ban-ts-comment': 0
  }
}
