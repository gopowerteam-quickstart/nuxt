<template>
  <ElContainer class="workspace">
    <ElHeader class="relative" :height="`${appConfig.workspace.header.height}px`">
      <Header />
    </ElHeader>
    <ElContainer id="layout-container">
      <template v-if="$viewport.match('desktop')">
        <ElAside class="relative" :width="siderWidth">
          <Sider />
        </ElAside>
      </template>
      <template v-else>
        <ElDrawer
          v-model="store.layout.drawer.collapsed"
          :append-to-body="false"
          direction="ttb"
          modal
          modal-class="menu-drawer"
          :with-header="false"
        >
          <ElAside :width="siderWidth">
            <Sider />
          </ElAside>
        </ElDrawer>
      </template>

      <ElContainer class="relative p-0!">
        <Content>
          <slot />
        </Content>
      </ElContainer>
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

.workspace:deep(.menu-drawer){
  top: v-bind(`${appConfig.workspace.header.height}px`);
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
