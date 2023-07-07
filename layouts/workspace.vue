<template>
  <ALayout>
    <ALayoutHeader>
      <Header />
    </ALayoutHeader>
    <ALayout>
      <ALayoutSider :collapsed="collapsed">
        <Sider />
      </ALayoutSider>
      <ALayoutContent>
        <Content>
          <slot />
        </Content>
      </ALayoutContent>
    </ALayout>
  </ALayout>
</template>

<style scoped></style>

<script lang="ts" setup>
import Header from './components/workspace/header/index.vue'
import Sider from './components/workspace/sider/index.vue'
import Content from './components/workspace/content/index.vue'

const collapsed = useState(() => false)

useProvide(({ workspace }) => workspace.collapsed, collapsed)
</script>
