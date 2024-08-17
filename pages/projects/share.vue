<template>
  <div>
    <HeaderPage
      title="Shares Project"
      sub-title="View all your shares projects here"
      :key="route.path"
      :type="PROJECT_TYPE.SHARE"
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

definePageMeta({
  middleware: 'auth',
})

const globalStore = useGlobalStore()
const route = useRoute()

const projects = ref<IProject[]>([])
const meta = reactive<IPagination>(DEFAULT_META)

onMounted(() => {
  globalStore.setBreadcrumbs([
    { name: 'Shares Projects', href: '/' },
  ])
})
</script>
