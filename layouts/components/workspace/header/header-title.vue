<template>
  <section class="flex flex-row items-center space-x-2 bg-white" :style="$style.host">
    <img class="h-8 w-8" src="/logo.jpg">
    <div class="text-xl">
      {{ title }}
    </div>
  </section>
</template>

<style lang="less" scoped module>
:host{
  box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
  background: blue;
  font-weight: bold;
  font-size: 30px;
}
</style>

<script setup lang="ts">
const { title } = useAppConfig()
</script>
