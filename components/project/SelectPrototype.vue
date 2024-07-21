<template>
  <div class="grid grid-cols-4 gap-5">
    <div>
      <input v-model="prototype" type="radio" id="project-web" name="device" value="web"
        class="hidden peer" required />
      <label for="project-web"
        class="h-full border-solid border-gray-200 flex gap-5 items-center w-full p-5 text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col gap-2 items-center justify-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="41.919" height="35.158" viewBox="0 0 41.919 35.158"><defs><linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#d1d6db"></stop><stop offset="1" stop-color="#e8e8e8"></stop></linearGradient><linearGradient id="linear-gradient-2" x1="0.953" y1="0.181" x2="0.153" y2="0.869" xlink:href="#linear-gradient"></linearGradient></defs><g id="Group_11072" data-name="Group 11072" transform="translate(-672.5 -317.152)"><g id="Layer_16" data-name="Layer 16" transform="translate(671.5 311.152)"><g id="Group_10248" data-name="Group 10248" transform="translate(1 6)"><path id="Path_20081" data-name="Path 20081" d="M39.539,6H4.381A3.385,3.385,0,0,0,1,9.381v28.4a3.385,3.385,0,0,0,3.381,3.381H39.539a3.385,3.385,0,0,0,3.381-3.381V9.381A3.385,3.385,0,0,0,39.539,6ZM4.381,7.352H39.539a2.028,2.028,0,0,1,2.028,2.028v3.381H2.352V9.381A2.028,2.028,0,0,1,4.381,7.352ZM39.539,39.806H4.381a2.028,2.028,0,0,1-2.028-2.028V14.113H41.567V37.778a2.028,2.028,0,0,1-2.028,2.028Z" transform="translate(-1 -6)" fill="#90a2b4"></path><path id="Path_20082" data-name="Path 20082" d="M57,11h1.352v1.352H57Z" transform="translate(-19.137 -7.619)" fill="#90a2b4"></path><path id="Path_20083" data-name="Path 20083" d="M53,11h1.352v1.352H53Z" transform="translate(-17.842 -7.619)" fill="#90a2b4"></path><path id="Path_20084" data-name="Path 20084" d="M49,11h1.352v1.352H49Z" transform="translate(-16.546 -7.619)" fill="#90a2b4"></path></g></g><rect id="Rectangle_12964" data-name="Rectangle 12964" width="12" height="17" rx="1" transform="translate(677 329.152)" fill="url(#linear-gradient)"></rect><rect id="Rectangle_12965" data-name="Rectangle 12965" width="17" height="8" rx="1" transform="translate(693 329.152)" fill="url(#linear-gradient-2)"></rect><rect id="Rectangle_12966" data-name="Rectangle 12966" width="17" height="6" rx="1" transform="translate(693 340.152)" fill="url(#linear-gradient-2)"></rect></g></svg>
          <p class="text-sm">Web</p>
        </div>
      </label>
    </div>

    <div>
      <input v-model="prototype" type="radio" id="project-iphone" name="device" :value="iphoneDevice"
        class="hidden peer" required />
      <label for="project-iphone"
        class="h-full border-solid border-gray-200 flex gap-5 items-center w-full p-5 text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col gap-2 items-center justify-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25.6" height="41.6" viewBox="0 0 25.6 41.6"><defs><linearGradient id="linear-gradient" x1="0.156" y1="0.101" x2="0.842" y2="0.732" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#d1d6db"></stop><stop offset="1" stop-color="#e8e8e8"></stop></linearGradient><linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c0c6cc"></stop><stop offset="1" stop-color="#e8e8e8"></stop></linearGradient></defs><g id="Group_10268" data-name="Group 10268" transform="translate(-858.7 -291.2)"><g id="smartphone_1_" data-name="smartphone (1)" transform="translate(859.5 292)"><rect id="Rectangle" width="24" height="40" rx="4" fill="none" stroke="#90a2b4" stroke-miterlimit="10" stroke-width="1.6"></rect><path id="Rectangle-2" data-name="Rectangle" d="M0,0H12a0,0,0,0,1,0,0V1a2,2,0,0,1-2,2H2A2,2,0,0,1,0,1V0A0,0,0,0,1,0,0Z" transform="translate(6)" fill="#90a2b4"></path></g><g id="Group_11073" data-name="Group 11073"><rect id="Rectangle_12967" data-name="Rectangle 12967" width="19" height="11" rx="1" transform="translate(862 299)" fill="url(#linear-gradient)"></rect><rect id="Rectangle_12968" data-name="Rectangle 12968" width="19" height="3" rx="1" transform="translate(862 313)" fill="url(#linear-gradient-2)"></rect><rect id="Rectangle_12969" data-name="Rectangle 12969" width="19" height="3" rx="1" transform="translate(862 319)" fill="url(#linear-gradient-2)"></rect><rect id="Rectangle_12970" data-name="Rectangle 12970" width="19" height="3" rx="1" transform="translate(862 325)" fill="url(#linear-gradient-2)"></rect></g></g></svg>
          <el-dropdown @command="handleCommandIphone">
            <span class="flex items-center">
              <span class="mr-1">{{ iphoneDeviceLabel }}</span>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="item in iphoneItems"
                  :key="item.value"
                  :command="item.value"
                >{{ item.label }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </label>
    </div>

    <div>
      <input v-model="prototype" type="radio" id="project-ipad" name="device" value="ipad"
        class="hidden peer" required />
      <label for="project-ipad"
        class="h-full border-solid border-gray-200 flex gap-5 items-center w-full p-5 text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col gap-2 items-center justify-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34.6" height="41.6" viewBox="0 0 34.6 41.6"><defs><linearGradient id="linear-gradient" x1="0.804" y1="0.5" x2="0.153" y2="0.671" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#d2d5d8"></stop><stop offset="1" stop-color="#ececec"></stop></linearGradient><linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#d1d6db"></stop><stop offset="1" stop-color="#e1e5eb"></stop></linearGradient></defs><g id="Group_10269" data-name="Group 10269" transform="translate(-1031.7 -291.2)"><g id="smartphone_1_" data-name="smartphone (1)" transform="translate(1032.5 292)"><rect id="Rectangle" width="33" height="40" rx="4" fill="none" stroke="#90a2b4" stroke-miterlimit="10" stroke-width="1.6"></rect><circle id="Oval" cx="2" cy="2" r="2" transform="translate(15 31)" fill="#90a2b4"></circle></g><rect id="Rectangle_12975" data-name="Rectangle 12975" width="25" height="11" rx="1" transform="translate(1037 297)" fill="url(#linear-gradient)"></rect><rect id="Rectangle_12976" data-name="Rectangle 12976" width="25" height="3" rx="1" transform="translate(1037 311)" fill="url(#linear-gradient-2)"></rect><rect id="Rectangle_12977" data-name="Rectangle 12977" width="25" height="3" rx="1" transform="translate(1037 317)" fill="url(#linear-gradient-2)"></rect></g></svg>
          <p class="text-sm">Ipad</p>
        </div>
      </label>
    </div>

    <div>
      <input v-model="prototype" type="radio" id="project-android" name="device" :value="androidDevice"
        class="hidden peer" required />
      <label for="project-android"
        class="h-full border-solid border-gray-200 flex gap-5 items-center w-full p-5 text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col gap-2 items-center justify-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25.6" height="41.6" viewBox="0 0 25.6 41.6"><defs><linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#d1d6db"></stop><stop offset="1" stop-color="#e6e6e6"></stop></linearGradient><linearGradient id="linear-gradient-3" x1="0.196" y1="0.5" x2="0.847" y2="0.671" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#d2d5d8"></stop><stop offset="1" stop-color="#ececec"></stop></linearGradient></defs><g id="Group_10270" data-name="Group 10270" transform="translate(-1214.7 -291.2)"><g id="smartphone_1_" data-name="smartphone (1)" transform="translate(1215.5 292)"><rect id="Rectangle" width="24" height="40" rx="4" fill="none" stroke="#90a2b4" stroke-miterlimit="10" stroke-width="1.6"></rect><circle id="Oval" cx="1.5" cy="1.5" r="1.5" transform="translate(13 3)" fill="#90a2b4"></circle><circle id="Oval-2" data-name="Oval" cx="1.5" cy="1.5" r="1.5" transform="translate(18 3)" fill="#90a2b4"></circle></g><rect id="Rectangle_12973" data-name="Rectangle 12973" width="19" height="3" rx="1" transform="translate(1218 309)" fill="url(#linear-gradient)"></rect><rect id="Rectangle_12974" data-name="Rectangle 12974" width="19" height="3" rx="1" transform="translate(1218 303)" fill="url(#linear-gradient)"></rect><rect id="Rectangle_12978" data-name="Rectangle 12978" width="19" height="11" rx="1" transform="translate(1218 315)" fill="url(#linear-gradient-3)"></rect></g></svg>
          <el-dropdown @command="handleCommandAndroid">
            <span class="flex items-center">
              <span class="mr-1">{{ androidDeviceLabel }}</span>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="item in androidItems"
                  :key="item.value"
                  :command="item.value"
                >{{ item.label }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </label>
    </div>

    <div>
      <input v-model="prototype" type="radio" id="project-tablet" name="device" value="tablet"
        class="hidden peer" required />
      <label for="project-tablet"
        class="h-full border-solid border-gray-200 flex gap-5 items-center w-full p-5 text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col gap-2 items-center justify-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="31.943" height="39.315" viewBox="0 0 31.943 39.315"><defs><linearGradient id="linear-gradient" x1="0.804" y1="0.5" x2="0.153" y2="0.671" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#d2d5d8"></stop><stop offset="1" stop-color="#ececec"></stop></linearGradient><linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#d1d6db"></stop><stop offset="1" stop-color="#e1e5eb"></stop></linearGradient></defs><g id="Group_10271" data-name="Group 10271" transform="translate(-678 -436.002)"><g id="noun_Tablet_3594276" transform="translate(672 436.002)"><g id="Group_10267" data-name="Group 10267" transform="translate(6)"><g id="Group_10266" data-name="Group 10266"><path id="Path_20095" data-name="Path 20095" d="M36.1,0H7.843A1.848,1.848,0,0,0,6,1.843V37.472a1.848,1.848,0,0,0,1.843,1.843H36.1a1.848,1.848,0,0,0,1.843-1.843V1.843A1.848,1.848,0,0,0,36.1,0Zm.614,37.472a.616.616,0,0,1-.614.614H7.843a.616.616,0,0,1-.614-.614V1.843a.616.616,0,0,1,.614-.614H36.1a.616.616,0,0,1,.614.614Z" transform="translate(-6)" fill="#90a2b4"></path><path id="Path_20096" data-name="Path 20096" d="M35.186,4H11.843A1.848,1.848,0,0,0,10,5.843V34.1a1.848,1.848,0,0,0,1.843,1.843H35.186A1.848,1.848,0,0,0,37.029,34.1V5.843A1.848,1.848,0,0,0,35.186,4ZM35.8,34.1a.616.616,0,0,1-.614.614H11.843a.616.616,0,0,1-.614-.614V5.843a.616.616,0,0,1,.614-.614H35.186a.616.616,0,0,1,.614.614Z" transform="translate(-7.543 -1.543)" fill="#90a2b4"></path><rect id="Rectangle_12981" data-name="Rectangle 12981" width="4.572" height="0.914" transform="translate(13.715 35.66)" fill="#90a2b4"></rect></g></g></g><rect id="Rectangle_12982" data-name="Rectangle 12982" width="20" height="11" rx="1" transform="translate(684 443)" fill="url(#linear-gradient)"></rect><rect id="Rectangle_12983" data-name="Rectangle 12983" width="20" height="3" rx="1" transform="translate(684 457)" fill="url(#linear-gradient-2)"></rect><rect id="Rectangle_12984" data-name="Rectangle 12984" width="20" height="3" rx="1" transform="translate(684 463)" fill="url(#linear-gradient-2)"></rect></g></svg>
          <p class="text-sm">Tablet (Ipad)</p>
        </div>
      </label>
    </div>

    <div>
      <input v-model="prototype" type="radio" id="project-apple-watch" name="device" value="apple_watch"
        class="hidden peer" required />
      <label for="project-apple-watch"
        class="h-full border-solid border-gray-200 flex gap-5 items-center w-full p-5 text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col gap-2 items-center justify-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23.111" height="38.719" viewBox="0 0 23.111 38.719"><defs><linearGradient id="linear-gradient" x1="0.156" y1="0.101" x2="0.842" y2="0.732" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c1c6cc"></stop><stop offset="1" stop-color="#ececec"></stop></linearGradient></defs><g id="Group_10272" data-name="Group 10272" transform="translate(-861.25 -438.112)"><g id="noun_apple_watch_800728" data-name="noun_apple watch_800728" transform="translate(862 438.862)"><path id="Path_20089" data-name="Path 20089" d="M34.6,48.412H47.208a3.612,3.612,0,0,0,3.6-3.6V28.6a3.612,3.612,0,0,0-3.6-3.6H34.6A3.612,3.612,0,0,0,31,28.6V44.81A3.612,3.612,0,0,0,34.6,48.412Z" transform="translate(-31 -18.096)" fill="none" stroke="#90a2b4" stroke-miterlimit="10" stroke-width="1.5"></path><path id="Path_20090" data-name="Path 20090" d="M96,42h.9a1.176,1.176,0,0,1,1.2,1.2V45a1.176,1.176,0,0,1-1.2,1.2H96" transform="translate(-76.49 -29.994)" fill="none" stroke="#90a2b4" stroke-miterlimit="10" stroke-width="1.5"></path><path id="Path_20091" data-name="Path 20091" d="M39.4,50.81H50.807a2.408,2.408,0,0,0,2.4-2.4V33.4a2.408,2.408,0,0,0-2.4-2.4H39.4A2.408,2.408,0,0,0,37,33.4V48.409A2.408,2.408,0,0,0,39.4,50.81Z" transform="translate(-35.199 -22.295)" fill="none" stroke="#90a2b4" stroke-miterlimit="10" stroke-width="1.5"></path><path id="Path_20092" data-name="Path 20092" d="M44,8.9V3.2A1.2,1.2,0,0,1,45.2,2h9.605a1.2,1.2,0,0,1,1.2,1.2V8.9" transform="translate(-40.098 -2)" fill="none" stroke="#90a2b4" stroke-miterlimit="10" stroke-width="1.5"></path><path id="Path_20093" data-name="Path 20093" d="M44,103v5.7a1.2,1.2,0,0,0,1.2,1.2h9.605a1.2,1.2,0,0,0,1.2-1.2V103" transform="translate(-40.098 -72.684)" fill="none" stroke="#90a2b4" stroke-miterlimit="10" stroke-width="1.5"></path></g><rect id="Rectangle_12979" data-name="Rectangle 12979" width="9" height="13" rx="1" transform="translate(867 451)" fill="url(#linear-gradient)"></rect></g></svg>
          <p class="text-sm">Apple Watch</p>
        </div>
      </label>
    </div>

    <div>
      <input v-model="prototype" type="radio" id="project-android-wear" name="device" value="android_wear"
        class="hidden peer" required />
      <label for="project-android-wear"
        class="h-full border-solid border-gray-200 flex gap-5 items-center w-full p-5 text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col gap-2 items-center justify-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26.631" height="37.323" viewBox="0 0 26.631 37.323"><defs><linearGradient id="linear-gradient" x1="0.156" y1="0.101" x2="0.842" y2="0.732" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c1c6cc"></stop><stop offset="1" stop-color="#ececec"></stop></linearGradient></defs><g id="Group_10273" data-name="Group 10273" transform="translate(-1036.001 -438.862)"><g id="noun_Watch_309882" transform="translate(1036 438.862)"><path id="Path_20094" data-name="Path 20094" d="M21.925,33.114l1,6.487a1.39,1.39,0,0,0,1.4,1.121H35.861a1.36,1.36,0,0,0,1.4-1.121l1-6.487a13.317,13.317,0,0,0,.2-20.9l-1.2-7.689a1.39,1.39,0,0,0-1.4-1.121H24.328a1.36,1.36,0,0,0-1.4,1.121L21.765,12.21a13.349,13.349,0,0,0,.16,20.9Zm2.4-28.593H35.861a.331.331,0,0,1,.32.16l1,6.648a13.022,13.022,0,0,0-7.088-2.082,13.259,13.259,0,0,0-7.128,2.082l1-6.648A.386.386,0,0,1,24.328,4.521Zm5.767,5.847A12.234,12.234,0,1,1,17.88,22.582,12.237,12.237,0,0,1,30.094,10.368ZM35.861,39.6H24.328a.331.331,0,0,1-.32-.16l-.841-5.486a13.211,13.211,0,0,0,13.856,0l-.841,5.486C36.181,39.521,36.061,39.6,35.861,39.6Z" transform="translate(-16.798 -3.4)" fill="#90a2b4"></path></g><rect id="Rectangle_12980" data-name="Rectangle 12980" width="17" height="17" rx="8.5" transform="translate(1041 449)" fill="url(#linear-gradient)"></rect></g></svg>
          <p class="text-sm">Android Wear</p>
        </div>
      </label>
    </div>

    <div>
      <input v-model="prototype" type="radio" id="project-custom" name="device" value="custom"
        class="hidden peer" required />
      <label for="project-custom"
        class="h-full border-solid border-gray-200 flex gap-5 items-center w-full p-5 text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col gap-2 items-center justify-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="32" viewBox="0 0 40 32"><defs><linearGradient id="linear-gradient" x1="0.156" y1="0.101" x2="0.842" y2="0.732" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#d1d6db"></stop><stop offset="1" stop-color="#e8e8e8"></stop></linearGradient></defs><g id="Group_10283" data-name="Group 10283" transform="translate(-1207 -463)"><g id="Rectangle_13015" data-name="Rectangle 13015" transform="translate(1207 463)" fill="#fff" stroke="#90a2b4" stroke-width="1"><rect width="40" height="32" rx="5" stroke="none"></rect><rect x="0.5" y="0.5" width="39" height="31" rx="4.5" fill="none"></rect></g><rect id="Rectangle_13014" data-name="Rectangle 13014" width="19" height="11" rx="1" transform="translate(1218 474)" fill="url(#linear-gradient)"></rect></g></svg>
          <p>Custom</p>
        </div>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ILabelValue } from '~/types'
import _find from 'lodash/find'

const prototype = defineModel()

const iphoneDevice = ref<string>('iphone')
const iphoneDeviceLabel  = ref<string>('Iphone')

const androidDevice = ref<string>('android')
const androidDeviceLabel = ref<string>('Android')

const iphoneItems = ref<ILabelValue[]>([
  { value: 'iphone_13_pro_max', label: 'Iphone 13, 12 Pro Max' },
  { value: 'iphone_12_pro', label: 'Iphone 13, 12 Pro, 12' },
  { value: 'iphone_13_mini', label: 'Iphone 13 Mini' },
  { value: 'iphone_xr_xs_max_11_pro', label: 'Iphone XR, XS Max, 11 Pro' },
  { value: 'iphone_8_se', label: 'Iphone 8, SE' },
])

const androidItems = ref<ILabelValue[]>([
  { value: 'android', label: 'Android' },
  { value: 'android_samsung_galaxy_s20', label: 'Samsung Galaxy S20' },
  { value: 'android_samsung_galaxy_s8', label: 'Samsung Galaxy S8 +' },
  { value: 'galaxy_fold', label: 'Galaxy Fold'},
])

const handleCommandIphone = (command: string) => {
  iphoneDevice.value = command

  const item = _find(iphoneItems.value, { value: command })

  iphoneDeviceLabel.value = item?.label ?? 'iphone'
}

const handleCommandAndroid = (command: string) => {
  androidDevice.value = command

  const item = _find(androidItems.value, { value: command })

  androidDeviceLabel.value = item?.label ?? 'android'
}
</script>
