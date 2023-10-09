import { fileURLToPath } from 'node:url'
import Request from '@gopowerteam/request-generate/vite-plugin'

const enableSSR = true
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    gateway: process.env.GATEWAY,
  },
  ssr: enableSSR,
  devtools: { enabled: true },
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
    ['arco-design-nuxt-module', {}],
  ],
  macros: {
    betterDefine: false,
  },
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  piniaPersistedstate: {
    storage: enableSSR ? 'cookies' : 'localStorage',
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
