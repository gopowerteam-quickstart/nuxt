import { fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import Request from '@gopowerteam/request-generate/vite-plugin'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  alias: {
    '~': fileURLToPath(new URL('./', import.meta.url)),
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  css: [
    '@unocss/reset/normalize.css',
    '@/styles/index.scss',
  ],
  imports: {
    dirs: [
      'config',
      'components',
      'components/*/index.ts',
      'components/**',
      'composables',
      'composables/*/index.ts',
      'composables/**',
      'store',
    ],
  },
  vite: {
    plugins: [
      AutoImport({
        resolvers: [ArcoResolver()],
      }),
      Components({
        resolvers: [
          ArcoResolver({
            sideEffect: true,
            importStyle: 'less',
          }),
        ],
      }),
      Request({
        alias: '~',
        dir: 'src/http',
        dts: 'src/types/request.d.ts',
      }),
    ],
  },
  modules: [
    ['nuxt-icons', {}],
    ['@unocss/nuxt', {}],
    ['@vue-macros/nuxt', {}],
    ['@pinia/nuxt', {}],
    ['@pinia-plugin-persistedstate/nuxt', {}],
    ['dayjs-nuxt', {}],
    ['nuxt-viewport', {}],
  ],
  macros: {},
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  viewport: {
    breakpoints: {
      mobile: 320,
      desktop: 1024,
    },
    defaultBreakpoints: {
      desktop: 'desktop',
      mobile: 'mobile',
    },
    fallbackBreakpoint: 'desktop',
  },
})
