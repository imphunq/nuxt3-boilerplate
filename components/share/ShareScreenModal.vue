<template>
  <div>
    <el-dialog
      v-model="dialogFormVisible"
      class="share-dialog"
      width="680"
      :show-close="false"
      :destroy-on-close="true"
      :close-on-click-modal="false"
    >
      <template #header="{ close, titleId, titleClass }">
        <div class=" flex items-center justify-between px-6 pt-6">
          <div class="flex items-center gap-4">
            <span class="text-xl font-semibold">Share Screen</span>
          </div>

          <button
            type="button"
            @click="close"
          >
            <svg
              class="text-xl"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
              />
              <path
                d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
              />
            </svg>
          </button>
        </div>
      </template>

      <el-tabs
        v-model="activeTab"
        class="demo-tabs"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="Share Link"
          name="share_link"
        />
        <el-tab-pane
          label="Embed"
          name="second"
        />
        <el-tab-pane
          label="Publish to Community"
          name="third"
        />
      </el-tabs>

      <div class="mt-2">
        <el-radio-group
          v-model="privacy"
          size="large"
          class="privacy-group"
        >
          <el-radio-button
            v-for="privacy in privacyOptions"
            :key="privacy.value"
            :label="privacy.label"
            :value="privacy.value"
          />
        </el-radio-group>

        <template v-if="privacy === PRIVACY.PUBLIC">
          <img
            :src="ShareIcon"
            alt=""
            class="my-6"
          >

          <div class="text-sm">
            <span>
              Use public share link to share your screen with others. People can view or leave feedback without having an account.
            </span>
            <span class="text-blue-500 cursor-pointer">Update public link settings</span>
          </div>

          <div class="mt-6">
            <div>
              <label
                for="share-input"
                class="flex items-center justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <span>Public Share Link</span>
                <span class="text-blue-500 text-xs cursor-pointer">Create New Share Link</span>
              </label>
              <div class="relative mb-6">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    class="text-xl"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  ><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" /><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" /></svg>
                </div>
                <input
                  ref="shareInputRef"
                  id="share-input"
                  type="text"
                  class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  :value="shareLink"
                >
              </div>
            </div>
          </div>

          <label class="inline-flex items-center cursor-pointer">
            <span class="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">Disable Comments</span>
            <input
              v-model="disableComment"
              type="checkbox"
              :value="disableComment"
              class="sr-only peer"
            >
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          </label>
        </template>

        <template v-else>
          <img
            :src="SharePrivate"
            alt=""
            class="my-6"
          >

          <div class="text-sm">
            <span>
              Use private share link to share your screen with specific people. People you invite in private share are able to view the screen or leave feedback based on the roles you assign. Screens or projects shared via Private Share will only be visible as preview.
            </span>
            <span class="text-blue-500 cursor-pointer">Manage Shared Links</span>
          </div>

          <div class="mt-6">
            <label
              for="share-group-private"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              People to invite
            </label>
            <div class="relative mb-6">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                id="share-group-private"
                type="text"
                class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Add email address or username"
              >
            </div>
          </div>
        </template>
      </div>

      <template #footer>
        <div
          class="dialog-footer"
          :class="[privacy === PRIVACY.PUBLIC ? 'flex flex-wrap items-center gap-2 justify-between' : '']"
        >
          <div v-if="privacy === PRIVACY.PUBLIC">
            <span class="text-xs text-blue-400 cursor-pointer">Manage Shared Links</span>
          </div>
          <div>
            <span
              class="cursor-pointer mr-4 text-gray-500"
              @click="close"
            >Cancel</span>
            <button
              v-if="privacy === PRIVACY.PUBLIC"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              @click="copyToClipboard"
            >
              Copy to Clipboard
            </button>

            <button
              v-else
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add
            </button>
          </div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus'
import { PRIVACY } from '~/constants/project'
import type { ICreateShare, ILabelValue } from '~/types'
import ShareIcon from '~/assets/images/icons/project/share.svg'
import SharePrivate from '~/assets/images/icons/project/share-private.png'
import { shareScreen } from '~/api/share'
import { useClipboard } from '@vueuse/core'

const emit = defineEmits(['normal-upload'])

const route = useRoute()

const dialogFormVisible = ref(false)
const activeTab = ref<string>('share_link')
const privacy = ref<string>(PRIVACY.PUBLIC)
const shareData = ref<ICreateShare>({} as ICreateShare)
const shareLink = ref<string>(window.location.host)
const disableComment = ref<boolean>(false)
const currentProjectId = ref<number>(0)
const currentScreenId = ref<number>(0)
const shareInputRef = ref<HTMLInputElement | null>(null)

const { copy, isSupported } = useClipboard()

const privacyOptions: ILabelValue[] = [
  { label: 'Public Share', value: PRIVACY.PUBLIC },
  { label: 'Private Share', value: PRIVACY.PRIVATE },
]

const open = async (projectId: number, screenId: number) => {
  setTimeout(() => {
    shareInputRef.value?.focus()
  }, 0)

  currentProjectId.value = projectId
  currentScreenId.value = screenId

  if (localStorage.getItem(`screenKey_${projectId}_${screenId}`)) {
    shareLink.value = `${window.location.host}/sharelink/${localStorage.getItem(`screenKey_${projectId}_${screenId}`)}`
    dialogFormVisible.value = true

    return
  }

  const { data, error } = await shareScreen(projectId, {
    screen_ids: screenId,
  })

  if (error.value) {
    ElMessage({
      message: 'Something went wrong, please try again',
      type: 'error',
    })

    return
  }

  shareData.value = data.value.data

  shareLink.value = `${window.location.host}/sharelink/${shareData.value.share_key}`

  localStorage.setItem(`screenKey_${projectId}_${screenId}`, shareData.value.share_key)

  dialogFormVisible.value = true
}

watch(disableComment, async (value) => {
  const { data, error } = await shareScreen(currentProjectId.value, {
    screen_ids: currentScreenId.value,
    show_comments: !disableComment.value,
  })

  if (error.value) {
    return
  }

  shareData.value = data.value.data

  shareLink.value = `${window.location.host}/sharelink/${shareData.value.share_key}`

  localStorage.setItem(`screenKey_${currentProjectId.value}_${currentScreenId.value}`, shareData.value.share_key)
})

const close = () => {
  dialogFormVisible.value = false
}

const copyToClipboard = () => {
  const el = document.getElementById('share-input') as HTMLInputElement

  if (navigator.clipboard) {
    navigator.clipboard.writeText(el.value).then(() => {
      ElMessage({
        message: 'Copy successfully',
        type: 'success',
      })
    })
  } else {
    if (isSupported) {
      console.log('support copied')
      copy(el.value)
    }
    else {
      console.log('not support copied')
      const ele = document.createElement('textarea')
      ele.value = shareLink.value
      ele.setAttribute('readonly', '')
      ele.style.position = 'absolute'
      ele.style.left = '-9999px'
      document.body.appendChild(el)
      const selected =
        document.getSelection()?.rangeCount || 0 > 0
          ? document.getSelection()?.getRangeAt(0)
          : false

          ele.select()

      document.execCommand('copy')

      document.body.removeChild(ele)
    }

    ElMessage({
      message: 'Copy successfully',
      type: 'success',
    })
  }
}

const handleClick = (tab: TabsPaneContext, event: Event) => {
  // activeTab.value = tab
}

defineExpose({
  open,
  close,
})
</script>

<style lang="scss">
.share-dialog {
  padding: 0;

  svg {
    color: #585858;
  }

  .el-dialog__header {
    padding-bottom: 0;
  }

  .el-dialog__body {
    padding: 12px 24px;
  }

  .el-dialog__footer {
    padding: 24px;
  }

  .privacy-group {
    .el-radio-button__original-radio:checked+.el-radio-button__inner {
      background-color: #fff;
      color: $color-blue;
    }
  }
}

@media screen and (max-width: 768px) {
  .share-dialog{
    width: 90%;
  }
}

@media screen and (min-width: 769px) {
  .share-dialog {
    width: 40%;
  }
}
</style>
