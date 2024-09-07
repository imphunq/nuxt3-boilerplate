<template>
  <div>
    <div
      class="sidebar-item flex items-center dark:text-white group cursor-pointer"
      :class="[isCollapse ? 'py-[7px] pl-[25px]' : 'ml-[37px]']"
      :aria-controls="hasChildren ? `dropdown-click-${keyItem}` : undefined"
      :data-collapse-toggle="hasChildren ?  `dropdown-click-${keyItem}` : undefined"
      @click="hasChildren ? '' : gotoRoute(item)"
    >
      <span v-if="item.icon" :class="[{ 'sidebar-item__icon': !item.parentKey, 'active-item': isActive(item.to) && !item.parentKey }]">
        <img
          :src="item.icon"
          alt="icon"
        >
      </span>

      <div class="ms-3 flex-1 text-left rtl:text-right whitespace-nowrap select-none">
        <span
          v-if="!isCollapse"
          class="sidebar-item__title"
          :class="{ active: isActive(item.to)}"
          :data-active="isActive(item.to) ? `dropdown-click-${item?.parentKey}` : undefined"
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
  parentKey?: string
}

interface Props {
  item: MenuItem
}

onMounted(() => {
  useFlowbite(() => {
    initDropdowns()
  })
})

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
  return props.item.to.split('/')[1] ?? route.path.split('/')[1]
})

watch(() => route.path, () => {
  nextTick(() => {
    // remove all active parent class
    const elements = document.querySelectorAll('.active-parent');

    elements.forEach((element) => {
      element.classList.remove('active-parent');
    })

    activeParentItem()
  })
})

const activeParentItem = () => {
  const activeElement = document.querySelector('[data-active]');

  if (activeElement) {
    const activeValue = activeElement.getAttribute('data-active');

    if (activeValue) {
      const dropdownElement = document.getElementById(activeValue);
      const parentElement = document.querySelector(`[data-collapse-toggle="${activeValue}"]`);

      if (dropdownElement) {
        dropdownElement.classList.remove('hidden');
      }

      if (parentElement) {

        // find first div element and add active class
        const firstElementDiv = parentElement.querySelector('div');

        // find first span element and add active class, used for display icon
        const firstElementSpan = parentElement.querySelector('span');

        if (firstElementSpan) {
          firstElementSpan.classList.add('active-item');
        }

        if (firstElementDiv) {
          firstElementDiv.classList.add('active-parent');
        }
      }
    }
  }
}

const gotoRoute = (item: MenuItem) => {
  // remove all active item class
  const activeItems = document.querySelectorAll('.sidebar-item__icon');

  activeItems.forEach((element) => {
    if (route.path) {
      element.classList.remove('active-item');
    }
  })

  navigateTo(item.to)
}

const isActive = (path: string) => {
  return route.path === path
}

onMounted(() => {
  activeParentItem()
})
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

  .active-item  {
    background-color: #5090ff;

    img {
      filter: brightness(170%);
    }
  }

  .active-parent {
    span {
      color: $color-blue;
    }
  }

  // for hover
  &:hover .sidebar-item__icon,
  .sidebar-item__title:hover ~ .sidebar-item__icon {
    background-color: #5090ff;

    img {
      filter: brightness(170%);
    }
  }
}

.sidebar-item__icon {
  background-color: transparent;
  width: 60px;
  height: 42px;
  border-radius: 0 23px 23px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: -40px;
  padding-right: 10px;
}

</style>
