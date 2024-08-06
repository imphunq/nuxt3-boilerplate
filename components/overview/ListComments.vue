<template>
  <div class="rounded-lg border border-solid border-gray-200 p-4">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-sm">Comments</span>

      <nuxt-link
        class="text-xs text-blue-500"
        to="/"
      >
        View all
      </nuxt-link>
    </div>

    <div class="flex items-center gap-2">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      ><path d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z" /></svg>

      <DropdownFromUser />

      <SortByDropdown />
    </div>
    <div class="h-96 p-6 flex flex-col gap-5">
      <el-scrollbar>
        <MarkCommentComplete />

        <MentionInComment />
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SortByDropdown from '~/components/common/SortByDropdown.vue'
import DropdownFromUser from '~/components/common/DropdownFromUser.vue'
import MarkCommentComplete from '~/components/comments/MarkCommentComplete.vue'
import MentionInComment from '~/components/comments/MentionInComment.vue';
</script>

<style lang="scss" scoped></style>
