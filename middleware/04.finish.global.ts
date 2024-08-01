export default defineNuxtRouteMiddleware(async (to) => {
  const app = useAppStore()

  if (!process.client) {
    app.setClientReady()
  }

  if (!process.server) {
    app.setServerReady()
  }
})
