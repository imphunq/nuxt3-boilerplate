<template>
  <el-drawer
    v-model="isOpen"
    direction="ltr"
    class="project-drawer"
    :modal="false"
    :show-close="false"
    size="25%"
  >
    <template #header="{ close, titleId, titleClass }">
      <div class="flex items-center gap-5 border-b border-solid border-gray-200 pb-4">
        <img :src="GroupProjectIcon" alt="">

        <div class="flex flex-col gap-2">
          <span class="text-xl font-bold text-black">Project Title</span>

          <div class="flex items-center justify-center border border-solid border-gray-200 rounded-2xl p-1">
            <img
              :src="PrivateIcon"
              class="mr-2 w-3 h-3"
              alt=""
            >
            <span class="text-black dark:text-white text-sm">Private</span>
          </div>
        </div>
      </div>

      <MoveLeftIcon class="cursor-pointer" @click="close" />
    </template>

    <div>
      <div class="flex items-center justify-between">
        <span class="text-gray-500">Description:</span>

        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
      </div>

      <p class="mt-2 my-6">This is a new design project for our client. We will design all pages and features...</p>

      <div class="pb-4 border-b border-solid border-gray-200">
        <p class="mb-2">Project Layout:</p>

        <div class="bg-gray-100 rounded-lg flex items-center justify-between py-2 px-3">
          <div class="flex items-center gap-4">
            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 17H4C2.34315 17 1 15.6569 1 14V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V14C23 15.6569 21.6569 17 20 17H13V19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19H11V17ZM4 5H20C20.5523 5 21 5.44772 21 6V14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14V6C3 5.44772 3.44772 5 4 5Z" fill="currentColor"></path></svg>
            <span>All Screens</span>
          </div>

          <span>4</span>
        </div>
      </div>

      <div class="mt-4">
        <p class="mb-4">Sections:</p>

        <el-button
          round
          class="project-drawer__btn-add flex items-center gap-5"
        >
          <el-icon><Plus /></el-icon>
          <span>Add new</span>
        </el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import GroupProjectIcon from '~/assets/images/icons/project/group.svg'
import PrivateIcon from '~/assets/images/icon-private.svg'
import MoveLeftIcon from '~/components/common/icon/MoveLeft.vue'
import { Plus } from '@element-plus/icons-vue'

const isOpen = ref<boolean>(false)

const open = () => {
  isOpen.value = true
}

const close = () => {
  isOpen.value = false
}

defineExpose({
  open,
  close,
})
</script>

<style lang="scss">
.project-drawer {
  top: 64px !important;

  .el-drawer__header {
    margin-bottom: 0;
  }

  &__btn-add {
    border-color: $color-blue;
    color: $color-blue;
  }
}
</style>
