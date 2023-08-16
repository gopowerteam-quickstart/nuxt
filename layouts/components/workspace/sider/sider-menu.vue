<template>
  <NScrollbar class="absolute! inset-0" :style="{ backgroundColor: workspace.sider.background }">
    <NMenu
      :accordion="$viewport.match('desktop')"
      class="sider-menu"
      :collapsed="store.layout.sider.collapsed"
      :collapsed-width="workspace.sider.collapsedWidth"
      :default-expanded-keys="getExpendKeys()"
      :default-value="route.path"
      :mode="workspace.menu.mode"
      :on-update:value="onSelectMenu"
      :options="menuOptions"
    />
  </NScrollbar>
</template>

<style scoped lang="scss">
</style>

<script setup lang="tsx">
import type { MenuOption } from 'naive-ui'
import type { UserRole } from 'config/enum.config'
import submenus from '@/config/menu.config'

const { workspace } = useAppConfig()
const store = useStore()
const route = useRoute()
const router = useRouter()
const roots = $ref<RouteMenu[]>([])
const menuOptions = computed<MenuOption[]>(() => {
  return roots.map(generateMenuOption)
})

function getExpendKeys() {
  const keys = []
  const target = router.getRoutes().find(x => x.path === route.path && !!x.meta.menu)
  let parent = target?.meta.menu?.parent
  while (parent) {
    keys.push(parent)
    const menu = submenus.find(x => x.key === parent) as RouteMenu
    if (menu)
      parent = menu.parent
  }
  return keys
}

function onSelectMenu(path: string) {
  navigateTo(path)
  if (store.layout.drawer.collapsed) store.layout.toggleDrawerCollapsed()
}

function generateMenuOption(menu: RouteMenu): MenuOption {
  return {
    children: menu.children ? menu.children?.map(generateMenuOption) : undefined,
    icon: menu.icon ? () => <nuxt-icon class="text-[20px]" name={menu.icon} /> : undefined,
    key: menu.path || menu.key,
    label: menu.title,
  }
}
/**
 * 生成菜单
 */
function generateMenus() {
  const pages = router.getRoutes()
    .filter(route => route.meta.menu)
    .filter(route => !route.meta.requireRoles || route.meta.requireRoles.some(role => store.user.roles.includes(role as UserRole)))
    .map((route, index) => ({
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

onMounted(() => {
  generateMenus()
})
</script>
