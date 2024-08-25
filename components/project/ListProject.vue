<template>
  <div
    v-if="projects.length"
    class="mt-8"
  >
    <div v-if="optionView === OPTION_VIEW.GRID" class="grid grid-cols-4 gap-5">
      <ProjectOverlay
        v-for="(project, index) in projects"
        :key="`${index}-project-overlay`"
        :project="project" />
    </div>

    <div v-else>
      <ListProjectsTable :projects="projects" />
    </div>

    <div class="w-full flex justify-center mt-8">
      <Pagination :data="props.meta" />
    </div>
  </div>

  <NoProjects v-else />
</template>

<script lang="ts" setup>
import ProjectOverlay from '~/components/common/ProjectOverlay.vue'
import FolderCard from '~/components/folder/FolderCard.vue'
import ListProjectsTable from '~/components/project/ListProjectsTable.vue'
import NoProjects from '~/components/common/NoProjects.vue'
import Pagination from '~/components/common/Pagination.vue'
import type { IPagination, IProject } from '~/types'
import { OPTION_VIEW } from '~/constants/common'
import { PROJECT_TYPE } from '~/constants/project'

interface Props {
  type?: string
  projects: IProject[],
  meta: IPagination,
}

const projectStore = useProjectStore()

const props = withDefaults(defineProps<Props>(), {
  type: PROJECT_TYPE.ALL,
})

const optionView = computed(() => {
  if (props.type === PROJECT_TYPE.STARRED) {
    return projectStore.getStarredOptionView
  }

  if (props.type === PROJECT_TYPE.SHARE) {
    return projectStore.getSharedOptionView
  }

  if (props.type === PROJECT_TYPE.ONGOING) {
    return projectStore.getOnGoingOptionView
  }

  if (props.type === PROJECT_TYPE.RECENTLY_ADDED) {
    return projectStore.getRecentlyAddedOptionView
  }

  return projectStore.getOptionView
})

onMounted(() => {
})
</script>
