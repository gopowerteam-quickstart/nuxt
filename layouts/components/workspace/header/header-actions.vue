<template>
  <section class="px-[10px]">
    <div>
      <AButton v-if="$viewport.match('mobile')" type="text" @click="onCollapseMenu">
        <div class="i-icon-park-outline:hamburger-button text-2xl" />
      </AButton>
    </div>
    <div class="action-item">
      <ADropdown @select="onCommand">
        <div class="flex items-center space-x-2">
          <AAvatar :size="30" />
          <div>user</div>
        </div>
        <template #content>
          <ADoption>menu1</ADoption>
          <ADoption>menu2</ADoption>
          <ADoption>menu3</ADoption>
          <ADivider :margin="5" />
          <ADoption value="exit">
            退出
          </ADoption>
        </template>
      </ADropdown>
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
function onCommand(command: string | number | Record<string, any> | undefined) {
  switch (command) {
    case 'exit':
      onExit()
      break
  }
}
</script>
