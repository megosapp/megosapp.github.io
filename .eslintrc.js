module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@megos/eslint-config-base',
    'plugin:vue/recommended',
  ],
  rules: {
    'max-len': [
      'error',
      120,
    ],
  }
}
