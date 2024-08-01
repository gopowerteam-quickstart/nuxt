<script setup lang="ts">
const a = $ref(12345)
const dayjs = useDayjs()
const store = useStore()

function request() {

}
</script>

<template>
  <div>
    <i class="icon-park-outline:delete" />
    <i class="icon-svg:icon" />
    <AButton type="primary" @click="request">
      123 - {{ store.app.ready.client }}
    </AButton>
    <div v-if="!$viewport.match('mobile')">
      {{ a }} - {{ dayjs().format('YYYY') }}
      {{ a }} - {{ $dayjs().format('YYYY') }}
    </div>
  </div>
</template>
