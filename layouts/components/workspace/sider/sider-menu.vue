<template>
  <ElMenu
    auto-open-selected
    collapse-transition
    :collapsed="collapsed"
    menu-trigger="click"
    :mode="workspace.menu.mode"
    router
    unique-opened
  >
    <MenuItem v-for="menu in roots" :key="menu.key" :menu="menu" />
  </ElMenu>
</template>

<script setup lang="ts">
import MenuItem from '../menu-item.vue'
import submenus from '@/config/menu.config'

const { workspace } = useAppConfig()
const store = useStore()
const collapsed = computed(() => store.layout.sider.collapsed)

const router = useRouter()
const roots = $ref<MenuConfig[]>([])

/**
 * 生成菜单
 */
function generateMenus() {
  const pages = router.getRoutes().filter(route => route.meta.menu).map(route => ({
    ...route.meta.menu,
    path: route.path,
  }) as MenuConfig)
  const menus = [...(submenus as unknown as MenuConfig[]), ...pages]

  const generateTree = (menu: MenuConfig): MenuConfig | undefined => {
    const children = menus.filter(m => m.parent === menu.key).map(generateTree).filter(Boolean) as MenuConfig[]

    if (children.length > 0) menu.children = children

    switch (true) {
      case !menu.parent && (children.length !== 0 || !!menu.path):{
        roots.push(menu)
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

  [...(submenus as unknown as MenuConfig[]), ...pages]
    .filter(menu => !menu.parent)
    .map(generateTree)
}

onMounted(() => {
  generateMenus()
})
</script>
