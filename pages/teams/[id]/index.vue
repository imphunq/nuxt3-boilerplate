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
        <ListComment />
      </div>
      <div class="w-2/5">
        <TeamActivityChart />
      </div>
    </div>

    <div class="mt-6">
      <ListUploadFile />
    </div>
  </div>
</template>

<script lang="ts" setup>
import OverviewTeam from '~/components/team/OverviewTeam.vue'
import RecentUpdatedProject from '~/components/team/RecentUpdatedProject.vue'
import ListTeamMember from '~/components/team/ListTeamMember.vue'
import ListTask from '~/components/team/ListTask.vue'
import ListComment from '~/components/team/ListComment.vue'
import TeamActivityChart from '~/components/team/TeamActivityChart.vue'
import ListUploadFile from '~/components/team/ListUploadFile.vue'
</script>

<style lang=""></style>
