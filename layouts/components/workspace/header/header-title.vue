<template>
  <section class="flex flex-row items-center space-x-2 bg-white" :class="$style.host">
    <img class="h-8 w-8" src="/logo.jpg">
    <div class="text-xl">
      {{ title }}
    </div>
  </section>
</template>

<style lang="scss" scoped module>
.host{
  font-weight: bold;
  font-size: 30px;
  padding:0 20px;
}
</style>

<script setup lang="ts">
const { title } = useAppConfig()
</script>
