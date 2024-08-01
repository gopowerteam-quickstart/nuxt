import { defineStore } from "pinia"

interface LayoutState {
  sider: {
    collapsed: boolean
  }
  drawer: {
    collapsed: boolean
  }
}

function createLayoutState(): LayoutState {
  return {
    sider: {
      collapsed: false,
    },
    drawer: {
      collapsed: false,
    },
  }
}

export const useLayoutStore =  defineStore('layout', {
  state: createLayoutState,
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
