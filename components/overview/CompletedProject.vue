<template>
  <div class="">
    <HeaderTable
      :title="`Completed Projects`"
      :link-detail="linkDetail"
    />

    <div class="relative overflow-auto border border-solid border-gray-200 border-t-0 h-80 rounded-b-lg">
      <el-scrollbar>
        <el-table :data="projects" style="width: 100%">
          <el-table-column label="Name" sortable>
            <template #default="{ row }">
              <div class="flex items-center gap-2">
                <img
                  :src="GroupProjectIcon"
                  alt=""
                  class="w-8 h-8"
                >

                <div class="flex flex-col gap-1">
                  <span class="font-semibold text-black">{{ row.project_title }}</span>

                  <p class="flex items-center gap-1 text-sm text-gray-500">
                    <span class="truncate ...">{{ row.cover_url }}</span>
                    <div class="flex items-center gap-1 border border-gray-200 border-solid rounded-xl px-1 cursor-pointer">
                      <el-icon><CopyDocument /></el-icon>
                      <span>Copy</span>
                    </div>
                  </p>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="Marked as Completed" header-align="center">
            <template #default="{ row }">
              <div class="text-gray-500 flex justify-center">
                {{ moment(row.updated_at).format('lll') }}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="People" header-align="center">
            <div class="flex justify-center">
              <StackUserGroup />
            </div>
          </el-table-column>
          <el-table-column width="70">
            <template #default="{ row }">
              <div class="flex justify-center items-center me-4">
                <input checked id="green-checkbox" type="checkbox" value="" class="w-4 h-4 text-green-400 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="green-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
            </div>
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
import moment from 'moment'
import HeaderTable from '~/components/overview/HeaderTable.vue'
import StackUserGroup from '~/components/common/StackUserGroup.vue'
import GroupProjectIcon from '~/assets/images/icons/project/group.svg'
import type { LinkDetail, IProject } from '~/types'
import { More, CopyDocument } from '@element-plus/icons-vue'

const linkDetail = computed<LinkDetail>(() => {
  return {
    title: 'View Completed Projects',
    href: '/',
  }
})

const projects: IProject[] = [
  {
    id: 1,
    watermark_id: null,
    project_title: 'Project Alpha',
    project_folder: '/projects/alpha',
    project_description: 'This is the description for Project Alpha.',
    color: '#FF5733',
    archived: 0,
    projecttype_id: 2,
    projectdevice_id: 1,
    projectable_id: 10,
    team_id: 1,
    projectable_type: 'TypeA',
    privacy: 'public',
    folder_id: null,
    finished: 'false',
    completed_date: null,
    icon_id: 5,
    background_color: '#FFFFFF',
    cover_id: 12,
    last_activity: '2024-08-01T12:00:00Z',
    created_at: '2024-01-15T08:00:00Z',
    updated_at: '2024-07-31T10:00:00Z',
    deleted_at: null,
    cover_url: 'https://example.com/cover1.png',
    cover_url_thumb: 'https://example.com/cover1_thumb.png',
    screen_count: 15,
    members: [],
  },
  {
    id: 2,
    watermark_id: null,
    project_title: 'Project Beta',
    project_folder: '/projects/beta',
    project_description: 'This is the description for Project Beta.',
    color: '#FF5733',
    archived: 0,
    projecttype_id: 2,
    projectdevice_id: 1,
    projectable_id: 10,
    team_id: 1,
    projectable_type: 'TypeA',
    privacy: 'public',
    folder_id: null,
    finished: 'false',
    completed_date: null,
    icon_id: 5,
    background_color: '#FFFFFF',
    cover_id: 12,
    last_activity: '2024-08-01T12:00:00Z',
    created_at: '2024-01-15T08:00:00Z',
    updated_at: '2024-07-31T10:00:00Z',
    deleted_at: null,
    cover_url: 'https://example.com/cover2.png',
    cover_url_thumb: 'https://example.com/cover2_thumb.png',
    screen_count: 15,
    members: [],
  },
  {
    id: 3,
    watermark_id: null,
    project_title: 'Project Gamma',
    project_folder: '/projects/gamma',
    project_description: 'This is the description for Project Gamma.',
    color: '#FF5733',
    archived: 0,
    projecttype_id: 2,
    projectdevice_id: 1,
    projectable_id: 10,
    team_id: 1,
    projectable_type: 'TypeA',
    privacy: 'public',
    folder_id: null,
    finished: 'false',
    completed_date: null,
    icon_id: 5,
    background_color: '#FFFFFF',
    cover_id: 12,
    last_activity: '2024-08-01T12:00:00Z',
    created_at: '2024-01-15T08:00:00Z',
    updated_at: '2024-07-31T10:00:00Z',
    deleted_at: null,
    cover_url: 'https://example.com/cover3.png',
    cover_url_thumb: 'https://example.com/cover3_thumb.png',
    screen_count: 15,
    members: [],
  },
  {
    id: 4,
    watermark_id: null,
    project_title: 'Project Gamma',
    project_folder: '/projects/gamma',
    project_description: 'This is the description for Project Gamma.',
    color: '#FF5733',
    archived: 0,
    projecttype_id: 2,
    projectdevice_id: 1,
    projectable_id: 10,
    team_id: 1,
    projectable_type: 'TypeA',
    privacy: 'public',
    folder_id: null,
    finished: 'false',
    completed_date: null,
    icon_id: 5,
    background_color: '#FFFFFF',
    cover_id: 12,
    last_activity: '2024-08-01T12:00:00Z',
    created_at: '2024-01-15T08:00:00Z',
    updated_at: '2024-07-31T10:00:00Z',
    deleted_at: null,
    cover_url: 'https://example.com/cover3.png',
    cover_url_thumb: 'https://example.com/cover3_thumb.png',
    screen_count: 15,
    members: [],
  },
  {
    id: 5,
    watermark_id: null,
    project_title: 'Project Gamma',
    project_folder: '/projects/gamma',
    project_description: 'This is the description for Project Gamma.',
    color: '#FF5733',
    archived: 0,
    projecttype_id: 2,
    projectdevice_id: 1,
    projectable_id: 10,
    team_id: 1,
    projectable_type: 'TypeA',
    privacy: 'public',
    folder_id: null,
    finished: 'false',
    completed_date: null,
    icon_id: 5,
    background_color: '#FFFFFF',
    cover_id: 12,
    last_activity: '2024-08-01T12:00:00Z',
    created_at: '2024-01-15T08:00:00Z',
    updated_at: '2024-07-31T10:00:00Z',
    deleted_at: null,
    cover_url: 'https://example.com/cover3.png',
    cover_url_thumb: 'https://example.com/cover3_thumb.png',
    screen_count: 15,
    members: [],
  },
]

</script>

<style lang="scss" scoped>
</style>
