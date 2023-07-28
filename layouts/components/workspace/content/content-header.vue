<template>
  <section class="flex items-center select-none" :class="$style.host">
    <ElBreadcrumb v-if="breadcrumbs.length && route.meta.breadcrumb !== false" class="breadcrumb" separator="/">
      <ElBreadcrumbItem>
        <div class="i-icon-park-outline:all-application" />
      </ElBreadcrumbItem>
      <ElBreadcrumbItem v-for="(item, index) in breadcrumbs" :key="index" :class="{ active: index === breadcrumbs.length - 1 }">
        {{ item }}
      </ElBreadcrumbItem>
    </ElBreadcrumb>
  </section>
</template>

<style scoped module>
.host{
  height: v-bind(`${route.meta?.breadcrumb === false ? workspace.content.padding : workspace.content.header.height}px`);
  font-size: v-bind(`${workspace.content.header.size}px`);
  color: var(--el-text-color-primary);
}
</style>

<style scoped lang="scss">
.breadcrumb :deep(.active){
    .el-breadcrumb__inner{
      font-weight: bold;
    }
  }
</style>

<script setup lang="ts">
import submenus from '@/config/menu.config'

const { workspace } = useAppConfig()

const route = useRoute()
let breadcrumbs = $ref<string[]>([])

watch(() => route.path, () => {
  breadcrumbs = []
  if (route.meta.menu) updateBreadcrumb(route.meta.menu)
}, { immediate: true })

function updateBreadcrumb(menu: MenuConfig) {
  while (menu) {
    breadcrumbs.unshift(menu.title)
    menu = submenus.find(x => x.key === menu.parent) as MenuConfig
  }
}
</script>
