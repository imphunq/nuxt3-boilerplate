<template>
  <div>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xl mb-2">
          Comments
        </p>
        <p class="text-sm">View all comments and changes across all your projects</p>
      </div>

      <div class="flex items-center gap-5">
        <el-date-picker
          v-model="date"
          type="date"
          size="default"
          class="comment-datepicker"
        />

        <DropdownFromUser />

        <SortBy />
      </div>
    </div>

    <div class="mt-5 flex flex-col gap-5">
      <div v-for="comment in comments"
        :key="`${comment.id}-comments`"
        class="border border-solid border-gray-200"
      >
      <ListComment
        :comment="comment"
        type="add-comment"
      />
      </div>
    </div>

    <div v-if="meta.last_page > 1" class="flex justify-center mt-5">
      <el-button
        type="primary"
        round
        size="large"
        :loading="loading"
        @click="handleLoadMore"
      >
        Load More
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SortBy from '~/components/common/SortByDropdown.vue'
import DropdownFromUser from '~/components/common/DropdownFromUser.vue'
import type { IListComments, IPagination } from '~/types'
import { getUserCommentsProject } from '~/api/comment'
import ListComment from '~/components/project/detail/ListComment.vue'
import { DEFAULT_META } from '~/constants/common'

definePageMeta({
  middleware: 'auth',
})

const date = ref<Date>(new Date())
const comments = ref<IListComments[]>([])
const meta = reactive<IPagination>(DEFAULT_META)
const currentPage = ref<number>(1)
const loading = ref<boolean>(false)

await useAsyncData('comments', async () => {
  const { data }  = await getUserCommentsProject()

  comments.value = data.value.data

  Object.assign(meta, {
    current_page: data.value.current_page,
    total: data.value.projects_count,
    per_page: data.value.limit,
    last_page: data.value.total_page,
  })
})

const handleLoadMore = async () => {
  if (currentPage.value < meta.last_page) {
    currentPage.value += 1
    loading.value = true

    await getUserCommentsProject({
      page: currentPage.value,
    }).then(({ data }) => {
      comments.value = comments.value.concat(data.value.data)
      loading.value = false
    })
  }
}
</script>

<style lang="scss">
.comment-datepicker {
  .el-input__wrapper {
    border-radius: 9999px;
  }
}
</style>
