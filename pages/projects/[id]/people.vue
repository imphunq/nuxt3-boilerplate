<template>
    <div>
    <div class="flex items-center justify-between mt-4">
      <span class="text-xl text-black">People</span>

      <div class="flex items-center gap-4">
        <GroupByDropdown type="project" />
        <SortBy />
        <OptionView />
      </div>
    </div>

    <div class="grid grid-cols-6 gap-5">
      <Profile
        v-for="member in members"
        :key="`${member.id}-members-project`"
        :member="member"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SortBy from '~/components/common/SortByDropdown.vue'
import GroupByDropdown from '~/components/common/GroupByDropdown.vue'
import OptionView from '~/components/common/OptionView.vue'
import Profile from '~/components/common/Profile.vue'
import { getMembers } from '~/api/member-project'
import type { IMemberProject } from '~/types'

const route = useRoute()
const id = route.params.id as string

const members = ref<IMemberProject[]>([])

await useAsyncData('member', async () => {
  const { data } = await getMembers(id)

  members.value = data.value
})
</script>
