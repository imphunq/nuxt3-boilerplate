<template>
  <div class="p-8 flex items-center justify-between bg-gray-50 border-b border-solid border-gray-200">
    <div class="flex items-center gap-5">
      <div />

      <div class="flex flex-col gap-5">
        <div class="flex items-center">
          <span class="text-bold text-2xl">Host Design Team</span>
        </div>

        <div class="flex items-center gap-5">
          <div class="flex items-center gap-2 text-xs">
            <span class="logo" />
            <span class="text-gray-500">Type:</span>
            <span>Private Team</span>
          </div>

          <div class="flex items-center gap-2 text-xs">
            <span class="logo" />
            <span class="text-gray-500">Role:</span>
            <span>Member</span>
          </div>

          <div class="flex items-center gap-2 text-xs">
            <span class="logo" />
            <span class="text-gray-500">Created on:</span>
            <span>03 Nov, 2021</span>
          </div>

          <div class="flex items-center gap-2 text-xs">
            <span class="logo" />
            <span class="text-gray-500">Projects</span>
            <span>532</span>
          </div>

          <div class="flex items-center gap-2 text-xs">
            <span class="logo" />
            <span class="text-gray-500">Member</span>
            <span>51</span>
          </div>

          <div class="flex items-center gap-2 text-xs">
            <span class="logo" />
            <span class="text-gray-500">Group</span>
            <span>15</span>

            <StackUserGroup class="ml-2" :without-space="true" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-5">
      <StackUserGroup size="large" />
      <el-button
        type="primary"
        size="large"
        round
        :icon="Plus"
      >
        <!-- <el-icon><Plus /></el-icon> -->
        Add People
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'
import StackUserGroup from '~/components/common/StackUserGroup.vue'
</script>
