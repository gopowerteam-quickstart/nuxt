<template>
  <section class="justify-between" :class="$style.host">
    <HeaderTitle />
    <HeaderActions />
  </section>
</template>

<style lang="scss" scoped module>
.host{
  position: absolute;
  box-shadow: 0px 1px 0px rgba(0,0,0,0.1);
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom :0;
}

section{
  display: flex;
  flex-direction: row;
  align-items: center;
  &>*{
    height: 100%;
  }
}
</style>

<script setup lang="ts">
import HeaderActions from './header-actions.vue'
import HeaderTitle from './header-title.vue'
</script>
