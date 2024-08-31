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
            <span class="text-xl font-semibold">Share Project</span>
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
          label="Public"
          name="public"
        >
          <div
            v-show="screen === 'setting'"
            class="mt-2"
          >
            <p class="font-bold mb-4">
              Manage Public Sharing Settings
            </p>

            <div class="flex items-center justify-between">
              <span class="font-semibold">
                Password protect
              </span>
              <el-switch />
            </div>

            <p class="text-xs mb-3">
              A password will be required for anyone viewing the link
            </p>

            <form>
              <label
                for="set-password"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <el-icon class="text-xl">
                    <Lock />
                  </el-icon>
                </div>
                <input
                  id="set-password"
                  type="text"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 outline-none border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter password"
                  required
                >
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-green-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Set Password
                </button>
              </div>
            </form>

            <div class="flex items-center mt-1 gap-1 text-xs">
              <el-icon><InfoFilled /></el-icon>

              <span>Password will be expired after 30 days.</span>
            </div>

            <div class="flex items-center justify-between mt-4">
              <div>
                <p class="mb-2 font-semibold">
                  Disable Comments
                </p>
                <p class="text-xs">
                  Anyone with this links can only view the project but can't leave any comment
                </p>
              </div>

              <el-switch />
            </div>
          </div>

          <div
            v-show="screen === 'shareLink'"
            class="mt-2"
          >
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
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="Embed"
          name="embed"
        >
          <div
            ref="embedCodeRef"
            class="mt-2 border border-solid border-gray-200 rounded-lg p-4"
          >
            {{ embedCode }}
          </div>
        </el-tab-pane>
      </el-tabs>

      <template #footer>
        <div
          class="dialog-footer flex items-center justify-between"
        >
          <div>
            <span
              class="text-xs text-blue-400 cursor-pointer"
              @click="screen = 'setting'"
            >Manage Shared Links</span>
          </div>
          <div>
            <span
              class="cursor-pointer mr-4 text-gray-500"
              @click="screen === 'setting' ? backToShareLink() : close()"
            >Cancel</span>
            <button
              v-if="activeTab === 'embed' || screen === 'shareLink'"
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
              @click="saveSettings"
            >
              Save Settings
            </button>
          </div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus'
import { Lock, InfoFilled } from '@element-plus/icons-vue'
import ShareIcon from '~/assets/images/icons/project/share.svg'
import { shareProject } from '~/api/share'

type DisplayScreen = 'setting' | 'shareLink'

const emit = defineEmits(['normal-upload'])

const shareLink = ref<string>(window.location.host)
const disableComment = ref<boolean>(false)
const screen = ref<DisplayScreen>('shareLink')
const dialogFormVisible = ref(false)
const activeTab = ref<string>('public')
const embedCode = ref<string>('<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
const embedCodeRef = ref<InstanceType<typeof HTMLDivElement> | null>(null)

const open = async (projectId: number) => {
  if (localStorage.getItem(`screenProject_${projectId}`)) {
    shareLink.value = `${window.location.host}/sharelink/${localStorage.getItem(`screenProject_${projectId}`)}`
    dialogFormVisible.value = true

    return
  }

  const { data, error } = await shareProject(projectId, {
    public: 'true',
  })

  if (error.value) {
    ElMessage({
      message: 'Something went wrong, please try again',
      type: 'error',
    })

    return
  }

  shareLink.value = `${window.location.host}/sharelink/project/${data.value.data.share_key}`

  localStorage.setItem(`screenProject_${projectId}`, data.value.data.share_key)

  dialogFormVisible.value = true
}

const close = () => {
  dialogFormVisible.value = false
}

const backToShareLink = () => {
  screen.value = 'shareLink'
}

const copyToClipboard = () => {
  let el
  if (activeTab.value === 'embed') {
    el = embedCodeRef.value?.textContent as string
  }
  else {
    el = shareLink.value
  }
  navigator.clipboard.writeText(el).then(() => {
    ElMessage({
      message: 'Copy successfully',
      type: 'success',
    })
  }).catch((err) => {
    console.error('error: ', err)
  })
}

const handleClick = (tab: TabsPaneContext, event: Event) => {
  activeTab.value = tab.paneName as string
}

const saveSettings = () => {}

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
</style>
