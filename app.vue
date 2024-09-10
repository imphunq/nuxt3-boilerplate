<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const authStore = useAuthStore()
const route = useRoute()

if (route.name !== 'login') {
  await useAsyncData('user', async () => {
    return await authStore.fetchUser()
  })
}
</script>
