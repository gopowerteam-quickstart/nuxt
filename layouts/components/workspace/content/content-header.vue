<template>
  <section v-if="breadcrumbs.length && route.meta.breadcrumb !== false" class="content-header flex items-center select-none" :class="$style.host">
    <NBreadcrumb class="breadcrumb" separator="/">
      <NBreadcrumbItem>
        <div class="i-icon-park-outline:all-application" />
      </NBreadcrumbItem>
      <NBreadcrumbItem v-for="(item, index) in breadcrumbs" :key="index" :class="{ active: index === breadcrumbs.length - 1 }">
        {{ item }}
      </NBreadcrumbItem>
    </NBreadcrumb>
  </section>
</template>

<style scoped module>
.host{
  height: v-bind(`${route.meta?.breadcrumb === false ? workspace.content.padding : workspace.content.header.height}px`);
  font-size: v-bind(`${workspace.content.header.size}px`);
}
</style>

<style scoped lang="scss">
.breadcrumb :deep(ul){
     display: flex;
     align-items: center;
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

function updateBreadcrumb(menu: RouteMenu) {
  while (menu) {
    breadcrumbs.unshift(menu.title)
    menu = submenus.find(x => x.key === menu.parent) as RouteMenu
  }
}
</script>
