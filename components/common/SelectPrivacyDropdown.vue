<template>
  <div>
    <button
      id="dropdownSelectTeamButton"
      ref="dropdownSelectPrivacyButtonRef"
      data-dropdown-toggle="dropdown-select-privacy"
      type="button"
      class="flex items-center py-1.5 px-2 md:px-4 text-xs md:text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      <el-icon class="mr-1 mb-0.5">
        <Unlock v-if="currentPrivacy === 'public'" />
        <Lock v-else />
      </el-icon>
      <span class="flex-1 mr-5">
        {{ currentLabel }}
      </span>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      ><path
        fill="none"
        d="M0 0h24v24H0V0z"
      /><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
    </button>

    <!-- Dropdown menu -->
    <div
      id="dropdown-select-privacy"
      class="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li class="">
          <div
            v-for="(item, index) in teams"
            :key="`${index}-${item.value}`"
            class="cursor-pointer hover:text-blue-400 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            @click="selectPrivacy(item)"
          >
            {{ item.label }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { initDropdowns } from 'flowbite'
import _find from 'lodash/find'
import type { ILabelValue } from '~/types'
import { Unlock, Lock } from '@element-plus/icons-vue'

const dropdownSelectPrivacyButtonRef = ref<HTMLElement | null>(null)
const currentPrivacy = ref<string>('public')

const currentLabel = computed(() => {
  const item = _find(teams.value, { value: currentPrivacy.value })

  return item?.label
})

const teams = computed<ILabelValue[]>(() => {
  return [
    {
      value: 'private',
      label: 'Private',
    },
    {
      value: 'public',
      label: 'Public',
    },
  ]
})

const selectPrivacy = (item: ILabelValue) => {
  currentPrivacy.value = item.value as string

  dropdownSelectPrivacyButtonRef.value?.click()
}

onMounted(() => {
  useFlowbite(() => {
    initDropdowns()
  })
})
</script>

<style lang="scss" scoped></style>
