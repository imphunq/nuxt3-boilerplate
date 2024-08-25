<template>
  <div class="flex gap-4 w-full">
    <img
      class="flex-none w-8 h-8 rounded-full bg-slate-400"
      src="data:image/png;base64,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"
    >

    <div class="flex-1 mb-4">
      <div class="flex items-center gap-2">
        <span class="text-sm text-black">{{ name }}</span>
        <div class="w-2 h-2 bg-gray-500 rounded-full flex items-center justify-center"></div>
        <span class="text-gray-400 text-xs">
          {{ moment(comment.created_at).fromNow() }}
        </span>
      </div>

      <div class="mt-2">
        {{ comment.comment }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment'
import type { IComment } from '~/types'

interface Props {
  comment: IComment
}

const props = defineProps<Props>()

const name = computed(() => {
  return props.comment.user_info?.lastname + ' ' + props.comment.user_info?.name
})
</script>
