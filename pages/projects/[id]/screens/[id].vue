<template>
  <div>
    <HeaderPageDetail @scale="handleScale" />

    <div
      ref="containerRef"
      class="w-full flex items-center justify-center relative mt-10"
    >
      <img
        ref="screenImageRef"
        src="https://flowbite.com/docs/images/blog/image-2.jpg"
        class="image-scale cursor-crosshair"
        @click="showCommentPopup"
      >

      <CommentPopover
        ref="commentPopoverRef"
        :popover-x="popoverX"
        :popover-y="popoverY"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderPageDetail from '~/components/screen/HeaderPageDetail.vue'
import CommentPopover from '~/components/screen/CommentPopover.vue'

definePageMeta({
  layout: 'blank',
})

const screenImageRef = ref<HTMLImageElement | null>(null)
const containerRef = ref<HTMLImageElement | null>(null)
const commentPopoverRef = ref<InstanceType<typeof CommentPopover> | null>(null)
const defaultWidth = ref<string>('50%')
const popoverX = ref<number>(0)
const popoverY = ref<number>(0)

const handleScale = (scale: number) => {
  defaultWidth.value = `${scale}%`
}

const showCommentPopup = async (event: MouseEvent) => {
  await commentPopoverRef.value?.close()

  if (containerRef.value) {
    const rect = containerRef.value.getBoundingClientRect()
    popoverX.value = event.clientX - rect.left
    popoverY.value = event.clientY - rect.top

    commentPopoverRef.value?.open()
  }
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
