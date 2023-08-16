<template>
  <!-- <NScrollbar
      class="absolute! inset-0"
      :style="{ backgroundColor: workspace.content.background }"
      :view-style="{ minHeight: '100%', display: 'flex', flexDirection: 'column' }"
    > -->
  <NLayoutHeader height="auto">
    <ContentHeader />
  </NLayoutHeader>
  <NLayoutContent class="mian-container flex-auto">
    <div :style="`padding: ${workspace.content.padding}px;`">
      <slot />
    </div>
  </NLayoutContent>
  <NLayoutFooter height="auto">
    <ContentFooter />
  </NLayoutFooter>
  <!-- </NScrollbar> -->
</template>

<style lang="scss" scoped module>
.host{
  padding:0px;
}
</style>

<script setup lang="ts">
import { NLayoutContent } from 'naive-ui'
import ContentHeader from './content-header.vue'
import ContentFooter from './content-footer.vue'

const { workspace } = useAppConfig()
</script>
