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
          class="w-full cursor-crosshair"
        >
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
import { getPreviewScreens } from '~/api/screens'
import type { IScreen } from '~/types'
import _get from 'lodash/get'

definePageMeta({
  layout: 'blank',
})

const route = useRoute()
const router = useRouter()
const id = route.params.id as string

const screens = ref<IScreen[]>([])
const currenScreenId = ref<number>(0)
const screenImageRef = ref<HTMLImageElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)

await useAsyncData('preview-screens', async () => {
  const { data } = await getPreviewScreens(id)

  screens.value = data.value.screens
  currenScreenId.value = data.value.screens[0]?.id
})

const nextScreen = (currentOrder: number) => {
  const currenScreen = screens.value.find((screen: IScreen) => screen.orders > currentOrder )

  currenScreenId.value = _get(currenScreen, 'id', currenScreenId.value)
}

const previousScreen = (currentOrder: number) => {
  const currenScreen = screens.value.slice().reverse().find((screen: IScreen) => screen.orders < currentOrder )

  currenScreenId.value = _get(currenScreen, 'id', currenScreenId.value)
}

const currentScreen = computed(() => {
  return screens.value.find((screen: IScreen) => screen.id === currenScreenId.value)
})

const handleKeyDown = (event: KeyboardEvent) => {
  let screen: IScreen | undefined

  if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
    // Handle arrow right key
    nextScreen(currentScreen.value!.orders)
  }
  else if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
    // Handle arrow left key
    previousScreen(currentScreen.value!.orders)
  }
}

const handlePreviousScreen = () => {
  previousScreen(currentScreen.value!.orders)
}

const handleNextScreen = () => {
  nextScreen(currentScreen.value!.orders)
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
