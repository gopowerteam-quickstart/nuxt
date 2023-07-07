import { ColorSchemeType } from "@vueuse/core"

declare module 'nuxt/schema' {
  interface AppConfigInput {
    title: string,
    workspace: {
      header: {
        height: number
      },
      sider:{
        width: number
        collapsedWidth: number
      },
      content:{
        background: string
      },
      menu:{
        mode: 'pop' | 'vertical'
      }
    }
  }
}

export { }