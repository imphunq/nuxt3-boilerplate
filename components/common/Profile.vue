<template>
  <div
    class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-md rounded-lg text-gray-900">
    <div class="rounded-t-lg h-20 overflow-hidden bg-gray-200">
    </div>
    <div class="w-16 h-16 relative -mt-12 ml-4 border-4 border-white rounded-full overflow-hidden">
      <img class="object-cover object-center h-32"
        src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
        alt='Woman looking front'>
    </div>
    <div class="ml-5 mt-2 pr-14 mb-6">
      <h2 class="font-semibold">{{ member.name }}</h2>
      <p class="text-gray-500 mt-2 text-xs">@{{ member.email }}</p>
      <p class="mt-4 text-sm text-gray-500">
        <span v-if="member.project_id === id" class="flex items-center gap-1">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABHNCSVQICAgIfAhkiAAAAPZJREFUGFdtUMtRAlEQ7HmlZ7FK9ipGIJvBagRmIGawRuAYgWQARiAkAJuBhrBnsEo8S+3Y8+Dpo3QuM9Xd0/MRZFHpaijAhFBPEB4XejbNeXLAXvQikEFOGrChgE39seNRfK3rluk8F+Z1h6OLRk9bcdcAef0jNHzS6mSP37u7XOnqjeMvI5gEzJ1YxbE1uVun3F3SCgZrDcelYDtjXQeEIbv92BgdrKT4ffQL2nShxd0h5gPteanFaHfgw3qT9uMHGoLV4YFWNlpw3d03aqan/77B5vlS+zc/r/Oi0o9BwNbB2OSjKRy7YzKJznl4E/DVy0WJ/wbrO1+1Jmt1OAAAAABJRU5ErkJggg==" alt="">
          <span class="text-blue-500"> Project Owner </span>
        </span>
        <span v-else>{{ member.role }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IMemberProject } from '~/types'

interface Props {
  member: IMemberProject
}

const props = defineProps<Props>()

const route = useRoute()

const id = parseInt(route.params.id as string)
</script>
