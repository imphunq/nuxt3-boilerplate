<template>
  <div>
    <div class="project-screen-header flex items-center justify-between">
      <div>
        <span class="text-sm text-black font-semibold">Project title</span>
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
      class="grid grid-cols-4 gap-8 mt-8">
      <ScreenOverlay
        v-for="index in 6"
        :key="`${index}-screen-overlay`"
      />
    </div>

    <div v-else class="mt-8">
      <ListScreenTable />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ScreenOverlay from '~/components/project/ScreenOverlay.vue'
import SortByDropdown from '~/components/common/SortByDropdown.vue'
import GroupByDropdown from '~/components/common/GroupByDropdown.vue'
import OptionView from '~/components/common/OptionView.vue'
import RangeSlider from '~/components/common/RangeSlider.vue'
import FilterProject from '~/components/common/FilterProject.vue'
import ListScreenTable from '~/components/screen/ListScreenTable.vue'
import { OPTION_VIEW } from '~/constants/common'

const screenStore = useScreenStore()

const currentView = computed(() => {
  return screenStore.getOptionView
})
</script>
