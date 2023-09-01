<template>
  <section>
    <AMenu
      v-model:collapsed="store.layout.sider.collapsed"
      :accordion="$viewport.match('desktop')"
      auto-open
      class="absolute! inset-0 sider-menu"
      :collapsed-width="workspace.sider.collapsedWidth"
      :default-selected-keys="[$route.path]"
      :mode="workspace.menu.mode"
      router
      :show-collapse-button="$viewport.match('desktop')"
      @menu-item-click="onMenuSelect"
    >
      <MenuItem v-for="menu in roots" :key="menu.key" :menu="menu" />
    </AMenu>
  </section>
</template>

<style scoped lang="scss">
</style>

<script setup lang="ts">
import MenuItem from '../menu-item.vue'
import submenus from '@/config/menu.config'

const { workspace } = useAppConfig()
const store = useStore()
const router = useRouter()
const roots = $ref<RouteMenu[]>([])

/**
 * 生成菜单
 */
function generateMenus() {
  const pages = router.getRoutes().filter(route => route.meta.menu).map((route, index) => ({
    ...route.meta.menu,
    path: route.path,
    index: route.meta.menu?.index || (index + 100),
  }) as RouteMenu)

  const menus = [...(submenus as unknown as RouteMenu[]).map((menu, index) => ({
    ...menu,
    index: menu?.index || (index + 100),
  })), ...pages]

  const sortIndex = (a: RouteMenu, b: RouteMenu) => a.index! - b.index!

  const generateTree = (menu: RouteMenu): RouteMenu | undefined => {
    const children = (menus.filter(m => m.parent === menu.key)
      .map(generateTree)
      .filter(Boolean) as RouteMenu[])
      .sort(sortIndex)

    if (children.length > 0) menu.children = children

    switch (true) {
      case !menu.parent && (children.length !== 0 || !!menu.path):{
        roots.push(menu)
        roots.sort(sortIndex)
        break
      }
      case !!menu.path: {
        return menu
      }
      case !menu.path && children.length !== 0:{
        return menu
      }
    }
  }

  menus
    .filter(menu => !menu.parent)
    .map(generateTree)
}

function onMenuSelect(path: string) {
  navigateTo(path)

  if (store.layout.drawer.collapsed)
    store.layout.toggleDrawerCollapsed()
}

onMounted(() => {
  generateMenus()
})
</script>
