<template>
  <div>
    <div
      :id="`dropdown-popover-${keyItem}-right-id`"
      class="sidebar-item flex items-center dark:text-white group cursor-pointer py-[7px] pl-[25px]"
      :data-popover-target="`dropdown-popover-${keyItem}-right`"
      data-popover-placement="right"
      data-popover-trigger="click"
      @click="hasChildren ? '' : gotoRoute(item.to)"
    >
      <img
        v-if="item.icon"
        :src="item.icon"
        alt="icon"
      />
    </div>

    <div data-popover :id="`dropdown-popover-${keyItem}-right`" role="tooltip" class="shadow-md absolute z-50 invisible inline-block w-64 text-sm text-gray-500 transition-opacity bg-white border border-gray-200 rounded-lg opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
      <template v-if="hasChildren">
        <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li
            v-for="(child, index) in item.children"
            :key="`${index}-${child.to}`"
            class="flex items-center gap-x-5 w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <img
              v-if="child.icon"
              :src="child.icon"
              alt="icon"
            />
            <span class="cursor-pointer hover:text-blue-500" @click="gotoRoute(child.to)">{{ child.title }}</span>
          </li>
        </ul>
        <div class="arrow-icon" data-popper-arrow></div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface MenuItem {
  to: string
  icon: string
  title: string,
  children?: MenuItem[]
}

interface Props {
  item: MenuItem
}

const globalStore = useGlobalStore()

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
}


#dropdown-popover-uploads-right {
  inset: 55px auto auto 0px !important;

  .arrow-icon {
    top: -40px !important;
  }
}
</style>
