<template>
  <div>
    <!-- Breadcrumb -->
    <nav
      class="breadcrumb flex justify-between"
      aria-label="Breadcrumb"
    >
      <ol class="inline-flex items-center mb-3 sm:mb-0">
        <li>
          <div class="flex items-center">
            <svg
              class="w-4 h-4 cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              @click="navigateTo('/')"
            >
              <path
                fill-rule="evenodd"
                d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </li>
        <span class="mx-2 text-gray-400">/</span>
        <template v-if="breadcrumbs.length > 0">
          <li
            v-for="(breadcrumb, index) in breadcrumbs"
            :key="index"
          >
            <a
              :href="breadcrumb?.href"
              class="text-xs dark:text-white hover:text-gray-700 dark:hover:text-gray-200"
            >{{ breadcrumb.name }}</a>
            <span class="mx-2 text-gray-400">/</span>
          </li>
        </template>
        <li aria-current="page">
          <div class="flex items-center">
            <button
              id="dropdownBreadcrumb"
              data-dropdown-toggle="dropdown-database"
              class="border border-gray-300 rounded-full inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
            >
              <div class="personal-icon" />
              <span class="mr-8">Personal</span>
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
            <div
              id="dropdown-database"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Perfect Team</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Web Design</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Personal</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { IBreadcrumb } from '~/types'

const globalStore = useGlobalStore()

const breadcrumbs = computed(() => {
  return globalStore.breadcrumbs as IBreadcrumb[]
})
</script>
