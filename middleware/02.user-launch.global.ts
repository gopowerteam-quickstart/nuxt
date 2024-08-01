async function toTask1() {

}

async function toTask2() {

}

export default defineNuxtRouteMiddleware(async () => {
  const app = useAppStore()

  if (app.ready.server && app.ready.client) {
    return
  }

  await Promise.all([
    toTask1(),
    toTask2(),
  ])
})
