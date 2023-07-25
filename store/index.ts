import { defineStore } from 'pinia'
import useAppStore from './app.store'
import useUserStore from './user.store'
import useLayoutStore from './layout.store'

const stores = {
  app: () => useAppStore(),
  layout: () => useLayoutStore(),
  user: () => useUserStore(),
}

const store = defineStore('pinia', {
  getters: stores,
})

export function useStore(): ReturnType<typeof store>
export function useStore<T extends keyof typeof stores>(name: T): ReturnType<typeof store>[T]
export function useStore<T extends keyof typeof stores>(
  name?: T,
): ReturnType<typeof store> | ReturnType<typeof store>[T] {
  if (name)
    return store()[name]
  else
    return store()
}
