<template>
  <div class="flex gap-4">
    <img
      class="w-10 h-10 rounded-full"
      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      alt=""
    >
    <div class="font-medium dark:text-white">
      <div>
        <span>Jese Leos</span>
        <span class="text-gray-500 dark:text-gray-400">
          marked a comment as completed on
        </span>
        <span class="cursor-pointer text-blue-500">
          Products
        </span>
      </div>
      <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
        November 04, 2021 9:21AM
      </div>

      <div class="flex items-center gap-4 mt-3">
        <div class="border-2 border-solid border-gray-300 h-10" />
        <div class="p-2 bg-gray-100 rounded-md flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img
              class="w-4 h-4"
              :src="CommentIcon"
              alt=""
            >
            <span class="text-xs">Change this to white</span>
          </div>

          <img
            :src="IconCheck"
            alt=""
            class="ml-8"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CommentIcon from '~/assets/images/icons/comment.png'
import IconCheck from '~/assets/images/icons/icon-check.svg'
// interface Props {
//   comment: string
// }

// const props = defineProps<Props>()
</script>
