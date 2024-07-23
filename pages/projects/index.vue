<template>
  <div>
    <HeaderPage :key="route.path" :type="PROJECT_TYPE.ALL" />

    <ListProject :key="route.path" />
  </div>
</template>

<script lang="ts" setup>
import HeaderPage from '~/components/project/HeaderPage.vue'
import ListProject from '~/components/project/ListProject.vue'
import { PROJECT_TYPE } from '~/constants/project'

definePageMeta({
  middleware: 'auth',
})

const globalStore = useGlobalStore()
const route = useRoute()

onMounted(() => {
  globalStore.setBreadcrumbs([
    { name: 'Projects', href: '/projects' },
  ])
})
</script>
