<template>
  <div class="">
    <HeaderTable
      :title="`Tasks`"
      :link-detail="linkDetail"
    />

    <div class="relative overflow-auto border border-solid border-gray-200 border-t-0 h-80 rounded-b-lg">
      <el-scrollbar>
        <el-table
          :data="tasks"
          style="width: 100%"
          :show-header="false"
          :cell-style="{ padding: '20px 0' }"
        >
          <el-table-column
            sortable
            label="Name"
            width="300"
          >
            <template #default="{ row }">
              <div class="flex items-center gap-4">
                <el-checkbox />
                <span class="font-semibold">{{ row.name }}</span>
              </div>
            </template>
          </el-table-column>

          <el-table-column
            label="Due date"
          >
            <template #default="{ row }">
              <div class="text-xs text-gray-500 mb-2">
                Due Date:
              </div>

              <span class="">{{ row.due_date ? row.due_date : '-' }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="Priority"
          >
            <template #default="{ row }">
              <div class="text-xs text-gray-500 mb-2">
                Priority:
              </div>
              <Priority :type="row.priority" />
            </template>
          </el-table-column>

          <el-table-column
            label="Assigned"
          >
            <template #default="{ row }">
              <div class="text-xs text-gray-500 mb-2">
                Assigned:
              </div>

              <StackUserGroup />
            </template>
          </el-table-column>

          <el-table-column
            label="Assigned"
          >
            <template #default="{ row }">
              <span>Get Fit</span>
            </template>
          </el-table-column>
        </el-table>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { More, CopyDocument, Picture } from '@element-plus/icons-vue'
import HeaderTable from '~/components/overview/HeaderTable.vue'
import StackUserGroup from '~/components/common/StackUserGroup.vue'
import Priority from '~/components/common/Priority.vue'
import type { LinkDetail, ITask } from '~/types'

const tasks: ITask[] = [
  {
    id: 1,
    name: 'Create a new design 1',
    due_date: '',
    priority: 'normal',
  }, {
    id: 2,
    name: 'Create a new design 2',
    due_date: '',
    priority: 'normal',
  }, {
    id: 3,
    name: 'Create a new design 3',
    due_date: '',
    priority: 'normal',
  }, {
    id: 4,
    name: 'Create a new design 4',
    due_date: '',
    priority: 'normal',
  }, {
    id: 5,
    name: 'Create a new design 5',
    due_date: '',
    priority: 'normal',
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
