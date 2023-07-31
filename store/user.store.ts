import { UserRole } from '@/config/enum.config'

interface UserState {
  token: string
  current?: any
}

function createUserState(): UserState {
  return {
    token: '',
  }
}

export default defineStore('user', {
  state: createUserState,
  getters: {
    isLogin(state) {
      return state.current && state.token
    },
    roles(): UserRole[] {
      return [UserRole.Admin]
    },
  },
  actions: {
    updateToken(value: string) {
      this.token = value
    },
    updateUser(value: any) {
      this.current = value
    },
    logout() {
      this.token = ''
      this.current = undefined
    },
  },
  persist: {
    paths: ['token'],
  },
})
