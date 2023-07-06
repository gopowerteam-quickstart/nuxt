<template>
  <ALayout>
    <ALayoutHeader>
      <LayoutHeader />
    </ALayoutHeader>
    <ALayout>
      <ALayoutSider />
      <ALayoutContent>
        <slot />
      </ALayoutContent>
    </ALayout>
  </ALayout>
</template>

<style scoped></style>

<script lang="ts" setup></script>
