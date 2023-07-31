<template>
  <section class="px-[10px]">
    <div class="action-item">
      <ElButton v-if="$viewport.match('mobile')" link @click="onCollapseMenu">
        <div class="i-icon-park-outline:hamburger-button text-2xl" />
      </ElButton>
    </div>
    <div class="action-item">
      <ElDropdown @command="onCommand">
        <div class="flex items-center space-x-2">
          <ElAvatar size="small" />
          <div>user</div>
        </div>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>menu1</ElDropdownItem>
            <ElDropdownItem>menu2</ElDropdownItem>
            <ElDropdownItem>menu3</ElDropdownItem>
            <ElDropdownItem command="exit" divided>
              退出
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </div>
  </section>
</template>

<style scoped>
.action-item:hover{
  background-color: v-bind(appConfig.workspace.header.hover.background);
}
</style>

<style lang="scss" scoped>
.action-item  {
  height: 100%;
  display: flex;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
}
</style>

<script setup lang="ts">
const store = useStore()
const appConfig = useAppConfig()

function onExit() {
  store.user.logout()
  location.replace('/')
}
function onCollapseMenu() {
  store.layout.toggleDrawerCollapsed()
}
function onCommand(command: string) {
  switch (command) {
    case 'exit':
      onExit()
      break
  }
}
</script>
