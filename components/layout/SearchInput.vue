<template>
  <div
    class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:flex-1"
    id="navbar-user"
    data-popover-target="popover-click"
    data-popover-trigger="click"
  >
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input type="search" id="default-search"
        class="rounded-full block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search" />
      <button class="absolute end-2.5 bottom-2.5 outline-none font-medium rounded-lg text- px-4 py-2 dark:bg-white dark:hover:bg-white dark:focus:ring-white">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
          height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path>
        </svg>
      </button>
    </div>
  </div>

  <div data-popover id="popover-click" role="tooltip" class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 border-solid rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
    <div class="flex items-center justify-between p-5">
        <p class="font-semibold text-gray-900 dark:text-white text-sm">Search</p>
        <div class="w-7 h-7 border bg-gray-50 rounded-lg flex items-center justify-center">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304"></path></svg>
        </div>
    </div>
    <div class="px-5 mb-5">
      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li class="me-2">
            <a href="#" class="inline-block px-3 py-1 text-white bg-blue-600 rounded-full active" aria-current="page">Projects</a>
        </li>
        <li class="me-2">
            <a href="#"  class="inline-block px-3 py-1 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Folders</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block px-3 py-1 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Teams</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block px-3 py-1 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Comments</a>
        </li>
      </ul>
    </div>
    <div class="pt-3 px-5 pb-5 border border-solid border-gray-200">

    </div>
    <div class="flex items-center justify-center py-3 bg-gray-50">
      <span>
        <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
        </svg>

      </span>
      <span class="ml-2">
        View all result for {{ keyword }}
      </span>
    </div>
    <div data-popper-arrow></div>
  </div>
</template>

<script lang="ts" setup>
const keyword = ref<string>('')
</script>
