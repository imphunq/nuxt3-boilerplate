<template>
  <div class="screen-preview flex flex-col gap-5 items-center h-screen overflow-hidden">
    <img :src="Logo" alt="">

    <p class="text-[16px]">Desktop / Web Prototype</p>

    <p class="w-full text-[64px] text-center truncate ...">
      {{ data[0].name }}
    </p>

    <div class="screen-preview__count flex items-center gap-3">
      <img class="w-5 h-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAABHNCSVQICAgIfAhkiAAAAIVJREFUKFNjnL987QVGBgZ9BjLA////AxkXLF/7PyEyGGgGaQBocQNIx6gBo2EATgcUp0Rs6Q+cyv4zOCRGBTuA5PGlVqxJmGwD5i9bM4GREZSxGBWALhBgYPx/AeJCRqBL/h8Asf7/Yy5MjA6EigNlkL0AtDkByFfAn62YFiRGBj6AqQEA2AVpnXScLSkAAAAASUVORK5CYII=" alt="">
      <span class="text-gray-500">{{ data.length }} screen</span>
    </div>

    <el-button type="primary" round size="large">View Screen</el-button>

    <div class="screen-preview__image flex items-center justify-center relative">
      <div class="view-light"></div>
      <div class="view-img-inner"></div>
      <div class="view-thumb absolute"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { viewShareKeyPage } from '~/api/share'
import type { IViewSharePage } from '~/types'
import _get from 'lodash/get'
import Logo from '~/assets/images/logo.svg'

definePageMeta({
  layout: 'blank',
})

const route = useRoute()

const shareKey = route.params.shareKey as string

const data = ref<IViewSharePage[]>([])

const { data: response } = await useAsyncData('view-share-key', async () => {
  return await viewShareKeyPage(shareKey)
})

data.value = _get(response, 'value.data.screens.data', [])

console.log(data.value)
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
  background: url('http://localhost:7002/view?id=00320032b521906b32cefa8f145d649b255480f40014&thumb=true');
}

@media screen and (max-width: 1024px) {
  .view-light {
    height: 130% !important;
    border-radius: unset;
    bottom: -50%;
  }
}
</style>
