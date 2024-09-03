<template>
  <div>
    <div
      class="sidebar-team flex items-center dark:text-white group ml-[37px] cursor-pointer"
      aria-controls="dropdown-team"
      data-collapse-toggle="dropdown-team"
    >
      <img
        :src="TeamIcon"
        alt="icon"
      >
      <span class="ms-3 flex-1 text-left rtl:text-right whitespace-nowrap">
        Teams
      </span>

      <div class="flex items gap-3">
        <button type="button">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          ><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" /></svg>
        </button>
        <button
          class="add-team"
          type="button"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            class="plus text-blue-500"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          ><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" /></svg>
        </button>
        <button
          class="dropdown-team"
          type="button"
        >
          <svg
            class="arrow-icon mr-4"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            fill="none"
            d="M0 0h24v24H0V0z"
          /><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
        </button>
      </div>
    </div>

    <!-- List teams in sidebar -->

    <div
      id="dropdown-team"
      class="hidden py-2 space-y-2 ml-16"
    >
      <div
        v-for="team in teams"
        :key="`team-${team.id}`"
        class="flex items-center justify-between"
        @click="navigateTo(`/teams/${team.id}`)"
      >
        <div class="flex items-center">
          <span class="cursor-pointer">
            {{ team.name }}
          </span>
        </div>

        <div class="flex space-x-2 mr-4">
          <div class="w-[50px] text-xs flex items-center justify-center rounded-3xl text-center border border-solid border-gray-200 bg-gray-100">
            0
          </div>

          <el-dropdown trigger="click">
            <button
              type="button"
              class="mt-1"
            >
              <el-icon><More /></el-icon>
            </button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item><span>Open Team</span></el-dropdown-item>
                <el-dropdown-item><span>View All Projects</span></el-dropdown-item>
                <el-dropdown-item><span>Pin to sidebar</span></el-dropdown-item>
                <el-dropdown-item><span>Add People</span></el-dropdown-item>
                <el-dropdown-item><span>Add New Project</span></el-dropdown-item>
                <el-dropdown-item><span>Hide</span></el-dropdown-item>
                <el-dropdown-item><span class="text-red-500">Leave Team</span></el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { More } from '@element-plus/icons-vue'
import TeamIcon from '~/assets/images/icons/team.png'
import { getTeams } from '~/api/team'
import type { IListTeam } from '~/types'

const teams = ref<IListTeam[]>([])

await useAsyncData('teams', async () => {
  const { data } = await getTeams()

  teams.value = data.value.teams
})
</script>

<style lang="scss" scoped>
@import 'assets/scss/_colors.scss';

.sidebar-team {
  span {
    color: $color-gray-16;
    font: normal normal normal 15px/42px Nunito;
  }

  svg.arrow-icon {
    color: $color-gray-16;
    transition: transform 0.3s;
  }

  span:hover {
    color: $color-blue;
  }
}

#dropdown-team {
  span {
    color: $color-gray-16;
    font: normal normal normal 15px/42px Nunito;
  }

  span:hover {
    color: $color-blue;
  }
}
</style>
