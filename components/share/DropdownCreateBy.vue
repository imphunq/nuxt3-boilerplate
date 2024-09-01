<template>
  <div>
    <button
      id="dropdownFromUserButton"
      data-dropdown-toggle="dropdown-from-user"
      type="button"
      class="flex items-center py-1.5 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      <svg
        class="mr-3"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      ><g><path
        fill="none"
        d="M0 0h24v24H0z"
      /><path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /></g></svg>
      <span class="flex items-center flex-1 mr-5">
        <span class="text-xs mr-1">Create by:</span>
        <span class="text-sm">Anyone</span>
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
      id="dropdown-from-user"
      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <!-- <li class="">
            <div
              v-for="(item, index) in sortByItems"
              :key="`${index}-${item.value}`"
              class="cursor-pointer hover:text-blue-400 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {{ item.label }}
            </div>
          </li> -->
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { initDropdowns } from 'flowbite'

// onMounted(() => {
  useFlowbite(() => {
    initDropdowns()
  })
// })
</script>

    <style lang="scss" scoped></style>
