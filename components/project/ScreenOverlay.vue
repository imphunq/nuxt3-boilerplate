<template>
  <div class="flex items-start gap-2.5">
    <div class="flex flex-col gap-1">
      <div
        class="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div class="group relative my-2.5">
          <div class="absolute opacity-0 group-hover:opacity-100 flex justify-end w-full cursor-pointer right-2 top-2">
            <div class="">
              <button>
                <el-icon><More /></el-icon>
              </button>
            </div>
          </div>
          <div
            class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            <button
              type="button"
              class="px-5 py-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              @click="handleView"
            >
              View
            </button>
          </div>
          <img src="https://flowbite.com/docs/images/blog/image-2.jpg" class="rounded-lg" />
        </div>

        <span class="text-sm font-normal text-black dark:text-gray-400">
          Screen title
        </span>

        <span class="text-xs font-normal text-gray-500 dark:text-gray-400">
          06/26/2024 11:28 PM
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { More } from '@element-plus/icons-vue'

const handleView = () => {
  navigateTo(`/projects/1/screens/1`)
}
</script>

<style lang="scss" scoped></style>
