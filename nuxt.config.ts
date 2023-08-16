import { fileURLToPath } from 'node:url'
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
    ['@bg-dev/nuxt-naiveui', {}],
  ],
  naiveui: {
    colorModePreference: 'light',
    iconSize: 18,
    themeConfig: {},
  },
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
