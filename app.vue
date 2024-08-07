<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { initFlowbite } from 'flowbite'

const authStore = useAuthStore()
const route = useRoute()

onMounted(() => {
  useFlowbite(() => {
    initFlowbite()
  })
})

onMounted(async () => {
  if (route.name !== 'login') {
    await authStore.fetchUser()
  }
})
</script>
