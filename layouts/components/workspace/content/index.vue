<template>
  <section>
    <ElScrollbar class="absolute! inset-0" :style="{ backgroundColor: workspace.content.background }">
      <div class="p-[20px]">
        <slot />
      </div>
    </ElScrollbar>
  </section>
</template>

<style lang="scss" scoped module>
.host{
  padding:0px;
}
</style>

<script setup lang="ts">
const { workspace } = useAppConfig()
</script>
