interface LayoutState {
  sider: {
    collapsed: boolean
  }
}

function createAppState(): LayoutState {
  return {
    sider: {
      collapsed: false,
    },
  }
}

export default defineStore('layout', {
  state: createAppState,
  actions: {
    /**
     * 更新系统状态
     */
    toggleCollapsed() {
      this.sider.collapsed = !this.sider.collapsed
    },
  },
})
