import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import { fileURLToPath } from 'node:url';
import Request from '@gopowerteam/request-generate/vite-plugin'
import Components from 'unplugin-vue-components/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  
  alias:{
    '~': fileURLToPath(new URL('../src', import.meta.url)),
    '@': fileURLToPath(new URL('../src', import.meta.url)),
  },
  modules: [
    ['unplugin-icons/nuxt', { /* options */ }],
    ['@nuxtjs/eslint-module', { /* options */ }]
  ],
  eslint: {
  
    /* module options */
  },
  vite:{
    plugins:[
      Components({
        resolvers: [
          ArcoResolver({
            sideEffect: true
          })
        ],
        dts: 'types/auto-generated/components.d.ts',
      }),
      Request({
        alias: '~',
        dir: 'src/http',
        dts: 'src/types/request.d.ts',
      })
    ]
  }
})
