<template>
  <div class="flex gap-4">
    <img
      class="w-10 h-10 rounded-full"
      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      alt=""
    >
    <div class="font-medium dark:text-white">
      <div>
        <span>{{ comment?.user_info.name }}</span>
        <span class="text-gray-500 dark:text-gray-400">
          added a new comment on
        </span>
        <span class="cursor-pointer text-blue-500">
          {{ comment?.screen_info.name }}
        </span>
        <span class="text-gray-500 dark:text-gray-400"> in </span>
        <span class="cursor-pointer text-blue-500">Webinars</span>
      </div>
      <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {{ moment(comment?.created_at).format('YY/DD/YYYY HH:mm') }}
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
            <span class="text-xs">
              {{ comment?.comment }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CommentIcon from '~/assets/images/icons/comment.png'
import type { IListComments } from '~/types'
import moment from 'moment'

interface Props {
  comment?: IListComments
}

const props = withDefaults(defineProps<Props>(), {
  comment: undefined,
})
</script>
