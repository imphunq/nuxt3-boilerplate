<template>
  <div>
    <div
      class="sidebar-item flex items-center dark:text-white group ml-[37px] cursor-pointer"
      :aria-controls="`dropdown-example-${keyItem}`"
      :data-collapse-toggle="`dropdown-example-${keyItem}`"
      @click="hasChildren ? '' : gotoRoute(item.to)"
    >
      <img v-if="item.icon" :src="item.icon" alt="icon" />
      <span class="ms-3 flex-1 text-left rtl:text-right whitespace-nowrap">
        {{ item.title }}
      </span>

      <template v-if="hasChildren">
        <svg class="arrow-icon mr-4" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
      </template>
    </div>

    <div v-if="hasChildren" :id="`dropdown-example-${keyItem}`" class="hidden py-2 space-y-2 ml-8">
      <SidebarItem
        v-for="(child, index) in item.children"
        :key="`${index}-${child.to}`"
        :item="child"
      />
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

const props = defineProps<Props>()

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
</style>
