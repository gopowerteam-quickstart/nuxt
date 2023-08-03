<template>
  <section>
    <AScrollbar
      outer-class="absolute! inset-0"
      :style="{ backgroundColor: workspace.content.background, minHeight: '100%', display: 'flex', flexDirection: 'column' }"
    >
      <ALayoutHeader height="auto">
        <ContentHeader />
      </ALayoutHeader>
      <ALayoutContent class="mian-container flex-auto" :style="`padding:0 ${workspace.content.padding}px;`">
        <slot />
      </ALayoutContent>
      <ALayoutFooter height="auto">
        <ContentFooter />
      </ALayoutFooter>
    </AScrollbar>
  </section>
</template>

<style lang="scss" scoped module>
section :deep(.arco-scrollbar){
  position: static!important;
}
</style>

<script setup lang="ts">
import ContentHeader from './content-header.vue'
import ContentFooter from './content-footer.vue'

const { workspace } = useAppConfig()
</script>
