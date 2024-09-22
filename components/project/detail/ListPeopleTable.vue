<template>
  <el-table :data="members" style="width: 100%">
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="email" label="Email">
      <template #default="{ row }">
        <span>@{{ row.email }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="role" label="Role">
      <template #default="{ row }">
        <span v-if="row.project_id === id" class="flex items-center gap-1">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABHNCSVQICAgIfAhkiAAAAPZJREFUGFdtUMtRAlEQ7HmlZ7FK9ipGIJvBagRmIGawRuAYgWQARiAkAJuBhrBnsEo8S+3Y8+Dpo3QuM9Xd0/MRZFHpaijAhFBPEB4XejbNeXLAXvQikEFOGrChgE39seNRfK3rluk8F+Z1h6OLRk9bcdcAef0jNHzS6mSP37u7XOnqjeMvI5gEzJ1YxbE1uVun3F3SCgZrDcelYDtjXQeEIbv92BgdrKT4ffQL2nShxd0h5gPteanFaHfgw3qT9uMHGoLV4YFWNlpw3d03aqan/77B5vlS+zc/r/Oi0o9BwNbB2OSjKRy7YzKJznl4E/DVy0WJ/wbrO1+1Jmt1OAAAAABJRU5ErkJggg=="
            alt="">
          <span class="text-blue-500"> Project Owner </span>
        </span>
        <span v-else>{{ row.role }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import type { IMemberProject } from '~/types'

interface Props {
  members: IMemberProject[]
}

const props = defineProps<Props>()

const route = useRoute()

const id = parseInt(route.params.id as string)
</script>

<style lang="scss" scoped></style>
