<template>
  <div class="flex items-center justify-center right-navbar-block">
    <div class="upgrade-block hidden xl:flex">
      <nuxt-link
        to="/upgrade"
        class="flex items-center gap-x-1"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        ><path d="M188.28 59.47c-19.086 0-34.56 15.468-34.56 34.56 0 16.077 10.983 29.57 25.843 33.44l-35.344 81.936c15.877 2.885 27.905 16.784 27.905 33.5 0 18.806-15.23 34.063-34.03 34.063-18.802 0-34.032-15.258-34.032-34.064 0-13.37 7.703-24.924 18.906-30.5l-50.814-79.22c8.007-5.82 13.22-15.24 13.22-25.905 0-17.693-14.314-32.06-32-32.06-17.688 0-32.032 14.37-32.032 32.06 0 17.693 14.344 32.032 32.03 32.032.734 0 1.468-.014 2.188-.062l41.907 227h316l41.936-227c.72.048 1.455.063 2.188.063 17.686 0 32.03-14.34 32.03-32.032 0-17.693-14.344-32.06-32.03-32.06-17.687 0-32.03 14.37-32.03 32.06-.002 10.723 5.286 20.187 13.373 26l-50.656 79.532c10.778 5.72 18.126 17.04 18.126 30.094 0 18.806-15.23 34.063-34.03 34.063s-34.032-15.258-34.032-34.064c0-17.11 12.602-31.267 29.03-33.687l-34.75-81.532c15.275-3.577 26.657-17.287 26.657-33.657 0-19.094-15.474-34.56-34.56-34.56-19.09 0-34.564 15.468-34.564 34.56 0 14.798 9.308 27.415 22.375 32.345L268 202.345c14.62 4.52 25.25 18.112 25.25 34.218 0 19.796-16.053 35.843-35.844 35.843-19.79 0-35.812-16.047-35.812-35.844 0-15.158 9.403-28.102 22.687-33.343l-44.124-76.72c13.234-4.845 22.688-17.552 22.688-32.47 0-19.094-15.475-34.56-34.563-34.56zM97.438 384.936c-23.978 3.763-22.86 39.844 4.188 39.844h6.656l.064.345h294.28l.063-.344h7.625c26.034 0 27.88-35.928 4.313-39.842H97.437z" /></svg>
        <span>
          Upgrade
        </span>
      </nuxt-link>
    </div>

    <div
      id="dropdownNewButton"
      ref="dropdownNewButtonRef"
      class="new-project-btn-block items-center justify-between rounded-full text-white cursor-pointer hidden xs:flex"
      data-dropdown-toggle="dropdownNewRecord"
    >
      <div class="new-block flex items-center">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          t="1551322312294"
          viewBox="0 0 1024 1024"
          version="1.1"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        ><defs /><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" /><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" /></svg>
        <span class="text-xs ml-2">
          New
        </span>
      </div>
      <button
        type="button"
        class="text-white bg-blue-600 outline-none rounded-full text-sm p-2.5 text-center inline-flex items-center"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        ><g><path
          fill="none"
          d="M0 0h24v24H0z"
        /><path d="M12 16l-6-6h12z" /></g></svg>
        <span class="sr-only">Icon description</span>
      </button>
    </div>

    <!-- /** Dropdown add new button */ -->

    <div
      id="dropdownNewRecord"
      class="p-4 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-52"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li class="flex items-center gap-x-4 mb-3">
          <div class="new-icon ni1" />
          <div
            class="cursor-pointer block px-4 py-2 text-xs hover:text-blue-500"
            @click="openModalProject"
          >
            New Project
          </div>
        </li>
        <li class="flex items-center gap-x-4 mb-3">
          <div class="new-icon ni2" />
          <div
            class="cursor-pointer block px-4 py-2 text-xs hover:text-blue-500"
            @click="openCreateTeamModal"
          >
            New Team
          </div>
        </li>
        <li class="flex items-center gap-x-4 mb-3">
          <div class="new-icon ni3" />
          <div class="cursor-pointer block px-4 py-2 text-xs hover:text-blue-500">
            New Task
          </div>
        </li>
        <li class="flex items-center gap-x-4 mb-3">
          <div class="new-icon ni4" />
          <div
            class="cursor-pointer block px-4 py-2 text-xs hover:text-blue-500"
            @click="openCreateFolderModal"
          >
            New Folder
          </div>
        </li>
        <li class="flex items-center gap-x-4 mb-3">
          <div class="new-icon ni5" />
          <div class="cursor-pointer block px-4 py-2 text-xs hover:text-blue-500">
            Remote Upload
          </div>
        </li>
        <li class="flex items-center gap-x-4">
          <div class="new-icon ni6" />
          <div class="cursor-pointer block px-4 py-2 text-xs hover:text-blue-500">
            FTP Upload
          </div>
        </li>
      </ul>
    </div>

    <div class="list-icons hidden xl:flex">
      <button
        type="button"
        class="outline-none"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        ><path d="M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3 443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5 445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142 23.5-55.2 35.5-113.9 35.8-174.5.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z" /></svg>
      </button>
    </div>

    <div class="list-icons hidden xl:flex">
      <button
        type="button"
        class="outline-none"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        ><path d="M256 480a80.09 80.09 0 0073.3-48H182.7a80.09 80.09 0 0073.3 48zm144-192v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48c-68.88 15.61-96 76.76-96 147.47V288l-48 64v48h384v-48z" /></svg>
      </button>
    </div>

    <div class="list-icons hidden xl:flex">
      <button
        type="button"
        class="outline-none"
      >
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M4 4H8V8H4V4Z"
          fill="currentColor"
        /><path
          d="M4 10H8V14H4V10Z"
          fill="currentColor"
        /><path
          d="M8 16H4V20H8V16Z"
          fill="currentColor"
        /><path
          d="M10 4H14V8H10V4Z"
          fill="currentColor"
        /><path
          d="M14 10H10V14H14V10Z"
          fill="currentColor"
        /><path
          d="M10 16H14V20H10V16Z"
          fill="currentColor"
        /><path
          d="M20 4H16V8H20V4Z"
          fill="currentColor"
        /><path
          d="M16 10H20V14H16V10Z"
          fill="currentColor"
        /><path
          d="M20 16H16V20H20V16Z"
          fill="currentColor"
        /></svg>
      </button>
    </div>

    <UserDropdown />
  </div>

  <CreateProjectModal
    ref="createProjectModalRef"
    @direct-upload="directUpload"
  />
  <CreateProjectDirectModal
    ref="createProjectDirectModalRef"
    @normal-upload="normalUpload"
  />

  <CreateTeamModal ref="createTeamModalRef" />

  <CreateFolderModal ref="createFolderModalRef" />
</template>

<script lang="ts" setup>
import UserDropdown from './UserDropdown.vue'
import CreateProjectModal from '~/components/project/CreateProjectModal.vue'
import CreateProjectDirectModal from '~/components/project/CreateProjectDirectModal.vue'
import CreateTeamModal from '~/components/team/CreateTeamModal.vue'
import CreateFolderModal from '~/components/folder/CreateFolderModal.vue'

const dropdownNewButtonRef = ref<HTMLElement | null>()
const createProjectModalRef = ref<InstanceType<typeof CreateProjectModal>>()
const createProjectDirectModalRef = ref<InstanceType<typeof CreateProjectDirectModal>>()
const createTeamModalRef = ref<InstanceType<typeof CreateProjectModal>>()
const createFolderModalRef = ref<InstanceType<typeof CreateFolderModal>>()

const openModalProject = () => {
  createProjectModalRef?.value?.open()
  closeDropdown()
}

const openCreateTeamModal = () => {
  createTeamModalRef?.value?.open()
  closeDropdown()
}

const openCreateFolderModal = () => {
  createFolderModalRef?.value?.open()
  closeDropdown()
}

const closeDropdown = () => {
  dropdownNewButtonRef.value?.click()
}

const directUpload = () => {
  createProjectModalRef?.value?.close()

  setTimeout(() => {
    createProjectDirectModalRef?.value?.open()
  }, 250)
}

const normalUpload = () => {
  createProjectDirectModalRef?.value?.close()

  setTimeout(() => {
    createProjectModalRef?.value?.open()
  }, 250)
}
</script>

<style lang="scss" scoped>
.right-navbar-block {
  gap: max(10px, 1.5vw);

  .upgrade-block {
    font-size: max(10px, 0.65vw);
    color: $color-orange;
  }

  .new-project-btn-block {
    background-color: $color-blue;
    width: max(90px, 5.75vw);
    height: max(30px, 2vw);

    .new-block {
      margin: 0 5px 0 10px;

      svg {
        color: $color-white;
      }
    }

    button {
      width: max(30px, 2vw);
      height: max(30px, 2vw);
    }
  }

  .ni1 {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAWCAYAAAAinad/AAAABHNCSVQICAgIfAhkiAAAAUVJREFUOE/VlcFtg0AQRWcwUq6UQAdpIddIWEoaMHYFhgqCK4BUYKCBJDJSrk4J6YASfI1smMwMQgIJBN7k4r0gYPfx/87OB4FHnB0iBPQBwZX72YPoBIgpVedduHk+IYMSRNwSQQZA5WxQM9Fp1tJr6C8DjPOiBIJj6HvrK0E6vRUTrDzEJC8YTDsmR4awiNW93Dgs3r85Yl+qNbQNehLm2uQCvSts5T39A+xwbGDLByOYWFss7u5lcU11IlcLrUCuVfXz3bU8aTPOihQR/CElBPTVVTkN23+6YF9chRGoMm41VQYXuww3j2X7oUlYV1Gc/3HP+jCpJjnGBejBxLJUs2Ot9/6aczZUhBuE8ZninqNUwm3K0kgHaLhqBLXhxhPl4WAzj32Ec9ABojUBfki4oqaCZUvnb02UadzX50D/ASaAsTW/xyktJmAPu88AAAAASUVORK5CYII=');
  }

  .ni2 {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAuVJREFUSEu1VUty2kAQ7R7hbMEniHMC4xMAy5ShwOtU+JzA0gmCTyD7BHxcWUMKXFkGnyD4BHZOgL21pWm/GZD4SHJIqjzLQfTrfv3eG6Z3PpxV3/9+U1Sa6iJSJpJHFpppHQy8ztnjv/SUCuAPJl1m/iZEf1D8AQULTHxMQg+S4zPvy+l8X5AEgH89abDwSIg7XvO0HxUyE1Go+/gtL/rlxEziD6cuCtTxzVzCl4u06ZIAg6mhYOy1qu3dLg0Ih/Ibk3les3ppmsFULgkXUWgh2ql4nc9m4vhsAfi9n0fshPfCUvG+1mZpNPjDib33mjXsZnn83qhATm4GGhdus1rJBrielEHBr7cBpmPs5QgAxc1CK7p8UHW4SdXOBKMCOweLXf63C5kJ+BEUNbbuM5pL7gAUmEW6repJYgfrImegEJOsD5R3CeWdg6KtmkkA7IFUOMcP9+C0q7W6o1xwBE8cY7ldYb5NdD+8abNoX5juNndj4NN9YECcYGy1v3FguguvVevGyx1O8Y2VKcQkdxTmGm+qKEGJBdJlYv1AQTDf1bmVqaYiKZplqS59AnCtSJVENJTChSUw4oLVXCv68d9OXhnJRzWrcTs2UZQ9y7hYnpk47EVAkOiYRUqs1KUOnq9SZWqLBxoe4Cd03aXweZygxBrqoA0AFwXzklMVAwKqyqS5zUwtdDVHlMDRy1CMKfJNRDCCLQzKf0vM2LlCH91W7TBeeiTjVZTEAHHAOXyyL79Z/0GUmKSFEZdRYifwjY5JehI6n3ZltqusuNso+Fhi08VZJnIFObtrAHBrIgIXfTixk1V0894uFh4wzjWUKXVQt0YkOiTtFKNG1ztYTQHtjCXMeVmTmIXidTvH8I0os0zCQmElqO6WHOVu0rwddgAhEWQK5Y0aQOAM+WLVABcXcAfTUVGEnojZjR4kQw190IW0/aVkUSRFwWOCh8SAWU9Ez6fqp0k4i9bMR3+fPezzzbsDvAKKmqUoFUvifQAAAABJRU5ErkJggg==');
  }

  .ni3 {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAABHNCSVQICAgIfAhkiAAAARBJREFUOE/tlMFxwjAQRfeDC0gLVBBSQZIjgzMD50xMqCBWB+nA7gBiCsAz5g7pgBLcQs4J/KycwWPAEJkzOunw9bT6X7uQC1aULEJQRgLpijDlxjNm3MvRlBXNsgGI+d45Ss7t9x2iJFtDcPsflCLGBH6s+pXq7w/1BIeIkwWtUMD1KaBWsqzAai+nYPwHAx/Ny9PqFMxqwsAvLIk+shjA21Flm3anOWwyv5G2l+6eqs/6EiA0QX/aGLarSIN4KPY/Xm6TtFtnmGpLG0CmW6/1aZ77ez47wcoqKkYVoRx47QSrC6YuuCvsfINdPTvf6I3+mYqnOgmK/nJdJN+POsCOYB29A1dIqSNyM/Jfq+d+AeDBEpFH97nBAAAAAElFTkSuQmCC');
  }

  .ni4 {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAAABHNCSVQICAgIfAhkiAAAAXBJREFUOE+llM1Rg1AQx3ch3mMFxg6wA3J0AiOeHUmowLwKYgePDhKwAHHA8SglpAMtIXcN6z4IH8mM8uG7MCy7v/36P1CGSYQAN3ByCNAT7mxzau/yjn6YEAEIQNpWARmYnOiBRtpU3M1qexci+xRQpKm4t9NmTN4BwQVqGLWxsm8tEN71Z+n3O3T9PAb9jNuncRsUCFIxtx9boa2gPxyOKpXh6wKJVoAwGQhNl641PYYGyY7b9UGDo/l2SqCWi7hiKFZQFYiE77T/OhfeLcP7HRnEPndoCtc2amgGDhsNNpr9cIW3DOMtLyxSC6uhBD7XuhGuxc9+R67fJqjvP0ppHsSPHgKtScerIWJXCwYiX8ytXH4FlCAo5mEN2rq6KArG8U4F5Sw7vusvnGnRr/HDPJVqEJflvyKvVH0a+gORT7FZqEa/LK9qDf2XlNBpjq6CcrH9BZ+3SAa3GrCUluXokMt3IANjyCyrmJEWNVXzA8Zb0xLwmSfYAAAAAElFTkSuQmCC');
  }

  .ni5 {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAABHNCSVQICAgIfAhkiAAAAL1JREFUOE9jZACC/vnrBRiZWM8zMDIogPgUgAUFcT6JIP2MYIMXbSkAMvr////fSLahjAwOjAyM9v+ZGQ0Lo70vQAxeuLmBkZGxHmgbmE8OgJnxn/G/Y2Gs74FRg+tHgwKeskaDAkdQQLM0MPc1kJPrQHqAxYEDkHJAzdLAQoiBmWUDKK+TazDU8ImF8b4F8EKIEsNw6WXsX7w5gImBSZ+ahv9jYtjI2L9wywdGRgZ+ahr8/z/DQrKLSUIOAQBeBZiwVvYu5QAAAABJRU5ErkJggg==');
  }

  .ni6 {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAYZJREFUOE/lVUFSwkAQnEm86w/AH/AEPKpQ4gMMyQc0+wL5weILIKE8a1WgvMIL1BfIE3K1zGacAWMFirBQxUn3lt3Znt6engnC2tJR0kfEu8U2UUroKOVdDtfjbN9YDtCjpIOET0T0wPspIDY44IoAg33BV4GjpMds70Ov9buvo/EQEbobGRLMAWFK5kup4Dotx1iBJVheAjk0NoCfAKDP4D3ltfp7A2/TU8fJVM6V127+M2A9eKm7LtWM+XyXgh1MCh2P51zxGgHNRNfDATNjOMrqkGVvuzP+aRCurnTfii+rnEF5HhJApLrtsNIVC8+WW9rWt9L1LAmYrLO1Qbbh9OMxEdKZumkvfGtbK533d4DFu+iaj32mnFUKHU98BBqUZBry9AusGuvHScM1eFwVmEM+JRI7tfwiCRL4iM686s6tdzFDnrcpz9tKYLlcdoO4w8aWjHtql2KZ+NUBp8fsOwwaykUVnFcylsR24FHShByfi1ftWkArcPFs/os0i/lgk0LOvwHFOOUcVTbwYgAAAABJRU5ErkJggg==');
  }

  .list-icons {
    button svg {
      color: #9099a2;
      width: max(18px, 1.2vw);
      height: max(18px, 1.2vw);
    }
  }
}
</style>
