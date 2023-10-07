export default defineNuxtRouteMiddleware(() => {
  const store = useStore()

  if (!store.app.ready)
    store.app.setReady()
})
