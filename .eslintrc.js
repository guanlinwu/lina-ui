// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    'plugin:sonarjs/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'sonarjs'
  ],
  // add your custom rules here
  rules: {
    'eol-last': 0,
    'no-new': 'off',
    'no-multiple-empty-lines': 1,
    'arrow-parens': 0,
    'camelcase': 0,
    'no-tabs': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 1,
    // 禁止重复 import
    "space-before-function-paren": ["off", "always"]
  },
  globals: {
    CMBLS: true
  }
}