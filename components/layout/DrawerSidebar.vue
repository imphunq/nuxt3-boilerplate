<template>
  <div
    id="drawer-sidebar"
    class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
    tabindex="-1"
    aria-labelledby="drawer-label"
  >
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
    >
      <svg
        class="w-4 h-4 me-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
        />
      </svg>Menu
    </h5>
    <button
      type="button"
      data-drawer-hide="drawer-sidebar"
      aria-controls="drawer-sidebar"
      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg
        class="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span class="sr-only">Close menu</span>
    </button>

    <SidebarItem
      v-for="(item, index) in items"
      :key="`${index}-${item.to}-drawer-sidebar`"
      :item="item"
    />
  </div>
</template>

<script lang="ts" setup>
import { initDrawers } from 'flowbite'
import SidebarItem from './SidebarItem.vue'

import OverviewIcon from '~/assets/images/icons/overview.png'
import ProjectIcon from '~/assets/images/icons/project.png'
import UploadIcon from '~/assets/images/icons/upload.png'
import CommentIcon from '~/assets/images/icons/comment.png'
import StarIcon from '~/assets/images/icons/star.png'
import ShareIcon from '~/assets/images/icons/share.png'
import TaskIcon from '~/assets/images/icons/task.png'
import AnalyticsIcon from '~/assets/images/icons/analytic.png'
import HelpIcon from '~/assets/images/icons/help.png'
import AllProjectIcon from '~/assets/images/icons/all-project.svg'
import RecentAddIcon from '~/assets/images/icons/recent-added.svg'
import StarProjectIcon from '~/assets/images/icons/star-project.svg'
import OnGoingIcon from '~/assets/images/icons/on-going.svg'
import ShareProjectIcon from '~/assets/images/icons/share-project.svg'
import FileManagerIcon from '~/assets/images/icons/file-manager.svg'
import LastUploadIcon from '~/assets/images/icons/last-upload.svg'
import RemoteUploadIcon from '~/assets/images/icons/remote-upload.svg'
import FtpUploadIcon from '~/assets/images/icons/ftp-upload.svg'

onMounted(() => {
  useFlowbite(() => {
    initDrawers()
  })
})

const items = computed(() => {
  return [
    {
      to: '/overview',
      icon: OverviewIcon,
      title: 'Overview',
    },
    {
      to: '',
      icon: ProjectIcon,
      title: 'Projects',
      children: [
        {
          to: '/projects',
          icon: AllProjectIcon,
          title: 'All Projects',
        },
        {
          to: '/projects/recently-added',
          icon: RecentAddIcon,
          title: 'Recently Added',
        },
        {
          to: '/projects/starred',
          icon: StarProjectIcon,
          title: 'Starred Projects',
        },
        {
          to: '/projects/on-going',
          icon: OnGoingIcon,
          title: 'On-going Projects',
        },
        {
          to: '/projects/share',
          icon: ShareProjectIcon,
          title: 'Shares Projects',
        },
        {
          to: '/',
          icon: FileManagerIcon,
          title: 'File Manager',
        },
      ],
    },
    {
      to: '/uploads',
      icon: UploadIcon,
      title: 'Uploads',
      children: [
        {
          to: '/last-upload',
          icon: LastUploadIcon,
          title: 'Last Uploads',
        },
        {
          to: 'remote-upload',
          icon: RemoteUploadIcon,
          title: 'Remote Uploads',
        },
        {
          to: 'ftp-upload',
          icon: FtpUploadIcon,
          title: 'FTP Uploads',
        },
      ],
    },
    {
      to: '/comments',
      icon: CommentIcon,
      title: 'Comments',
    },
    // {
    //   to: '/projects/starred',
    //   icon: StarIcon,
    //   title: 'Starred',
    // },
    {
      to: '/shares',
      icon: ShareIcon,
      title: 'Shares',
    },
    {
      to: '/tasks',
      icon: TaskIcon,
      title: 'Tasks',
    },
    {
      to: '/analytics',
      icon: AnalyticsIcon,
      title: 'Analytics',
    },
    {
      to: '/help',
      icon: HelpIcon,
      title: 'Help',
    },
  ]
})
</script>

<style lang="scss" scoped></style>
