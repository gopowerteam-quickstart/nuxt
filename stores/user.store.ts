import { defineStore } from "pinia"

export interface UserState {
  accessToken: string | null
  refreshToken: string | null
  expiresIn: number | null
  name: string
}

function createUserState(): UserState {
  return {
    accessToken: null,
    refreshToken: null,
    expiresIn: null,
    name: '122'
  }
}

export const useUserStore = defineStore('user', {
  state: createUserState,
  getters: {
    isLogin(state) {
      return state.accessToken && state.refreshToken
    },
  },
  actions: {
    updateName(name:string){
      this.name = name
    },
    updateToken(token: { accessToken: string; refreshToken: string; expiresIn: number }) {
      this.accessToken = token.accessToken
      this.refreshToken = token.refreshToken
      this.expiresIn = token.expiresIn
    },
    logout() {
      this.accessToken = null
      this.refreshToken = null
      this.expiresIn = null
    },
  },
  persist: {
    paths: ['accessToken', 'refreshToken', 'expiresIn'],
  },
})
