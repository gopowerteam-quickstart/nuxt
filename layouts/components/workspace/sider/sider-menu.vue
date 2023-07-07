<template>
  <AMenu
    accordion
    auto-open-selected
    :collapsed="collapsed"
    :mode="workspace.menu.mode"
    show-collapse-button
    @collapse="(value) => collapsed = value"
  >
    <MenuItem v-for="menu in menus" :key="menu.key" :menu="menu" />
  </AMenu>
</template>

<script setup lang="ts">
import roots from '@@/config/menu.config'
import MenuItem from '../menu-item.vue'

const { workspace } = useAppConfig()
const collapsed = $(useInject(keys => keys.workspace.collapsed))

const router = useRouter()
let menus = $ref<MenuConfig[]>([])

/**
 * 生成菜单
 */
function generateMenus() {
  const pages = router.getRoutes().filter(route => route.meta.menu).map(route => ({
    ...route.meta.menu,
    path: route.path,
  }) as MenuConfig)

  const generateTree = (menu: MenuConfig): MenuConfig => {
    const children = pages.filter(m => m.parent === menu.key)
    if (!children.length)
      return menu
    else
      return { ...menu, children }
  }

  menus = [...(roots as unknown as MenuConfig[]), ...pages]
    .filter(menu => !menu.parent)
    .map(generateTree)
}

onMounted(() => {
  generateMenus()
  console.log(menus)
})
</script>
