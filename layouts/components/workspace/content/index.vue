<template>
  <section>
    <ElScrollbar
      class="absolute! inset-0"
      :style="{ backgroundColor: workspace.content.background }"
      :view-style="{ minHeight: '100%', display: 'flex', flexDirection: 'column' }"
    >
      <ElHeader height="auto">
        <ContentHeader />
      </ElHeader>
      <ElMain class="px-[20px] flex-auto">
        <slot />
      </ElMain>
      <ElFooter height="auto">
        <ContentFooter />
      </ElFooter>
    </ElScrollbar>
  </section>
</template>

<style lang="scss" scoped module>
.host{
  padding:0px;
}
</style>

<script setup lang="ts">
import ContentHeader from './content-header.vue'
import ContentFooter from './content-footer.vue'

const { workspace } = useAppConfig()
</script>
