<template>
  <div class="w-full h-full">
    <div class="flex items-center justify-center">
      <div
        ref="containerRef"
        class="w-full h-full relative"
      >
        <img
          ref="screenImageRef"
          :src="currentScreen?.screen_url"
          class="w-full"
          :class="{ 'cursor-crosshair': isLogin }"
          @load="onImageLoad"
          @click="isLogin ? showCommentPopup : ''"
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
            <ReplyCommentPopover
              :comment-prop="comment"
              @close="handleCloseReplyComment(index)"
            />
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
import CommentPopover from '~/components/screen/CommentPopover.vue'
import CommentIcon from '~/components/screen/CommentIcon.vue'
import ReplyCommentPopover from '~/components/screen/ReplyCommentPopover.vue'
import { viewShareKeyPage } from '~/api/share'
import type { IScreen, IComment } from '~/types'
import { createComment } from '~/api/comment'
import _get from 'lodash/get'

definePageMeta({
  layout: 'blank',
})

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const shareKey = route.params.shareKey as string
const screenId = parseInt(route.params.screenId as string)

const screens = ref<IScreen[]>([])
const screenImageRef = ref<HTMLImageElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const commentPopoverRef = ref<InstanceType<typeof CommentPopover> | null>(null)
const popoverX = ref<number>(0)
const popoverY = ref<number>(0)
const originalWidth = ref<number>(0)
const originalHeight = ref<number>(0);
const comments = ref<IComment[]>([])
const visiblePopovers = reactive(Array(comments.value.length).fill(false))

const { data: response } = await useAsyncData('view-share-key', async () => {
  return await viewShareKeyPage(shareKey)
})

screens.value = _get(response, 'value.data.screens.data', [])

const isLogin = computed(() => {
  return authStore.isLoggedIn
})

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

const nextScreen = (currentOrder: number) => {
  return screens.value.find((screen: IScreen) => screen.orders > currentOrder )
}

const previousScreen = (currentOrder: number) => {
  return screens.value.slice().reverse().find((screen: IScreen) => screen.orders < currentOrder )
}

const currentScreen = computed(() => {
  return screens.value.find((screen: IScreen) => screen.id === screenId)
})

const handleKeyDown = (event: KeyboardEvent) => {
  let screen: IScreen | undefined

  if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
    // Handle arrow right key
    screen = nextScreen(currentScreen.value!.orders)


  }
  else if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
    // Handle arrow left key

    screen = previousScreen(currentScreen.value!.orders)
  }

  router.replace({
    params: { screenId: screen?.id.toString(), screenName: screen?.name },
  });
}

const handlePreviousScreen = () => {
  const screen = previousScreen(currentScreen.value!.orders)

  router.replace({
    params: { screenId: screen?.id.toString(), screenName: screen?.name },
  });
}

const handleNextScreen = () => {
  const screen = nextScreen(currentScreen.value!.orders)

  router.replace({
    params: { screenId: screen?.id.toString(), screenName: screen?.name },
  });
}

const handleSubmitComment = async (comment: any) => {
  const imageRect = containerRef.value!.getBoundingClientRect();
  const xPercent = (popoverX.value / imageRect.width) * 100;
  const yPercent = (popoverY.value / imageRect.height) * 100;

  const data = {
    comment,
    position_x: popoverX.value,
    position_y: popoverY.value,
    displayX: xPercent,
    displayY: yPercent,
    id: 0,
    parent_id: 0,
    mentions: null,
    resolved: 0,
    user_id: 0,
    screens_id: 0,
    number: 0,
    commenttype_id: 0,
    comment_start: null,
    comment_end: null,
    created_at: '',
    updated_at: '',
    deleted_at: null
  }

  comments.value.push(data)

  visiblePopovers.push(false)

  // const { error } = await createComment(projectId, {
  //   comment: comment.value,
  //   position_x: popoverX.value,
  //   position_y: popoverY.value,
  //   screens_id: screenId,
  //   parent_id: 0,
  //   commenttype_id: user.value!.id,
  // })

  // if (error.value) {
  //   ElMessage({
  //     message: 'Something went wrong, please try again',
  //     type: 'error',
  //   })
  // } else {
  //   ElMessage({
  //     message: 'Comment has been added successfully',
  //     type: 'success',
  //   })

  //   refreshNuxtData('preview-screens')
  // }
}

const handleCloseReplyComment = (index: number) => {
  visiblePopovers[index] = false
}

const onImageLoad = () => {
  if (screenImageRef.value) {
    originalWidth.value = screenImageRef.value.naturalWidth
    originalHeight.value = screenImageRef.value.naturalHeight

  //   const screenComments = currentScreen.value?.comments || []
  //   const imageRect = containerRef.value!.getBoundingClientRect();

  // comments.value = screenComments.map((comment: IComment) => {
  //   const xPercent = (comment.position_x / imageRect.width) * 100;
  //   const yPercent = (comment.position_y / imageRect.height) * 100;

  //   return {
  //     ...comment,
  //     displayX: xPercent,
  //     displayY: yPercent,
  //   }
  // })

    console.log('Original width:', originalWidth.value)
    console.log('Original height:', originalHeight.value)
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style lang="scss" scoped>
.half-left-circle {
  clip-path: circle(50% at 0 50%);
}

.half-right-circle {
  clip-path: circle(50% at 100% 50%);
}
</style>
