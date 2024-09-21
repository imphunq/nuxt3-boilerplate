<template>
  <div>
    <div class="flex items-center justify-between mt-4">
      <span class="text-xl text-black">Comments</span>

      <div class="flex items-center gap-4">
        <DropdownFromUser />
        <SortBy />
      </div>
    </div>

    <div class="mt-4 border border-solid border-gray-200 rounded-md">
      <!-- <ListComment
        type="mention"
        class="border-b border-solid border-gray-200"
      /> -->
      <ListComment
        v-for="comment in comments"
        :key="`${comment.id}-comments-project`"
        :comment="comment"
        type="add-comment"
        class="border-b border-solid border-gray-200"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SortBy from '~/components/common/SortByDropdown.vue'
import DropdownFromUser from '~/components/common/DropdownFromUser.vue'
import ListComment from '~/components/project/detail/ListComment.vue'
import { getCommentsInProject } from '~/api/comment'
import type { IListComments } from '~/types'

const route = useRoute()
const id = route.params.id as string

const comments = ref<IListComments[]>([])

await useAsyncData('comments', async () => {
  const { data }  = await getCommentsInProject(id)

  comments.value = data.value
})
</script>
