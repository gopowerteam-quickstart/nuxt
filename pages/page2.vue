<template>
  <div>
    page2
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
  title: 'page2',
  icon: 'icon',
  menu: {
    key: 'page2',
    title: 'page2',
    parent: 'root1',
    icon: 'icon',
  },
})
</script>
