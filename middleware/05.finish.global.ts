export default defineNuxtRouteMiddleware(async () => {
  const store = useStore()

  if (!store.app.ready && process.client) {
    console.log('set ready  to true')
    store.app.setReady()
  }
})
