<template>
  <div class="">
    <HeaderTable
      :title="`Uploaded Files`"
      :link-detail="linkDetail"
    />

    <div class="relative overflow-auto border border-solid border-gray-200 border-t-0 h-96 rounded-b-lg">
      <el-scrollbar>
        <el-table
          :data="data"
          style="width: 100%"
        >
          <el-table-column
            sortable
            label="File Name"
          >
            <template #default="{ row }" />
          </el-table-column>
          <el-table-column label="Project" />
          <el-table-column label="Owner" />
          <el-table-column
            label="Size"
            sortable
          />
          <el-table-column label="Version" />
          <el-table-column
            label="Modified"
            sortable
          />
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
import StackUserGroup from '~/components/common/StackUserGroup.vue'
import type { LinkDetail, IProject } from '~/types'

const data: any = []

const linkDetail = computed<LinkDetail>(() => {
  return {
    title: 'View All',
    href: '/',
  }
})
</script>

<style lang="scss" scoped>
</style>
