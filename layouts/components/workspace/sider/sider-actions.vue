<template>
  <section class="flex justify-end p-2 space-x-2">
    <div class="cursor-pointer" @click="store.layout.toggleCollapsed">
      <div v-if="store.layout.sider.collapsed" class="i-icon-park-outline:indent-right w-5 h-5" />
      <div v-else class="i-icon-park-outline:indent-left w-5 h-5" />
    </div>
  </section>
</template>

<script setup lang="ts">
const store = useStore()
</script>
