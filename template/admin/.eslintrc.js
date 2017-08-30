module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jquery: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'semi': ['error', 'always'],
    'indent': 0,
    'space-before-function-paren': 0,
    "new-cap": 0,
    "eol-last": 0,
    "no-multiple-empty-lines": [1, {"max": 2}],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  globals: {}
}
