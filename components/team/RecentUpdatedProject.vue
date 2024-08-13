<template>
  <div class="">
    <HeaderTable
      :title="`On-going Projects`"
      :link-detail="linkDetail"
    />

    <div class="relative overflow-auto border border-solid border-gray-200 border-t-0 h-96 rounded-b-lg">
      <el-scrollbar>
        <el-table
          :data="projects"
          style="width: 100%"
        >
          <el-table-column
            sortable
            label="Name"
          >
            <template #default="{ row }">
              <div class="flex items-center gap-2">
                <el-image
                  :src="row.cover_url_thumb"
                  class="h-32 w-24 rounded-lg"
                >
                  <template #error>
                    <div class="image-slot">
                      <div class="flex items-center justify-center border border-solid border-gray-200 h-32 w-24 rounded-lg">
                        <el-icon><Picture /></el-icon>
                      </div>
                    </div>
                  </template>
                </el-image>

                <span class="text-black font-semibold">{{ row.project_title }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="Project Owner"
            header-align="center"
            align="center"
          >
            <template #default="{ row }">
              <div class="flex items-center gap-1 justify-center">
                <span>
                  @examples
                </span>

                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABHNCSVQICAgIfAhkiAAAAPZJREFUGFdtUMtRAlEQ7HmlZ7FK9ipGIJvBagRmIGawRuAYgWQARiAkAJuBhrBnsEo8S+3Y8+Dpo3QuM9Xd0/MRZFHpaijAhFBPEB4XejbNeXLAXvQikEFOGrChgE39seNRfK3rluk8F+Z1h6OLRk9bcdcAef0jNHzS6mSP37u7XOnqjeMvI5gEzJ1YxbE1uVun3F3SCgZrDcelYDtjXQeEIbv92BgdrKT4ffQL2nShxd0h5gPteanFaHfgw3qT9uMHGoLV4YFWNlpw3d03aqan/77B5vlS+zc/r/Oi0o9BwNbB2OSjKRy7YzKJznl4E/DVy0WJ/wbrO1+1Jmt1OAAAAABJRU5ErkJggg=="
                  alt=""
                >
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="People"
            header-align="center"
            align="center"
          >
            <template #default="{ row }">
              <div class="flex justify-center">
                <StackUserGroup />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="screen_count"
            label="Screen"
            header-align="center"
            align="center"
          >
            <template #default="{ row }">
              <div class="flex justify-center">
                <img
                  class="w-4 h-4 flex justify-center"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAABHNCSVQICAgIfAhkiAAAAIVJREFUKFNjnL987QVGBgZ9BjLA////AxkXLF/7PyEyGGgGaQBocQNIx6gBo2EATgcUp0Rs6Q+cyv4zOCRGBTuA5PGlVqxJmGwD5i9bM4GREZSxGBWALhBgYPx/AeJCRqBL/h8Asf7/Yy5MjA6EigNlkL0AtDkByFfAn62YFiRGBj6AqQEA2AVpnXScLSkAAAAASUVORK5CYII="
                  alt=""
                >
              </div>
              <span>{{ row.screen_count }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="shareLink"
            label="Share Link"
            header-align="center"
            align="center"
          >
            <template #default="{ row }">
              <div class="flex items-center justify-center gap-1">
                <p class="flex items-center gap-1 text-sm text-gray-500 w-36">
                  <span class="truncate ...">{{ row.cover_url }}</span>
                </p>
                <div class="flex items-center gap-1 border border-gray-200 border-solid rounded-xl px-1 cursor-pointer">
                  <el-icon><CopyDocument /></el-icon>
                  <span>Copy</span>
                </div>
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
import { More, CopyDocument, Picture } from '@element-plus/icons-vue'
import HeaderTable from '~/components/overview/HeaderTable.vue'
import StackUserGroup from '~/components/common/StackUserGroup.vue'
import type { LinkDetail, IProject } from '~/types'

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

const linkDetail = computed<LinkDetail>(() => {
  return {
    title: 'View All',
    href: '/',
  }
})
</script>

<style lang="scss" scoped>
</style>
