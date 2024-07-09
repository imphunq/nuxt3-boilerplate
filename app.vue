<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite'

onMounted(() => {
  useFlowbite(() => {
    initFlowbite()
  })
  // initFlowbite()
})
</script>
