import type { UserRole } from '@/config/enum.config'

export default defineNuxtRouteMiddleware((to) => {
  const store = useStore()

  const { requireAuth, requireRoles } = to.meta

  // Validate User Auth
  if (requireAuth && !store.user.isLogin)
    return navigateTo('/login')

  // Validate User Role
  if (requireRoles
    && requireRoles.length > 0
    && requireRoles.every(role => !store.user.roles?.includes(role as UserRole)))
    throw showError({ statusCode: 403, statusMessage: '对不起，您没有该页面访问的权限' })

})
