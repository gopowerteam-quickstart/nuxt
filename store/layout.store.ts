interface LayoutState {
  sider: {
    collapsed: boolean
  }
  drawer: {
    collapsed: boolean
  }
}

function createAppState(): LayoutState {
  return {
    sider: {
      collapsed: false,
    },
    drawer: {
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
    toggleSideCollapsed() {
      this.sider.collapsed = !this.sider.collapsed
    },
    toggleDrawerCollapsed() {
      this.drawer.collapsed = !this.drawer.collapsed
    },
  },
})
