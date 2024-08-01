export default defineNuxtRouteMiddleware(async (to) => {
  const user = useUserStore()
  const { requireAuth } = to.meta

  // 验证用户是否已经授权
  if (requireAuth && !user.isLogin) {
    return navigateTo('/login')
  }
})
