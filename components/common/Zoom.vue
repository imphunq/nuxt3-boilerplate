<template>
  <div class="flex items-center justify-between gap-2 p-1 text-sm border border-solid border-gray-200 rounded-3xl box-border">
    <el-button
      :icon="Minus"
      circle
      @click="minusScale"
    />
    <span class="text-xs md:text-base">{{ scale }} %</span>
    <el-button
      :icon="Plus"
      circle
      @click="plusScale"
    />
  </div>
</template>

<script lang="ts" setup>
import { Minus, Plus } from '@element-plus/icons-vue'

const emit = defineEmits(['scale'])

const scale = ref<number>(localStorage.getItem('zoom') ? Number(localStorage.getItem('zoom')) : 100)

const plusScale = () => {
  if (scale.value < 100) {
    scale.value += 10
    emit('scale', scale.value)
  }
}

const minusScale = () => {
  if (scale.value > 10) {
    scale.value -= 10
    emit('scale', scale.value)
  }
}
</script>
