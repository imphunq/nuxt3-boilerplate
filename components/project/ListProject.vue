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
      <ListProjectsTable />
    </div>

    <div class="w-full flex justify-center mt-8">
      <Pagination :data="meta" />
    </div>
  </div>

  <NoProjects v-else />
</template>

<script lang="ts" setup>
import ProjectOverlay from '~/components/common/ProjectOverlay.vue'
import ListProjectsTable from '~/components/project/ListProjectsTable.vue'
import NoProjects from '~/components/common/NoProjects.vue'
import Pagination from '~/components/common/Pagination.vue'
import type { IPagination, INewProjects } from '~/types'
import { OPTION_VIEW } from '~/constants/common'
import { PROJECT_TYPE } from '~/constants/project'

interface Props {
  type?: string
  projects: INewProjects[],
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

const meta: IPagination = {
  current_page: 1,
  from: 1,
  last_page: 2,
  per_page: 1,
  to: 1,
  total: 10,
}

onMounted(() => {
})
</script>
