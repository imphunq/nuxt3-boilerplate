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
import type { INewProjects, IPagination } from '~/types'
import { DEFAULT_META } from '~/constants/common'

definePageMeta({
  middleware: 'auth',
})

const globalStore = useGlobalStore()
const route = useRoute()

const projects = ref<INewProjects[]>([])
const meta = reactive<IPagination>(DEFAULT_META)

const { data } = await getProjects()

projects.value = data.value.data
Object.assign(meta, data.value.meta)

onMounted(() => {
  globalStore.setBreadcrumbs([
    { name: 'Projects', href: '/projects' },
  ])
})
</script>
