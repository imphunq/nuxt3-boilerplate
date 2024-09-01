<template>
  <div class="flex items-center justify-between gap-8">
    <div class="flex flex-col">
      <span class="">{{ title }}</span>
      <span class="text-xs">
        {{ subTitle }}
      </span>
    </div>

    <div class="flex items-center gap-5">
      <RangeSlider class="mt-2" />

      <FilterProject class="mt-2" />

      <DropdownFolderProject />

      <GroupByDropdown type="project" />

      <SortByDropdown type="project" />

      <OptionView page="project" type="all" :current-view="currentView" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SortByDropdown from '~/components/common/SortByDropdown.vue'
import GroupByDropdown from '~/components/common/GroupByDropdown.vue'
import OptionView from '~/components/common/OptionView.vue'
import DropdownFolderProject from '~/components/common/DropdownFolderProject.vue'
import RangeSlider from '~/components/common/RangeSlider.vue'
import FilterProject from '~/components/common/FilterProject.vue'
import { PROJECT_TYPE } from '~/constants/project'

interface Props {
  title?: string
  subTitle?: string
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'All project',
  subTitle: 'View all your projects here',
  type: PROJECT_TYPE.ALL,
})

const projectStore = useProjectStore()

const currentView = computed(() => {
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
</script>
