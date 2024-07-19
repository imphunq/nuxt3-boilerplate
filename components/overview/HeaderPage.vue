<template>
  <div class="flex justify-between items-center">
    <div class="flex items-center gap-x-5">
      <span class="text-lg font-medium">
        Recently Updated Projects
      </span>

      <button
        type="button"
        class="py-2.5 px-5 text-sm font-medium text-blue-500 focus:outline-none bg-white rounded-full border border-blue-400 hover:bg-blue-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        View All Projects
      </button>
    </div>

    <div class="flex items-center space-x-2">
      <SelectTeamDropdown />
      <SortByDropdown type="project" />
      <OptionView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SortByDropdown from '~/components/common/SortByDropdown.vue'
import OptionView from '~/components/common/OptionView.vue'
import SelectTeamDropdown from '~/components/common/SelectTeamDropdown.vue'
</script>
