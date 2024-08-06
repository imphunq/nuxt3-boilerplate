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
          assigned you to
        </span>
        <span class="cursor-pointer text-blue-500">
          HostDesign UI
        </span>
        <span>task</span>
      </div>
      <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
        November 04, 2021 9:21AM
      </div>

      <div class="flex items-center gap-4 mt-3">
        <div class="border-2 border-solid border-gray-300 h-24" />
        <el-card class="w-56">
          <div class="flex items-center justify-between">
            <span>Website Redesign</span>
            <el-icon><More /></el-icon>
          </div>

          <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <img
                class="w-4 h-4"
                :src="CommentIcon"
                alt=""
              >

              <span>2</span>

              <el-tag type="info">
                <el-icon><Clock /></el-icon>
                <span>Normal</span>
              </el-tag>
            </div>

            <img
              class="w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              alt="Rounded avatar"
            >
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { More, Clock } from '@element-plus/icons-vue'
import CommentIcon from '~/assets/images/icons/comment.png'
</script>
