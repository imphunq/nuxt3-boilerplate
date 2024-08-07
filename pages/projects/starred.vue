<template>
  <div>
    <HeaderPage
      title="Starred Project"
      sub-title="View all your starred projects here"
      :key="route.path"
      :type="PROJECT_TYPE.STARRED"
    />

    <ListProject :key="route.path" :projects="projects" :meta="meta" />
  </div>
</template>

<script lang="ts" setup>
import HeaderPage from '~/components/project/HeaderPage.vue'
import ListProject from '~/components/project/ListProject.vue'
import { PROJECT_TYPE } from '~/constants/project'
import type { INewProjects, IPagination } from '~/types'
import { DEFAULT_META } from '~/constants/common'

definePageMeta({
  middleware: 'auth',
})

const globalStore = useGlobalStore()
const route = useRoute()

const projects = ref<INewProjects[]>([])
const meta = reactive<IPagination>(DEFAULT_META)

onMounted(() => {
  globalStore.setBreadcrumbs([
    { name: 'Starred Projects', href: '/' },
  ])
})
</script>
