<template>
  <div class="">
    <HeaderTable
      :title="`On-going Projects`"
      :link-detail="linkDetail"
    />

    <div class="relative border border-solid border-gray-200 border-t-0 h-80 rounded-b-lg">
      <el-scrollbar>
        <el-table
          :data="projects"
          style="width: 100%"
        >
          <el-table-column
            sortable
            label="Name"
            show-overflow-tooltip
            min-width="200"
          >
            <template #default="{ row }">
              <div class="flex items-center gap-2">
                <img
                  :src="GroupProjectIcon"
                  alt=""
                  class="w-8 h-8 hidden md:flex"
                >

                <div class="flex flex-col gap-1">
                  <span class="font-semibold text-black">{{ row.project_title }}</span>

                  <p class="hidden md:flex items-center gap-1 text-sm text-gray-500">
                    <span>@{{ row.projectable.email }}</span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABHNCSVQICAgIfAhkiAAAAPZJREFUGFdtUMtRAlEQ7HmlZ7FK9ipGIJvBagRmIGawRuAYgWQARiAkAJuBhrBnsEo8S+3Y8+Dpo3QuM9Xd0/MRZFHpaijAhFBPEB4XejbNeXLAXvQikEFOGrChgE39seNRfK3rluk8F+Z1h6OLRk9bcdcAef0jNHzS6mSP37u7XOnqjeMvI5gEzJ1YxbE1uVun3F3SCgZrDcelYDtjXQeEIbv92BgdrKT4ffQL2nShxd0h5gPteanFaHfgw3qT9uMHGoLV4YFWNlpw3d03aqan/77B5vlS+zc/r/Oi0o9BwNbB2OSjKRy7YzKJznl4E/DVy0WJ/wbrO1+1Jmt1OAAAAABJRU5ErkJggg==" alt="">
                  </p>
                </div>
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
          >
            <template #default="{ row }">
              <div class="flex justify-center items-center gap-1">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAABHNCSVQICAgIfAhkiAAAAIVJREFUKFNjnL987QVGBgZ9BjLA////AxkXLF/7PyEyGGgGaQBocQNIx6gBo2EATgcUp0Rs6Q+cyv4zOCRGBTuA5PGlVqxJmGwD5i9bM4GREZSxGBWALhBgYPx/AeJCRqBL/h8Asf7/Yy5MjA6EigNlkL0AtDkByFfAn62YFiRGBj6AqQEA2AVpnXScLSkAAAAASUVORK5CYII=" alt="">
                <span>{{ row.screens_count }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="shareLink"
            label="Share Link"
            header-align="center"
            align="center"
          >
            <template #default="{ row }">
              <span class="flex justify-center">
                <svg
                  class="text-xl"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                ><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" /><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" /></svg>
              </span>
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
import { More } from '@element-plus/icons-vue'
import HeaderTable from '~/components/overview/HeaderTable.vue'
import GroupProjectIcon from '~/assets/images/icons/project/group.svg'
import StackUserGroup from '~/components/common/StackUserGroup.vue'
import type { LinkDetail, IProject } from '~/types'
import { getOngoingProjects } from '~/api/projects'

const projects = ref<IProject[]>([])

await useAsyncData('ongoing-projects', async () => {
  const { data } = await getOngoingProjects()

  projects.value = data.value[0]
})

const linkDetail = computed<LinkDetail>(() => {
  return {
    title: 'View On Going Projects',
    href: '/',
  }
})
</script>

<style lang="scss" scoped>
</style>
