<template>
  <div>
    <HeaderPage
      title="Recently added Project"
      sub-title="View all your recently added projects here"
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

definePageMeta({
  middleware: 'auth',
})

const globalStore = useGlobalStore()
const route = useRoute()

onMounted(() => {
  globalStore.setBreadcrumbs([
    { name: 'Recently added Projects', href: '/' },
  ])
})
</script>
