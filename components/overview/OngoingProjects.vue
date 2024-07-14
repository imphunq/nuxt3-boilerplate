<template>
  <div class="">
    <HeaderTable
      :title="`On-going Projects`"
      :link-detail="linkDetail"
    />

    <div class="relative overflow-auto border border-solid border-gray-200 border-t-0 h-80">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              class="px-6 py-3"
            >
              <div class="flex items-center gap-1">
                <span>Name</span>
                <SortableIcon />
              </div>
            </th>
            <th
              scope="col"
              class="px-6 py-3"
            >
              People
            </th>
            <th
              scope="col"
              class="px-6 py-3"
            >
              Screens
            </th>
            <th
              scope="col"
              class="px-6 py-3"
            >
              Share Link
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              new projetct
            </th>
            <td class="px-6 py-4">
              <div>
                <StackUserGroup />
              </div>
            </td>
            <td class="px-6 py-4">
              4
            </td>
            <td class="px-6 py-4" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderTable from '~/components/overview/HeaderTable.vue'
import SortableIcon from '~/components/common/SortableIcon.vue'
import StackUserGroup from '~/components/common/StackUserGroup.vue'
import type { LinkDetail } from '~/types'

const linkDetail = computed<LinkDetail>(() => {
  return {
    title: 'View On Going Projects',
    href: '/',
  }
})
</script>

<style lang="scss" scoped>
</style>
