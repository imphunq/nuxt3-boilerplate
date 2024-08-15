<template>
  <div class="team-comment">
    <HeaderTable
      :title="`Comments`"
      :link-detail="linkDetail"
    />

    <div class="h-96 flex flex-col overflow-auto gap-5 border border-solid border-gray-200 border-t-0 rounded-b-lg">
      <el-scrollbar>
        <div class="border-b border-solid border-gray-200 p-6">
          <MarkCommentComplete />
        </div>

        <div class="border-b border-solid border-gray-200 p-6">
          <MentionInComment />
        </div>

        <div class="border-b border-solid border-gray-200 p-6">
          <AddMemberToProjectVue />
        </div>

        <div class="border-b border-solid border-gray-200 p-6">
          <AssignTask />
        </div>

        <div class="border-b border-solid border-gray-200 p-6">
          <AddComment />
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { More, CopyDocument, Picture } from '@element-plus/icons-vue'
import HeaderTable from '~/components/overview/HeaderTable.vue'
import MarkCommentComplete from '~/components/comments/MarkCommentComplete.vue'
import MentionInComment from '~/components/comments/MentionInComment.vue'
import AddMemberToProjectVue from '~/components/notification/AddMemberToProject.vue'
import AssignTask from '~/components/notification/AssignTask.vue'
import AddComment from '~/components/comments/AddComment.vue'
import type { LinkDetail } from '~/types'

const linkDetail = computed<LinkDetail>(() => {
  return {
    title: 'View All',
    href: '/',
  }
})
</script>

<style lang="scss" scoped>
</style>
