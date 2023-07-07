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
  actions: {
    updateToken(value: string) {
      this.token = value
    },
  },
})
