<template>
  <div class="-m-4">
    <HeaderPage />

    <el-menu
      :default-active="activeItem"
      class="el-menu-team"
      mode="horizontal"
    >
      <el-menu-item index="overview">
        Overview
      </el-menu-item>
      <el-menu-item index="project">
        Projects
      </el-menu-item>
      <el-menu-item index="member">
        Members
      </el-menu-item>
      <el-menu-item index="task">
        Tasks
      </el-menu-item>
      <el-menu-item index="activity">
        Activity
      </el-menu-item>
      <el-menu-item index="calendar">
        Calendar
      </el-menu-item>
      <el-menu-item index="setting">
        Settings
      </el-menu-item>
    </el-menu>

    <div class="mt-4 px-4">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderPage from '~/components/team/HeaderPage.vue'

const activeItem = ref<string>('overview')
</script>

<style lang="scss">
.el-menu-team {
  margin-top: 10px;
  padding-left: 32px;
}
</style>
