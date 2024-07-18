<template>
  <div>
    <HeaderPage
      title="Shares Project"
      sub-title="View all your shares projects here"
      :key="route.path"
      :type="PROJECT_TYPE.SHARE"
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
    { name: 'Shares Projects', href: '/' },
  ])
})
</script>
