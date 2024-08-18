<template>
  <div>
    <HeaderPage :key="route.path" :type="PROJECT_TYPE.ALL" />

    <ListProject
      v-if="projects.length"
      :key="route.path"
      :projects="projects"
      :meta="meta"
    />
  </div>
</template>

<script lang="ts" setup>
import HeaderPage from '~/components/project/HeaderPage.vue'
import ListProject from '~/components/project/ListProject.vue'
import { PROJECT_TYPE } from '~/constants/project'
import { getProjects } from '~/api/projects'
import type { IProject, IPagination } from '~/types'
import { DEFAULT_META } from '~/constants/common'

definePageMeta({
  middleware: 'auth',
})

const globalStore = useGlobalStore()
const route = useRoute()
const projectStore = useProjectStore()

// const projects = ref<IProject[]>([])
// const meta = reactive<IPagination>(DEFAULT_META)

// const fetchProjects = async (page: string) => {
//   const { data } = await getProjects({ page })

//   projects.value = data.value.data
//   Object.assign(meta, {
//     current_page: data.value.current_page,
//     total: data.value.projects_count,
//     per_page: data.value.limit,
//     last_page: data.value.total_page
//   })
// }

useRefetch(() => projectStore.fetchProjects(route.query.page as string ?? '1'))

const projects = computed(() => {
  return projectStore.getProjects
})

const meta = computed(() => {
  return projectStore.getMeta
})

onMounted(() => {
  globalStore.setBreadcrumbs([
    { name: 'Projects', href: '/projects' },
  ])
})
</script>
