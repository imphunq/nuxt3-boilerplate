export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()
console.log(111, authStore.isLoggedIn)
  if (!authStore.isLoggedIn) {
    return navigateTo('/login')
  }
})
