<template>
  <NLayout :content-style="{ display: 'flex', flexDirection: 'column' }" position="absolute">
    <NLayoutHeader class="relative" :style="{ height: `${appConfig.workspace.header.height}px` }">
      <Header />
    </NLayoutHeader>
    <NLayout
      id="layout-container"
      class="flex-auto"
      :content-style="{ display: 'flex', flexDirection: $viewport.match('desktop') ? 'row' : 'column' }"
      :has-sider="$viewport.match('desktop')"
    >
      <template v-if="$viewport.match('desktop')">
        <NLayoutSider
          class="relative"
          collapse-mode="width"
          :collapsed="store.layout.sider.collapsed"
          :collapsed-width="appConfig.workspace.sider.collapsedWidth"
          :width="appConfig.workspace.sider.width"
        >
          <Sider />
        </NLayoutSider>
      </template>
      <template v-else>
        <NDrawer
          v-model:show="store.layout.drawer.collapsed"
          class="drawer"
          :content-style="{ backgroundColor: 'blue' }"
          placement="top"
          show-mask
          :style="{ backgroundColor: 'red' }"
          to="#drawer-menu"
        >
          <NDrawerContent>
            <SiderMenu />
          </NDrawerContent>
        </NDrawer>
      </template>

      <NLayout class="relative" :content-style="{ position: 'absolute', inset: 0, minHeight: '100%', display: 'flex', flexDirection: 'column' }" :native-scrollbar="false">
        <Content>
          <slot />
        </Content>
      </NLayout>
    </NLayout>
  </NLayout>
  <div id="drawer-menu" />
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
  top: v-bind(`${appConfig.workspace.header.height}px`);
}

#drawer-menu:deep(.n-drawer-container){
  top: v-bind(`${appConfig.workspace.header.height}px`);
}
</style>

<script lang="ts" setup>
import Header from './components/workspace/header/index.vue'
import Sider from './components/workspace/sider/index.vue'
import Content from './components/workspace/content/index.vue'
import SiderMenu from './components/workspace/sider/sider-menu.vue'

const appConfig = useAppConfig()
const store = useStore()
</script>
