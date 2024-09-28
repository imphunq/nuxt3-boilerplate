<template>
  <div>
    <HeaderPage
      title="On-going Project"
      sub-title="View all your on-going projects here"
      :key="route.path"
      :type="PROJECT_TYPE.ONGOING"
    />

    <ListProject :key="route.path" :projects="projects" :meta="meta" />
  </div>
</template>

<script lang="ts" setup>
import HeaderPage from '~/components/project/HeaderPage.vue'
import ListProject from '~/components/project/ListProject.vue'
import { PROJECT_TYPE } from '~/constants/project'
import type { IProject, IPagination } from '~/types'
import { DEFAULT_META } from '~/constants/common'
import { getOngoingProjects } from '~/api/projects'

definePageMeta({
  middleware: 'auth',
})

const globalStore = useGlobalStore()
const route = useRoute()

const projects = ref<IProject[]>([])
const meta = reactive<IPagination>(DEFAULT_META)

await useAsyncData('ongoing-projects', async () => {
  const { data } = await getOngoingProjects()

  projects.value = data.value[0]
})

onMounted(() => {
  globalStore.setBreadcrumbs([
    { name: 'On-going Projects', href: '/' },
  ])
})
</script>
