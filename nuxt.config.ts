import { fileURLToPath } from 'node:url'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import Request from '@gopowerteam/request-generate/vite-plugin'
import Components from 'unplugin-vue-components/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  alias: {
    '~': fileURLToPath(new URL('../src', import.meta.url)),
    '@': fileURLToPath(new URL('../src', import.meta.url)),
  },
  modules: [
    ['@unocss/nuxt', { /* options */}],
    ['@vue-macros/nuxt', { /* options */}],
    ['@pinia/nuxt', { /* options */}],
    ['unplugin-icons/nuxt', { /* options */ }],
    ['@nuxtjs/eslint-module', { /* options */ }],
  ],
  macros: {},
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  eslint: { /* module options */ },
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
      Components({
        resolvers: [
          ArcoResolver({
            sideEffect: true,
          }),
        ],
        dts: 'types/auto-generated/components.d.ts',
      }),
      Request({
        alias: '~',
        dir: 'src/http',
        dts: 'src/types/request.d.ts',
      }),
    ],
  },
})
