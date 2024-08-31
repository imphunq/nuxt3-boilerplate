<template>
  <div>
    <HeaderPage
      :key="route.path"
      :type="PROJECT_TYPE.ALL"
    />

    <template v-if="folders.length || projects.length">
      <ListFolders
        v-if="folders.length"
        :key="route.path"
        :folders="folders"
      />

      <ListProject
        v-if="projects.length"
        :key="route.path"
        :projects="projects"
        :meta="meta"
      />
    </template>
    <template v-else>
      <div>
        <NoProjects />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import HeaderPage from '~/components/project/HeaderPage.vue'
import ListProject from '~/components/project/ListProject.vue'
import ListFolders from '~/components/folder/ListFolders.vue'
import { PROJECT_TYPE } from '~/constants/project'
import NoProjects from '~/components/common/NoProjects.vue'

definePageMeta({
  middleware: 'auth',
})

const globalStore = useGlobalStore()
const route = useRoute()
const projectStore = useProjectStore()
const folderStore = useFolderStore()

await useAsyncData('folders', async () => {
  await folderStore.fetchFolders()
})

useRefetch(
  () => projectStore.fetchProjects(
    route.query.page as string ?? '1',
    route.query,
  ),
)

const folders = computed(() => {
  return folderStore.getFolders
})

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
