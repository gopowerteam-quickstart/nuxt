<template>
  <section class="flex justify-end p-2 space-x-2" :class="{ collapsed: store.layout.sider.collapsed }">
    <!-- <div
      v-if="$viewport.match('desktop')"
      class="cursor-pointer flex-center"
      @click="store.layout.toggleSideCollapsed"
    >
      <div v-if="store.layout.sider.collapsed" class="i-icon-park-outline:indent-right w-5 h-5" />
      <div v-else class="i-icon-park-outline:indent-left w-5 h-5" />
    </div> -->
  </section>
</template>

<style lang="scss" scoped>
.collapsed{
  flex-direction: column;
  justify-content: center;
}
</style>

<script setup lang="ts">
const store = useStore()
</script>
