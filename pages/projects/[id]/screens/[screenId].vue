<template>
  <div>
    <HeaderPageDetail
      :project="project"
      :screen="currentScreen"
      @scale="handleScale"
      @changeMode="handleChangeMode"
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
          {{ currentScreen?.number_order}} of {{ screens.length }}
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
          :src="currentScreen?.screen_url"
          class="w-full"
          :class="{ 'cursor-crosshair': canCreateComment }"
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
              :style="{ top: `${comment.percent_y}%`, left: `${comment.percent_x}%` }"
              class="absolute cursor-pointer"
              ref="popoverRefs"
              @mousedown="startDrag(index, $event)"
            />
          </template>
          <template #default>
            <ReplyCommentPopover
              :comment-prop="comment"
              @close="handleCloseReplyComment(index)"
              @delete="handleDeleteComment"
              @edit="handleEditComment"
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
import HeaderPageDetail from '~/components/screen/HeaderPageDetail.vue'
import CommentPopover from '~/components/screen/CommentPopover.vue'
import CommentIcon from '~/components/screen/CommentIcon.vue'
import ReplyCommentPopover from '~/components/screen/ReplyCommentPopover.vue'
import { createComment, updateCommentInProject } from '~/api/comment'
import type { IScreen, IComment } from '~/types'
import { useDraggable } from '@vueuse/core'

definePageMeta({
  layout: 'blank',
})

const route = useRoute()
const router = useRouter()
const screenStore = useScreenStore()
const authStore = useAuthStore()

const popoverRefs = ref<HTMLElement[]>([])

const screenId = parseInt(route.params.screenId as string)
const projectId = route.params.id as string
const canCreateComment = ref<boolean>(false)

const draggableRef = ref<HTMLElement | null>(null)

if(screenStore.previewScreens.length === 0) {
  useAsyncData('preview-screens', async () => {
    await screenStore.fetchPreviewScreens(projectId)
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

const user = computed(() => {
  return authStore.getCurrentUser
})

const screenImageRef = ref<HTMLImageElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const commentPopoverRef = ref<InstanceType<typeof CommentPopover> | null>(null)
const defaultWidth = ref<string>('100%')
const popoverX = ref<number>(0)
const popoverY = ref<number>(0)
const originalWidth = ref<number>(0)
const originalHeight = ref<number>(0);
const comments = ref<IComment[]>([])
const visiblePopovers = reactive(Array(comments.value.length).fill(false))

const handleScale = (scale: number) => {
  defaultWidth.value = `${scale}%`

  localStorage.setItem('zoom', scale.toString())
}

const showCommentPopup = async (event: MouseEvent) => {
  if (!canCreateComment.value) return
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

  if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
    // Handle arrow right key
    screen = nextScreen(currentScreen.value!.orders)


  }
  else if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
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
    percent_x: xPercent,
    percent_y: yPercent,
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

  const { error } = await createComment(projectId, {
    comment: comment.value,
    position_x: popoverX.value,
    position_y: popoverY.value,
    screens_id: screenId,
    parent_id: 0,
    commenttype_id: user.value!.id,
    percent_x: xPercent,
    percent_y: yPercent,
  })

  if (error.value) {
    ElMessage({
      message: 'Something went wrong, please try again',
      type: 'error',
    })
  } else {
    ElMessage({
      message: 'Comment has been added successfully',
      type: 'success',
    })

    await refreshNuxtData('preview-screens')

    onImageLoad()
  }
}

const handleDeleteComment = (id: number) => {
  comments.value = comments.value.filter((comment: IComment) => comment.id !== id)

  refreshNuxtData('preview-screens')
}

const handleCloseReplyComment = (index: number) => {
  visiblePopovers[index] = false
}

const onImageLoad = () => {
  if (screenImageRef.value) {
    originalWidth.value = screenImageRef.value.clientWidth
    originalHeight.value = screenImageRef.value.clientHeight

    const screenComments = currentScreen.value?.comments || []
    const imageRect = containerRef.value!.getBoundingClientRect();

    comments.value = screenComments.map((comment: IComment) => {
      const xPercent = (comment.position_x / originalWidth.value) * 100;
      const yPercent = (comment.position_y / originalHeight.value) * 100;

      return {
        ...comment,
        displayX: xPercent,
        displayY: yPercent,
      }
    })

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

const startDrag = (index: number, event: MouseEvent) => {
  handleCloseReplyComment(index)

  const item = comments.value[index];

  // Start X/Y positions
  const { percent_x: startX, percent_y: startY } = item;
  const { clientX: startClientX, clientY: startClientY } = event;

  // Get the container size for percentage calculations
  const container = containerRef.value?.getBoundingClientRect();
  if (!container) return;

  const onMouseMove = (moveEvent: MouseEvent) => {
    // Calculate the new positions in percentages
    const deltaX = (moveEvent.clientX - startClientX) / container.width * 100;
    const deltaY = (moveEvent.clientY - startClientY) / container.height * 100;

    // New calculated positions in percentages
    let newPercentX = startX + deltaX;
    let newPercentY = startY + deltaY;

    // Ensure the comment stays within container bounds
    newPercentX = Math.max(0, Math.min(newPercentX, 100)); // Keep between 0 and 100
    newPercentY = Math.max(0, Math.min(newPercentY, 100)); // Keep between 0 and 100

    item.percent_x = newPercentX;
    item.percent_y = newPercentY;
  };

  const onMouseUp = async () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);

    handleCloseReplyComment(index)

    await updateCommentInProject(projectId, item.id, {
      percent_x: item.percent_x,
      percent_y: item.percent_y,
    });
  };

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);

  // Prevent text selection while dragging
  event.preventDefault();
};

const handleEditComment = async (comment: string, commentId: number) => {
  await updateCommentInProject(projectId, commentId, {
    comment
  });

  await refreshNuxtData('preview-screens')

  onImageLoad()
};

const handleChangeMode = (mode: string) => {
  if (mode === 'comment') {
    canCreateComment.value = true
  } else {
    canCreateComment.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)

  // const zoomValue = localStorage.getItem('zoom') ?? '100'

  // defaultWidth.value = `${zoomValue}%`

  setTimeout(() => {


    const zoomValue = localStorage.getItem('zoom') ?? '100'

    defaultWidth.value = `${zoomValue}%`
  }, 100)

  if (draggableRef.value && containerRef.value) {
    useDraggable(draggableRef, {
      handle: draggableRef.value, // The popover can be dragged by itself
    })
  }
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

.camera {
  position: absolute;
  width: 5%;
  height: 5%;
  align-items: center;
  justify-content: center;
  background: darkred;
}
</style>
