async function toTask1() {

}
async function toTask2() {

}

export default defineNuxtRouteMiddleware(async () => {
  const app = useAppStore()
  const user = useUserStore()
  if(import.meta.server){
    console.log('123123')
    user.updateName('xxx')
  }else{
    console.log(user.name)
  }

  if (app.ready.server && app.ready.client) {
    return
  }

  await Promise.all([
    toTask1(),
    toTask2(),
  ])
})
