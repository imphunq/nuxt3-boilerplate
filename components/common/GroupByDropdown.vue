<template>
  <div>
    <button
      id="dropdownGroupByButton"
      data-dropdown-toggle="dropdown-group-by"
      type="button"
      class="flex items-center py-1.5 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      <img
        class="mr-3"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAPCAYAAADphp8SAAAABHNCSVQICAgIfAhkiAAAAXZJREFUOE+VUz1awkAQnVn8wS6eQDwBafy+0OkJSANY4g0SLiAewGSPgJ3EQm4AVKTEE4g3wEqg2HEm+RIVNMTtZnffmzdv3yKUWLbrWdVjFSKRSwhLIBzEUXD3HYoleMBp+xNAtJCwT0QWIGjGaSbrZ3h02j0p6C9C7iRA72NtTucjvZR7TqvXBUW3oizBKTNlIu5WtEQJQH2HKFFF8wTKhKVGa3R6C5Y8Xq2NX62ChQafuX6Jo7Cbj1bGo4uWZx8oNeK7Z4kAoulqQ242quyVUpQ1E8JKBZbxo15sC/gXUaGV24eSmZNDrFOF3n7rXPC6X0fyrIgUSmbS1wA9iwK/jI/5aM61V0NSr2TgJn4KBlxfgmGDCTyp95GlOcIkkDX2/j0eBnYGanR8zQdNrnfM/UFs8CFLNk9DNoPq8TA8zy5xE1EiDSaFipSZ5KMlH/NILXhjzEHRzOzK1yA0V2x6MdF2jtLgYZ8VNCW58kln0b0Ece/6BBlTlE6TeiXfAAAAAElFTkSuQmCC"
        alt=""
      >
      <span class="flex-1 mr-5">
        Sort by
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
      data-popver
      id="dropdown-group-by"
      class="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li class="">
          <div
            v-for="(item, index) in sortByItems"
            :key="`${index}-${item.value}`"
            class="cursor-pointer hover:text-blue-400 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
import type { ILabelValue } from '~/types'

type Key = 'project'

interface Props {
  type: Key
}

const props = defineProps<Props>()

const sortByItems = computed<ILabelValue[]>(() => {
  switch (props.type) {
    case 'project':
      return project.value
      break
    default:
      return project.value
      break
  }
})

const project = computed<ILabelValue[]>(() => {
  return [
    {
      value: 'project_type',
      label: 'Project Type',
    },
    {
      value: 'project_status',
      label: 'Status',
    },
    {
      value: 'project_owner',
      label: 'Project Owner',
    },
    {
      value: 'project_created_at',
      label: 'Date Created',
    },
  ]
})

onMounted(() => {
  useFlowbite(() => {
    initDropdowns()
  })
})
</script>

<style lang="scss" scoped></style>
