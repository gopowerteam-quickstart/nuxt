<template>
  <section class="justify-between px-5" :class="$style.host">
    <HeaderTitle />
    <HeaderActions />
  </section>
</template>

<style lang="less" scoped module>
.host{
  position: fixed;
  box-shadow: 0px 1px 0px rgba(0,0,0,0.1);
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
}

section{
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>

<style scoped>
section{
  height: v-bind(`${workspace.header.height}px`);
}
</style>

<script setup lang="ts">
import HeaderActions from './header-actions.vue'
import HeaderTitle from './header-title.vue'

const { workspace } = useAppConfig()
</script>
