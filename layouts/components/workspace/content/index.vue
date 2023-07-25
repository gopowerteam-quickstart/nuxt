<template>
  <section :class="$style.host">
    <slot />
  </section>
</template>

<style lang="scss" scoped module>
.host{
  padding:20px;
}
</style>

<script setup lang="ts">
</script>
