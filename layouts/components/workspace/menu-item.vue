<template>
  <template v-if="menu.path">
    <ElMenuItem :index="menu.path">
      <div>
        <nuxt-icon v-if="menu.icon" class="text-[20px]" :name="menu.icon" />
      </div>
      <span class="menu-title pl-2">
        {{ menu.title }}
      </span>
    </ElMenuItem>
  </template>

  <template v-else>
    <ElSubMenu :index="menu.key">
      <template #title>
        <div>
          <nuxt-icon v-if="menu.icon" class="text-[20px]" :name="menu.icon" />
        </div>
        <span class="submenu-title pl-2">
          {{ menu.title }}
        </span>
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

defineProps<{
  menu: MenuConfig
}>()
</script>
