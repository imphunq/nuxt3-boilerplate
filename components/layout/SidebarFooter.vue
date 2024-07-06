<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex items-center space-x-5 text-center text-xs">
      <span>
        Help
      </span>

      <span>
        Upgrade
      </span>

      <span>
        FAQs
      </span>

      <span>
        Apps
      </span>

      <span>
        Other
      </span>
    </div>

    <div class="mt-2">
      <div class="text-gray-400 text-xs">
        © 2023
        <NuxtLink to="/" class="text-blue-500">Hostdesign</NuxtLink>
        Inc.
        <span class="text-black">All rights reserved.</span>
      </div>
    </div>

    <div class="mt-4 text-sm">
      <label class="inline-flex items-center mb-5 cursor-pointer">
        <span class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">Light</span>
        <input type="checkbox" value="" class="sr-only peer">
        <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark</span>
      </label>
    </div>
  </div>
</template>
