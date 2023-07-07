interface AppState {
  ready: boolean // 系统准备状态
  title: string //  页面标题
}

function createAppState(): AppState {
  return {
    ready: false,
    title: '',
  }
}

export default defineStore('app', {
  state: createAppState,
  actions: {
    /**
     * 更新系统状态
     */
    setReady() {
      this.ready = true
    },
    /**
     * 页面标题
     */
    updateTitle(title: string) {
      this.title = title
    },
  },
})
