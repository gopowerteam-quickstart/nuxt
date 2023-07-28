<template>
  <div />
</template>

<style lang="ts" scoped>

</style>

<script setup lang="ts">
onMounted(() => {
  // console.log('123123')
})

definePageMeta({
  layout: 'workspace',
  title: 'page1',
  menu: {
    key: 'page1',
    title: 'page1',
    parent: 'root1',
    icon: 'icon',
  },
})
</script>
