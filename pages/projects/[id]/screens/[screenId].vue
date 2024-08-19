<template>
  <div>
    <HeaderPageDetail
      :project="project"
      :screen="currentScreen"
      @scale="handleScale"
    />

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
          {{ currentScreen?.orders}} of {{ screens.length }}
        </button>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <div
        ref="containerRef"
        class="image-scale relative mt-10"
      >
        <img
          ref="screenImageRef"
          :src="currentScreen?.screen_url_thumb"
          class="w-full cursor-crosshair"
          @load="onImageLoad"
          @click="showCommentPopup"
        >

        <CommentPopover
          ref="commentPopoverRef"
          :popover-x="popoverX"
          :popover-y="popoverY"
          @submit="handleSubmitComment"
        />

        <el-popover
          v-for="(comment, index) in comments"
          :key="comment.comment"
          v-model:visible="visiblePopovers[index]"
          placement="bottom-start"
          :width="400"
          :max-width="400"
          trigger="click"
        >
          <template #reference>
            <CommentIcon
              :style="{ top: `${comment.displayY}%`, left: `${comment.displayX}%` }"
              class="absolute cursor-pointer"
            />
          </template>
          <template #default>
            <ReplyCommentPopover @close="handleCloseReplyComment(index)" />
          </template>
        </el-popover>
      </div>
    </div>

    <div
      class="w-24 h-24 bg-gray-300 text-white fixed left-0 top-1/2 transform -translate-y-1/2 half-left-circle flex items-center cursor-pointer"
      @click="handlePreviousScreen"
    >
      <el-icon><ArrowLeftBold /></el-icon>
    </div>

    <div
      class="w-24 h-24 bg-gray-300 text-white fixed right-0 top-1/2 transform -translate-y-1/2 half-right-circle flex items-center justify-end cursor-pointer"
      @click="handleNextScreen"
    >
      <el-icon><ArrowRightBold /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'
import HeaderPageDetail from '~/components/screen/HeaderPageDetail.vue'
import CommentPopover from '~/components/screen/CommentPopover.vue'
import CommentIcon from '~/components/screen/CommentIcon.vue'
import ReplyCommentPopover from '~/components/screen/ReplyCommentPopover.vue'
import type { IScreen } from '~/types'

definePageMeta({
  layout: 'blank',
})

interface IComment {
  comment: string
  x: number
  y: number
  displayX: number
  displayY: number
}

const route = useRoute()
const router = useRouter()
const screenStore = useScreenStore()

const screenId = parseInt(route.params.screenId as string)

if(screenStore.previewScreens.length === 0) {
  useAsyncData('preview-screens', async () => {
    await screenStore.fetchPreviewScreens(route.params.id as string)
  })
}

const screens = computed(() => {
  return screenStore.getPreviewScreens
})

const currentScreen = computed(() => {
  return screens.value.find((screen: IScreen) => screen.id === screenId)
})

const project = computed(() => {
  return screenStore.getCurrentProject
})

const screenImageRef = ref<HTMLImageElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const commentPopoverRef = ref<InstanceType<typeof CommentPopover> | null>(null)
const defaultWidth = ref<string>('50%')
const popoverX = ref<number>(0)
const popoverY = ref<number>(0)
const originalWidth = ref<number>(0)
const originalHeight = ref<number>(0);
const comments = ref<IComment[]>([])
const visiblePopovers = reactive(Array(comments.value.length).fill(false))

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
  }, 0)
}

const handleKeyDown = (event: KeyboardEvent) => {
  let screen: IScreen | undefined

  if (event.key === 'ArrowRight') {
    // Handle arrow right key
    screen = nextScreen(currentScreen.value!.orders)


  }
  else if (event.key === 'ArrowLeft') {
    // Handle arrow left key

    screen = previousScreen(currentScreen.value!.orders)
  }

  router.replace({
    params: { screenId: screen?.id.toString() },
  });
}

const handlePreviousScreen = () => {
  const screen = previousScreen(currentScreen.value!.orders)

  router.replace({
    params: { screenId: screen?.id.toString() },
  });
}

const handleNextScreen = () => {
  const screen = nextScreen(currentScreen.value!.orders)

  router.replace({
    params: { screenId: screen?.id.toString() },
  });
}

const handleSubmitComment = (comment: string) => {
  const imageRect = containerRef.value!.getBoundingClientRect();
  const xPercent = (popoverX.value / imageRect.width) * 100;
  const yPercent = (popoverY.value / imageRect.height) * 100;

  comments.value.push({
    comment,
    x: popoverX.value,
    y: popoverY.value,
    displayX: xPercent,
    displayY: yPercent,
  })

  visiblePopovers.push(false)
}

const handleCloseReplyComment = (index: number) => {
  visiblePopovers[index] = false
}

const onImageLoad = () => {
  if (screenImageRef.value) {
    originalWidth.value = screenImageRef.value.naturalWidth
    originalHeight.value = screenImageRef.value.naturalHeight

    console.log('Original width:', originalWidth.value)
    console.log('Original height:', originalHeight.value)
  }
}

const nextScreen = (currentOrder: number) => {
  return screens.value.find((screen: IScreen) => screen.orders > currentOrder )
}

const previousScreen = (currentOrder: number) => {
  return screens.value.slice().reverse().find((screen: IScreen) => screen.orders < currentOrder )
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
