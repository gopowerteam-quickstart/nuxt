<template>
  <NLayout class="workspace">
    <NLayoutHeader class="relative" :style="{ height: `${appConfig.workspace.header.height}px` }">
      <Header />
    </NLayoutHeader>
    <NLayout id="layout-container" :has-sider="$viewport.match('desktop')">
      <template v-if="$viewport.match('desktop')">
        <NLayoutSider
          class="relative"
          :collapsed-width="appConfig.workspace.sider.collapsedWidth"
          :width="appConfig.workspace.sider.width"
        >
          <Sider />
        </NLayoutSider>
      </template>
      <template v-else>
        <NDrawer
          v-model:show="store.layout.drawer.collapsed"
          modal-class="menu-drawer"
          placement="top"
          show-mask
        >
          <NLayoutSider :width="siderWidth">
            <Sider />
          </NLayoutSider>
        </NDrawer>
      </template>

      <ElContainer class="relative p-0!">
        <Content>
          <slot />
        </Content>
      </ElContainer>
    </NLayout>
  </NLayout>
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
