import { defineConfig, presetAttributify, presetUno } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      prefix: 'css:',
      prefixedOnly: true,
      nonValuedAttribute: true,
    }),
  ],
  transformers: [transformerDirective()],
  theme: {
    colors: {
      primary: '#1f6ae3',
    },
    breakpoints: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      mobile: '320px',
      desktop: '768px',
    },
  },
  shortcuts: [['flex-center', 'flex justify-center items-center']],
  safelist: [
    ...Array.from({ length: 10 }, (_, i) => `space-x-${i + 1}`),
    ...Array.from({ length: 10 }, (_, i) => `space-y-${i + 1}`),
  ],
})
