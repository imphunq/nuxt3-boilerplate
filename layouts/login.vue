<template>
  <div class="login-page">
    <div class="flex items-center justify-between w-full bg-white">
      <img
        src="data:image/png;base64,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"
        alt="Logo"
      >

      <div class="flex items-center">
        <nuxt-link
          to="/login"
          class="login-btn"
        >
          Login
        </nuxt-link>
        <nuxt-link
          to="/register"
          class="sign-up-btn"
        >
          Sign Up
        </nuxt-link>
      </div>
    </div>

    <slot />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.login-page {
  > div:first-child {
    padding: max(3px, 0.2vw) 4% max(2px, 0.1vw);
    height: 84px;
  }

  .login-btn {
    margin-right: max(11px, 0.9vw);
  }

  .sign-up-btn {
    padding: max(10px, 0.7vw) max(17.5px, 1.35vw);
    border-radius: max(20px, 1.5vw);
    background: -webkit-linear-gradient(0deg, #4280eb, #9e0fc8);
    color: #fff;
  }

  @media screen and (max-width: 480px) {
    .login-btn {
      font-size: 14px;
    }

    .sign-up-btn {
      padding: 8px 15px;
      font-size: 12px;
    }
  }
}
</style>
