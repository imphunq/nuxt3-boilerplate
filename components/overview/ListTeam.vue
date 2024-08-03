<template>
  <div class="">
    <HeaderTable
      :title="`Teams`"
      :link-detail="linkDetail"
    />

    <div class="relative overflow-auto border border-solid border-gray-200 border-t-0 h-96 rounded-b-lg">
      <el-scrollbar>
        <el-table :data="teams" style="width: 100%">
          <el-table-column label="Name" sortable>
            <template #default="{ row }">
              <div class="flex items-center gap-2">
                <img
                  :src="GroupProjectIcon"
                  alt=""
                  class="w-8 h-8"
                >

                <span>
                  {{ row.name }}
                </span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="People" header-align="center">
            <template #default="{ row }">
              <div class="flex gap-1 items-center justify-center">
                <el-icon><User /></el-icon>
                <span>
                  {{ row.members_count }}
                </span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="Plan" width="120">
            <template #default="{ row }">
              <span>Free</span>
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
import HeaderTable from '~/components/overview/HeaderTable.vue'
import SortableIcon from '~/components/common/SortableIcon.vue'
import StackUserGroup from '~/components/common/StackUserGroup.vue'
import type { LinkDetail, ITeam } from '~/types'
import GroupProjectIcon from '~/assets/images/icons/project/group.svg'
import { More, User } from '@element-plus/icons-vue'

const linkDetail = computed<LinkDetail>(() => {
  return {
    title: 'View All Teams',
    href: '/',
  }
})

const teams: ITeam[] = [
  {
    id: 1,
    name: "Sample Team",
    color: "red",
    archived: false,
    user_create_id: 123,
    privacy: "public",
    description: "Sample description",
    website_url: "https://example.com",
    members_count: 10,
    created_at: "2024-06-26 16:28:09",
    updated_at: "2024-06-26 16:28:09",
  }, {
    id: 2,
    name: "Hostdesign Team",
    color: "red",
    archived: false,
    user_create_id: 123,
    privacy: "public",
    description: "Sample description",
    website_url: "https://example.com",
    members_count: 10,
    created_at: "2024-06-26 16:28:09",
    updated_at: "2024-06-26 16:28:09",
  }, {
    id: 3,
    name: "Personal Team",
    color: "red",
    archived: false,
    user_create_id: 123,
    privacy: "public",
    description: "Sample description",
    website_url: "https://example.com",
    members_count: 10,
    created_at: "2024-06-26 16:28:09",
    updated_at: "2024-06-26 16:28:09",
  }
]
</script>

  <style lang="scss" scoped>
  </style>
