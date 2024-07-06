<template>
  <div>
    <div
      class="sidebar-team flex items-center dark:text-white group ml-[37px] cursor-pointer"
      aria-controls="dropdown-team"
      data-collapse-toggle="dropdown-team"
    >
      <img :src="TeamIcon" alt="icon" />
      <span class="ms-3 flex-1 text-left rtl:text-right whitespace-nowrap">
        Teams
      </span>

      <div class="flex items gap-3">
        <button type="button">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
        </button>
        <button class="add-team" type="button">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="plus text-blue-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path></svg>
        </button>
        <button class="dropdown-team" type="button">
          <svg class="arrow-icon mr-4" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
        </button>
      </div>
    </div>

    <!-- List teams in sidebar -->

    <div id="dropdown-team" class="hidden py-2 space-y-2 ml-16">
      <div
        v-for="team in teams"
        :key="`team-${team.id}`"
        class="flex items-center justify-between"
      >
        <div class="flex items-center">
          <span class="cursor-pointer">
            {{ team.name }}
          </span>
        </div>

        <div class="flex space-x-2 mr-4">
          <div class="w-[50px] text-xs flex items-center justify-center rounded-3xl text-center border border-solid border-gray-200 bg-gray-100">
              {{ team.project_count ?? team.member_count }}
          </div>

          <button type="button">
            <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TeamIcon from '~/assets/images/icons/team.png'

interface Team {
  id: number
  name: string
  project_count?: number
  member_count?: number
}

const teams = ref<Team[]>([
  {
    id: 1,
    name: 'Personal',
    project_count: 5,
  },
  {
    id: 2,
    name: 'Perfect Team',
    member_count: 10,
  },
  {
    id: 3,
    name: 'Graphic Designers',
    member_count: 3,
  }
])
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
