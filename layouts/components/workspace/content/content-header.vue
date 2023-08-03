<template>
  <section class="flex items-center select-none" :class="$style.host">
    <ABreadcrumb v-if="breadcrumbs.length && route.meta.breadcrumb !== false" class="breadcrumb" separator="/">
      <ABreadcrumbItem>
        <div class="i-icon-park-outline:all-application" />
      </ABreadcrumbItem>
      <ABreadcrumbItem v-for="(item, index) in breadcrumbs" :key="index" :class="{ active: index === breadcrumbs.length - 1 }">
        {{ item }}
      </ABreadcrumbItem>
    </ABreadcrumb>
  </section>
</template>

<style scoped module>
.host{
  padding-left: v-bind(`${workspace.content.padding / 2}px`);
  height: v-bind(`${route.meta?.breadcrumb === false ? workspace.content.padding : workspace.content.header.height}px`);
  font-size: v-bind(`${workspace.content.header.size}px`);
  color: var(--text-color-primary);
}
</style>

<style scoped lang="scss">
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
