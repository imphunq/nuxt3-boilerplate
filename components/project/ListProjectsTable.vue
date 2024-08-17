<template>
  <el-table
    ref="projectTableRef"
    :data="projects"
    :default-sort="{ prop: 'project_title', order: 'descending' }"
    style="width: 100%"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column prop="project_title" label="Project Name" width="400">
      <template #default="scope">
        <div class="flex items-center cursor-pointer" @click="gotoDetail(scope.row.id)">
          <img :src="scope.row.cover_url_thumb ?? NoImage" class="w-16 md:w-32 max-w-full max-h-full mr-2" alt="Thumb">

          <span class="text-black">{{ scope.row.project_title }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Project Owner" width="200">
      <template #default="scope">
        <span class="flex items-center gap-1 px-6 py-4 text-black dark:text-white">
          <span>{{ scope.row.members[0].name }}</span>
          <img :src="IconTick" alt="">
        </span>
      </template>
    </el-table-column>
    <el-table-column label="People" width="200" />
    <el-table-column label="Screens" width="150">
      <template #default="scope">
        <span class="flex items-center gap-1">
          <span class="text-black">{{ scope.row.screen_count }}</span>
          <img :src="IconScreen" alt="">
        </span>
      </template>
    </el-table-column>
    <el-table-column label="Updated" width="150">
      <template #default="scope">
        <span class="text-black">
          {{ moment(scope.row.updated_at).format('YY/DD/YYYY HH:mm') }}
        </span>
      </template>
    </el-table-column>
    <el-table-column>
      <button type="button"
        class="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="mr-2" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em"
          width="1em" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z">
          </path>
        </svg>
        <span>Share</span>
      </button>
    </el-table-column>
    <el-table-column>
      <template #default="scope">
        <div class="flex items-center gap-3">
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
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
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

interface Props {
  projects: IProject[]
}

const props = defineProps<Props>()

const gotoDetail = (id: number) => {
  navigateTo(`/projects/${id}`)
}
</script>

<style lang="scss" scoped></style>
