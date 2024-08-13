<template>
  <div>
    <OverviewTeam />

    <RecentUpdatedProject class="mt-6" />

    <div class="w-full flex items-center mt-6 gap-5">
      <div class="w-2/5">
        <ListTeamMember />
      </div>
      <div class="w-3/5">
        <ListTask />
      </div>
    </div>

    <div class="w-full flex items-center mt-6 gap-5">
      <div class="w-3/5">
      </div>
      <div class="w-2/5">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import OverviewTeam from '~/components/team/OverviewTeam.vue'
import RecentUpdatedProject from '~/components/team/RecentUpdatedProject.vue'
import ListTeamMember from '~/components/team/ListTeamMember.vue'
import ListTask from '~/components/team/ListTask.vue'
</script>

<style lang=""></style>
