async function toTask1() {

}

async function toTask2() {

}

async function updateCurrentUser() {
  const store = useStore()

  if (store.user.token) {
    store.user.updateUser({
      roles: ['ADMIN'],
    })
  }
}

export default defineNuxtRouteMiddleware(async () => {
  const store = useStore()

  if (store.app.ready) {
    return
  }

  await updateCurrentUser()
  await Promise.all([
    toTask1(),
    toTask2(),
  ])
})
