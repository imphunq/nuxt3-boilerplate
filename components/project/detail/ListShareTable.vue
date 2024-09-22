<template>
  <el-table
    :data="shares"
    style="width: 100%"
  >
    <el-table-column
      type="selection"
      width="55"
    />
    <el-table-column
      label="Link"
      prop="link"
      show-overflow-tooltip
    >
      <template #default="{ row }">
        <div class="flex items-center gap-2">
          <a
            :href="row.share_key"
            target="_blank"
            class="text-blue-500"
          >
            {{ row.share_key }}
          </a>
          <div class="flex items-center justify-center gap-1 border border-gray-200 border-solid rounded-xl px-1 cursor-pointer">
            <el-icon><CopyDocument /></el-icon>
            <span>Copy</span>
          </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      property="created_by"
      label="Created By"
      width="200"
      header-align="center"
    >
      <template #default="{ row }">
        <div class="text-center">
          <span>{{ row.members[0].name }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      property="date"
      label="Date"
      width="200"
      header-align="center"
    >
      <template #default="{ row }">
        <div class="text-center">
          <span>{{ moment(row.created_at).format('lll') }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      property="type"
      label="Type"
      width="180"
      header-align="center"
    >
      <template #default="{ row }">
        <div class="text-center">
          <span>{{ row.public === 1 ? 'Public Share Link' : 'Private Share Link' }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column width="200">
      <template #default="{ row }">
        <div class="flex items-center gap-1 text-center text-red-500 cursor-pointer">
          <el-icon><Delete /></el-icon>
          <span>Delete Link</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column width="70">
      <el-popover
        placement="bottom"
        trigger="click"
      >
        <template #reference>
          <el-icon class="cursor-pointer"><More /></el-icon>
        </template>

        <ul>
          <li class="cursor-pointer mb-2 hover:text-blue-400">Link Stats</li>
          <li class="cursor-pointer hover:text-blue-400">Settings</li>
        </ul>
      </el-popover>
    </el-table-column>
  </el-table>

  <div class="w-full flex justify-center mt-8">
    <Pagination :data="meta" />
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment'
import type { IListShares, IPagination } from '~/types';
import Pagination from '~/components/common/Pagination.vue'
import { CopyDocument, More, Delete } from '@element-plus/icons-vue'

interface Props {
  shares: IListShares[];
  meta: IPagination;
}

const props = defineProps<Props>()
</script>
