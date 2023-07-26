<template>
  <ElMenu
    auto-open-selected
    class="sider-menu"
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

<style scoped lang="scss">
.sider-menu :deep(.el-menu-item.is-active){
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background-color: var(--el-color-primary);
    content: '';
  }
}

.sider-menu :deep(.el-sub-menu.is-active){
  .el-sub-menu__title{
    color: var(--el-color-primary);
  }
}
</style>

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
  const pages = router.getRoutes().filter(route => route.meta.menu).map((route, index) => ({
    ...route.meta.menu,
    path: route.path,
    index: route.meta.menu?.index || (index + 100),
  }) as MenuConfig)

  const menus = [...(submenus as unknown as MenuConfig[]).map((menu, index) => ({
    ...menu,
    index: menu?.index || (index + 100),
  })), ...pages]

  const sortIndex = (a: MenuConfig, b: MenuConfig) => a.index! - b.index!

  const generateTree = (menu: MenuConfig): MenuConfig | undefined => {
    const children = (menus.filter(m => m.parent === menu.key)
      .map(generateTree)
      .filter(Boolean) as MenuConfig[])
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
