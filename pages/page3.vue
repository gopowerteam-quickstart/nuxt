<template>
  <div>
    page1
  </div>
</template>

<style lang="ts" scoped>

</style>

<script setup lang="ts">
onMounted(() => {
  // console.log('123123')
})

definePageMeta({
  layout: 'workspace',
  title: 'page3',
  menu: {
    key: 'page3',
    title: 'page3',
    parent: 'root1',
    icon: 'icon',
  },
  requireRoles: [
    UserRole.Admin,
  ],
})
</script>
