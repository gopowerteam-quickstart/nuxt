<template>
  <section class="absolute inset-0 flex flex-col select-none">
    <div class="flex-auto relative">
      <SideMenu />
    </div>
    <SideActions />
  </section>
</template>

<script setup lang="ts">
import SideMenu from './sider-menu.vue'
import SideActions from './sider-actions.vue'
</script>
