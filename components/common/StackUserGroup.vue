<template>
  <div
    class="flex rtl:space-x-reverse"
    :class="[withoutSpace ? 'gap-1' : '-space-x-2']"
  >
    <img
      class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
      :class="[size === 'medium' ? 'w-6 h-6' : 'w-8 h-8']"
      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      alt=""
    >
    <img
      class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
      :class="[size === 'medium' ? 'w-6 h-6' : 'w-8 h-8']"
      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      alt=""
    >
    <img
      class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
      :class="[size === 'medium' ? 'w-6 h-6' : 'w-8 h-8']"
      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      alt=""
    >
    <a
      class="flex items-center justify-center text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
      :class="[size === 'medium' ? 'w-6 h-6' : 'w-8 h-8']"
      href="#"
    >+99</a>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  size: 'medium' | 'large'
  withoutSpace: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  withoutSpace: false,
})
</script>
