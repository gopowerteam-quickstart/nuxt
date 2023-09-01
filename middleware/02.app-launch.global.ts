async function toTask1(){

}
async function toTask2(){

}

export default defineNuxtRouteMiddleware(async (to) => {
  const store = useStore()

  if(store.app.ready){
    return 
  }

  await Promise.all([
    toTask1(),
    toTask2()
  ])
})
