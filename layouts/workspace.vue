<script lang="ts" setup></script>

<template>
  <ALayout>
    <ALayoutHeader>
      <LayoutHeader></LayoutHeader>
    </ALayoutHeader>
    <ALayout>
      <ALayoutSider></ALayoutSider>
            <ALayoutContent>
        <slot></slot>
      </ALayoutContent>
    </ALayout>
  </ALayout>
</template>

<style scoped></style>
