import { fileURLToPath } from 'node:url'
import { runtimeConfig } from './runtime.config'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import {breakpoints} from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  runtimeConfig,
  devtools: {
    enabled: true
  },
  devServer: {
    port: 4000,
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
      'composables/**',
      'store',
      'server/utils/**',
    ],
  },
  vite: {
    plugins: [
      ReactivityTransform()
    ]
  },
  modules: [
    ['@unocss/nuxt', {}],
    ['@pinia/nuxt', {}],
    ['@pinia-plugin-persistedstate/nuxt', {}],
    ["nuxt-viewport", {}],
    ["dayjs-nuxt",{}],
    ['arco-design-nuxt-module', {}],
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'cookies',
  },
  viewport: {
    breakpoints,
    defaultBreakpoints: {
      desktop: 'desktop',
      mobile: 'mobile',
    },
    fallbackBreakpoint: 'desktop',
  },
})