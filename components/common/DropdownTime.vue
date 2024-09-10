<template>
  <div>
    <button
      id="dropdownFromUserButton"
      data-dropdown-toggle="dropdown-from-user"
      type="button"
      class="flex items-center py-1.5 px-2 md:px-4 text-xs md:text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      <svg
        class="mr-3"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 14 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z"
      /></svg>
      <span class="text-sm">
        Last 6 months
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
</script>

<style lang="scss" scoped></style>
