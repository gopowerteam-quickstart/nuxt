function updateCurrentUser() {
  const store = useStore()
  
  if(store.app.ready){
    return
  }

  if (store.user.token && !store.user.current)
    store.user.updateUser({ id: Math.random().toString(32).slice(2) })
}

export default defineNuxtRouteMiddleware((to, from) => {
  updateCurrentUser()
})
