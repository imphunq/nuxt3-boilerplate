<template>
  <div class="user-dropdown">
    <div class="flex items-center gap-x-1 cursor-pointer"
      data-popover-target="user-dropdown"
      data-popover-trigger="click"
    >
      <span class="username">
        Admin
      </span>

      <button
        type="button"
        class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
      >
        <span class="sr-only">Open user menu</span>
        <img class="w-6 h-6 rounded-full bg-slate-400" src="data:image/png;base64,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" />
      </button>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 16l-6-6h12z"></path></g></svg>
    </div>

    <!-- Dropdown menu -->
    <div
      role="tooltip"
      class="absolute z-10 invisible drop-shadow-md inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
      id="user-dropdown"
      data-popover
    >
      <div class="user-dropdown__user-info flex">
        <div class="">
          <img class="w-8 h-8 rounded-full bg-slate-400" src="data:image/png;base64,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" />
        </div>
        <div class="flex flex-col gap-[5px]">
          <div class="flex items-center gap-x-1">
            <span class="user-dropdown__user-info-name text-sm text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <div class="icon-smile cursor-pointer" data-popover-placement="bottom" data-popover-target="popover-status-click" data-popover-trigger="click"></div>
            <div class="flex free-plan items-center">
              <div class="free-plan-icon ml-1"></div>
              <span>
                Free Plan
              </span>
            </div>

            <div id="popover-status-click" data-popover role="tooltip" class="z-20 drop-shadow-md absolute invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
              <StatusPopover />
            </div>
          </div>

          <div class="flex items-center text-sm text-gray-500 truncate dark:text-gray-400 gap-1">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
            <span class="user-dropdown__user-info-email">name@flowbite.com</span>
          </div>

          <div class="user-status flex items-center gap-[10px]">
            <div class="user-status-icon"></div>
            <span>
              Available for all
            </span>
          </div>
        </div>
      </div>
      <ul class="flex flex-col p-[15px] border-b user-dropdown__list" aria-labelledby="user-menu-button">
        <li class="flex items-center user-dropdown__item">
          <div class="icon-profile"></div>
          <NuxtLink
            href="#"
            class="block text-sm text-gray-700 hover:text-blue-400 dark:text-gray-200 dark:hover:text-white"
            >Your Profile</NuxtLink
          >
        </li>
        <li class="flex items-center user-dropdown__item">
          <div class="icon-message"></div>
          <NuxtLink
            href="#"
            class="block  text-sm text-gray-700 hover:text-blue-400 dark:text-gray-200 dark:hover:text-white"
            >Messages</NuxtLink
          >
        </li>
        <li class="flex items-center user-dropdown__item">
          <div class="icon-team"></div>
          <NuxtLink
            href="#"
            class="block text-sm text-gray-700 hover:text-blue-400 dark:text-gray-200 dark:hover:text-white"
            >Teams</NuxtLink
          >
        </li>
        <li class="flex items-center user-dropdown__item">
          <div class="icon-activity"></div>
          <NuxtLink
            href="#"
            class="block text-sm text-gray-700 hover:text-blue-400 dark:text-gray-200 dark:hover:text-white"
            >Activity</NuxtLink
          >
        </li>
        <li class="flex items-center user-dropdown__item">
          <div class="icon-bill"></div>
          <NuxtLink
            href="#"
            class="block text-sm text-gray-700 hover:text-blue-400 dark:text-gray-200 dark:hover:text-white"
            >Billing</NuxtLink
          >
        </li>
        <li class="flex items-center user-dropdown__item">
          <div class="icon-setting"></div>
          <NuxtLink
            href="#"
            class="block text-sm text-gray-700 hover:text-blue-400 dark:text-gray-200 dark:hover:text-white"
            >Account Settings</NuxtLink
          >
        </li>
        <li class="flex items-center user-dropdown__item">
          <div class="icon-help"></div>
          <NuxtLink
            href="#"
            class="block text-sm text-gray-700 hover:text-blue-400 dark:text-gray-200 dark:hover:text-white"
            >Get Help</NuxtLink
          >
        </li>

        <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700">

        <li class="flex items-center user-dropdown__item">
          <div class="icon-logout"></div>
          <NuxtLink
            href="#"
            class="block  text-sm text-gray-700 hover:text-blue-400 dark:text-gray-200 dark:hover:text-white"
            >Logout</NuxtLink
          >
        </li>
      </ul>
    </div>
    <!-- <button
      data-collapse-toggle="navbar-user"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-user"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button> -->
  </div>
</template>

<script lang="ts" setup>
import StatusPopover from './StatusPopover.vue'
</script>

<style lang="scss" scoped>
.user-dropdown {
  .username {
    font-size: max(10px, 0.75vw);
  }

  &__item {
    gap: max(15px, 1.5vw);
  }

  &__list {
    gap: max(10px, 1vw);
  }

  &__user-info {
    padding: 20px 15px 10px 15px;
    border-bottom: 1px solid #e4e4e4;
    gap: 10px;

    &-name {
      font-size: max(8px, 0.55vw);
    }

    &-email {
      font-size: max(10px, 0.7vw);
      color: #78797a;
    }

    .icon-smile {
      width: max(17px, 1vw);
      height: max(17px, 1vw);
      content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAABHNCSVQICAgIfAhkiAAAA01JREFUOE+NlctLG1EUh+8Iipj6wAhqKyiYuDE+UozFFl8YSl2o/0GCCk0rjQsl7S5IshGrLpJiq6Cg4E4XasCCSUFJDWlMqgazkIAPSnwgviaKD9Cec8sMk8dYD1xmuHPvd8/5nXPuMETEbDbby6ysLGVycrIiPT39eUpKytPLy8vQ8fHx79vbW//JyYmvsbHRFW87Ez2p1+vTWltb+woLC3WJiYkER7QBlFxfX59vbm4Og5nHxsZY4ZoIqMPhqJTL5ZacnJwXDBNzXgz87u6OHBwcuAGuV6vVHm4BvxOBCoViITMzM01MErH5o6Oj842NDeD+A1MohmwwGBZyc3MrhRtPT0/J7Ows2dnZIWtra6SsrIw0NTWR8vLyGP7e3p67t7dXPTQ0FKZQn8/3DbzUCUMeHx8nZrOZNDc3k5aWFgrBQyYmJuhzenqaZGRk8HCUYn19/bNKpfrIYJarq6t/Qnb5BQi0Wq3EbrdHbOQWiH0Ph8PnTqfzDbO8vPwBwrFyWUYvQBtRoBC8tLRERkdHeWdubm6I2+3WMhh6SUmJjvtiMpnoq9Fo/G++ZDIZWVlZiYgGJBhhtra2fuXl5ak4QkNDAz29oKCAYJhQFVRHtMPDQwLa0ydaV1cX1bu2tpZ3AJL6g9nf3/8jlUqfCaEIeoxhVPn5+USr1fLLsW4f9HR1dZV6LMyycK69vZ1oNJpYT71e73Bpaelb7iiLxUJfOzs7yczMDA0d5UDw4uIi6e7upjqiRWt6f39P/H7/SNzsV1RU0OyjlwjGet3e3qb6DQwM0APwcJwbHByMyL7H49Ew8/PzVWDfJRIJ354caGpqioKj7YE6ZV0u12vaUUDvAwkMCQkJ/H4MFTWrq6sjNTU1FI6eoRyYHM5jbgN2VCAQ6FMqlZ8otK2tLbWnp8ce3fv4Db3GvkfDsLFt43kfCoU80IX1/f39F/wtBRqqiouLHXAxpz6mnIRr4JZig8FgPbS7F+cjLk0EFxUVfcnOzq4USiF2CIYMde7Z3d19zwFjoDjR0dHxBG5+I5TLu6SkpFQYEUwsG7z5oc9Z0Pjr5OSkCUMWLhK93ufm5qqgIuTwf3oFQwb/KsnV1dXF2dlZkGVZJ4wg3K1x/1F/AZUuphzsPZ5SAAAAAElFTkSuQmCC');
    }

    .free-plan {
      background-color: #c1e1ff;
      width: max(70px, 4.2vw);
      height: max(18px, 1.2vw);
      border-radius: 7px;
      gap: 4px;

      span {
        font-size: max(8px, 0.55vw);
      }
    }

    .free-plan-icon {
      content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABHNCSVQICAgIfAhkiAAAAKJJREFUKFONkQENAjEQBHkFgAIkgJTHCVZwgAQcgAQc8BZwwA7JNpdtCTTZfHP30+5tp1W/NirdpJd0kh75yxQFAwfVt9J1BFaoApxFj1oHGkrAEN8O9GnMgKW60kW7kQaD7geBjOYFnGks0u5PCEdHIGzdpfUPewBn6WILIzBD+gA1IfYJ1pAakFCCPG6z9C1W133j0zNkSBmr+zwoItluvQERoyM+oDw7dQAAAABJRU5ErkJggg==');
      width: 13px;
      height: 13px;
    }

    .user-status-icon {
      width: 9px;
      height: 9px;
      border-radius: 100%;
      background-color: #50cf6a;
    }

    .user-status span {
      font-size: max(10px, 0.7vw);
    }
  }

  .icon-profile {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABHNCSVQICAgIfAhkiAAAAppJREFUSEu9Vkty2kAUfE8S6+ATACcwOYHJMjGU8ToVPheIpRuQE4icgE8q65ACV5bGJzA+gTkC3sZoXnomEghJIUiVClVUCUlveqa7Xz+Y/sOHkxj+dOHi5jnuV/PiM/NSkbr3PrSW8doDEH86XzGxBiAhuc8JUt7Xct/rXI6j+h1IeAJfRD6R2g69/vUmJwj5ox9VsrczFqq43dZZGmQyH+K4NxK8nGUB6AUsR3VNoZL1Tbc5ydrEbrM2v/beX670O7GTzA2PXqfVSOk0+lZmy3ki5nL0DCf+7HVbburdL/MGC98Jy5tIm9NAprc9Jhmh8BqFM2i3BCXncUoiML84iHGcL4Fd8/pv1/5kMWamrttppt1ZGOTrbZ0DeYDl1sQCnrmt3ZdJbVEQTQVoaAMEGrDunxUFtqtP9c80MSDaXZZCD6kqs7362HmX2UeFNPG1s+ySD5zewa5BnVjiaSPE7xcDCVPANKlFS9o6a3K2dU0dOvwiclxhd/mh4MmFdgtiA7jexA2Q+yRaB7aDJ0GPep3m8IAW06ClB2F6xLN24ZMYwcOewCUaUGZadCQtnCY9QQSQw40oPkIXHul4vRjRhdtt1lK2RMcjlwd4XtnHCk1I2YOkjf19OmTFStjVscxJZxhS1tlWk/PigMbpYobNXMXTYJ9d4JhsR2dSBSwgNnhDilZKWY9ZTRfXwFIYcpZVFiVtRG4dGn6P63Q4tDSQVdICt8H2K7OQyEbYgvD7IfS7OXX/OCMdMTEKn1EwxjwCjft5lAq4g6PDwhQYLa4g8m7aGQCrdIcd17DzAQUv42ND7ijIjpLQYaBwgFmxVKKGBiDhrKSG0e+TQBJWBoP0fCqArj0ZxAAZ+gjfn7M8/wFygfyJjr/d/wXdebkpw7PCtwAAAABJRU5ErkJggg==');
  }

  .icon-message {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAABHNCSVQICAgIfAhkiAAAAl5JREFUOE+lVUty2kAQ7ZbwnhsE3wCfIHiZAsqwTpnPCSydwPIJJJ8AsCtroMCVpZUTgE9g5QRhb6TO6xFDZBwcgrWgRsP0m+73XreY9jzht4cqp9LF31USqRJz2RwVWhLTkoXiLHuZ+v326m8QvLsZ3s9qLHyN/ZoQ/QToBOsVOQAUruC9DOAaE3/GesWOE11d1m92cV4Bh6NZwMzXQvIDwYF/2Yz3VjQYl8kpeUTsAeRZMrft978k9vwWOBzNh8zURZa+32lE+wDfVDj4XiF3PQE1nyRbn1pqDHB4N9dbQyHu+5368FBQey7U7N1SDArF6zbOdJ91k53SMzId+d0mSjvuCZE5u6nimIpZs4XSAWUvlX0KH3oVNIog6gWyPgXwLIbaid9t9A4F+IdFF+LyGUM0+FAi0BAYvs2tENGhPlyhViNjwYzG8PLE6zT6Zs9QePKIZRmOOLeOiO7mAqrPebNoWxB910D8TMFVa3sZ85WuAZwLnvtdgVGwvIpXnpXjBEYfbjO+n7VwskcuB/7X+jLPTi2VwoI8KbpGfY+9CvTxrD7bjAFsyrXZfYRnVNFCFWNJXRXvocckA30pds4xF+RJSsXvNKu2QRKAL7xOs30MYJFzFU5HQQ6cT7KFiNxYrv/nAhO/zh7RuVNr28KsgM2gvFX9UGBDpWShMD2BgpqNKwIHmGgt5ecQ0I1QasEaKr3dHQd/gAsduAm6QFBvM9h1mKv17KUms/fGa86xdpF78gsnExzHIOcygp7g0aEd7Nsq8OUgdhJKnfg9F9ku0qbQGaxZxZS6k49a7zf++03hmvr19QAAAABJRU5ErkJggg==');
  }

  .icon-team {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAuVJREFUSEu1VUty2kAQ7R7hbMEniHMC4xMAy5ShwOtU+JzA0gmCTyD7BHxcWUMKXFkGnyD4BHZOgL21pWm/GZD4SHJIqjzLQfTrfv3eG6Z3PpxV3/9+U1Sa6iJSJpJHFpppHQy8ztnjv/SUCuAPJl1m/iZEf1D8AQULTHxMQg+S4zPvy+l8X5AEgH89abDwSIg7XvO0HxUyE1Go+/gtL/rlxEziD6cuCtTxzVzCl4u06ZIAg6mhYOy1qu3dLg0Ih/Ibk3les3ppmsFULgkXUWgh2ql4nc9m4vhsAfi9n0fshPfCUvG+1mZpNPjDib33mjXsZnn83qhATm4GGhdus1rJBrielEHBr7cBpmPs5QgAxc1CK7p8UHW4SdXOBKMCOweLXf63C5kJ+BEUNbbuM5pL7gAUmEW6repJYgfrImegEJOsD5R3CeWdg6KtmkkA7IFUOMcP9+C0q7W6o1xwBE8cY7ldYb5NdD+8abNoX5juNndj4NN9YECcYGy1v3FguguvVevGyx1O8Y2VKcQkdxTmGm+qKEGJBdJlYv1AQTDf1bmVqaYiKZplqS59AnCtSJVENJTChSUw4oLVXCv68d9OXhnJRzWrcTs2UZQ9y7hYnpk47EVAkOiYRUqs1KUOnq9SZWqLBxoe4Cd03aXweZygxBrqoA0AFwXzklMVAwKqyqS5zUwtdDVHlMDRy1CMKfJNRDCCLQzKf0vM2LlCH91W7TBeeiTjVZTEAHHAOXyyL79Z/0GUmKSFEZdRYifwjY5JehI6n3ZltqusuNso+Fhi08VZJnIFObtrAHBrIgIXfTixk1V0894uFh4wzjWUKXVQt0YkOiTtFKNG1ztYTQHtjCXMeVmTmIXidTvH8I0os0zCQmElqO6WHOVu0rwddgAhEWQK5Y0aQOAM+WLVABcXcAfTUVGEnojZjR4kQw190IW0/aVkUSRFwWOCh8SAWU9Ez6fqp0k4i9bMR3+fPezzzbsDvAKKmqUoFUvifQAAAABJRU5ErkJggg==')
  }

  .icon-activity {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAAABHNCSVQICAgIfAhkiAAAAadJREFUOE+llEFSwkAQRbsDrIUTGE8gnEBcWpAqWFsSOIHMCcQTDJ4gEMo1RQXKpXgCuYHxBGZvSNsZSAipqDFmOdPz8qf/70H45pP2qo8UyHCbUBOi15p8V5tex6xCac2rqJXfALGq9om8oWnU/gedOiNEvCOgF5ZZR4QTKmFDXLc2ecDZSu2lyxunBDgACPoIeEEA3IL2uBBU9RLIYsg7Q3QZqSaYCrPdLwh11koZ0b0wjZGcOU0kfAaCzdBsN/4MlY+rOm7pVXmz/ayJQddTppUqH8m138DI1xuzKec7l0EHBJ1SV5VRj5EuxY2xjqC7H5YtgH1KFAKnDF16obvJv6ed5poJ15hRS2Lofv3oLMACpfWkQ9nX4w1N89LRYaVDToNk8xZsXiesPWpLmBIMXMXw/U1mpNI9O5h1GII4FZxl0TOayTO5oOGBsb1koaGBpTMxuHLjPrPK9Ajnhkp7HzWkLpBWTWY5fbP80F1KbtmsB05IPZnl4tCZ0+EhmIePS/TQRFkuDuVMglZxo/iFinnihlmDkPv6KkY8ceAHHVbq/fS4fAF079naoXoB6AAAAABJRU5ErkJggg==');
  }

  .icon-bill {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAABHNCSVQICAgIfAhkiAAAAMJJREFUOE9jnD5v+QJGRoZ4BuqAB/8ZGBwZZ8xf/h8IDjIwMh6g1FxGBoZ6oKGNEEOBjMzEyAZKDYWZBTaUUsOQ9SNcOmS8T5MwRTZ0+vzlCcBYxJnEgGoXAiN1AbZ4QIkodEMZ/v9PwBl5jIwLSDaUkpSA06U0MRQYpg2gnEHI8IzESKAyVIAvTB2ASkEYL8CWA+nrfUIuxCdPY5fOW/6BgZGBnxIXIutlZPhfyDhr/lKDvwxMAdQwlInh/4f0xKgJAIZsuNEmkPl6AAAAAElFTkSuQmCC');
  }

  .icon-setting {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAABHNCSVQICAgIfAhkiAAAAlNJREFUOE+1VDF22kAQnXFhQ2XnBHFOYHIClBvgEpogGkMVcwLLJ4hSQRokGlRGPkF0BOcEUU4QUgU3TP5Iu2SRBFTWexTMzv798//MML3Cx4cwZ1FyfUb0kUTyu9FgafMQHyL+dku0nPj9vOl+DTSKvl290OYzkof2ghA9AiCYR6uQiD/9B5LwgtqPvn+7dsFroLPFKmPmrgK1qBVuZBMygzFRhp9Xiws9jUf93lHQeZQIk0zv/AFYlZ8yFKEOMWfK2I0r87Hf3yNXYzpfJGuwSSej/q78g7ovkphIvMlocH2c6SJJhaRTTWwC1qoA+mXsD+5roKU5L9BNVBuPHJ3gtodyHhBXNjmLxLYbUFVKLF3Vm4XSc24/qWlF+TOUUZgh9ANJGRwN9NAAfheRX0z8XDzIdAnNb6F5WpL5G5Cwxm8s6wL0UBnaCcrQlaLUXJ4R89ySDbEuTHu3A7W9uJ+4ypWh2zLmIaqBRkmgMmknnGSKjBsY8UYfM4Px29XcklCmthMM6G5SchX9glpTo+kQCRGSMTFGUySgqg/o18xoinPuqEy22l2ffo1W96KCqxkAtiUj3tsKFS0DKdaYjFABS4MxfQDUvsahDgbYal7lK9oErwJUXz/6qWnolrixT+1NU85P/F9WE5vQS8dFNX/vnteZYkrcTtjXTVIATC2A3VonZ99uKVyMFRyuBDoYeGlptlURxwBgPXJP49U90bikMUlFz1lGAPHVhL19KvTHmBZUpTmx+aW3RStZtwvHsQvOsHDOqR1Xl7MFPwh6yvlj5/8AJZxRJWBc0jQAAAAASUVORK5CYII=');
  }

  .icon-help {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAABHNCSVQICAgIfAhkiAAAAh5JREFUOE+1VEFSGzEQnNnLkpvzAswLMC/A/gEcDQdWHBJzinlB4AWYE0kOlnOI9xj/AH6AeQH7A5wTplLlSY9sJbuLFFNUoaqt2tJIPd09o2F6g8UxzCubNxOiIyFpETE+ahLJFP/uSyn9bsz+LHQ/CArAMwQ+uwtCd0I0JaaChVqahJk3ESmwb05M96YOXAH9Zn+0FsR2yUwuU3p3FmLjzkkyQqJtnBv0zMFpGbgC+mWYQxo1hWkvxKDOyCtiktOP5mDg439B/QFI6rwE0AOAyIRYdhOSzgdzqKQgAEuLgp97lQwp/QCjtnrcM91OPWbtz8aTzAsA3+PuThnUFSaljfchD70KgMYKmyFgoXILKgt3yEmAl73jrrbOs7UOdFng5Bbe7sPbyVL+cFzAiZuT4272GlBHzOYCpudgqqqrG68GHeYz+DrSmnj5WrUC8vcioG00/iBmjysWzR98a63k5yNm2kUhtkKguqe++ZaJdMe1b0cH+tWO+0J8kdBiJ3TxauiSHq2L++5woEp/Lo9TXHzwvVZmg+qr/H7KG1m95VyM6Lrc4+UX5YK+gjEbyvsrL28xdH4hYdsnrL59O8b75U/IOsEwMbHR5tpwyRDDhzAiq7Y9eyHeXwDPVDKz3HmfldlvedxeMGs/ZzoWE15k9ToEn111tHnBgoHMjX/y46MxOvlXEiFNdMa20IMNHC7wP103xf4L+pJihc78Aa/qICWPBcZqAAAAAElFTkSuQmCC');
  }

  .icon-logout {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAaFJREFUSEvFlU1OwlAQx2cKrO1OlyzZUU9gtwYwuDMxtnAD3gnEEzw8AS3GhStICnEpegG4gXoDD0DfMCWp4eOBLxTiW0//v/n4zxThyA+PrA//D5DPI8eaURksLBKRS0iP4q42MK18awWy27cxV5As1EjFCOida+5kBsinyEUFfUC0OesHUPlANC+/TLNejtuoQHZfi2jNJoTwDXG+vq9wCtkE9KIxEDqgck5W8QSyApC9UQOBugTYFF4lMG1JYgRxW5nq4lcBYdRGxPuWVzW272JehG8sHvB3zXXIWgXcHn7Cq7mm2SdxMhwGiODrIGsVDH8AKBB+rbUMkGHU4crKO6EEJW74GZF6Ef7VjXbInIke0BvyYpH9R1UlBDxlwAcDLvSAxEEZWkQEofCrv4u56aJ9hswOwpgmOvEdNgUhvGrHdNDspPq286FdNCQok8qfH3zRFpbjUwFWPGXyJ6ncdVaIdqGS5QGFA/b2CduzrWZWuC9o57kGq8D+XyxQ+sYH+x+kismdgRgcIFXkRXIP8j8wdY9JnPFRMxHTxRwdMAeBGrgZridiggAAAABJRU5ErkJggg==');
  }

  #popover-status-click {
    transform: translate(-70px, 50px) !important;
    width: max(280px, 16vw);
  }
}
</style>
