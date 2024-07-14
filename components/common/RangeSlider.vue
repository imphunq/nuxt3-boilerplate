<template>
  <div>
    <input
      id="default-range"
      type="range"
      :value="value"
      min="1"
      max="6"
      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
    >
  </div>
</template>

<script lang="ts" setup>
const value = ref<number>(5)
</script>
