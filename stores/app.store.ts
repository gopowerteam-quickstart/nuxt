import { defineStore } from "pinia"

interface AppState {
  ready: {
    server: boolean
    client: boolean
  }
}

function createAppState(): AppState {
  return {
    ready: {
      server: false,
      client: false,
    },
  }
}

export const useAppStore = defineStore('app', {
  state: createAppState,
  actions: {
    /**
     * 更新系统状态
     */
    setClientReady() {
      this.ready.client = true
    },
    setServerReady() {
      this.ready.server = true
    },
  },
})
