<template>
  <div v-for="i in 1000" :key="i">
    Page: foo
    123123
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
onMounted(() => {
  console.log('123')
})

definePageMeta({
  layout: 'workspace',
  title: 'as',
  menu: {
    key: 'root1',
    title: 'page1',
    parent: 'root1',
  },
})
</script>
