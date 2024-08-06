<template>
  <div>
    <div class="flex items-center justify-between">
      <span class="text-xl text-black">Comments</span>

      <div class="flex items-center gap-4">
        <DropdownFromUser />
        <SortBy />
      </div>
    </div>

    <div class="mt-4 border border-solid border-gray-200 rounded-md">
      <ListComment
        type="mention"
        class="border-b border-solid border-gray-200"
      />
      <ListComment
        type="add-comment"
        class="border-b border-solid border-gray-200"
      />
      <ListComment type="mention" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SortBy from '~/components/common/SortByDropdown.vue'
import DropdownFromUser from '~/components/common/DropdownFromUser.vue'
import ListComment from '~/components/project/detail/ListComment.vue'
</script>
