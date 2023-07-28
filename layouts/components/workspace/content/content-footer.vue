<template>
  <section class="flex-center" :class="$style.host">
    {{ workspace.content.footer.text }}
  </section>
</template>

<style scoped module>
.host{
  height: v-bind(`${workspace.content.footer.height}px`);
  font-size: v-bind(`${workspace.content.footer.size}px`);
  color: var(--el-text-color-primary);
}
</style>

<script setup lang="ts">
const { workspace } = useAppConfig()
</script>
