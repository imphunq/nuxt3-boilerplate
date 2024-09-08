<template>
  <div class="overflow-x-auto">
  <el-table
    ref="projectTableRef"
    :data="mergeData"
    style="width: 100%;"
  >
    <el-table-column type="selection" />
    <el-table-column
      prop="project_title"
      label="Folder / Project Name"
      show-overflow-tooltip
      min-width="300"
    >
      <template #default="scope">
        <div v-if="scope.row.category === 'project'" class="flex items-center cursor-pointer" @click="gotoDetail(scope.row.id)">
          <img
            :src="scope.row.cover_url_thumb ?? NoImage"
            class="w-16 md:w-32 sm:w-16 xs:w-12 max-w-full max-h-full mr-2" alt="Thumb"
          >

          <span class="text-black text-xs md:text-sm xl:text-base">{{ scope.row.project_title }}</span>
        </div>

        <div v-else class="flex items-center cursor-pointer" @click="gotoDetailFolder(scope.row.id)">
          <img
            :src="FolderImage"
            class="w-12 md:w-16 sm:w-12 xs:w-8 max-w-full max-h-full mr-2"
            alt="Thumb"
          >

          <span class="text-black text-xs md:text-sm xl:text-base">{{ scope.row.folder_name }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      label="Folder / Project Owner"
      header-align="center"
      width="250"
    >
      <template #default="scope">
        <span
          v-if="scope.row.category === 'project'"
          class="flex items-center justify-center gap-1 px-6 py-4 text-black dark:text-white">
          <span>{{ scope.row.members[0].name }}</span>
          <img :src="IconTick" alt="">
        </span>
      </template>
    </el-table-column>
    <el-table-column label="People" width="150" />
    <el-table-column label="Screens" width="150">
      <template #default="scope">
        <span v-if="scope.row.category === 'project'" class="flex items-center justify-center gap-1">
          <span class="text-black">{{ scope.row.screen_count ?? scope.row.projects_count }}</span>
          <img :src="IconScreen" alt="">
        </span>
      </template>
    </el-table-column>
    <el-table-column label="Updated" width="200">
      <template #default="scope">
        <span class="text-black justify-center">
          {{ moment(scope.row.updated_at).format('YY/DD/YYYY HH:mm') }}
        </span>
      </template>
    </el-table-column>
    <el-table-column width="200">
      <template #default="scope">
        <el-button
          v-if="scope.row.category === 'project'"
          type="primary"
          round
          class="flex items-center justify-center"
        >
          <el-icon><Share /></el-icon>

          <span class="text-xs md:text-sm xl:text-base">Share</span>
        </el-button>
      </template>
    </el-table-column>
    <el-table-column width="100">
      <template #default="scope">
        <div v-if="scope.row.category === 'project'" class="flex items-center gap-3">
          <svg class="text-xl" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em"
            width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
            </path>
            <path
              d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z">
            </path>
          </svg>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <div class="three-dots cursor-pointer text-gray-400">
                <svg class="text-xl" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
              </div>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="">
                  <IconTickComponent />
                  <span class="ml-2 text-base">Select</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <MoveTo />
                  <span class="ml-2 text-base">Move to</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <Starred />
                  <span class="ml-2 text-base">Starred</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <Archive />
                  <span class="ml-2 text-base">Archive</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <Duplicate />
                  <span class="ml-2 text-base">Duplicate</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <Export />
                  <span class="ml-2 text-base">Export project as</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <Cancel />
                  <span class="ml-2 text-base text-red-500">Leave Project</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div v-if="scope.row.category === 'folder'" class="flex items-center gap-3">
          <svg class="text-xl" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em"
            width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
            </path>
            <path
              d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z">
            </path>
          </svg>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <div class="three-dots cursor-pointer text-gray-400">
                <svg class="text-xl" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
              </div>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="">
                  <IconTickComponent />
                  <span class="ml-2 text-base">Select</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <MoveTo />
                  <span class="ml-2 text-base">Move to</span>
                </el-dropdown-item>
                <el-dropdown-item @click="">
                  <Cancel />
                  <span class="ml-2 text-base text-red-500">Delete Folder</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script lang="ts" setup>
import { Share } from "@element-plus/icons-vue"
import IconTick from '~/assets/images/icon-tick.svg'
import IconScreen from '~/assets/images/icon-screen.svg'
import type { IProject } from '~/types'
import moment from 'moment'
import IconTickComponent from '~/components/common/icon/IconTick.vue'
import MoveTo from '~/components/common/icon/MoveTo.vue'
import Starred from '~/components/common/icon/Starred.vue'
import Archive from '~/components/common/icon/Archive.vue'
import Duplicate from '~/components/common/icon/Duplicate.vue'
import Export from '~/components/common/icon/Export.vue'
import Cancel from '~/components/common/icon/Cancel.vue'
import NoImage from '~/assets/images/no-image.jpg'
import FolderImage from '~/assets/images/folder.svg'

interface Props {
  projects: IProject[]
}

const props = defineProps<Props>()

const folderStore = useFolderStore()

const folders = computed(() => {
  return folderStore.getFolders
})

const mergeData = computed(() => {
  const foldersData = folders.value.map((folder) => {
    folder.category = 'folder';
    return folder;
  });
  props.projects.map((project) => {
    project.category = 'project';
    return project;
  });

  return [...foldersData, ...props.projects]
})

const gotoDetail = (id: number) => {
  navigateTo(`/projects/${id}`)
}

const gotoDetailFolder = (id: number) => {
  navigateTo(`/folders/${id}`)
}
</script>

<style lang="scss">
.project-title .cell {
  width: 30% !important;
}
</style>
