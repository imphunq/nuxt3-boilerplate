<template>
  <div>
    <input
      id="default-range"
      type="range"
      v-model="range"
      :min="1"
      :max="4"
      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      @change="changeSlider"
    >
  </div>
</template>

<script lang="ts" setup>

const emit = defineEmits(['range'])

const range = ref<number>(4)
const baseCols = ref<string>('')

const changeSlider = () => {
  let baseColsNumber;
  switch (range.value) {
    case 4:
      baseColsNumber = 3;
      break;
    case 3:
      baseColsNumber = 4;
      break;
    case 2:
      baseColsNumber = 5;
      break;
    case 1:
      baseColsNumber = 6;
      break;
    default:
      baseColsNumber = 3;
      break;
  }

  baseCols.value = `grid-cols-${baseColsNumber}`;

  const cols2xl = Math.min(baseColsNumber, 4);
  const colsLg = Math.min(baseColsNumber, 3);
  const colsMd = Math.min(baseColsNumber, 2);

  emit('range', `grid ${baseCols.value} 2xl:grid-cols-${cols2xl} lg:grid-cols-${colsLg} md:grid-cols-${colsMd}`);
}
</script>
