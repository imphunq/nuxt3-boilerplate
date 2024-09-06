<template>
  <div class="overflow-auto w-full">
    <HeaderPage />

    <RecentProjects />

    <div class="flex flex-col xl:flex-row mt-5 w-full gap-8">
      <div class="flex flex-col flex-1 gap-5 w-full xl:w-2/3">
        <OngoingProjects />

        <CompletedProject />
      </div>

      <div class="flex flex-col flex-1 gap-5 w-full xl:w-1/3">
        <ListComments />

        <UserActivity />
      </div>
    </div>


    <div class="flex flex-col xl:flex-row items-stretch justify-between mt-5 gap-8 w-full">
      <div class="w-full xl:w-1/2 flex flex-col">
        <ListTeam class="flex-1" />
      </div>

      <div class="w-full xl:w-1/2 flex flex-col">
        <TaskCompletionRate class="flex-1" />
      </div>
    </div>

    <div class="guide mt-5 mb-8">
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
import TaskCompletionRate from '~/components/overview/TaskCompletionRate.vue'

definePageMeta({
  middleware: 'auth',
})

const globalStore = useGlobalStore()

onMounted(() => {
  globalStore.setBreadcrumbs([
    { name: 'Overview', href: '/' },
  ])
})
</script>
