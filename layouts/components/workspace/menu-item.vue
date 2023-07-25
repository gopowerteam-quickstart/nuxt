<template>
  <template v-if="menu.path">
    <ElMenuItem :index="menu.path">
      <template
        v-if="props.showIcon && menu.icon"
        #icon
      >
        icon
      </template>
      <div class="menu-title">
        {{ menu.title }}
      </div>
    </ElMenuItem>
  </template>

  <template v-else>
    <ElSubMenu :index="menu.key">
      <template
        v-if="props.showIcon && menu.icon"
        #icon
      >
        icon
      </template>
      <template #title>
        <div class="submenu-title">
          {{ menu.title }}
        </div>
      </template>
      <MenuItem
        v-for="child in menu.children"
        :key="child.key"
        :menu="child"
      />
    </ElSubMenu>
  </template>
</template>

<script setup lang="ts">
import MenuItem from './menu-item.vue'

const props = defineProps<{
  menu: MenuConfig
  showIcon?: boolean
}>()
</script>
