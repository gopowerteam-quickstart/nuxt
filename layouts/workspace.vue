<template>
  <ElContainer class="workspace">
    <ElHeader class="relative" :height="`${appConfig.workspace.header.height}px`">
      <Header />
    </ElHeader>
    <ElContainer>
      <ElAside class="relative" :width="siderWidth">
        <ElScrollbar class="absolute! inset-0" :style="{ backgroundColor: appConfig.workspace.sider.background }">
          <Sider />
        </ElScrollbar>
      </ElAside>
      <ElMain class="relative p-0!">
        <ElScrollbar class="absolute! inset-0" :style="{ backgroundColor: appConfig.workspace.content.background }">
          <Content>
            <slot />
          </Content>
        </ElScrollbar>
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>

<style scoped>
.workspace{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>

<script lang="ts" setup>
import Header from './components/workspace/header/index.vue'
import Sider from './components/workspace/sider/index.vue'
import Content from './components/workspace/content/index.vue'

const appConfig = useAppConfig()
const store = useStore()

const siderWidth = computed(() => store.layout.sider.collapsed
  ? `${appConfig.workspace.sider.collapsedWidth}px`
  : `${appConfig.workspace.sider.width}px`)
</script>
