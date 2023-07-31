<template>
  <div class="absolute inset-0 flex-center flex-col space-y-5">
    <div class="error-message">
      {{ error.statusMessage }}
    </div>
    <ElButton
      class="min-w-[100px]"
      size="large"
      type="primary"
      @click="onHandleError"
    >
      返回
    </ElButton>
  </div>
</template>

<style lang="scss" scoped>
.error-message{
  color: var(--text-color-placeholder);
}
</style>

<script lang="ts" setup>
import type { NuxtError } from 'nuxt/app'

defineProps<{
  error: NuxtError
}>()

function onHandleError() {
  clearError()
}
</script>
