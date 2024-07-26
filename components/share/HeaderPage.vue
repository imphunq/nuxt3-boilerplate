<template>
  <div class="flex items-center justify-between gap-8">
    <div class="flex flex-col">
      <span class="">Manage Shared Link</span>
      <span class="text-xs">
        Here you can see shared links from all projects.
      </span>
    </div>

    <div class="flex items-center gap-5">
      <FilterProject class="mt-2" />

      <DropdownCreateBy />

      <SortByDropdown />

      <DropdownProject />
    </div>
  </div>
</template>

<script lang="ts" setup>
import DropdownCreateBy from './DropdownCreateBy.vue'
import DropdownProject from './DropdownProject.vue'
import SortByDropdown from '~/components/common/SortByDropdown.vue'
import FilterProject from '~/components/common/FilterProject.vue'
</script>
