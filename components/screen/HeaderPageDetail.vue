<template>
  <div class="flex items-center justify-between p-4 h-16 border-b border-solid border-gray-200">
    <div class="flex items-center gap-5">
      <el-button
        :icon="Back"
        size="large"
        circle
      />

      <div class="flex items-center gap-4">
        <img
          :src="GroupProjectIcon"
          alt=""
          class="w-8 h-8"
        >

        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-2">
            <span class="font-semibold text-black">Project Title</span>

            <el-icon><CaretRight /></el-icon>

            <span class="font-semibold text-black">Screen Detail</span>
          </div>

          <p class="text-xs">
            Updated 4 mins ago
          </p>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-5">
      <button
        type="button"
        class="py-2 px-5 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Preview
      </button>

      <button
        type="button"
        class="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        ><path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /></svg>
        <span>Share</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Back, CaretRight } from '@element-plus/icons-vue'
import GroupProjectIcon from '~/assets/images/icons/project/group.svg'
</script>
