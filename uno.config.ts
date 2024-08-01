import { defineConfig, presetUno } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'
import presetIcons from '@unocss/preset-icons'
import presetAttributify from '@unocss/preset-attributify'
import { breakpoints } from './package.json'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

function defineBreakpoints() {
  return Object.entries(breakpoints).reduce<Record<string, string>>((result, [key, value]) => {
    result[key] = `${value}px`
    return result
  }, {})
}

function defineSVGloader() {
  return FileSystemIconLoader(
    './assets/svg', svg => svg
  )
}

function defineIconifyLoader(name: string) {
  return () => import(`@iconify-json/${name}`).then(i => i.icons)
}

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      prefix: 'css:',
      prefixedOnly: true,
      nonValuedAttribute: true,
    }),
    presetIcons({
      prefix: 'icon-',
      collections: {
        'park-outline': defineIconifyLoader('icon-park-outline'),
        'svg': defineSVGloader()
      },
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
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
      // custom
      ...defineBreakpoints()
    },
  },
  shortcuts: [['flex-center', 'flex justify-center items-center']],
  safelist: [
    ...Array.from({ length: 10 }, (_, i) => `space-x-${i + 1}`),
    ...Array.from({ length: 10 }, (_, i) => `space-y-${i + 1}`),
  ],
})
