<template>
  <div>
    <HeaderPageDetail @scale="handleScale" />

    <div class="w-full flex items-center justify-center mt-10">
      <img src="https://flowbite.com/docs/images/blog/image-2.jpg" class="image-scale">
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderPageDetail from '~/components/screen/HeaderPageDetail.vue'

definePageMeta({
  layout: 'blank',
})

const defaultWidth = ref<string>('50%')

const handleScale = (scale: number) => {
  defaultWidth.value = `${scale}%`
}
</script>

<style lang="scss" scoped>
.image-scale {
  width: v-bind(defaultWidth);
  height: auto;
  max-width: 100%;
  max-height: 100%;
  box-shadow: 0 0 1.25rem 0 rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
}
</style>
