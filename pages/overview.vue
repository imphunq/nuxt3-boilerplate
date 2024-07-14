<template>
  <div>
    <HeaderPage />

    <RecentProjects />

    <div class="flex mt-5 w-full gap-8">
      <div class="flex flex-col flex-1 gap-5 w-2/3">
        <OngoingProjects />

        <CompletedProject />
      </div>

      <div class="flex flex-col flex-1 gap-5 w-1/3">
        <ListComments />

        <UserActivity />
      </div>
    </div>

    <div class="flex items-center mt-5 gap-5">
      <ListTeam />
    </div>

    <div class="guide mt-5">
      <GuideComponent />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderPage from '~/components/overview/HeaderPage.vue'
import RecentProjects from '~/components/overview/RecentProjects.vue'
import OngoingProjects from '~/components/overview/OngoingProjects.vue'
import CompletedProject from '~/components/overview/CompletedProject.vue'
import ListComments from '~/components/overview/ListComments.vue'
import UserActivity from '~/components/overview/UserActivity.vue'
import ListTeam from '~/components/overview/ListTeam.vue'
import GuideComponent from '~/components/overview/GuideComponent.vue'

const globalStore = useGlobalStore()

onMounted(() => {
  globalStore.setBreadcrumbs([
    { name: 'Overview', href: '/' },
  ])
})
</script>
