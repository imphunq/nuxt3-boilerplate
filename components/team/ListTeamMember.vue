<template>
  <div class="team-member">
    <HeaderTable
      :title="`Team Members`"
      :link-detail="linkDetail"
    />

    <div class="relative overflow-auto border border-solid border-gray-200 border-t-0 h-80 rounded-b-lg">
      <el-scrollbar>
        <el-table
          :data="teamMembers"
          style="width: 100%"
          :cell-style="{ padding: '12px 0' }"
        >
          <el-table-column
            sortable
            label="Name"
          >
            <template #default="{ row }">
              <div class="flex items-center gap-1">
                <img
                  class="border-2 border-white rounded-full dark:border-gray-800 w-6 h-6"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt=""
                >

                <span class="font-semibold">{{ row.name }}</span>
              </div>
            </template>
          </el-table-column>

          <el-table-column
            label="Username"
          >
            <template #default="{ row }">
              <span class="">@{{ row.username }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="Joined"
          >
            <template #default="{ row }">
              <span class="">4 Nov, 2021</span>
            </template>
          </el-table-column>

          <el-table-column width="70">
            <el-icon><More /></el-icon>
          </el-table-column>
        </el-table>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { More, CopyDocument, Picture } from '@element-plus/icons-vue'
import HeaderTable from '~/components/overview/HeaderTable.vue'
import type { LinkDetail, ITeamMember } from '~/types'

const teamMembers: ITeamMember[] = [
  {
    id: 1,
    username: 'john_doe',
    name: 'John Doe',
  },
  {
    id: 2,
    username: 'jane_doe',
    name: 'Jane Doe',
  },
]

const linkDetail = computed<LinkDetail>(() => {
  return {
    title: 'View All',
    href: '/',
  }
})
</script>

<style lang="scss" scoped>
</style>
