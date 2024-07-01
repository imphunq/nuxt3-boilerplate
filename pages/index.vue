<template>
  <div>
    Hello world
  </div>
</template>

<script lang="ts" setup>
const globalStore = useGlobalStore()

onMounted(() => {
  globalStore.setBreadcrumbs([
    { name: 'Overview', href: '/' },
  ])

  console.log(globalStore.breadcrumbs)
})
</script>
