<template>
  <section class="px-[10px]">
    <div class="action-item">
      <NButton v-if="$viewport.match('mobile')" text @click="onCollapseMenu">
        <div class="i-icon-park-outline:hamburger-button text-2xl" />
      </NButton>
    </div>
    <div class="action-item">
      <NDropdown :options="dropdownOptions" @select="onSelect">
        <div class="flex items-center space-x-2">
          <NAvatar circle size="small" />
          <div>user</div>
        </div>
      </NDropdown>
    </div>
  </section>
</template>

<style scoped>
.action-item:hover {
  background-color: v-bind(appConfig.workspace.header.hover.background);
}
</style>

<style lang="scss" scoped>
.action-item {
  height: 100%;
  display: flex;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
}
</style>

<script setup lang="ts">
import type { DropdownOption } from 'naive-ui'

const store = useStore()
const appConfig = useAppConfig()

const dropdownOptions: DropdownOption[] = [
  {
    label: 'menu1',
    key: 'menu1',
  },
  {
    label: 'menu2',
    key: 'menu2',
  },
  {
    label: 'menu3',
    key: 'menu3',
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    label: '退出',
    key: 'exit',
  },
]

function onExit() {
  store.user.logout()
  location.replace('/')
}

function onCollapseMenu() {
  store.layout.toggleDrawerCollapsed()
}

function onSelect(key: string) {
  switch (key) {
    case 'exit':
      onExit()
      break
  }
}
</script>
