<template>
  <div v-for="i in 1000" :key="i">
    Page: foo
    123123
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
onMounted(() => {
//
})

definePageMeta({
  layout: 'workspace',
  title: 'dashboard',
  breadcrumb: false,
  menu: {
    key: 'dashboard',
    title: 'dashboard',
    index: 1,
    icon: 'icon',
  },
  requireAuth: true,
})
</script>
