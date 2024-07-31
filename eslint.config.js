import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  vue: true,
}, {
  languageOptions: {
    globals: {
      $ref: 'readonly',
      useDayjs: 'readonly',
    },
  },
})
