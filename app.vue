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

if (route.name !== 'login') {
  await useAsyncData('user', async () => {
    return await authStore.fetchUser()
  })
}

onMounted(() => {
  useFlowbite(() => {
    initFlowbite()
  })
})
</script>
