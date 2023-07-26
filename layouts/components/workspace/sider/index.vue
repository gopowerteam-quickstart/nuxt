<template>
  <section class="absolute inset-0 flex flex-col">
    <SideMenu class="flex-auto relative" />
    <SideActions />
  </section>
</template>

<script setup lang="ts">
import SideMenu from './sider-menu.vue'
import SideActions from './sider-actions.vue'
</script>
