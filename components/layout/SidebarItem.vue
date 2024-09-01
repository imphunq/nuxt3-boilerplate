<template>
  <div>
    <div
      :id="`dropdown-click-${keyItem}-id`"
      class="sidebar-item flex items-center dark:text-white group cursor-pointer"
      :class="[isCollapse ? 'py-[7px] pl-[25px]' : 'ml-[37px]']"
      :aria-controls="`dropdown-click-${keyItem}`"
      :data-collapse-toggle="`dropdown-click-${keyItem}`"
      @click="hasChildren ? '' : gotoRoute(item.to)"
    >
      <img
        v-if="item.icon"
        :src="item.icon"
        alt="icon"
      >
      <div class="ms-3 flex-1 text-left rtl:text-right whitespace-nowrap select-none">
        <span
          v-if="!isCollapse"
          :class="{ active: isActive(item.to) }"
        >{{ item.title }}</span>
      </div>

      <template v-if="hasChildren">
        <svg
          class="arrow-icon mr-4"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          fill="none"
          d="M0 0h24v24H0V0z"
        /><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
      </template>
    </div>

    <div
      :id="`dropdown-click-${keyItem}`"
      class="hidden"
    >
      <div :class="[hasChildren ? 'py-2 space-y-2 ml-8' : '']">
        <template v-if="hasChildren && !isCollapse">
          <SidebarItem
            v-for="(child, index) in item.children"
            :key="`${index}-${child.to}`"
            :item="child"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { initDropdowns } from 'flowbite'

interface MenuItem {
  to: string
  icon: string
  title: string
  children?: MenuItem[]
}

interface Props {
  item: MenuItem
}

// onMounted(() => {
  useFlowbite(() => {
    initDropdowns()
  })
// })

const globalStore = useGlobalStore()
const route = useRoute()

const props = defineProps<Props>()

const isCollapse = computed(() => {
  return globalStore.getIsCollapse
})

const hasChildren = computed(() => {
  return props.item.children && props.item.children.length > 0
})

const keyItem = computed(() => {
  return props.item.to.split('/')[1]
})

const gotoRoute = (route: string) => {
  navigateTo(route)
}

const isActive = (path: string) => {
  return route.path === path
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/_colors.scss';

.sidebar-item {
  span {
    color: $color-gray-16;
    font: normal normal normal 15px/42px Nunito;
  }

  svg.arrow-icon {
    color: $color-gray-16;
    transition: transform 0.3s;
  }

  span:hover {
    color: $color-blue;
  }

  span.active {
    color: $color-blue;
  }
}
</style>
