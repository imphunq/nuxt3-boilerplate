<template>
  <div class="flex items-center justify-between py-6 px-8">
    <div class="flex items-center gap-8">
      <el-checkbox size="large" />

      <el-image
        style="width: 240px; height: 130px"
        :src="comment?.screen_info?.screen_url_thumb"
        fit="cover"
        class="rounded-lg"
      />

      <template v-if="type === 'add-comment'">
        <AddComment :comment="comment" :project="project" />
      </template>

      <template v-else-if="type === 'mention'">
        <MentionInComment :show-image="false" />
      </template>
    </div>

    <div class="flex items-center gap-2">
      <button
        type="button"
        class="flex items-center gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        @click="gotoScreen"
      >
        <el-icon><CopyDocument /></el-icon>
        <span>View Screen</span>
      </button>

      <button
        type="button"
        class="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <span>Reply</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CopyDocument } from '@element-plus/icons-vue'
import AddComment from '~/components/comments/AddComment.vue'
import MentionInComment from '~/components/comments/MentionInComment.vue'
import type { IListComments } from '~/types'

interface Props {
  type: string
  comment: IListComments
}

const props = defineProps<Props>()

const route = useRoute()
const projectStore = useProjectStore()
const id = route.params.id as string

const project = computed(() => {
  return projectStore.getProject
})

const gotoScreen = () => {
  navigateTo(`/projects/${id}/screens/${props.comment.screen_info.id}`)
}
</script>
