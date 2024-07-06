<template>
  <aside id="logo-sidebar"
    class="fixed left-0 z-40 border-r border-solid w-80 h-screen transition-transform -translate-x-full bg-white border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar">
    <div class="h-full flex flex-col pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <!-- <div class="flex justify-end">
        <button type="button" class="bg-gray-200">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 16-4-4 4-4m-6 8-4-4 4-4"/>
          </svg>
        </button>
      </div> -->

      <div class="space-y-2 font-medium pb-2 border-b border-solid border-gray-200">
        <SidebarItem
          v-for="(item, index) in items"
          :key="`${index}-${item.to}`"
          :item="item"
        />
      </div>

      <div class="pt-2">
        <SidebarTeam />
      </div>

      <div class="my-20">
        <SidebarFooter />
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import SidebarItem from './SidebarItem.vue'
import SidebarTeam from './SidebarTeam.vue'
import SidebarFooter from './SidebarFooter.vue'
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

const items = computed(() => {
  return [
    {
      to: '/',
      icon: OverviewIcon,
      title: 'Overview',
    },
    {
      to: '/projects',
      icon: ProjectIcon,
      title: 'Projects',
      children: [
        {
          to: '/projects',
          icon: AllProjectIcon,
          title: 'All Projects',
        },
        {
          to: '/',
          icon: RecentAddIcon,
          title: 'Recently Added',
        },
        {
          to: '/',
          icon: StarProjectIcon,
          title: 'Starred Projects',
        },
        {
          to: '/',
          icon: OnGoingIcon,
          title: 'On-going Projects',
        },
        {
          to: '/',
          icon: ShareProjectIcon,
          title: 'Shares Projects',
        },
        {
          to: '/',
          icon: FileManagerIcon,
          title: 'File Manager',
        },
      ]
    },
    {
      to: '/uploads',
      icon: UploadIcon,
      title: 'Uploads',
      children: [
        {
          to: '/uploads',
          icon: LastUploadIcon,
          title: 'Last Uploads',
        },
        {
          to: '/',
          icon: RemoteUploadIcon,
          title: 'Remote Uploads',
        },
        {
          to: '/uploads/3',
          icon: FtpUploadIcon,
          title: 'FTP Uploads',
        },
      ]
    },
    {
      to: '/comments',
      icon: CommentIcon,
      title: 'Comments',
    },
    {
      to: '/starred',
      icon: StarIcon,
      title: 'Starred',
    },
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
    }
  ]
})
</script>

<style lang="scss" scoped></style>
