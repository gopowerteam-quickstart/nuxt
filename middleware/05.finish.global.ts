import type { UserRole } from '@/config/enum.config'

export default defineNuxtRouteMiddleware((to) => {
  const store = useStore()

  if(!store.app.ready){
    store.app.setReady()
  }
})
