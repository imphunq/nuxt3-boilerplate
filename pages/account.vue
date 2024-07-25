<template>
  <div class="p-2">
    <div class="head-account block">
      <p class="head-account__title text-lg">
        Account Settings
      </p>
      <p class="text-sm">
        Manage your account settings here.
      </p>
    </div>

    <div class="mt-4">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-account"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="setting">
          Account
        </el-menu-item>
        <el-menu-item index="security">
          Security
        </el-menu-item>
        <el-menu-item index="notifications">
          Notifications
        </el-menu-item>
        <el-menu-item index="billing">
          Billing
        </el-menu-item>
        <el-menu-item index="apps">
          Apps
        </el-menu-item>
      </el-menu>
    </div>

    <div class="mt-4">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const activeIndex = ref<string>('setting')

const handleSelect = (index: string) => {
  activeIndex.value = index

  navigateTo(`/account/${index}`)
}
</script>

<style lang="scss" scoped>
.head-account {
  &__title {
    color: $color-gray-9;
  }
}
</style>
