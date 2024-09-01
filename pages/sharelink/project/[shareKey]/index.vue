<template>
  <div class="screen-preview flex flex-col gap-5 items-center h-screen overflow-hidden">
    <img
      :src="Logo"
      alt=""
    >

    <p class="text-[16px]">
      Desktop / Web Prototype
    </p>

    <p class="w-full text-[64px] text-center truncate ...">
      {{ data.project_title }}
    </p>

    <div class="screen-preview__count flex items-center gap-3">
      <img
        class="w-5 h-5"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAABHNCSVQICAgIfAhkiAAAAIVJREFUKFNjnL987QVGBgZ9BjLA////AxkXLF/7PyEyGGgGaQBocQNIx6gBo2EATgcUp0Rs6Q+cyv4zOCRGBTuA5PGlVqxJmGwD5i9bM4GREZSxGBWALhBgYPx/AeJCRqBL/h8Asf7/Yy5MjA6EigNlkL0AtDkByFfAn62YFiRGBj6AqQEA2AVpnXScLSkAAAAASUVORK5CYII="
        alt=""
      >
      <span class="text-gray-500">{{ data.screens?.length }} screen</span>
    </div>

    <el-button
      type="primary"
      round
      size="large"
      @click="viewScreens"
    >
      View Screen
    </el-button>

    <div class="screen-preview__image flex items-center justify-center relative">
      <div class="view-light" />
      <div class="view-img-inner" />
      <div class="view-thumb absolute" :style="{ backgroundImage: `url(${thumb})` }" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import _get from 'lodash/get'
import { viewShareKeyProject } from '~/api/share'
import type { IProject } from '~/types'
import Logo from '~/assets/images/logo.svg'

definePageMeta({
  layout: 'blank',
})

const route = useRoute()
const router = useRouter()

const shareKey = route.params.shareKey as string

const data = ref<IProject>({} as IProject)
const thumb = ref<string>('')

const { data: response } = await useAsyncData('view-share-key-project', async () => {
  return await viewShareKeyProject(shareKey)
})

data.value = _get(response, 'value.data', {}) as IProject
thumb.value = data.value.cover_url_thumb

const viewScreens = () => {
  const screenId = _get(data.value.screens, '[0].id', '')
  const screenName = _get(data.value.screens, '[0].name', '')

  router.push({
    name: 'sharelink-project-shareKey-screenName-screenId',
    params: {
      shareKey,
      screenName,
      screenId,
    },
  })
}
</script>

  <style lang="scss" scoped>
  .screen-preview {
    padding: max(50px, 4vw) 10% 0 10%;

    &__image {
      width: 100%;
      position: relative;
    }
  }

  .view-light {
    height: 120%;
    background-color: #f1f4f8;
    z-index: -1;
    position: absolute;
    bottom: -40%;
    border-radius: max(10px, 3vw);
    width: 100%;
  }

  .view-img-inner {
    content: url('http://localhost:3005/static/media/macbook%20black.9dc8e00b6c592dc7a61a.png');
    width: 58.9%;
  }

  .view-thumb {
    position: absolute;
    width: 47%;
    height: 85%;
    margin-bottom: 2%;
    border-radius: 10px;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }

  @media screen and (max-width: 1024px) {
    .view-light {
      height: 130% !important;
      border-radius: unset;
      bottom: -50%;
    }
  }
  </style>
