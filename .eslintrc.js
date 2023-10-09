module.exports = {
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  extends: ['@gopowerteam/eslint-config'],
  rules: {
    'vue/no-unused-refs': ['off'],
    'no-console': ['off'],
  },
}
