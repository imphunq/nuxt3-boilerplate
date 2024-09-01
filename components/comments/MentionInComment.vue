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
          mention you in a 1 new comment on
        </span>
        <span class="cursor-pointer text-blue-500">
          Login
        </span>
        <span class="text-gray-500 dark:text-gray-400"> in </span>
        <span class="cursor-pointer text-blue-500">Webinars</span>
      </div>
      <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
        November 04, 2021 9:21AM
      </div>

      <div class="flex items-center gap-4 mt-3">
        <div class="border-2 border-solid border-gray-300 h-10" />
        <div class="p-2 bg-gray-100 rounded-md flex items-center justify-between">
          <div class="flex items-center gap-1">
            <img
              class="w-4 h-4"
              :src="CommentIcon"
              alt=""
            >
            <span class="text-xs text-black font-semibold">@AndresB</span>
            <span class="text-xs">
              Change this to white
            </span>
          </div>
        </div>
      </div>

      <div
        v-if="props.showImage"
        class="mt-2"
      >
        <el-image
          style="width: 240px; height: 130px"
          src="https://flowbite.com/docs/images/blog/image-2.jpg"
          fit="cover"
          class="rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CommentIcon from '~/assets/images/icons/comment.png'

interface Props {
  showImage?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showImage: true,
})
</script>
