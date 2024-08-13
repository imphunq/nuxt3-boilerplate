<template>
  <div class="grid grid-cols-4 gap-6">
    <el-card
      shadow="never"
      class="team-overview__card"
    >
      <div class="flex justify-end">
        <el-icon class="cursor-pointer">
          <More />
        </el-icon>
      </div>
      <div class="flex items-center gap-5">
        <div class="w-10 h-10 border-solid border border-purple-500 bg-purple-200 rounded-full" />

        <div class="flex items-end">
          <span class="text-bold text-4xl mr-2">25</span>
          <span>Active Members</span>
        </div>
      </div>

      <div class="mt-6 flex justify-between items-center">
        <div class="flex items-center gap-1">
          <span class="text-sm text-gray-500">Last Added:</span>
          <img
            class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt=""
          >
          <span class="text-sm">Alex Hamilton</span>
        </div>

        <span class="cursor-pointer text-blue-500 text-sm">View All</span>
      </div>
    </el-card>

    <el-card
      shadow="never"
      class="team-overview__card"
    >
      <div class="flex justify-end">
        <el-icon class="cursor-pointer">
          <More />
        </el-icon>
      </div>

      <div class="flex items-center gap-5">
        <div class="w-10 h-10 border-solid border border-blue-500 bg-blue-200 rounded-full" />

        <div class="flex items-end gap-2">
          <span class="text-bold text-4xl">3</span>
          <span>Invites</span>
          <span class="text-bold text-4xl">/</span>
          <span class="text-bold text-4xl">1</span>
          <span>Pending</span>
        </div>
      </div>

      <div class="mt-6 flex justify-between items-center">
        <div class="flex items-center gap-1">
          <span class="text-sm text-gray-500">Last Invited:</span>
          <img
            class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt=""
          >
          <span class="text-sm">Alex Hamilton</span>
        </div>

        <span class="cursor-pointer text-blue-500 text-sm">Resend All</span>
      </div>
    </el-card>

    <el-card
      shadow="never"
      class="team-overview__card"
    >
      <div class="flex justify-end">
        <el-icon class="cursor-pointer">
          <More />
        </el-icon>
      </div>

      <div class="flex items-center gap-5">
        <div class="w-10 h-10 border-solid border border-green-500 bg-green-100 rounded-full" />

        <div class="flex items-end">
          <span class="text-bold text-4xl mr-2">15</span>
          <span>User Groups</span>
        </div>
      </div>

      <div class="mt-6 flex justify-between items-center">
        <div class="flex items-center gap-1">
          <span class="text-sm text-gray-500">Last Viewed:</span>
          <img
            class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt=""
          >
          <span class="text-sm">Graphic Gr</span>
        </div>

        <span class="cursor-pointer text-blue-500 text-sm">View All</span>
      </div>
    </el-card>

    <el-card
      shadow="never"
      class="team-overview__card"
    >
      <div class="flex justify-end">
        <el-icon class="cursor-pointer">
          <More />
        </el-icon>
      </div>

      <div class="flex items-center gap-5">
        <div class="w-10 h-10 border-solid border border-red-500 bg-red-100 rounded-full" />

        <div class="flex items-end gap-2">
          <span class="text-bold text-4xl">532</span>
          <span>Projects</span>
          <span class="text-bold text-4xl">/</span>
          <span class="text-bold text-4xl">2421</span>
          <span>Screens</span>
        </div>
      </div>

      <div class="mt-6 flex justify-between items-center">
        <div class="flex items-center gap-1">
          <span class="text-sm text-gray-500">Last Marked as Completed:</span>
          <img
            class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt=""
          >
          <span class="text-sm">Pets</span>
        </div>

        <span class="cursor-pointer text-blue-500 text-sm">View All</span>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { More } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.team-overview {
  &__card {
    border-radius: 8px;
  }
}
</style>
