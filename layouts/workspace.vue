<template>
  <ALayout class="workspace">
    <ALayoutHeader class="relative z-20" :style="{ height: `${appConfig.workspace.header.height}px` }">
      <Header />
    </ALayoutHeader>
    <ALayout id="layout-container">
      <template v-if="$viewport.match('desktop')">
        <ALayoutSider
          class="relative"
          :collapsed="store.layout.sider.collapsed"
          :collapsed-width="appConfig.workspace.sider.collapsedWidth"
          :width="appConfig.workspace.sider.width"
        >
          <Sider />
        </ALayoutSider>
      </template>
      <template v-else>
        <ADrawer
          v-model:visible="store.layout.drawer.collapsed"
          class="menu-drawer"
          :footer="false"
          :header="false"
          placement="top"
          :render-to-body="false"
        >
          <ALayoutSider class="absolute! inset-0 w-full!">
            <Sider />
          </ALayoutSider>
        </ADrawer>
      </template>

      <ALayout class="relative p-0!">
        <Content>
          <slot />
        </Content>
      </ALayout>
    </ALayout>
  </ALayout>
</template>

<style scoped>
.workspace{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
}

.workspace:deep(.menu-drawer){
  z-index:10!important;
  top: v-bind(`${appConfig.workspace.header.height}px`);
}
</style>

<script lang="ts" setup>
import Header from './components/workspace/header/index.vue'
import Sider from './components/workspace/sider/index.vue'
import Content from './components/workspace/content/index.vue'

const appConfig = useAppConfig()
const store = useStore()
</script>
