<template>
    <div>
    <div class="flex flex-col gap-1">
      <el-card
        :body-style="{ padding: '0' }"
        class="flex flex-col w-full leading-1.5 p-1 border-gray-200 bg-gray-50 rounded-2xl dark:bg-gray-700"
      >
        <div class="group relative">
          <div
            class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"
          >
            <button
              type="button"
              class="px-5 py-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              @click="handleView"
            >
              View
            </button>
          </div>

          <div class="flex flex-col justify-center items-center rounded-lg w-full aspect-[4/3] bg-white">
            <img class="max-w-24 max-h-24" :src="FolderImage" alt="">

            <span class="text-lg text-black mt-5">{{ folder.folder_name }}</span>
            <span class="text-gray-500 text-xs mt-2">{{ folder.projects_count }} Projects</span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FolderImage from '~/assets/images/folder.svg'
import type { IFolder } from '~/types'

interface Props {
  folder: IFolder
}

const props = defineProps<Props>()

const handleView = () => {
  navigateTo(`/folders/${props.folder.id}`)
}
</script>
