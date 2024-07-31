<template>
  <div>
    <HeaderPageDetail @scale="handleScale" />

    <div class="flex items-center justify-between py-4 px-8">
      <div class="ml-auto">
        <button
          type="button"
          class="focus:outline-none text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 dark:bg-green-600 dark:hover:bg-green-400 dark:focus:ring-green-600"
        >
          Replace Screen
        </button>
      </div>
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <button
          type="button"
          class="text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-400 dark:border-gray-500"
        >
          1 of 5
        </button>
      </div>
    </div>

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
        @submit="handleSubmitComment"
      />

      <CommentIcon
        v-for="comment in comments"
        :key="comment.comment"
        :style="{ top: `${comment.y}px`, left: `${comment.x}px` }"
        class="absolute cursor-pointer"
      />
    </div>

    <div class="w-24 h-24 bg-gray-300 text-white fixed left-0 top-1/2 transform -translate-y-1/2 half-left-circle flex items-center cursor-pointer">
      <el-icon><ArrowLeftBold /></el-icon>
    </div>

    <div class="w-24 h-24 bg-gray-300 text-white fixed right-0 top-1/2 transform -translate-y-1/2 half-right-circle flex items-center justify-end cursor-pointer">
      <el-icon><ArrowRightBold /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderPageDetail from '~/components/screen/HeaderPageDetail.vue'
import CommentPopover from '~/components/screen/CommentPopover.vue'
import CommentIcon from '~/components/screen/CommentIcon.vue'
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'

definePageMeta({
  layout: 'blank',
})

interface IComment {
  comment: string
  x: number
  y: number
}

const screenImageRef = ref<HTMLImageElement | null>(null)
const containerRef = ref<HTMLImageElement | null>(null)
const commentPopoverRef = ref<InstanceType<typeof CommentPopover> | null>(null)
const defaultWidth = ref<string>('50%')
const popoverX = ref<number>(0)
const popoverY = ref<number>(0)
const comments = ref<IComment[]>([])

const handleScale = (scale: number) => {
  defaultWidth.value = `${scale}%`
}

const showCommentPopup = async (event: MouseEvent) => {
  await commentPopoverRef.value?.close()

  setTimeout(() => {
    if (containerRef.value) {
      const rect = containerRef.value.getBoundingClientRect()
      popoverX.value = event.clientX - rect.left
      popoverY.value = event.clientY - rect.top

      commentPopoverRef.value?.open()
    }
  }, 0);
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowRight') {
    // Handle arrow right key
    console.log('right')
  } else if (event.key === 'ArrowLeft') {
    // Handle arrow left key
    console.log('left')
  }
}

const handleSubmitComment = (comment: string) => {
  comments.value.push({
    comment,
    x: popoverX.value,
    y: popoverY.value,
  })
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
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

.half-left-circle {
  clip-path: circle(50% at 0 50%);
}

.half-right-circle {
  clip-path: circle(50% at 100% 50%);
}
</style>
