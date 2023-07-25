import { fileURLToPath } from 'node:url'
import Request from '@gopowerteam/request-generate/vite-plugin'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  alias: {
    '~': fileURLToPath(new URL('./', import.meta.url)),
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  css: [
    '@unocss/reset/normalize.css',
    '@@/styles/index.scss',
  ],
  modules: [
    ['@unocss/nuxt', { /* options */}],
    ['@vue-macros/nuxt', { /* options */}],
    ['@pinia/nuxt', { /* options */}],
    ['unplugin-icons/nuxt', { /* options */ }],
    // ['@nuxtjs/eslint-module', { /* options */ }],
    ['@element-plus/nuxt', { /* options */ }],

  ],
  elementPlus: { /** Options */ },
  macros: {},
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  // eslint: { /* module options */ },
  imports: {
    dirs: [
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
})
