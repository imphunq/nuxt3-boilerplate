<template>
  <div v-if="screens.length">
    <div class="project-screen-header flex items-center justify-between">
      <div>
        <span class="text-sm text-black font-semibold">
          {{ project.project_title }}
        </span>
      </div>

      <div class="flex items-center gap-5">
        <RangeSlider class="mt-2" />

        <FilterProject class="mt-2" />

        <GroupByDropdown type="project" />

        <SortByDropdown />

        <OptionView
          page="screen"
          type="screen"
          :current-view="currentView"
        />
      </div>
    </div>

    <div
      v-if="currentView === OPTION_VIEW.GRID"
      class="grid grid-cols-4 mt-8 gap-8">
      <ScreenOverlay
        v-for="(screen, index) in screens"
        :key="`${index}-screen-overlay`"
        :screen="screen"
      />
    </div>

    <div v-else class="mt-8">
      <ListScreenTable :screens="screens" />
    </div>
  </div>

  <template v-if="screens.length === 0">
    <EmptyScreen :project_title="`${project?.project_title}`" />
  </template>
</template>

<script lang="ts" setup>
import ScreenOverlay from '~/components/project/ScreenOverlay.vue'
import SortByDropdown from '~/components/common/SortByDropdown.vue'
import GroupByDropdown from '~/components/common/GroupByDropdown.vue'
import OptionView from '~/components/common/OptionView.vue'
import RangeSlider from '~/components/common/RangeSlider.vue'
import FilterProject from '~/components/common/FilterProject.vue'
import ListScreenTable from '~/components/screen/ListScreenTable.vue'
import EmptyScreen from '~/components/screen/EmptyScreen.vue'
import { OPTION_VIEW } from '~/constants/common'
import { getScreensInProject } from '~/api/screens'
import type { IScreen, IProject } from '~/types'

const screenStore = useScreenStore()
const projectStore = useProjectStore()
const route = useRoute()
const { id } = route.params

const screens = ref<IScreen[]>([])

await useAsyncData('screens', async () => {
  const { data } = await getScreensInProject(id as string)

  screens.value = data.value
})

await useAsyncData('project', async () => {
  return await projectStore.fetchProject(id as string)
})

const project = computed((): IProject => {
  return projectStore.getProject as IProject
})

const currentView = computed(() => {
  return screenStore.getOptionView
})
</script>
