<template>
  <template v-if="menu.path">
    <AMenuItem :key="menu.key">
      <template
        v-if="props.showIcon && menu.icon"
        #icon
      >
        icon
      </template>
      <div class="menu-title">
        {{ menu.title }}
      </div>
    </AMenuItem>
  </template>

  <template v-else>
    <ASubMenu :key="menu.key">
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
    </ASubMenu>
  </template>
</template>

<script setup lang="ts">
import MenuItem from './menu-item.vue'

const props = defineProps<{
  menu: MenuConfig
  showIcon?: boolean
}>()
</script>
