<template>
  <div class="flex items-center justify-between rounded-t-lg border border-solid border-gray-200 p-[10px]">
    <div class="flex items-center gap-2">
      <span class="text-sm">
        {{ props.title }}
      </span>

      <div class="h-4 w-4 border border-solid border-gray-200 rounded-3xl" />

      <NuxtLink
        :to="props.linkDetail.href"
        class="text-xs text-blue-500"
      >
        {{ props.linkDetail.title }}
      </NuxtLink>
    </div>

    <div class="flex items-center gap-2">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      ><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" /></svg>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      ><path d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z" /></svg>

      <SortByDropdown />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SortByDropdown from '../common/SortByDropdown.vue'
import type { LinkDetail } from '~/types'

interface Props {
  title: string
  linkDetail: LinkDetail
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
</style>
