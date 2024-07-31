<script setup lang="ts">
const a = $ref(12345)
const dayjs = useDayjs()
</script>

<template>
  <div>
    <AButton type="primary">
      123
    </AButton>
    <div v-if="!$viewport.match('mobile')">
      {{ a }} - {{ dayjs().format('YYYY') }}
      {{ a }} - {{ $dayjs().format('YYYY') }}
    </div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
