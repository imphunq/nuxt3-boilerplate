<template>
  <div>
    <HeaderPage
      title="On-going Project"
      sub-title="View all your on-going projects here"
      :key="route.path"
      :type="PROJECT_TYPE.ONGOING"
    />

    <ListProject :key="route.path" />
  </div>
</template>

<script lang="ts" setup>
import HeaderPage from '~/components/project/HeaderPage.vue'
import ListProject from '~/components/project/ListProject.vue'
import { PROJECT_TYPE } from '~/constants/project'

const globalStore = useGlobalStore()
const route = useRoute()

onMounted(() => {
  globalStore.setBreadcrumbs([
    { name: 'On-going Projects', href: '/' },
  ])
})
</script>
