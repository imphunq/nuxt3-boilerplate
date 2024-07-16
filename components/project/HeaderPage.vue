<template>
  <div class="flex items-center justify-between gap-8">
    <div class="flex flex-col">
      <span class="">All project</span>
      <span class="text-xs">
        View all your projects here
      </span>
    </div>

    <div class="flex items-center gap-5">
      <RangeSlider class="mt-2" />

      <FilterProject class="mt-2" />

      <DropdownFolderProject />

      <GroupByDropdown type="project" />

      <SortByDropdown />

      <OptionView />
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
</script>
