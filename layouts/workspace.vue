<template>
  <ElContainer class="workspace">
    <ElHeader class="relative" :height="`${appConfig.workspace.header.height}px`">
      <Header />
    </ElHeader>
    <ElContainer>
      <ElAside class="relative" :width="siderWidth">
        <Sider />
      </ElAside>
      <ElMain class="relative p-0!">
        <Content>
          <slot />
        </Content>
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

.workspace:deep(.el-aside){
  transition: all 0.3s;
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
